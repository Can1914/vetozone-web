import { useLang } from "@/context/LanguageContext";
import { Reveal } from "./Reveal";

export const Integration = () => {
  const { t } = useLang();
  const s = t.integration;

  return (
    <section
      id="product"
      className="bg-[var(--ink)] text-white py-24 sm:py-32 relative grain"
      data-testid="integration-section"
    >
      <div className="max-w-[1400px] mx-auto px-5 sm:px-8 relative z-10 grid lg:grid-cols-12 gap-10 lg:gap-16">
        <div className="lg:col-span-5">
          <Reveal>
            <div className="flex items-center gap-3 mb-6">
              <span className="w-8 h-px bg-[var(--brand)]" />
              <span className="text-[11px] uppercase tracking-[0.25em] font-bold text-white/60">
                {s.overline}
              </span>
            </div>
            <h2 className="font-display font-bold text-4xl sm:text-5xl tracking-tight leading-[1.05]">
              {s.title}
            </h2>
          </Reveal>
        </div>

        <div className="lg:col-span-7 lg:pt-4">
          <Reveal delay={0.1}>
            <p className="text-xl sm:text-2xl font-semibold leading-snug text-[var(--brand)]">
              {s.lead}
            </p>
            <div className="mt-7 space-y-5">
              {s.paragraphs.map((p, i) => (
                <p key={i} className="text-white/60 leading-relaxed" data-testid={`integration-p-${i}`}>
                  {p}
                </p>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
