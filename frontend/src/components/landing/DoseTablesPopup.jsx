import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { X, ArrowRight, Warning } from "@phosphor-icons/react";
import { useLang } from "@/context/LanguageContext";
import { DOSE_TABLES } from "@/data/pages/doseTables";

export const DOSE_TABLES_PATH = "/doz-tablolari";

// Kapatınca bir daha gösterilmeme süresi. ŞU AN KAPALI: müşteri pop-up'ın
// her açılışta, kapatılsa bile yeniden çıkmasını istiyor. Hazır olduğunda
// REMEMBER_DISMISSAL'ı true yapmak yeterli; başka değişiklik gerekmiyor.
const REMEMBER_DISMISSAL = false;
const DISMISS_DAYS = 30;
const STORAGE_KEY = "vetozone:dose-popup-dismissed-at";

const isDismissed = () => {
  if (!REMEMBER_DISMISSAL) return false;
  try {
    const at = Number(window.localStorage.getItem(STORAGE_KEY));
    if (!at) return false;
    return Date.now() - at < DISMISS_DAYS * 24 * 60 * 60 * 1000;
  } catch {
    // Gizli sekmede localStorage erişimi hata atabiliyor; pop-up gösterilsin.
    return false;
  }
};

const rememberDismissal = () => {
  if (!REMEMBER_DISMISSAL) return;
  try {
    window.localStorage.setItem(STORAGE_KEY, String(Date.now()));
  } catch {
    /* yoksay */
  }
};

export const DoseTablesPopup = () => {
  const { lang } = useLang();
  const location = useLocation();
  const p = (DOSE_TABLES[lang] || DOSE_TABLES.tr).popup;
  const notice = (DOSE_TABLES[lang] || DOSE_TABLES.tr).notice;
  const [open, setOpen] = useState(false);

  // Site ilk açıldığında çıkar; tabloların kendi sayfasındayken çıkmaz.
  useEffect(() => {
    if (location.pathname === DOSE_TABLES_PATH) return;
    if (isDismissed()) return;
    const timer = setTimeout(() => setOpen(true), 900);
    return () => clearTimeout(timer);
    // Yalnızca ilk yüklemede: bağımlılık listesi bilerek boş.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Pop-up açıkken arkadaki yumuşak kaydırma durdurulur.
  useEffect(() => {
    if (!open) return;
    window.lenis?.stop();
    const onKey = (e) => e.key === "Escape" && close();
    window.addEventListener("keydown", onKey);
    return () => {
      window.lenis?.start();
      window.removeEventListener("keydown", onKey);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  const close = () => {
    rememberDismissal();
    setOpen(false);
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-[60] flex items-end justify-center bg-black/70 p-4 backdrop-blur-sm sm:items-center"
          onClick={close}
          data-testid="dose-popup-overlay"
        >
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.98 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-full max-w-lg overflow-hidden rounded-sm bg-[var(--paper)] shadow-2xl"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-label={p.title}
            data-testid="dose-popup"
          >
            <button
              type="button"
              onClick={close}
              aria-label={p.close}
              className="absolute right-3 top-3 z-10 inline-flex h-9 w-9 items-center justify-center rounded-full text-white/70 transition-colors hover:bg-white/10 hover:text-white"
              data-testid="dose-popup-close"
            >
              <X size={18} weight="bold" />
            </button>

            <div className="bg-[var(--ink)] px-6 py-6 text-white sm:px-8">
              <div className="mb-3 flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--brand)]">
                <Warning size={14} weight="fill" />
                {notice.title}
              </div>
              <h2 className="font-display text-2xl font-bold leading-tight sm:text-3xl">
                {p.title}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-white/60">{p.lead}</p>
            </div>

            <div className="px-6 py-6 sm:px-8">
              <dl className="space-y-3">
                {p.bullets.map(([term, value]) => (
                  <div
                    key={term}
                    className="flex flex-col gap-0.5 border-b border-black/10 pb-3 last:border-b-0 last:pb-0"
                  >
                    <dt className="text-sm font-semibold text-[var(--ink)]">{term}</dt>
                    <dd className="text-sm text-[var(--muted-light)]">{value}</dd>
                  </div>
                ))}
              </dl>

              <Link
                to={DOSE_TABLES_PATH}
                onClick={close}
                className="lift mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[var(--brand)] px-7 py-3.5 font-semibold text-white transition-colors hover:bg-[var(--brand-hover)]"
                data-testid="dose-popup-cta"
              >
                {p.cta}
                <ArrowRight size={16} weight="bold" />
              </Link>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
