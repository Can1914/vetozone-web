import { Quotes } from "@phosphor-icons/react";
import { useLang } from "@/context/LanguageContext";
import { Reveal } from "./Reveal";

export const Testimonials = () => {
  const { t } = useLang();
  const tm = t.testimonials;
  return (
    <section id="testimonials" className="bg-[var(--ink)] text-white py-24 sm:py-32 grain relative" data-testid="testimonials-section">
      <div className="max-w-[1400px] mx-auto px-5 sm:px-8 relative z-10">
        <Reveal>
          <div className="flex items-center gap-3 mb-6">
            <span className="w-8 h-px bg-[var(--brand)]" />
            <span className="text-[11px] uppercase tracking-[0.25em] font-bold text-white/60">
              {tm.overline}
            </span>
          </div>
          <h2 className="font-display font-bold text-4xl sm:text-5xl tracking-tight max-w-xl mb-14">
            {tm.title}
          </h2>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-4">
          {tm.items.map((it, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <div
                className="h-full bg-[var(--surface)] border border-white/10 rounded-sm p-8 flex flex-col hover:border-[var(--brand)]/50 transition-colors duration-500"
                data-testid={`testimonial-${i}`}
              >
                <Quotes size={34} weight="fill" className="text-[var(--brand)]" />
                {it.headline && (
                  <h3 className="mt-5 font-display font-bold text-lg leading-snug">{it.headline}</h3>
                )}
                <p className="mt-3 text-sm text-white/70 leading-relaxed flex-1">{it.quote}</p>
                <div className="mt-8 pt-6 border-t border-white/10">
                  <div className="font-display font-bold text-lg">{it.name}</div>
                  <div className="text-xs text-white/50 mt-1">{it.role}</div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
