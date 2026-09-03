import { Check, ArrowRight, Briefcase } from "@phosphor-icons/react";
import { useLang } from "@/context/LanguageContext";
import { ASSETS } from "@/data/content";
import { Reveal } from "./Reveal";

export const MobileProduct = () => {
  const { t } = useLang();
  const m = t.mobile;
  const scrollTo = () => {
    const el = document.getElementById("contact");
    if (!el) return;
    if (window.lenis) window.lenis.scrollTo(el, { offset: -10 });
    else el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="bg-[var(--paper)] py-24 sm:py-32" data-testid="mobile-section">
      <div className="max-w-[1400px] mx-auto px-5 sm:px-8 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <Reveal>
          <div className="relative overflow-hidden rounded-sm bg-[var(--paper-2)] border border-black/10 flex items-center justify-center p-8 sm:p-10">
            <img
              src={ASSETS.deviceMobile}
              alt="Vetozone Portatif Valiz Modeli"
              className="w-full h-auto max-h-[420px] object-contain drop-shadow-[0_30px_50px_rgba(0,0,0,0.25)]"
              data-testid="mobile-device-image"
            />
            <span className="absolute top-4 left-4 inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-widest bg-[var(--ink)] text-white px-3 py-1.5 rounded-sm">
              <Briefcase size={13} weight="fill" /> Portable
            </span>
          </div>
        </Reveal>

        <Reveal delay={0.12}>
          <div className="flex items-center gap-3 mb-6">
            <span className="w-8 h-px bg-[var(--brand)]" />
            <span className="text-[11px] uppercase tracking-[0.25em] font-bold text-[var(--muted-light)]">
              {m.overline}
            </span>
          </div>
          <h2 className="font-display font-bold text-4xl sm:text-5xl tracking-tight text-[var(--ink)] leading-[1.05]">
            {m.title}
          </h2>
          <p className="mt-6 text-[var(--muted-light)] leading-relaxed max-w-lg">{m.text}</p>

          <div className="mt-8 grid sm:grid-cols-2 gap-3">
            {m.points.map((p, i) => (
              <div key={i} className="flex items-center gap-2.5" data-testid={`mobile-point-${i}`}>
                <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-[var(--brand)]/10 text-[var(--brand)]">
                  <Check size={12} weight="bold" />
                </span>
                <span className="text-sm font-medium text-[var(--ink)]">{p}</span>
              </div>
            ))}
          </div>

          <button
            onClick={scrollTo}
            className="group mt-9 inline-flex items-center gap-2 bg-[var(--ink)] hover:bg-black text-white font-semibold px-7 py-4 rounded-sm transition-colors active:scale-[0.98]"
            data-testid="mobile-cta"
          >
            {m.cta}
            <ArrowRight weight="bold" size={18} className="transition-transform group-hover:translate-x-1" />
          </button>
        </Reveal>
      </div>
    </section>
  );
};
