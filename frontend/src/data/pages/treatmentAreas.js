import { Drop, Bandaids, Ear, Brain, Tooth, Leaf, Cow } from "@phosphor-icons/react";

export const TREATMENT_AREAS_CONTENT = {
  tr: {
    hero: {
      overline: "Tedavi Alanları",
      title: "Ozon terapinin uygulandığı klinik alanlar.",
      sub: "Vetozone, veteriner kliniklerinde geniş bir yelpazede, dermatolojiden büyükbaş uygulamalarına kadar birçok tedavi alanında destekleyici veya birincil tedavi olarak kullanılır.",
    },
    categories: [
      {
        slug: "dermatoloji",
        icon: Drop,
        title: "Dermatoloji",
        bullets: ["Atopik dermatit", "Pyoderma", "Hot spot", "Mantar enfeksiyonları", "Kronik deri lezyonları"],
      },
      {
        slug: "yara-yonetimi",
        icon: Bandaids,
        title: "Yara Yönetimi",
        bullets: ["Açık yaralar", "Cerrahi yaralar", "Bası yaraları", "Geç iyileşen yaralar"],
      },
      {
        slug: "otitis",
        icon: Ear,
        title: "Otitis",
        bullets: ["Otitis externa", "Kronik kulak vakaları"],
      },
      {
        slug: "noroloji",
        icon: Brain,
        title: "Nöroloji",
        bullets: ["IVDD", "Spinal travmalar", "Nörolojik rehabilitasyon desteği"],
      },
      {
        slug: "dis-ve-agiz-sagligi",
        icon: Tooth,
        title: "Diş ve Ağız Sağlığı",
        bullets: ["Gingivitis", "Stomatitis", "Periodontal problemler"],
      },
      {
        slug: "rejeneratif-tedaviler",
        icon: Leaf,
        title: "Rejeneratif Tedaviler",
        bullets: ["Ozon + PRP", "Ozon + Proloterapi", "Ozon + Kök Hücre"],
      },
      {
        slug: "buyukbas-uygulamalari",
        icon: Cow,
        title: "Büyükbaş Uygulamaları",
        bullets: ["Mastitis", "Buzağı ishalleri", "Ayak problemleri"],
      },
    ],
  },
  en: {
    hero: {
      overline: "Treatment Areas",
      title: "Clinical fields where ozone therapy is applied.",
      sub: "Vetozone is used across a wide range of treatment areas in veterinary clinics — from dermatology to cattle applications — as a supportive or primary therapy.",
    },
    categories: [
      {
        slug: "dermatoloji",
        icon: Drop,
        title: "Dermatology",
        bullets: ["Atopic dermatitis", "Pyoderma", "Hot spots", "Fungal infections", "Chronic skin lesions"],
      },
      {
        slug: "yara-yonetimi",
        icon: Bandaids,
        title: "Wound Management",
        bullets: ["Open wounds", "Surgical wounds", "Pressure sores", "Slow-healing wounds"],
      },
      {
        slug: "otitis",
        icon: Ear,
        title: "Otitis",
        bullets: ["Otitis externa", "Chronic ear cases"],
      },
      {
        slug: "noroloji",
        icon: Brain,
        title: "Neurology",
        bullets: ["IVDD", "Spinal trauma", "Neurological rehabilitation support"],
      },
      {
        slug: "dis-ve-agiz-sagligi",
        icon: Tooth,
        title: "Dental & Oral Health",
        bullets: ["Gingivitis", "Stomatitis", "Periodontal issues"],
      },
      {
        slug: "rejeneratif-tedaviler",
        icon: Leaf,
        title: "Regenerative Treatments",
        bullets: ["Ozone + PRP", "Ozone + Prolotherapy", "Ozone + Stem Cell"],
      },
      {
        slug: "buyukbas-uygulamalari",
        icon: Cow,
        title: "Cattle Applications",
        bullets: ["Mastitis", "Calf diarrhea", "Foot problems"],
      },
    ],
  },
};
