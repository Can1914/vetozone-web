import { DownloadSimple } from "@phosphor-icons/react";
import { useLang } from "@/context/LanguageContext";
import { DEVICES_CONTENT } from "@/data/pages/devices";
import { ASSETS } from "@/data/content";
import { PageHero } from "@/components/pages/PageHero";
import { Reveal } from "@/components/landing/Reveal";
import { TechSpecs } from "@/components/landing/TechSpecs";
import { DeviceLineup } from "@/components/landing/DeviceLineup";
import { MobileProduct } from "@/components/landing/MobileProduct";

export default function Devices() {
  const { t, lang } = useLang();
  const p = DEVICES_CONTENT[lang];

  return (
    <>
      <PageHero
        overline={p.hero.overline}
        title={p.hero.title}
        sub={p.hero.sub}
        breadcrumb={[{ label: t.nav.home, to: "/" }, { label: t.nav.devices }]}
      />

      {/* Sayfa doğrudan cihaz fotoğraflarıyla başlıyor: tanıtım yazısı ve
          "Teknoloji" bölümü kaldırıldı, teknik veriler cihazın kendi
          sayfasında ve aşağıdaki tabloda. */}
      <DeviceLineup />
      <MobileProduct />
      <TechSpecs />

      <section className="bg-[var(--paper)] pb-16 sm:pb-24" data-testid="brochure-section">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
          <Reveal>
            <a
              href={ASSETS.brochure}
              target="_blank"
              rel="noopener noreferrer"
              className="lift inline-flex items-center gap-3 rounded-full bg-[var(--ink)] px-7 py-4 font-semibold text-white transition-colors hover:bg-black"
              data-testid="brochure-download"
            >
              <DownloadSimple size={18} weight="bold" />
              {lang === "en" ? "Download the Brochure (PDF)" : "Broşürü İndir (PDF)"}
            </a>
          </Reveal>
        </div>
      </section>
    </>
  );
}
