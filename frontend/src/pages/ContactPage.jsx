import { CONTACT_PAGE_CONTENT } from "@/data/pages/contactExtended";
import { useLang } from "@/context/LanguageContext";
import { Contact } from "@/components/landing/Contact";

export default function ContactPage() {
  const { lang } = useLang();
  const p = CONTACT_PAGE_CONTENT[lang];

  return (
    <>
      <div className="bg-[var(--ink)] pt-16 sm:pt-20" />
      <Contact
        overline={p.hero.overline}
        title={p.hero.title}
        sub={p.hero.sub}
        extraOptions={p.extraOptions}
        testid="contact-page-section"
      />
    </>
  );
}
