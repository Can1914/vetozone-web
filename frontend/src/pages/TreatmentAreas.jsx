import { useLang } from "@/context/LanguageContext";
import { TREATMENT_AREAS_CONTENT } from "@/data/pages/treatmentAreas";
import { PageHero } from "@/components/pages/PageHero";
import { TopicGrid } from "@/components/pages/TopicGrid";
import { Reveal } from "@/components/landing/Reveal";

export default function TreatmentAreas() {
  const { t, lang } = useLang();
  const p = TREATMENT_AREAS_CONTENT[lang];

  return (
    <>
      <PageHero
        overline={p.hero.overline}
        title={p.hero.title}
        sub={p.hero.sub}
        breadcrumb={[{ label: t.nav.home, to: "/" }, { label: t.nav.treatmentAreas }]}
      />
      {p.groups.map((group, i) => (
        <section
          key={group.slug}
          id={group.slug}
          className={`scroll-mt-20 py-14 sm:py-20 ${i % 2 === 0 ? "bg-[var(--paper)]" : "bg-[var(--paper-2)]"}`}
          data-testid={`treatment-group-${group.slug}`}
        >
          <div className="max-w-[1400px] mx-auto px-5 sm:px-8">
            <Reveal>
              <div className="flex items-center gap-3 mb-8">
                <span className="w-8 h-px bg-[var(--brand)]" />
                <h2 className="text-[11px] uppercase tracking-[0.25em] font-bold text-[var(--muted-light)]">
                  {group.title}
                </h2>
              </div>
            </Reveal>
            <TopicGrid items={group.items} lang={lang} />
          </div>
        </section>
      ))}
    </>
  );
}
