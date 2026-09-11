import { useLang } from "@/context/LanguageContext";
import { ACADEMY_CONTENT } from "@/data/pages/academy";
import { PageHero } from "@/components/pages/PageHero";
import { TopicGrid } from "@/components/pages/TopicGrid";
import { Contact } from "@/components/landing/Contact";

export default function Academy() {
  const { t, lang } = useLang();
  const p = ACADEMY_CONTENT[lang];
  const FormIcon = p.form.icon;

  return (
    <>
      <PageHero
        overline={p.hero.overline}
        title={p.hero.title}
        sub={p.hero.sub}
        breadcrumb={[{ label: t.nav.home, to: "/" }, { label: t.nav.academy }]}
      />
      <section className="bg-[var(--paper)] py-16 sm:py-24" data-testid="academy-section">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-8">
          <TopicGrid items={p.items} lang={lang} />
        </div>
      </section>

      <section id="kayit-formu" className="bg-[var(--ink)] text-white py-16 sm:py-24 scroll-mt-20" data-testid="academy-form-section">
        <div className="max-w-[700px] mx-auto px-5 sm:px-8">
          <div className="flex items-center gap-3 mb-6">
            <span className="inline-flex items-center justify-center w-11 h-11 rounded-sm bg-[var(--brand)] text-white">
              <FormIcon size={20} weight="duotone" />
            </span>
          </div>
          <Contact
            compact
            overline={p.hero.overline}
            title={p.form.title}
            sub={p.form.sub}
            defaultType="egitim_talebi"
            extraOptions={[{ value: "egitim_talebi", label: p.form.title }]}
            testid="academy-form"
          />
        </div>
      </section>
    </>
  );
}
