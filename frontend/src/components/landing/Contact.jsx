import { useState } from "react";
import axios from "axios";
import { toast } from "sonner";
import { Phone, EnvelopeSimple, MapPin, ArrowRight } from "@phosphor-icons/react";
import { useLang } from "@/context/LanguageContext";
import { Reveal } from "./Reveal";

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;

const empty = { name: "", email: "", phone: "", clinic: "", request_type: "quote", message: "" };

export const Contact = () => {
  const { t } = useLang();
  const c = t.contact;
  const f = c.form;
  const [form, setForm] = useState(empty);
  const [loading, setLoading] = useState(false);

  const update = (k) => (e) => setForm((s) => ({ ...s, [k]: e.target.value }));

  const submit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await axios.post(`${API}/contact`, form);
      toast.success(f.success);
      setForm(empty);
    } catch (err) {
      toast.error(f.error);
    } finally {
      setLoading(false);
    }
  };

  const inputCls =
    "w-full bg-[var(--surface)] border border-white/10 rounded-sm px-4 py-3.5 text-white placeholder:text-white/35 text-sm focus:outline-none focus:border-[var(--brand)] transition-colors";

  return (
    <section id="contact" className="bg-[var(--ink)] text-white py-24 sm:py-32 border-t border-white/10" data-testid="contact-section">
      <div className="max-w-[1400px] mx-auto px-5 sm:px-8 grid lg:grid-cols-2 gap-12 lg:gap-20">
        <div>
          <Reveal>
            <div className="flex items-center gap-3 mb-6">
              <span className="w-8 h-px bg-[var(--brand)]" />
              <span className="text-[11px] uppercase tracking-[0.25em] font-bold text-white/60">
                {c.overline}
              </span>
            </div>
            <h2 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-[1.02]">
              {c.title}
            </h2>
            <p className="mt-6 text-white/60 max-w-md leading-relaxed">{c.sub}</p>

            <div className="mt-10 space-y-5">
              <a href={`tel:${c.phone.replace(/\s/g, "")}`} className="flex items-center gap-4 group" data-testid="contact-phone">
                <span className="inline-flex items-center justify-center w-11 h-11 rounded-sm bg-[var(--brand)] text-white">
                  <Phone size={20} weight="fill" />
                </span>
                <span className="font-display font-bold text-xl group-hover:text-[var(--brand)] transition-colors">
                  {c.phone}
                </span>
              </a>
              <a href={`mailto:${c.email}`} className="flex items-center gap-4 group" data-testid="contact-email">
                <span className="inline-flex items-center justify-center w-11 h-11 rounded-sm bg-white/10 text-white">
                  <EnvelopeSimple size={20} weight="fill" />
                </span>
                <span className="text-lg text-white/80 group-hover:text-white transition-colors">{c.email}</span>
              </a>
              <div className="flex items-center gap-4">
                <span className="inline-flex items-center justify-center w-11 h-11 rounded-sm bg-white/10 text-white">
                  <MapPin size={20} weight="fill" />
                </span>
                <span className="text-lg text-white/80">{c.location}</span>
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.15}>
          <form onSubmit={submit} className="bg-[var(--surface)]/40 border border-white/10 rounded-sm p-6 sm:p-8" data-testid="contact-form">
            <div className="grid sm:grid-cols-2 gap-4">
              <input required value={form.name} onChange={update("name")} placeholder={f.name} className={inputCls} data-testid="form-name" />
              <input required type="email" value={form.email} onChange={update("email")} placeholder={f.email} className={inputCls} data-testid="form-email" />
              <input required value={form.phone} onChange={update("phone")} placeholder={f.phone} className={inputCls} data-testid="form-phone" />
              <input value={form.clinic} onChange={update("clinic")} placeholder={f.clinic} className={inputCls} data-testid="form-clinic" />
            </div>
            <div className="mt-4">
              <select value={form.request_type} onChange={update("request_type")} className={`${inputCls} appearance-none cursor-pointer`} data-testid="form-type">
                {f.typeOptions.map((o) => (
                  <option key={o.value} value={o.value} className="bg-[var(--surface)] text-white">
                    {o.label}
                  </option>
                ))}
              </select>
            </div>
            <div className="mt-4">
              <textarea required rows={4} value={form.message} onChange={update("message")} placeholder={f.message} className={`${inputCls} resize-none`} data-testid="form-message" />
            </div>
            <button
              type="submit"
              disabled={loading}
              className="mt-5 w-full inline-flex items-center justify-center gap-2 bg-[var(--brand)] hover:bg-[var(--brand-hover)] disabled:opacity-60 text-white font-semibold py-4 rounded-sm transition-colors active:scale-[0.99]"
              data-testid="form-submit"
            >
              {loading ? f.sending : f.submit}
              {!loading && <ArrowRight size={18} weight="bold" />}
            </button>
          </form>
        </Reveal>
      </div>
    </section>
  );
};
