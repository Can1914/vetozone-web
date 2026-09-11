import { Drop, Bandaids, Ear, Brain, Cow, Images } from "@phosphor-icons/react";

export const CASE_CENTER_CONTENT = {
  tr: {
    hero: {
      overline: "Vaka Merkezi",
      title: "Klinik vakalar ve tedavi sonuçları.",
      sub: "Sahadaki hekimlerimizin paylaştığı ozon terapi vakaları yakında burada.",
    },
    items: [
      { slug: "dermatoloji-vakalari", icon: Drop, title: "Dermatoloji Vakaları", blurb: "Cilt hastalıklarında ozon terapi ile elde edilen sonuçlar.", comingSoon: true },
      { slug: "yara-vakalari", icon: Bandaids, title: "Yara Vakaları", blurb: "Açık ve kronik yara tedavilerinden vaka örnekleri.", comingSoon: true },
      { slug: "otitis-vakalari", icon: Ear, title: "Otitis Vakaları", blurb: "Kronik kulak vakalarında tedavi süreçleri.", comingSoon: true },
      { slug: "norolojik-vakalar", icon: Brain, title: "Nörolojik Vakalar", blurb: "Nörolojik rehabilitasyon destek vakaları.", comingSoon: true },
      { slug: "buyukbas-vakalari", icon: Cow, title: "Büyükbaş Vakaları", blurb: "Mastitis ve ayak problemlerinde saha vakaları.", comingSoon: true },
      { slug: "once-sonra-galerisi", icon: Images, title: "Önce / Sonra Galerisi", blurb: "Tedavi öncesi ve sonrası görsel karşılaştırmalar.", comingSoon: true },
    ],
  },
  en: {
    hero: {
      overline: "Case Center",
      title: "Clinical cases and treatment outcomes.",
      sub: "Ozone therapy cases shared by our veterinarians in the field — coming soon.",
    },
    items: [
      { slug: "dermatoloji-vakalari", icon: Drop, title: "Dermatology Cases", blurb: "Outcomes achieved with ozone therapy in skin conditions.", comingSoon: true },
      { slug: "yara-vakalari", icon: Bandaids, title: "Wound Cases", blurb: "Case examples from open and chronic wound treatments.", comingSoon: true },
      { slug: "otitis-vakalari", icon: Ear, title: "Otitis Cases", blurb: "Treatment processes in chronic ear cases.", comingSoon: true },
      { slug: "norolojik-vakalar", icon: Brain, title: "Neurological Cases", blurb: "Neurological rehabilitation support cases.", comingSoon: true },
      { slug: "buyukbas-vakalari", icon: Cow, title: "Cattle Cases", blurb: "Field cases in mastitis and foot problems.", comingSoon: true },
      { slug: "once-sonra-galerisi", icon: Images, title: "Before / After Gallery", blurb: "Visual comparisons before and after treatment.", comingSoon: true },
    ],
  },
};
