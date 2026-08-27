import Marquee from "react-fast-marquee";
import { useLang } from "@/context/LanguageContext";
import { REFERENCES } from "@/data/content";

const Pill = ({ name }) => (
  <span className="mx-2 inline-flex items-center gap-2 whitespace-nowrap rounded-sm border border-black/10 bg-white px-4 py-2.5 text-sm font-medium text-[var(--ink)]">
    <span className="h-1.5 w-1.5 rounded-full bg-[var(--brand)]" />
    {name}
  </span>
);

export const ReferencesMarquee = () => {
  const { t } = useLang();
  const r = t.references;
  const half = Math.ceil(REFERENCES.length / 2);
  const rowA = REFERENCES.slice(0, half);
  const rowB = REFERENCES.slice(half);
  return (
    <section className="bg-[var(--paper-2)] py-20 sm:py-24 overflow-hidden" data-testid="references-section">
      <div className="max-w-[1400px] mx-auto px-5 sm:px-8 mb-10">
        <div className="flex items-center gap-3 mb-5">
          <span className="w-8 h-px bg-[var(--brand)]" />
          <span className="text-[11px] uppercase tracking-[0.25em] font-bold text-[var(--muted-light)]">
            {r.overline}
          </span>
        </div>
        <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl tracking-tight text-[var(--ink)] max-w-3xl">
          {r.title}
        </h2>
      </div>

      <div className="space-y-3">
        <Marquee speed={40} gradient gradientColor="#f4f4f5" gradientWidth={80} autoFill>
          {rowA.map((c, i) => (
            <Pill key={i} name={c} />
          ))}
        </Marquee>
        <Marquee speed={40} direction="right" gradient gradientColor="#f4f4f5" gradientWidth={80} autoFill>
          {rowB.map((c, i) => (
            <Pill key={i} name={c} />
          ))}
        </Marquee>
      </div>
    </section>
  );
};
