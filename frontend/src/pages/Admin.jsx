import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "sonner";
import {
  SignOut,
  Lock,
  ArrowRight,
  Envelope,
  Phone,
  Buildings,
  Tag,
  DownloadSimple,
} from "@phosphor-icons/react";

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;
const TOKEN_KEY = "vetozone_admin_token";

const TYPE_LABELS = {
  quote: "Fiyat Teklifi",
  demo: "Demo",
  info: "Bilgi",
};

const STATUSES = [
  { value: "new", label: "Yeni", cls: "bg-white/10 text-white/70" },
  { value: "called", label: "Arandı", cls: "bg-amber-500/15 text-amber-400" },
  { value: "quoted", label: "Teklif Gönderildi", cls: "bg-[var(--brand)]/15 text-[var(--brand)]" },
  { value: "closed", label: "Kapandı", cls: "bg-emerald-500/15 text-emerald-400" },
];

const inputCls =
  "w-full bg-[var(--surface)] border border-white/10 rounded-sm px-4 py-3.5 text-white placeholder:text-white/35 text-sm focus:outline-none focus:border-[var(--brand)] transition-colors";

const LoginView = ({ onLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const submit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const { data } = await axios.post(`${API}/auth/login`, { email, password });
      localStorage.setItem(TOKEN_KEY, data.token);
      onLogin();
    } catch (err) {
      toast.error(err.response?.data?.detail || "Giriş başarısız");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[var(--ink)] grain flex items-center justify-center px-5">
      <form
        onSubmit={submit}
        className="relative z-10 w-full max-w-sm bg-[var(--surface)]/50 border border-white/10 rounded-sm p-8"
        data-testid="admin-login-form"
      >
        <div className="flex items-center gap-2 mb-1">
          <span className="font-display font-extrabold text-2xl lowercase text-white">vetozone</span>
          <span className="text-[9px] tracking-[0.25em] font-bold text-[var(--brand)] mt-1">O₃</span>
        </div>
        <p className="text-white/50 text-sm mb-7 flex items-center gap-2">
          <Lock size={14} /> Yönetim Paneli
        </p>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="E-posta"
          className={inputCls}
          required
          data-testid="admin-email"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Şifre"
          className={`${inputCls} mt-4`}
          required
          data-testid="admin-password"
        />
        <button
          type="submit"
          disabled={loading}
          className="mt-6 w-full inline-flex items-center justify-center gap-2 bg-[var(--brand)] hover:bg-[var(--brand-hover)] disabled:opacity-60 text-white font-semibold py-3.5 rounded-sm transition-colors"
          data-testid="admin-login-submit"
        >
          {loading ? "Giriş yapılıyor..." : "Giriş Yap"}
          {!loading && <ArrowRight size={18} weight="bold" />}
        </button>
      </form>
    </div>
  );
};

export default function Admin() {
  const [authed, setAuthed] = useState(!!localStorage.getItem(TOKEN_KEY));
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(false);

  const load = async () => {
    setLoading(true);
    try {
      const token = localStorage.getItem(TOKEN_KEY);
      const { data } = await axios.get(`${API}/admin/contacts`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setContacts(data);
    } catch (err) {
      if (err.response?.status === 401) {
        localStorage.removeItem(TOKEN_KEY);
        setAuthed(false);
        toast.error("Oturum süresi doldu, tekrar giriş yapın");
      } else {
        toast.error("Talepler yüklenemedi");
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (authed) load();
  }, [authed]);

  const logout = () => {
    localStorage.removeItem(TOKEN_KEY);
    setAuthed(false);
  };

  const exportCsv = () => {
    if (!contacts.length) {
      toast.error("Dışa aktarılacak talep yok");
      return;
    }
    const headers = ["Tarih", "Ad Soyad", "E-posta", "Telefon", "Klinik", "Talep Türü", "Durum", "Mesaj"];
    const statusLabel = (v) => (STATUSES.find((s) => s.value === (v || "new")) || {}).label || v;
    const esc = (v) => `"${String(v ?? "").replace(/"/g, '""')}"`;
    const rows = contacts.map((c) =>
      [
        new Date(c.created_at).toLocaleString("tr-TR"),
        c.name,
        c.email,
        c.phone,
        c.clinic,
        TYPE_LABELS[c.request_type] || c.request_type,
        statusLabel(c.status),
        c.message,
      ]
        .map(esc)
        .join(",")
    );
    const csv = "\uFEFF" + [headers.map(esc).join(","), ...rows].join("\r\n");
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `vetozone-talepler-${new Date().toISOString().slice(0, 10)}.csv`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    toast.success("CSV indirildi");
  };

  const updateStatus = async (id, status) => {
    const token = localStorage.getItem(TOKEN_KEY);
    setContacts((prev) => prev.map((c) => (c.id === id ? { ...c, status } : c)));
    try {
      await axios.patch(
        `${API}/admin/contacts/${id}`,
        { status },
        { headers: { Authorization: `Bearer ${token}` } }
      );
    } catch (err) {
      toast.error("Durum güncellenemedi");
      load();
    }
  };

  if (!authed) return <LoginView onLogin={() => setAuthed(true)} />;

  return (
    <div className="min-h-screen bg-[var(--ink)] text-white">
      <header className="border-b border-white/10 sticky top-0 bg-black/70 backdrop-blur-xl z-10">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="font-display font-extrabold text-xl lowercase">vetozone</span>
            <span className="text-[9px] tracking-[0.25em] font-bold text-[var(--brand)] mt-1">ADMIN</span>
          </div>
          <button
            onClick={logout}
            className="inline-flex items-center gap-2 text-sm font-semibold text-white/70 hover:text-white border border-white/15 rounded-sm px-4 py-2 transition-colors"
            data-testid="admin-logout"
          >
            <SignOut size={16} /> Çıkış
          </button>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-5 sm:px-8 py-10">
        <div className="flex items-end justify-between mb-8">
          <div>
            <h1 className="font-display font-bold text-3xl sm:text-4xl tracking-tight">Gelen Talepler</h1>
            <p className="text-white/50 mt-1 text-sm">Toplam {contacts.length} talep</p>
          </div>
          <div className="flex items-center gap-4">
            <button
              onClick={exportCsv}
              className="inline-flex items-center gap-2 text-sm font-semibold bg-white/10 hover:bg-white/15 text-white rounded-sm px-4 py-2 transition-colors"
              data-testid="admin-export-csv"
            >
              <DownloadSimple size={16} weight="bold" /> CSV İndir
            </button>
            <button
              onClick={load}
              className="text-sm font-semibold text-[var(--brand)] hover:underline"
              data-testid="admin-refresh"
            >
              Yenile
            </button>
          </div>
        </div>

        {loading ? (
          <p className="text-white/50">Yükleniyor...</p>
        ) : contacts.length === 0 ? (
          <div className="border border-white/10 rounded-sm p-12 text-center text-white/40">
            Henüz talep yok.
          </div>
        ) : (
          <div className="grid gap-3" data-testid="admin-contacts-list">
            {contacts.map((c) => (
              <div
                key={c.id}
                className="border border-white/10 rounded-sm p-5 sm:p-6 hover:border-[var(--brand)]/40 transition-colors"
                data-testid="admin-contact-row"
              >
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <span className="font-display font-bold text-lg">{c.name}</span>
                    <span className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wide bg-[var(--brand)]/15 text-[var(--brand)] px-2.5 py-1 rounded-sm">
                      <Tag size={11} weight="bold" /> {TYPE_LABELS[c.request_type] || c.request_type}
                    </span>
                  </div>
                  <span className="text-xs text-white/40">
                    {new Date(c.created_at).toLocaleString("tr-TR")}
                  </span>
                </div>
                <div className="mt-3 flex flex-wrap gap-x-6 gap-y-1.5 text-sm text-white/70">
                  <a href={`mailto:${c.email}`} className="inline-flex items-center gap-1.5 hover:text-white">
                    <Envelope size={14} /> {c.email}
                  </a>
                  <a href={`tel:${c.phone}`} className="inline-flex items-center gap-1.5 hover:text-white">
                    <Phone size={14} /> {c.phone}
                  </a>
                  {c.clinic && (
                    <span className="inline-flex items-center gap-1.5">
                      <Buildings size={14} /> {c.clinic}
                    </span>
                  )}
                </div>
                {c.message && (
                  <p className="mt-3 text-sm text-white/60 leading-relaxed border-t border-white/10 pt-3">
                    {c.message}
                  </p>
                )}
                <div className="mt-4 flex flex-wrap items-center gap-2 border-t border-white/10 pt-4">
                  <span className="text-[11px] uppercase tracking-widest font-bold text-white/40 mr-1">
                    Durum
                  </span>
                  {STATUSES.map((s) => {
                    const active = (c.status || "new") === s.value;
                    return (
                      <button
                        key={s.value}
                        onClick={() => updateStatus(c.id, s.value)}
                        className={`text-xs font-semibold px-3 py-1.5 rounded-sm border transition-colors ${
                          active
                            ? `${s.cls} border-transparent`
                            : "border-white/10 text-white/50 hover:text-white hover:border-white/25"
                        }`}
                        data-testid={`status-${s.value}-${c.id}`}
                      >
                        {s.label}
                      </button>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
