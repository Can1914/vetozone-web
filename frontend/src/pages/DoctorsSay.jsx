import { Quotes } from "@phosphor-icons/react";
import { useLang } from "@/context/LanguageContext";
import { DOCTORS_SAY_CONTENT } from "@/data/pages/doctorsSay";
import { PageHero } from "@/components/pages/PageHero";
import { Reveal } from "@/components/landing/Reveal";

export default function DoctorsSay() {
  const { t, lang } = useLang();
  const p = DOCTORS_SAY_CONTENT[lang];
  const items = t.testimonials.items;

  return (
    <>
      <PageHero
        overline={p.hero.overline}
        title={p.hero.title}
        sub={p.hero.sub}
        breadcrumb={[{ label: t.nav.home, to: "/" }, { label: t.nav.doctorsSay }]}
      />
      <section id="testimonials" className="bg-[var(--paper)] py-16 sm:py-24 scroll-mt-20" data-testid="doctors-say-section">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-8">
          <div className="grid sm:grid-cols-2 gap-5">
            {items.map((it, i) => (
              <Reveal key={i} delay={(i % 4) * 0.08}>
                <div
                  className="h-full bg-white border border-black/10 rounded-sm p-8 flex flex-col hover:border-[var(--brand)]/40 transition-colors duration-500"
                  data-testid={`doctors-say-${i}`}
                >
                  <Quotes size={34} weight="fill" className="text-[var(--brand)]" />
                  {it.headline && (
                    <h3 className="mt-5 font-display font-bold text-lg text-[var(--ink)] leading-snug">
                      {it.headline}
                    </h3>
                  )}
                  <p className="mt-3 text-sm text-[var(--muted-light)] leading-relaxed flex-1">{it.quote}</p>
                  <div className="mt-8 pt-6 border-t border-black/10">
                    <div className="font-display font-bold text-lg text-[var(--ink)]">{it.name}</div>
                    <div className="text-xs text-[var(--muted-light)] mt-1">{it.role}</div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
