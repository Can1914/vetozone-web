import { useLang } from "@/context/LanguageContext";
import { LIBRARY_CONTENT } from "@/data/pages/library";
import { PageHero } from "@/components/pages/PageHero";
import { TopicGrid } from "@/components/pages/TopicGrid";
import { Reveal } from "@/components/landing/Reveal";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";

export default function ScientificLibrary() {
  const { t, lang } = useLang();
  const p = LIBRARY_CONTENT[lang];

  return (
    <>
      <PageHero
        overline={p.hero.overline}
        title={p.hero.title}
        sub={p.hero.sub}
        breadcrumb={[{ label: t.nav.home, to: "/" }, { label: t.nav.library }]}
      />
      <section className="bg-[var(--paper)] py-16 sm:py-24" data-testid="library-section">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-8">
          <TopicGrid items={p.items} lang={lang} />
        </div>
      </section>

      <section id="ozon-tedavisi-nedir" className="bg-[var(--ink)] text-white py-16 sm:py-24 scroll-mt-20" data-testid="whatis-section">
        <div className="max-w-[900px] mx-auto px-5 sm:px-8">
          <Reveal>
            <h2 className="font-display font-bold text-2xl sm:text-3xl tracking-tight">{p.whatIsTitle}</h2>
            <p className="mt-5 text-white/60 leading-relaxed">{p.whatIsBody}</p>
          </Reveal>
        </div>
      </section>

      <section id="sik-sorulan-sorular" className="bg-[var(--paper)] py-16 sm:py-24 scroll-mt-20" data-testid="faq-section">
        <div className="max-w-[900px] mx-auto px-5 sm:px-8">
          <Reveal>
            <h2 className="font-display font-bold text-2xl sm:text-3xl tracking-tight text-[var(--ink)] mb-8">
              {p.faqTitle}
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <Accordion type="single" collapsible>
              {p.faq.map((item, i) => (
                <AccordionItem key={i} value={`faq-${i}`} className="border-black/10">
                  <AccordionTrigger className="text-left font-display font-semibold text-[var(--ink)] hover:no-underline" data-testid={`faq-question-${i}`}>
                    {item.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-[var(--muted-light)] leading-relaxed">{item.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Reveal>
        </div>
      </section>
    </>
  );
}
