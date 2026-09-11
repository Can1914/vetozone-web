import { Article, ClipboardText, FileText, VideoCamera } from "@phosphor-icons/react";
import { CONTENT } from "../content";

function buildFaq(lang) {
  const t = CONTENT[lang];
  if (lang === "tr") {
    return [
      { q: "Vetozone hangi hayvanlarda kullanılabilir?", a: t.uses.sub },
      { q: "Cihaz CE ve ÜTS belgeli mi?", a: t.manifesto.chapters[0].text },
      { q: "Kullanım sırasında ozon kokusu oluyor mu?", a: t.features.items.find((i) => i.key === "catalyst").text },
      { q: "Doz aralığı nedir?", a: t.features.items.find((i) => i.key === "dose").text },
      { q: "Cihaz arızalanırsa ne olur?", a: t.manifesto.chapters[2].text },
    ];
  }
  return [
    { q: "Which animals can Vetozone be used on?", a: t.uses.sub },
    { q: "Is the device CE and ÜTS certified?", a: t.manifesto.chapters[0].text },
    { q: "Does it produce ozone odor during use?", a: t.features.items.find((i) => i.key === "catalyst").text },
    { q: "What is the dose range?", a: t.features.items.find((i) => i.key === "dose").text },
    { q: "What happens if the device malfunctions?", a: t.manifesto.chapters[2].text },
  ];
}

export const LIBRARY_CONTENT = {
  tr: {
    hero: {
      overline: "Bilimsel Kütüphane",
      title: "Ozon terapi üzerine kaynaklar.",
      sub: "Makaleler, klinik rehberler ve sıkça sorulan sorularla ozon terapi hakkında bilgi edinin.",
    },
    items: [
      { slug: "makaleler", icon: Article, title: "Makaleler", blurb: "Ozon terapi üzerine bilimsel makaleler.", comingSoon: true },
      { slug: "klinik-rehberler", icon: ClipboardText, title: "Klinik Rehberler", blurb: "Uygulama protokolleri ve klinik rehberler.", comingSoon: true },
      { slug: "pdf-kaynaklar", icon: FileText, title: "PDF Kaynaklar", blurb: "İndirilebilir bilgilendirme dokümanları.", comingSoon: true },
      { slug: "webinar-kayitlari", icon: VideoCamera, title: "Webinar Kayıtları", blurb: "Geçmiş webinarların kayıtları.", comingSoon: true },
    ],
    whatIsTitle: "Ozon Tedavisi Nedir?",
    whatIsBody: CONTENT.tr.manifesto.body,
    faqTitle: "Sık Sorulan Sorular",
    faq: buildFaq("tr"),
  },
  en: {
    hero: {
      overline: "Scientific Library",
      title: "Resources on ozone therapy.",
      sub: "Learn about ozone therapy through articles, clinical guides, and frequently asked questions.",
    },
    items: [
      { slug: "makaleler", icon: Article, title: "Articles", blurb: "Scientific articles on ozone therapy.", comingSoon: true },
      { slug: "klinik-rehberler", icon: ClipboardText, title: "Clinical Guides", blurb: "Application protocols and clinical guides.", comingSoon: true },
      { slug: "pdf-kaynaklar", icon: FileText, title: "PDF Resources", blurb: "Downloadable informational documents.", comingSoon: true },
      { slug: "webinar-kayitlari", icon: VideoCamera, title: "Webinar Recordings", blurb: "Recordings of past webinars.", comingSoon: true },
    ],
    whatIsTitle: "What Is Ozone Therapy?",
    whatIsBody: CONTENT.en.manifesto.body,
    faqTitle: "Frequently Asked Questions",
    faq: buildFaq("en"),
  },
};
