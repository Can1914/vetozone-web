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
        <Manifesto />
      </div>

      <div id="is-ortaklarimiz" className="scroll-mt-20" data-testid="corporate-partners">
        <ReferencesMarquee />
      </div>

    </>
  );
}
