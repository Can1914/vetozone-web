import { useLang } from "@/context/LanguageContext";
import { CASE_CENTER_CONTENT } from "@/data/pages/caseCenter";
import { PageHero } from "@/components/pages/PageHero";
import { TopicGrid } from "@/components/pages/TopicGrid";

export default function CaseCenter() {
  const { t, lang } = useLang();
  const p = CASE_CENTER_CONTENT[lang];

  return (
    <>
      <PageHero
        overline={p.hero.overline}
        title={p.hero.title}
        sub={p.hero.sub}
        breadcrumb={[{ label: t.nav.home, to: "/" }, { label: t.nav.caseCenter }]}
      />
      <section className="bg-[var(--paper)] py-16 sm:py-24" data-testid="case-center-section">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-8">
          <TopicGrid items={p.items} lang={lang} />
        </div>
      </section>
    </>
  );
}
