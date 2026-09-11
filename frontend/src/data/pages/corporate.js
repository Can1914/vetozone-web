import { Ticket, Newspaper } from "@phosphor-icons/react";

export const CORPORATE_CONTENT = {
  tr: {
    hero: {
      overline: "Kurumsal",
      title: "Vetozone hakkında.",
      sub: "Türkiye'nin ilk ve tek yerli üretim veteriner ozon jeneratörü markası.",
    },
    partnersOverline: "İş Ortaklarımız",
    partnersTitle: "Türkiye genelinde güvenilen kliniklerin tercihi.",
    items: [
      { slug: "kongre-ve-etkinlikler", icon: Ticket, title: "Kongre ve Etkinlikler", blurb: "Katıldığımız ve düzenlediğimiz etkinlikler.", comingSoon: true },
      { slug: "haberler", icon: Newspaper, title: "Haberler", blurb: "Vetozone'dan güncel haberler ve duyurular.", comingSoon: true },
    ],
  },
  en: {
    hero: {
      overline: "Corporate",
      title: "About Vetozone.",
      sub: "Türkiye's first and only domestically manufactured veterinary ozone generator brand.",
    },
    partnersOverline: "Our Partners",
    partnersTitle: "The trusted choice of clinics across Türkiye.",
    items: [
      { slug: "kongre-ve-etkinlikler", icon: Ticket, title: "Conferences & Events", blurb: "Events we attend and organize.", comingSoon: true },
      { slug: "haberler", icon: Newspaper, title: "News", blurb: "Latest news and announcements from Vetozone.", comingSoon: true },
    ],
  },
};
