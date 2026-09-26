import Marquee from "react-fast-marquee";
import { useLang } from "@/context/LanguageContext";

export const ManifestoMarquee = () => {
  const { t } = useLang();
  return (
    <section className="bg-[var(--ink)] py-8 sm:py-12 border-y border-white/10 overflow-hidden" data-testid="marquee-section">
      <Marquee speed={45} gradient={false} autoFill>
        {t.marquee.map((word, i) => (
          <div key={i} className="flex items-center">
            {/* leading must clear the full ascender: Turkish İ/Ö diacritics sit
                above cap height and get clipped by the marquee's overflow at
                line-height 1 */}
            <span className="font-display font-black text-5xl sm:text-7xl lg:text-8xl leading-[1.3] text-stroke uppercase px-6 tracking-tight">
              {word}
            </span>
            <span className="text-[var(--brand)] text-4xl sm:text-6xl">◦</span>
          </div>
        ))}
      </Marquee>
    </section>
  );
};
