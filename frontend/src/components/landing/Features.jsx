import {
  Gauge,
  Wind,
  Monitor,
  Cube,
  ShieldCheck,
  MapPin,
} from "@phosphor-icons/react";
import { useLang } from "@/context/LanguageContext";
import { Reveal } from "./Reveal";

const ICONS = {
  dose: Gauge,
  vacuum: Wind,
  screen: Monitor,
  stand: Cube,
  catalyst: ShieldCheck,
  domestic: MapPin,
};

// bento spans keyed by feature
const SPANS = {
  dose: "md:col-span-7",
  vacuum: "md:col-span-5",
  screen: "md:col-span-4",
  stand: "md:col-span-4",
  catalyst: "md:col-span-4",
  domestic: "md:col-span-12",
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
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 mb-14">
            <h2 className="font-display font-bold text-4xl sm:text-5xl tracking-tight text-[var(--ink)] max-w-lg">
              {f.title}
            </h2>
            <p className="text-[var(--muted-light)] max-w-sm lg:text-right">{f.sub}</p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
          {f.items.map((item, i) => {
            const Icon = ICONS[item.key];
            const domestic = item.key === "domestic";
            return (
              <Reveal
                key={item.key}
                delay={(i % 3) * 0.08}
                className={`${SPANS[item.key]}`}
              >
                <div
                  className={`group h-full border border-black/10 rounded-sm p-7 sm:p-8 transition-all duration-500 hover:-translate-y-1 ${
                    domestic
                      ? "bg-[var(--ink)] text-white flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6"
                      : "bg-white hover:border-[var(--brand)]/40"
                  }`}
                  data-testid={`feature-${item.key}`}
                >
                  <div className={domestic ? "" : ""}>
                    <div className="flex items-center gap-3">
                      <span
                        className={`inline-flex items-center justify-center w-11 h-11 rounded-sm transition-colors duration-500 ${
                          domestic
                            ? "bg-[var(--brand)] text-white"
                            : "bg-[var(--paper-2)] text-[var(--brand)] group-hover:bg-[var(--brand)] group-hover:text-white"
                        }`}
                      >
                        <Icon size={22} weight="duotone" />
                      </span>
                      <span
                        className={`text-[11px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-sm ${
                          domestic
                            ? "bg-white/10 text-white/80"
                            : "bg-[var(--brand)]/10 text-[var(--brand)]"
                        }`}
                      >
                        {item.tag}
                      </span>
                    </div>
                    <h3
                      className={`mt-6 font-display font-bold text-xl sm:text-2xl tracking-tight ${
                        domestic ? "text-white" : "text-[var(--ink)]"
                      }`}
                    >
                      {item.title}
                    </h3>
                    <p
                      className={`mt-3 text-sm leading-relaxed max-w-md ${
                        domestic ? "text-white/60" : "text-[var(--muted-light)]"
                      }`}
                    >
                      {item.text}
                    </p>
                  </div>
                  {domestic && (
                    <span className="font-display font-black text-6xl sm:text-8xl text-white/5 whitespace-nowrap">
                      TÜRKİYE
                    </span>
                  )}
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};
