import { useLang } from "@/context/LanguageContext";
import { TREATMENT_AREAS_CONTENT } from "@/data/pages/treatmentAreas";
import { PageHero } from "@/components/pages/PageHero";
import { TopicGrid } from "@/components/pages/TopicGrid";

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
      <section className="bg-[var(--paper)] py-16 sm:py-24" data-testid="treatment-areas-section">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-8">
          <TopicGrid items={p.categories} lang={lang} />
        </div>
      </section>
    </>
  );
}
