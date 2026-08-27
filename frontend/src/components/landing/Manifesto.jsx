import { useLang } from "@/context/LanguageContext";
import { Reveal } from "./Reveal";

export const Manifesto = () => {
  const { t } = useLang();
  const m = t.manifesto;
  return (
    <section id="product" className="bg-[var(--ink)] text-white py-24 sm:py-32 relative grain" data-testid="manifesto-section">
      <div className="max-w-[1400px] mx-auto px-5 sm:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="lg:col-span-5">
            <Reveal>
              <div className="flex items-center gap-3 mb-6">
                <span className="w-8 h-px bg-[var(--brand)]" />
                <span className="text-[11px] uppercase tracking-[0.25em] font-bold text-white/60">
                  {m.overline}
                </span>
              </div>
              <h2 className="font-display font-bold text-4xl sm:text-5xl tracking-tight leading-[1.05]">
                {m.title}
              </h2>
              <p className="mt-7 text-white/60 leading-relaxed max-w-md">{m.body}</p>
            </Reveal>
          </div>

          <div className="lg:col-span-7 lg:pl-10">
            <div className="grid sm:grid-cols-2 gap-px bg-white/10 border border-white/10">
              {m.chapters.map((c, i) => (
                <Reveal key={c.no} delay={i * 0.08}>
                  <div
                    className="group bg-[var(--ink)] p-7 sm:p-8 h-full hover:bg-[var(--surface)] transition-colors duration-500"
                    data-testid={`manifesto-chapter-${i}`}
                  >
                    <span className="font-display font-black text-5xl text-white/10 group-hover:text-[var(--brand)] transition-colors duration-500">
                      {c.no}
                    </span>
                    <h3 className="mt-5 font-display font-bold text-xl">{c.title}</h3>
                    <p className="mt-3 text-sm text-white/55 leading-relaxed">{c.text}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
