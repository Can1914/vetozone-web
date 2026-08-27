import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, ArrowDown } from "@phosphor-icons/react";
import { useLang } from "@/context/LanguageContext";
import { ASSETS } from "@/data/content";
import { MaskedLines } from "./Reveal";

export const Hero = () => {
  const { t } = useLang();
  const h = t.hero;
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, 160]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (!el) return;
    if (window.lenis) window.lenis.scrollTo(el, { offset: -10 });
    else el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      ref={ref}
      className="relative min-h-screen bg-[var(--ink)] grain overflow-hidden"
      data-testid="hero-section"
    >
      {/* background red grid glow */}
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.6) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.6) 1px,transparent 1px)",
          backgroundSize: "70px 70px",
        }}
      />

      <div className="relative z-10 max-w-[1400px] mx-auto px-5 sm:px-8 pt-28 sm:pt-36 pb-16 grid lg:grid-cols-12 gap-10 items-center min-h-screen">
        {/* Text */}
        <div className="lg:col-span-7 order-2 lg:order-1">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="flex items-center gap-3 mb-7"
          >
            <span className="w-8 h-px bg-[var(--brand)]" />
            <span className="text-[11px] uppercase tracking-[0.25em] font-bold text-white/60">
              {h.overline}
            </span>
          </motion.div>

          <h1 className="font-display font-black text-white text-[3rem] leading-[0.92] sm:text-6xl lg:text-[5.5rem] tracking-tighter">
            <MaskedLines lines={h.titleLines} accent={h.accentWord} />
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="mt-8 max-w-xl text-base lg:text-lg leading-relaxed text-white/70"
          >
            {h.sub}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.85 }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <button
              onClick={() => scrollTo("contact")}
              className="group inline-flex items-center gap-2 bg-[var(--brand)] hover:bg-[var(--brand-hover)] text-white font-semibold px-7 py-4 rounded-sm transition-colors active:scale-[0.98]"
              data-testid="hero-cta-primary"
            >
              {h.ctaPrimary}
              <ArrowRight weight="bold" className="transition-transform group-hover:translate-x-1" size={18} />
            </button>
            <button
              onClick={() => scrollTo("contact")}
              className="inline-flex items-center gap-2 text-white font-semibold px-7 py-4 rounded-sm border border-white/20 hover:bg-white/5 transition-colors active:scale-[0.98]"
              data-testid="hero-cta-secondary"
            >
              {h.ctaSecondary}
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="mt-14 grid grid-cols-3 gap-6 max-w-lg border-t border-white/10 pt-8"
          >
            {h.stats.map((s, i) => (
              <div key={i} data-testid={`hero-stat-${i}`}>
                <div className="font-display font-extrabold text-2xl sm:text-3xl text-white tracking-tight">
                  {s.value}
                </div>
                <div className="mt-1 text-[11px] sm:text-xs text-white/50 leading-tight">
                  {s.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Product image */}
        <div className="lg:col-span-5 order-1 lg:order-2 relative flex justify-center">
          <div className="absolute inset-0 spotlight blur-2xl scale-110" />
          <motion.div style={{ y, scale }} className="relative">
            <motion.img
              src={ASSETS.deviceHero}
              alt="Vetozone Ozon Jeneratörü"
              initial={{ opacity: 0, y: 60, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 1.1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="relative z-10 max-h-[62vh] lg:max-h-[78vh] w-auto object-contain drop-shadow-[0_40px_80px_rgba(200,54,47,0.25)]"
              data-testid="hero-device-image"
            />
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-white/40"
      >
        <ArrowDown size={16} className="animate-bounce" />
      </motion.div>
    </section>
  );
};
