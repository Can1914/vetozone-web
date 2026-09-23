import { Check, FilePdf } from "@phosphor-icons/react";
import { useLang } from "@/context/LanguageContext";
import { Reveal } from "./Reveal";

const Cell = ({ value, highlight }) => {
  if (value === true) {
    return (
      <span
        className={`inline-flex items-center justify-center w-6 h-6 rounded-full ${
          highlight ? "bg-[var(--brand)] text-white" : "bg-[var(--brand)]/10 text-[var(--brand)]"
        }`}
      >
        <Check size={13} weight="bold" />
      </span>
    );
  }
  return (
    <span className={`text-sm ${highlight ? "font-semibold text-[var(--ink)]" : "text-[var(--muted-light)]"}`}>
      {value}
    </span>
  );
};

export const Comparison = () => {
  const { t } = useLang();
  const c = t.compare;
  const gridCols = "grid-cols-[1.2fr_1fr_1fr_1fr]";

  return (
    <section className="bg-[var(--paper-2)] py-24 sm:py-32" data-testid="comparison-section">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
        <Reveal>
          <div className="flex items-center gap-3 mb-6">
            <span className="w-8 h-px bg-[var(--brand)]" />
            <span className="text-[11px] uppercase tracking-[0.25em] font-bold text-[var(--muted-light)]">
              {c.overline}
            </span>
          </div>
          <h2 className="font-display font-bold text-4xl sm:text-5xl tracking-tight text-[var(--ink)] max-w-2xl">
            {c.title}
          </h2>
          <p className="mt-5 text-[var(--muted-light)] max-w-xl">{c.sub}</p>
        </Reveal>

        <Reveal delay={0.12}>
          <div className="mt-12 overflow-x-auto">
            <div className="min-w-[640px] overflow-hidden rounded-sm border border-black/10 bg-white">
              {/* header */}
              <div className={`grid ${gridCols}`}>
                <div className="p-4 sm:p-6" />
                {c.cols.map((col, i) => (
                  <div
                    key={i}
                    className={`relative p-4 sm:p-6 text-center ${
                      i === c.badgeIndex ? "bg-[var(--ink)] text-white" : ""
                    }`}
                  >
                    {i === c.badgeIndex && (
                      <span className="absolute top-3 left-1/2 -translate-x-1/2 text-[9px] font-bold uppercase tracking-widest bg-[var(--brand)] text-white px-2 py-0.5 rounded-sm whitespace-nowrap">
                        {c.badge}
                      </span>
                    )}
                    <div
                      className={`mt-3 font-display font-bold text-base sm:text-lg ${
                        i === c.badgeIndex ? "" : "text-[var(--ink)]"
                      }`}
                    >
                      {col}
                    </div>
                  </div>
                ))}
              </div>

              {/* rows */}
              {c.rows.map((row, i) => (
                <div
                  key={i}
                  className={`grid ${gridCols} items-center border-t border-black/10 ${
                    i % 2 === 1 ? "bg-[var(--paper)]" : ""
                  }`}
                  data-testid={`compare-row-${i}`}
                >
                  <div className="p-4 sm:p-5 text-xs sm:text-sm font-semibold uppercase tracking-wide text-[var(--muted-light)]">
                    {row[0]}
                  </div>
                  {row.slice(1).map((value, j) => (
                    <div
                      key={j}
                      className={`p-4 sm:p-5 text-center h-full flex items-center justify-center ${
                        j === c.badgeIndex
                          ? "bg-[var(--brand)]/[0.04] border-x border-[var(--brand)]/10"
                          : ""
                      }`}
                    >
                      <Cell value={value} highlight={j === c.badgeIndex} />
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="mt-8 flex justify-center">
            <a
              href={`${process.env.PUBLIC_URL || ""}/vetozone-brosur.pdf`}
              download
              className="group inline-flex items-center gap-2.5 bg-[var(--brand)] hover:bg-[var(--brand-hover)] text-white font-semibold px-7 py-4 rounded-sm transition-colors active:scale-[0.98]"
              data-testid="brochure-download"
            >
              <FilePdf size={20} weight="fill" />
              {c.brochure}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
