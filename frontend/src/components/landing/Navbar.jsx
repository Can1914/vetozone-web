import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLang } from "@/context/LanguageContext";
import { ASSETS } from "@/data/content";

const links = [
  { id: "product", key: "product" },
  { id: "features", key: "features" },
  { id: "uses", key: "uses" },
  { id: "gallery", key: "gallery" },
  { id: "specs", key: "specs" },
  { id: "contact", key: "contact" },
];

export const Navbar = () => {
  const { t, lang, setLang } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id) => {
    setOpen(false);
    const el = document.getElementById(id);
    if (!el) return;
    if (window.lenis) window.lenis.scrollTo(el, { offset: -10 });
    else el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-500 ${
        scrolled
          ? "bg-black/70 backdrop-blur-xl border-b border-white/10"
          : "bg-transparent"
      }`}
      data-testid="navbar"
    >
      <div className="max-w-[1400px] mx-auto px-5 sm:px-8 h-16 sm:h-20 flex items-center justify-between">
        <button
          onClick={() => scrollTo("hero")}
          className="flex items-center gap-2.5"
          data-testid="nav-logo"
        >
          <span className="font-display font-extrabold text-xl sm:text-2xl tracking-tight text-white lowercase">
            vetozone
          </span>
          <span className="inline text-[10px] tracking-[0.2em] font-bold text-[var(--brand)] mt-1">
            PLUS
          </span>
        </button>

        <nav className="hidden lg:flex items-center gap-9">
          {links.map((l) => (
            <button
              key={l.id}
              onClick={() => scrollTo(l.id)}
              className="link-underline text-sm font-medium text-white/80 hover:text-white transition-colors"
              data-testid={`nav-${l.id}`}
            >
              {t.nav[l.key]}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-3 sm:gap-5">
          <div className="flex items-center text-xs font-bold text-white/60 border border-white/15 rounded-sm overflow-hidden">
            {["tr", "en"].map((code) => (
              <button
                key={code}
                onClick={() => setLang(code)}
                className={`px-2.5 py-1.5 uppercase transition-colors ${
                  lang === code ? "bg-[var(--brand)] text-white" : "hover:text-white"
                }`}
                data-testid={`lang-${code}`}
              >
                {code}
              </button>
            ))}
          </div>

          <button
            onClick={() => scrollTo("contact")}
            className="hidden sm:inline-flex items-center bg-[var(--brand)] hover:bg-[var(--brand-hover)] text-white text-sm font-semibold px-5 py-2.5 rounded-sm transition-colors"
            data-testid="nav-quote-btn"
          >
            {t.nav.quote}
          </button>

          <button
            onClick={() => setOpen((o) => !o)}
            className="lg:hidden w-9 h-9 flex flex-col items-center justify-center gap-1.5"
            data-testid="nav-menu-toggle"
            aria-label="menu"
          >
            <span className={`w-5 h-0.5 bg-white transition-transform ${open ? "translate-y-2 rotate-45" : ""}`} />
            <span className={`w-5 h-0.5 bg-white transition-opacity ${open ? "opacity-0" : ""}`} />
            <span className={`w-5 h-0.5 bg-white transition-transform ${open ? "-translate-y-2 -rotate-45" : ""}`} />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="lg:hidden overflow-hidden bg-black/95 backdrop-blur-xl border-b border-white/10"
          >
            <div className="px-6 py-6 flex flex-col gap-4">
              {links.map((l) => (
                <button
                  key={l.id}
                  onClick={() => scrollTo(l.id)}
                  className="text-left font-display text-2xl font-bold text-white"
                  data-testid={`nav-mobile-${l.id}`}
                >
                  {t.nav[l.key]}
                </button>
              ))}
              <button
                onClick={() => scrollTo("contact")}
                className="mt-2 bg-[var(--brand)] text-white font-semibold py-3 rounded-sm"
                data-testid="nav-mobile-quote"
              >
                {t.nav.quote}
              </button>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
};
