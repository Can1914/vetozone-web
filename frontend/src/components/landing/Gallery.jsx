import { motion } from "framer-motion";
import { useLang } from "@/context/LanguageContext";
import { ASSETS } from "@/data/content";
import { Reveal } from "./Reveal";

// asymmetric bento spans for the 6 gallery images
const SPANS = [
  "md:col-span-7 md:row-span-2",
  "md:col-span-5",
  "md:col-span-5",
  "md:col-span-4",
  "md:col-span-4",
  "md:col-span-4",
];

export const Gallery = () => {
  const { t } = useLang();
  const g = t.gallery;
  return (
    <section id="gallery" className="bg-[var(--ink)] text-white py-24 sm:py-32 grain relative" data-testid="gallery-section">
      <div className="max-w-[1400px] mx-auto px-5 sm:px-8 relative z-10">
        <Reveal>
          <div className="flex items-center gap-3 mb-6">
            <span className="w-8 h-px bg-[var(--brand)]" />
            <span className="text-[11px] uppercase tracking-[0.25em] font-bold text-white/60">
              {g.overline}
            </span>
          </div>
          <h2 className="font-display font-bold text-4xl sm:text-5xl tracking-tight max-w-2xl leading-[1.05]">
            {g.title}
          </h2>
          <p className="mt-5 text-white/55 max-w-xl">{g.sub}</p>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-12 auto-rows-[220px] gap-4">
          {ASSETS.gallery.map((src, i) => (
            <Reveal key={i} delay={(i % 3) * 0.08} className={`${SPANS[i]} h-full`}>
              <div className="group relative h-full w-full overflow-hidden rounded-sm border border-white/10" data-testid={`gallery-item-${i}`}>
                <img
                  src={src}
                  alt={`Vetozone vaka ${i + 1}`}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-70 transition-opacity duration-500 group-hover:opacity-40" />
                <div className="absolute bottom-4 left-4 flex items-center gap-2 opacity-0 translate-y-2 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0">
                  <span className="h-1.5 w-1.5 rounded-full bg-[var(--brand)]" />
                  <span className="text-xs font-bold uppercase tracking-widest text-white">Vetozone O₃</span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
