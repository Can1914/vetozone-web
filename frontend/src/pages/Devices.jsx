import { useLang } from "@/context/LanguageContext";
import { DEVICES_CONTENT } from "@/data/pages/devices";
import { PageHero } from "@/components/pages/PageHero";
import { TopicGrid } from "@/components/pages/TopicGrid";
import { TechSpecs } from "@/components/landing/TechSpecs";
import { Comparison } from "@/components/landing/Comparison";
import { MobileProduct } from "@/components/landing/MobileProduct";

export default function Devices() {
  const { t, lang } = useLang();
  const p = DEVICES_CONTENT[lang];
  const TechIcon = p.techIcon;

  return (
    <>
      <PageHero
        overline={p.hero.overline}
        title={p.hero.title}
        sub={p.hero.sub}
        breadcrumb={[{ label: t.nav.home, to: "/" }, { label: t.nav.devices }]}
      />
      <section className="bg-[var(--paper)] py-16 sm:py-24" data-testid="devices-section">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-8">
          <TopicGrid items={p.tiers} lang={lang} cols="sm:grid-cols-3" />
        </div>
      </section>

      <section id="teknoloji" className="bg-[var(--ink)] text-white py-16 sm:py-24 scroll-mt-20" data-testid="devices-tech-section">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-8 flex flex-col sm:flex-row items-start sm:items-center gap-6">
          <span className="inline-flex items-center justify-center w-14 h-14 rounded-sm bg-[var(--brand)] text-white shrink-0">
            <TechIcon size={26} weight="duotone" />
          </span>
          <div>
            <h2 className="font-display font-bold text-2xl sm:text-3xl tracking-tight">{p.techTitle}</h2>
            <p className="mt-3 text-white/60 leading-relaxed max-w-2xl">{p.techText}</p>
          </div>
        </div>
      </section>

      <TechSpecs />
      <MobileProduct />
      <Comparison />
    </>
  );
}
