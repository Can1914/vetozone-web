import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { X, ArrowRight, Warning } from "@phosphor-icons/react";
import { useLang } from "@/context/LanguageContext";
import { DOSE_TABLES } from "@/data/pages/doseTables";

export const DOSE_TABLES_PATH = "/doz-tablolari";

// Kapatınca otomatik olarak bir süre gösterilmeme. ŞU AN KAPALI: müşteri
// kutunun her ziyarette yeniden çıkmasını istiyor. Açmak için
// REMEMBER_DISMISSAL'ı true yapmak yeterli, başka değişiklik gerekmiyor.
// "Bir daha gösterme" bağlantısı bundan bağımsız ve her zaman çalışır:
// ziyaretçinin kendi seçimiyle kalıcı olarak kapatır.
const REMEMBER_DISMISSAL = false;
const DISMISS_DAYS = 30;
const AUTO_KEY = "vetozone:dose-popup-dismissed-at";
const NEVER_KEY = "vetozone:dose-popup-never";

const read = (key) => {
  try {
    return window.localStorage.getItem(key);
  } catch {
    // Gizli sekmede erişim hata atabiliyor; kutu gösterilsin.
    return null;
  }
};

const write = (key, value) => {
  try {
    window.localStorage.setItem(key, value);
  } catch {
    /* yoksay */
  }
};

const shouldHide = () => {
  if (read(NEVER_KEY) === "1") return true;
  if (!REMEMBER_DISMISSAL) return false;
  const at = Number(read(AUTO_KEY));
  return !!at && Date.now() - at < DISMISS_DAYS * 24 * 60 * 60 * 1000;
};

export const DoseTablesPopup = () => {
  const { lang } = useLang();
  const location = useLocation();
  const d = DOSE_TABLES[lang] || DOSE_TABLES.tr;
  const p = d.popup;
  const [open, setOpen] = useState(false);

  // Site açıldıktan bir süre sonra, sayfanın üstüne binmeden belirir.
  // Tabloların kendi sayfasındayken hiç çıkmaz.
  useEffect(() => {
    if (location.pathname === DOSE_TABLES_PATH) return;
    if (shouldHide()) return;
    const timer = setTimeout(() => setOpen(true), 2600);
    return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && close();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  const close = () => {
    if (REMEMBER_DISMISSAL) write(AUTO_KEY, String(Date.now()));
    setOpen(false);
  };

  const never = () => {
    write(NEVER_KEY, "1");
    setOpen(false);
  };

  return (
    <AnimatePresence>
      {open && (
        // Sayfanın önünü kapatan karartma yok: ziyaretçi kutuyu kapatmadan
        // da gezinmeye devam edebiliyor, kutu sağ üstte duruyor.
        <motion.aside
          initial={{ opacity: 0, x: 28, y: -8 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          exit={{ opacity: 0, x: 28 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="fixed right-4 z-[55] w-[min(22rem,calc(100vw-2rem))] overflow-hidden rounded-sm bg-[var(--paper)] shadow-2xl ring-1 ring-black/10 bottom-4 sm:bottom-auto sm:top-24"
          role="complementary"
          aria-label={p.title}
          data-testid="dose-popup"
        >
          <button
            type="button"
            onClick={close}
            aria-label={p.close}
            className="absolute right-2 top-2 z-10 inline-flex h-8 w-8 items-center justify-center rounded-full text-white/70 transition-colors hover:bg-white/10 hover:text-white"
            data-testid="dose-popup-close"
          >
            <X size={15} weight="bold" />
          </button>

          <div className="bg-[var(--ink)] px-5 py-4 text-white">
            <div className="mb-2 flex items-center gap-2 pr-8 text-[9px] font-bold uppercase tracking-[0.18em] text-[var(--brand)]">
              <Warning size={12} weight="fill" className="shrink-0" />
              {d.notice.title}
            </div>
            <h2 className="font-display text-lg font-bold leading-tight">{p.title}</h2>
          </div>

          <div className="px-5 py-4">
            <dl className="space-y-2.5">
              {p.bullets.map(([term, value]) => (
                <div key={term}>
                  <dt className="text-[13px] font-semibold text-[var(--ink)]">{term}</dt>
                  <dd className="text-[13px] leading-snug text-[var(--muted-light)]">{value}</dd>
                </div>
              ))}
            </dl>

            <Link
              to={DOSE_TABLES_PATH}
              onClick={close}
              className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[var(--brand)] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[var(--brand-hover)]"
              data-testid="dose-popup-cta"
            >
              {p.cta}
              <ArrowRight size={14} weight="bold" />
            </Link>

            <button
              type="button"
              onClick={never}
              className="mt-3 w-full text-center text-xs text-[var(--muted-light)] underline-offset-2 transition-colors hover:text-[var(--ink)] hover:underline"
              data-testid="dose-popup-never"
            >
              {p.never}
            </button>
          </div>
        </motion.aside>
      )}
    </AnimatePresence>
  );
};
