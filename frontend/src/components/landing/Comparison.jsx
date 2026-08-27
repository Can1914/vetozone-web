import { Check, FilePdf } from "@phosphor-icons/react";import { useLang } from "@/context/LanguageContext";
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
  return (
    <section className="bg-[var(--paper-2)] py-24 sm:py-32" data-testid="comparison-section">
      <div className="max-w-[1100px] mx-auto px-5 sm:px-8">
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
          <div className="mt-12 overflow-hidden rounded-sm border border-black/10 bg-white">
            {/* header */}
            <div className="grid grid-cols-3">
              <div className="p-5 sm:p-6" />
              <div className="relative p-5 sm:p-6 bg-[var(--ink)] text-white text-center">
                <span className="absolute top-3 left-1/2 -translate-x-1/2 text-[9px] font-bold uppercase tracking-widest bg-[var(--brand)] text-white px-2 py-0.5 rounded-sm">
                  {c.badge}
                </span>
                <div className="mt-3 font-display font-bold text-lg sm:text-xl">{c.col1}</div>
              </div>
              <div className="p-5 sm:p-6 text-center">
                <div className="mt-3 font-display font-bold text-lg sm:text-xl text-[var(--ink)]">
                  {c.col2}
                </div>
              </div>
            </div>

            {/* rows */}
            {c.rows.map((row, i) => (
              <div
                key={i}
                className={`grid grid-cols-3 items-center border-t border-black/10 ${
                  i % 2 === 1 ? "bg-[var(--paper)]" : ""
                }`}
                data-testid={`compare-row-${i}`}
              >
                <div className="p-4 sm:p-5 text-xs sm:text-sm font-semibold uppercase tracking-wide text-[var(--muted-light)]">
                  {row[0]}
                </div>
                <div className="p-4 sm:p-5 text-center bg-[var(--brand)]/[0.04] border-x border-[var(--brand)]/10 h-full flex items-center justify-center">
                  <Cell value={row[1]} highlight />
                </div>
                <div className="p-4 sm:p-5 text-center">
                  <Cell value={row[2]} />
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="mt-8 flex justify-center">
            <a
              href="/vetozone-brosur.pdf"
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
