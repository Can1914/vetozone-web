import {
  Gauge,
  Drop,
  Flask,
  Wind,
  Pulse,
  Waveform,
  ShieldCheck,
  Monitor,
  Cube,
} from "@phosphor-icons/react";
import { useLang } from "@/context/LanguageContext";
import { Reveal } from "./Reveal";

const ICONS = {
  dose: Gauge,
  oxygen: Drop,
  glass: Flask,
  vacuum: Wind,
  o2sensor: Pulse,
  o3sensor: Waveform,
  catalyst: ShieldCheck,
  screen: Monitor,
  stand: Cube,
};

export const Features = () => {
  const { t } = useLang();
  const f = t.features;
  return (
    <section id="features" className="bg-[var(--paper)] py-24 sm:py-32" data-testid="features-section">
      <div className="max-w-[1400px] mx-auto px-5 sm:px-8">
        <Reveal>
          <div className="flex items-center gap-3 mb-6">
            <span className="w-8 h-px bg-[var(--brand)]" />
            <span className="text-[11px] uppercase tracking-[0.25em] font-bold text-[var(--muted-light)]">
              {f.overline}
            </span>
          </div>
          <p className="mb-14 max-w-3xl text-xl sm:text-2xl leading-relaxed text-[var(--ink)]">
            {f.sub}
          </p>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {f.items.map((item, i) => {
            const Icon = ICONS[item.key];
            return (
              <Reveal key={item.key} delay={(i % 3) * 0.08}>
                <div
                  className="group h-full bg-white border border-black/10 rounded-sm p-7 sm:p-8 transition-all duration-500 hover:-translate-y-1 hover:border-[var(--brand)]/40"
                  data-testid={`feature-${item.key}`}
                >
                  <div className="flex items-center gap-3">
                    <span className="inline-flex items-center justify-center w-11 h-11 rounded-sm bg-[var(--paper-2)] text-[var(--brand)] transition-colors duration-500 group-hover:bg-[var(--brand)] group-hover:text-white">
                      {Icon && <Icon size={22} weight="duotone" />}
                    </span>
                    <span className="text-[11px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-sm bg-[var(--brand)]/10 text-[var(--brand)]">
                      {item.tag}
                    </span>
                  </div>
                  <h3 className="mt-6 font-display font-bold text-xl tracking-tight text-[var(--ink)]">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-[var(--muted-light)]">
                    {item.text}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};
