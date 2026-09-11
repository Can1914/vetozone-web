import { useLang } from "@/context/LanguageContext";
import { CORPORATE_CONTENT } from "@/data/pages/corporate";
import { PageHero } from "@/components/pages/PageHero";
import { TopicGrid } from "@/components/pages/TopicGrid";
import { Manifesto } from "@/components/landing/Manifesto";
import { ReferencesMarquee } from "@/components/landing/ReferencesMarquee";

export default function Corporate() {
  const { t, lang } = useLang();
  const p = CORPORATE_CONTENT[lang];

  return (
    <>
      <PageHero
        overline={p.hero.overline}
        title={p.hero.title}
        sub={p.hero.sub}
        breadcrumb={[{ label: t.nav.home, to: "/" }, { label: t.nav.corporate }]}
      />

      <div id="hakkimizda" className="scroll-mt-20" data-testid="corporate-about">
        <div id="misyonumuz" />
        <Manifesto />
      </div>

      <div id="is-ortaklarimiz" className="scroll-mt-20" data-testid="corporate-partners">
        <ReferencesMarquee />
      </div>

      <section className="bg-[var(--paper)] py-16 sm:py-24" data-testid="corporate-section">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-8">
          <TopicGrid items={p.items} lang={lang} cols="sm:grid-cols-2" />
        </div>
      </section>
    </>
  );
}
