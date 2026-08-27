import { useLang } from "@/context/LanguageContext";
import { Reveal } from "./Reveal";
import { ASSETS } from "@/data/content";

export const TechSpecs = () => {
  const { t } = useLang();
  const s = t.specs;
  return (
    <section id="specs" className="bg-[var(--paper)] py-24 sm:py-32" data-testid="specs-section">
      <div className="max-w-[1400px] mx-auto px-5 sm:px-8 grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        <div className="lg:col-span-4 lg:sticky lg:top-28">
          <Reveal>
            <div className="flex items-center gap-3 mb-6">
              <span className="w-8 h-px bg-[var(--brand)]" />
              <span className="text-[11px] uppercase tracking-[0.25em] font-bold text-[var(--muted-light)]">
                {s.overline}
              </span>
            </div>
            <h2 className="font-display font-bold text-4xl sm:text-5xl tracking-tight text-[var(--ink)] leading-[1.05]">
              {s.title}
            </h2>
            <div className="mt-8 relative rounded-sm overflow-hidden bg-[var(--ink)] p-6 spotlight">
              <img
                src={ASSETS.deviceHero}
                alt="Vetozone"
                className="mx-auto max-h-64 w-auto object-contain drop-shadow-2xl"
                data-testid="specs-device-image"
              />
            </div>
          </Reveal>
        </div>

        <div className="lg:col-span-8">
          <Reveal delay={0.1}>
            <div className="border-t border-black/10">
              {s.rows.map((row, i) => (
                <div
                  key={i}
                  className="group grid grid-cols-1 sm:grid-cols-12 gap-1 sm:gap-4 py-5 border-b border-black/10 hover:bg-white transition-colors"
                  data-testid={`spec-row-${i}`}
                >
                  <div className="sm:col-span-4 flex items-center gap-3">
                    <span className="font-display font-black text-sm text-[var(--brand)] w-8">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-sm font-semibold uppercase tracking-wide text-[var(--muted-light)]">
                      {row[0]}
                    </span>
                  </div>
                  <div className="sm:col-span-8 pl-11 sm:pl-0">
                    <span className="text-base sm:text-lg font-medium text-[var(--ink)]">
                      {row[1]}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
