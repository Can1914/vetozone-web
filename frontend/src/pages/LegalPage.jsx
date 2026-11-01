import { useEffect } from "react";
import { useLang } from "@/context/LanguageContext";
import { Reveal } from "@/components/landing/Reveal";
import LEGAL from "@/data/legal.json";

// Metin içindeki **vurgu** işaretlerini kalın yazıya çevirir. Yasal metin
// JSON'da düz yazı olarak duruyor; HTML gömmek yerine tek bir işaret
// kullanmak, aynı kaynaktan statik sayfa üretmeyi de mümkün kılıyor.
const Rich = ({ text }) => (
  <>
    {text.split("**").map((part, i) =>
      i % 2 ? <strong key={i}>{part}</strong> : part
    )}
  </>
);

const Block = ({ block }) => {
  switch (block.type) {
    case "h2":
      return (
        <h2 className="font-display font-bold text-xl sm:text-2xl text-[var(--ink)] mt-12 mb-4 scroll-mt-32">
          {block.text}
        </h2>
      );
    case "h3":
      return (
        <h3 className="font-semibold text-base text-[var(--ink)] mt-7 mb-2">{block.text}</h3>
      );
    case "p":
      return (
        <p className="mt-4 leading-relaxed text-[var(--muted-light)]">
          <Rich text={block.text} />
        </p>
      );
    case "lines":
      return (
        <p className="mt-4 leading-relaxed text-[var(--muted-light)]">
          {block.items.map((line, i) => (
            <span key={i} className="block">
              <Rich text={line} />
            </span>
          ))}
        </p>
      );
    case "ul":
      return (
        <ul className="mt-4 space-y-2">
          {block.items.map((item, i) => (
            <li key={i} className="relative pl-5 leading-relaxed text-[var(--muted-light)]">
              <span className="absolute left-0 top-[0.65em] w-1.5 h-1.5 rounded-full bg-[var(--brand)]" />
              <Rich text={item} />
            </li>
          ))}
        </ul>
      );
    case "note":
      return (
        <p className="mt-6 border-l-2 border-[var(--brand)] pl-5 leading-relaxed text-[var(--ink)]">
          <Rich text={block.text} />
        </p>
      );
    case "table":
      return (
        // Dar ekranda tablo sıkışmasın diye yatay kaydırılabilir.
        <div className="mt-5 -mx-5 sm:mx-0 overflow-x-auto">
          <table className="min-w-[32rem] w-full border-collapse text-sm mx-5 sm:mx-0">
            <thead>
              <tr>
                {block.head.map((cell, i) => (
                  <th
                    key={i}
                    className="border-b border-black/10 bg-[var(--paper-2)] px-4 py-3 text-left font-semibold text-[var(--ink)]"
                  >
                    {cell}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {block.rows.map((row, i) => (
                <tr key={i}>
                  {row.map((cell, j) => (
                    <td
                      key={j}
                      className="border-b border-black/10 px-4 py-3 align-top leading-relaxed text-[var(--muted-light)]"
                    >
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    case "button":
      return (
        <a
          href={block.href}
          className="lift mt-6 inline-flex items-center bg-[var(--brand)] hover:bg-[var(--brand-hover)] text-white font-semibold px-7 py-3.5 rounded-full transition-colors"
        >
          {block.label}
        </a>
      );
    default:
      return null;
  }
};

export default function LegalPage({ docKey }) {
  const { lang } = useLang();
  const page = LEGAL[docKey][lang] || LEGAL[docKey].tr;

  // Mağaza incelemelerinde sekme başlığı görülüyor; rota değiştiğinde
  // başlığı sayfaya göre ayarlıyoruz.
  useEffect(() => {
    const previous = document.title;
    document.title = page.title;
    return () => {
      document.title = previous;
    };
  }, [page.title]);

  return (
    <>
      <section className="bg-[var(--ink)] text-white pt-32 pb-14 sm:pt-40 sm:pb-16">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-8">
          <div className="flex items-center gap-3 mb-5">
            <span className="w-8 h-px bg-[var(--brand)]" />
            <span className="text-[11px] uppercase tracking-[0.25em] font-bold text-white/60">
              {page.overline}
            </span>
          </div>
          <h1 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl tracking-tight leading-[1.15] max-w-3xl">
            {page.heading}
          </h1>
        </div>
      </section>

      <section className="bg-[var(--paper)] py-14 sm:py-20">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-8">
          <Reveal>
            <div className="max-w-3xl">
              {page.blocks.map((block, i) => (
                <Block key={i} block={block} />
              ))}
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
