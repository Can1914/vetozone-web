import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { CaretDown, ArrowRight, BookOpen } from "@phosphor-icons/react";
import { useLang } from "@/context/LanguageContext";
import { NAV_TREE, HOMEPAGE_ANCHOR } from "@/data/navTree";
import { scrollToId } from "@/lib/scrollToId";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";

export const Navbar = () => {
  const { t, lang, setLang } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [openKey, setOpenKey] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleTopClick = (item) => (e) => {
    const anchor = HOMEPAGE_ANCHOR[item.key];
    if (anchor && location.pathname === "/") {
      e.preventDefault();
      scrollToId(anchor);
    }
    setOpen(false);
    setOpenKey(null);
  };

  const handleChildClick = () => {
    setOpen(false);
    setOpenKey(null);
  };

  const handleLogoClick = () => {
    setOpen(false);
    if (location.pathname === "/") scrollToId("hero");
    else navigate("/");
  };

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-500 ${
        scrolled || open
          ? "bg-black/70 backdrop-blur-xl border-b border-white/10"
          : "bg-transparent"
      }`}
      data-testid="navbar"
    >
      <div className="max-w-[1400px] mx-auto px-5 sm:px-8 h-16 sm:h-20 flex items-center justify-between">
        <button onClick={handleLogoClick} className="flex items-center gap-2.5" data-testid="nav-logo">
          <span className="font-display font-extrabold text-xl sm:text-2xl tracking-tight text-white lowercase">
            vetozone
          </span>
        </button>

        <nav className="hidden lg:flex items-center gap-1">
          {NAV_TREE.map((item) => {
            const expandable = Boolean(item.children || item.mega);
            return (
              <div
                key={item.key}
                className={item.mega ? "" : "relative"}
                onMouseEnter={() => expandable && setOpenKey(item.key)}
                onMouseLeave={() => expandable && setOpenKey((k) => (k === item.key ? null : k))}
              >
                <Link
                  to={item.to}
                  onClick={handleTopClick(item)}
                  className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-white/80 hover:text-white transition-colors"
                  data-testid={`nav-${item.key}`}
                >
                  {t.nav[item.key]}
                  {expandable && (
                    <CaretDown size={11} weight="bold" className={`transition-transform ${openKey === item.key ? "rotate-180" : ""}`} />
                  )}
                </Link>

                <AnimatePresence>
                  {expandable && openKey === item.key && (
                    <motion.div
                      initial={{ opacity: 0, y: -8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                      className={item.mega ? "absolute top-full left-0 right-0" : "absolute top-full left-0 pt-2"}
                      data-testid={`nav-dropdown-${item.key}`}
                    >
                      {item.mega ? (
                        <div className="bg-black/95 backdrop-blur-xl border-y border-white/10">
                          <div className="max-w-[1400px] mx-auto px-5 sm:px-8 py-8 grid grid-cols-4 gap-px bg-white/10">
                            {item.mega.map((col, ci) => {
                              const ColIcon = col.icon;
                              return (
                                <div key={ci} className="bg-black/95 px-6 first:pl-0 last:pr-0">
                                  <div className="relative h-32 overflow-hidden rounded-sm">
                                    <img
                                      src={col.image}
                                      alt={col.title}
                                      className="absolute inset-0 w-full h-full object-cover"
                                      loading="lazy"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                                  </div>

                                  <div className="mt-4 flex items-center gap-2">
                                    {ColIcon && (
                                      <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-[var(--brand)]/15 text-[var(--brand)]">
                                        <ColIcon size={13} weight="duotone" />
                                      </span>
                                    )}
                                    <span className="text-[11px] uppercase tracking-[0.18em] font-bold text-[var(--brand)]">
                                      {col.title}
                                    </span>
                                  </div>
                                  {col.desc && (
                                    <p className="mt-2 text-xs leading-relaxed text-white/45">{col.desc}</p>
                                  )}

                                  <div className="mt-4 pt-3 border-t border-white/10">
                                    {col.items.map((child, i) => (
                                      <Link
                                        key={i}
                                        to={child.to}
                                        onClick={handleChildClick}
                                        className="group/link flex items-center justify-between gap-3 py-2 border-b border-white/[0.06] text-sm text-white/70 hover:text-white transition-colors"
                                        data-testid={`nav-mega-item-${item.key}-${ci}-${i}`}
                                      >
                                        {child.label}
                                        <ArrowRight
                                          size={13}
                                          className="shrink-0 text-white/20 transition-all group-hover/link:text-[var(--brand)] group-hover/link:translate-x-0.5"
                                        />
                                      </Link>
                                    ))}
                                  </div>

                                  <Link
                                    to={`${item.to}#${col.slug}`}
                                    onClick={handleChildClick}
                                    className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-[var(--brand)] hover:gap-2.5 transition-all"
                                  >
                                    Tümünü Gör <ArrowRight size={12} weight="bold" />
                                  </Link>
                                </div>
                              );
                            })}
                          </div>

                          {item.megaFooter && (
                            <div className="border-t border-white/10">
                              <Link
                                to={item.megaFooter.to}
                                onClick={handleChildClick}
                                className="group/f max-w-[1400px] mx-auto px-5 sm:px-8 py-5 flex items-center gap-4 hover:bg-white/[0.03] transition-colors"
                                data-testid="nav-mega-footer"
                              >
                                <BookOpen size={22} className="shrink-0 text-[var(--brand)]" weight="duotone" />
                                <span className="flex-1">
                                  <span className="block font-display font-bold text-white">
                                    {item.megaFooter.title}
                                  </span>
                                  <span className="block text-xs text-white/45 mt-0.5">
                                    {item.megaFooter.desc}
                                  </span>
                                </span>
                                <ArrowRight
                                  size={18}
                                  className="shrink-0 text-white/30 transition-all group-hover/f:text-[var(--brand)] group-hover/f:translate-x-1"
                                />
                              </Link>
                            </div>
                          )}
                        </div>
                      ) : (
                        <div className="min-w-[240px] bg-black/90 backdrop-blur-xl border border-white/10 rounded-sm p-2">
                          {item.children.map((child, i) => (
                            <Link
                              key={i}
                              to={child.to}
                              onClick={handleChildClick}
                              className="block px-3 py-2.5 rounded-sm text-sm text-white/80 hover:text-white hover:bg-white/5 transition-colors"
                              data-testid={`nav-dropdown-item-${item.key}-${i}`}
                            >
                              {child.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </nav>

        <div className="flex items-center gap-3 sm:gap-5">
          <div className="hidden sm:flex items-center text-xs font-bold text-white/60 border border-white/15 rounded-sm overflow-hidden">
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

          <Link
            to="/iletisim"
            onClick={() => setOpen(false)}
            className="hidden sm:inline-flex items-center bg-[var(--brand)] hover:bg-[var(--brand-hover)] text-white text-sm font-semibold px-5 py-2.5 rounded-sm transition-colors"
            data-testid="nav-quote-btn"
          >
            {t.nav.quote}
          </Link>

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
            className="lg:hidden overflow-hidden bg-black/95 backdrop-blur-xl border-b border-white/10 max-h-[calc(100vh-4rem)] overflow-y-auto"
          >
            <div className="px-4 py-4">
              <Accordion type="multiple" className="w-full">
                {NAV_TREE.map((item) =>
                  item.mega ? (
                    <AccordionItem key={item.key} value={item.key} className="border-white/10">
                      <AccordionTrigger
                        className="text-lg font-display font-bold text-white hover:no-underline px-2"
                        data-testid={`nav-mobile-accordion-${item.key}`}
                      >
                        {t.nav[item.key]}
                      </AccordionTrigger>
                      <AccordionContent className="pl-2">
                        <Link
                          to={item.to}
                          onClick={handleChildClick}
                          className="block py-2 text-sm font-semibold text-[var(--brand)]"
                        >
                          {t.nav[item.key]} →
                        </Link>
                        {item.mega.map((col, ci) => (
                          <div key={ci} className="mt-3">
                            <div className="text-[10px] uppercase tracking-[0.2em] font-bold text-white/40 mb-1">
                              {col.title}
                            </div>
                            {col.items.map((child, i) => (
                              <Link
                                key={i}
                                to={child.to}
                                onClick={handleChildClick}
                                className="block py-1.5 text-sm text-white/70"
                                data-testid={`nav-mobile-mega-${item.key}-${ci}-${i}`}
                              >
                                {child.label}
                              </Link>
                            ))}
                          </div>
                        ))}
                      </AccordionContent>
                    </AccordionItem>
                  ) : item.children ? (
                    <AccordionItem key={item.key} value={item.key} className="border-white/10">
                      <AccordionTrigger
                        className="text-lg font-display font-bold text-white hover:no-underline px-2"
                        data-testid={`nav-mobile-accordion-${item.key}`}
                      >
                        {t.nav[item.key]}
                      </AccordionTrigger>
                      <AccordionContent className="pl-2">
                        <div className="flex flex-col gap-1">
                          <Link
                            to={item.to}
                            onClick={handleChildClick}
                            className="py-2 text-sm font-semibold text-[var(--brand)]"
                          >
                            {t.nav[item.key]} →
                          </Link>
                          {item.children.map((child, i) => (
                            <Link
                              key={i}
                              to={child.to}
                              onClick={handleChildClick}
                              className="py-2 text-sm text-white/70"
                              data-testid={`nav-mobile-item-${item.key}-${i}`}
                            >
                              {child.label}
                            </Link>
                          ))}
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  ) : (
                    <div key={item.key} className="border-b border-white/10">
                      <Link
                        to={item.to}
                        onClick={handleTopClick(item)}
                        className="block py-4 px-2 text-lg font-display font-bold text-white"
                        data-testid={`nav-mobile-${item.key}`}
                      >
                        {t.nav[item.key]}
                      </Link>
                    </div>
                  )
                )}
              </Accordion>

              <Link
                to="/iletisim"
                onClick={() => setOpen(false)}
                className="mt-4 block text-center bg-[var(--brand)] text-white font-semibold py-3 rounded-sm"
                data-testid="nav-mobile-quote"
              >
                {t.nav.quote}
              </Link>

              <div className="mt-4 flex items-center justify-center gap-2 text-xs font-bold text-white/60">
                {["tr", "en"].map((code) => (
                  <button
                    key={code}
                    onClick={() => setLang(code)}
                    className={`px-3 py-1.5 uppercase rounded-sm border border-white/15 transition-colors ${
                      lang === code ? "bg-[var(--brand)] text-white border-[var(--brand)]" : "hover:text-white"
                    }`}
                    data-testid={`lang-mobile-${code}`}
                  >
                    {code}
                  </button>
                ))}
              </div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
};
