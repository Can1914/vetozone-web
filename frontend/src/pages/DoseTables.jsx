import { useEffect } from "react";
import { Warning } from "@phosphor-icons/react";
import { useLang } from "@/context/LanguageContext";
import { DOSE_TABLES } from "@/data/pages/doseTables";
import { Reveal } from "@/components/landing/Reveal";

// Hücre metinleri veride "\n" ile iki satıra ayrılabiliyor (ör. kedi/köpek ve
// büyük hayvan dozunun ayrı satırlarda durması gerekiyor).
const Cell = ({ text }) => (
  <>
    {String(text)
      .split("\n")
      .map((line, i) => (
        <span key={i} className="block">
          {line}
        </span>
      ))}
  </>
);

const Table = ({ columns, rows }) => (
  <div className="overflow-x-auto">
    <table className="w-full min-w-[640px] border-collapse text-left">
      <thead>
        <tr className="bg-[var(--ink)] text-white">
          {columns.map((c, i) => (
            <th key={i} className="px-4 py-3 text-xs font-bold uppercase tracking-[0.12em] sm:px-5">
              {c}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, r) => (
          <tr key={r} className="border-b border-black/10 last:border-b-0 even:bg-black/[0.02]">
            {row.map((cell, c) => (
              <td
                key={c}
                className={`px-4 py-4 align-top text-sm leading-relaxed sm:px-5 ${
                  c === 0
                    ? "font-semibold text-[var(--ink)]"
                    : "text-[var(--muted-light)]"
                }`}
              >
                <Cell text={cell} />
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default function DoseTables() {
  const { lang } = useLang();
  const d = DOSE_TABLES[lang] || DOSE_TABLES.tr;

  useEffect(() => {
    const previous = document.title;
    document.title = `${d.title} — Vetozone`;
    return () => {
      document.title = previous;
    };
  }, [d.title]);

  return (
    <>
      <section className="bg-[var(--ink)] text-white pt-28 pb-14 sm:pt-36 sm:pb-20">
        <div className="max-w-[1100px] mx-auto px-5 sm:px-8">
          <Reveal>
            <div className="flex items-center gap-3 mb-5">
              <span className="w-8 h-px bg-[var(--brand)]" />
              <span className="text-[11px] uppercase tracking-[0.25em] font-bold text-white/60">
                {d.overline}
              </span>
            </div>
            <h1 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-[1.05] max-w-3xl">
              {d.title}
            </h1>
            <p className="mt-6 max-w-2xl leading-relaxed text-white/60">{d.lead}</p>
          </Reveal>
        </div>
      </section>

      <section className="bg-[var(--paper)] py-12 sm:py-16">
        <div className="max-w-[1100px] mx-auto px-5 sm:px-8">
          <Reveal>
            {/* Dozlar hekime yönelik; hayvan sahibinin kendi başına uygulamaması
                için uyarı tabloların üstünde duruyor. */}
            <div
              className="flex gap-4 rounded-sm border border-[var(--brand)]/30 bg-[var(--brand)]/[0.06] p-5 sm:p-6"
              data-testid="dose-vet-notice"
            >
              <Warning size={22} weight="fill" className="mt-0.5 shrink-0 text-[var(--brand)]" />
              <div>
                <p className="font-display font-bold text-[var(--ink)]">{d.notice.title}</p>
                <p className="mt-2 text-sm leading-relaxed text-[var(--muted-light)]">
                  {d.notice.text}
                </p>
              </div>
            </div>
          </Reveal>

          {d.sections.map((section, i) => (
            <Reveal key={section.id} delay={0.05}>
              <div className="mt-12 sm:mt-16" id={section.id}>
                <h2 className="font-display font-bold text-2xl sm:text-3xl text-[var(--ink)]">
                  {section.title}
                </h2>
                {section.intro && (
                  <p className="mt-3 max-w-2xl text-sm leading-relaxed text-[var(--muted-light)]">
                    {section.intro}
                  </p>
                )}

                {section.rows && (
                  <div className="mt-6 overflow-hidden rounded-sm border border-black/10 bg-white">
                    <Table columns={section.columns} rows={section.rows} />
                  </div>
                )}

                {section.groups?.map((group) => (
                  <div key={group.title} className="mt-6">
                    <h3 className="mb-3 text-sm font-bold text-[var(--ink)]">{group.title}</h3>
                    <div className="overflow-hidden rounded-sm border border-black/10 bg-white">
                      <Table columns={section.columns} rows={group.rows} />
                    </div>
                  </div>
                ))}

                {section.note && (
                  <p className="mt-3 text-xs leading-relaxed text-[var(--muted-light)]">
                    {section.note}
                  </p>
                )}
                {section.source && (
                  <p className="mt-3 text-xs text-[var(--muted-light)]">{section.source}</p>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-[var(--paper-2)] py-12 sm:py-16">
        <div className="max-w-[1100px] mx-auto px-5 sm:px-8">
          <Reveal>
            <h2 className="font-display font-bold text-xl text-[var(--ink)]">{d.sources.title}</h2>
            <ul className="mt-4 space-y-3">
              {d.sources.items.map((item, i) => (
                <li key={i} className="text-sm leading-relaxed text-[var(--muted-light)]">
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>
    </>
  );
}
