import {
  Drop,
  Bandaids,
  Ear,
  Tooth,
  Flask,
  Bone,
  Brain,
  Pulse,
  Leaf,
  Virus,
  HandHeart,
  Heartbeat,
  Stethoscope,
  Cow,
  FirstAid,
  Syringe,
} from "@phosphor-icons/react";

export const TREATMENT_AREAS_CONTENT = {
  tr: {
    hero: {
      overline: "Tedavi Alanları",
      title: "Ozon tedavisinin uygulandığı klinik alanlar.",
      sub: "Medikal ozon; küçük hayvan pratiğinden ortopedi ve nörolojiye, sistemik vakalardan büyükbaş uygulamalarına kadar geniş bir alanda, veteriner hekimin belirlediği klinik yaklaşımın bir parçası olarak kullanılabilir.",
    },
    groups: [
      {
        slug: "kucuk-hayvan",
        title: "Küçük Hayvan",
        items: [
          {
            slug: "dermatoloji",
            icon: Drop,
            title: "Dermatoloji",
            bullets: ["Pyoderma", "Kronik dermatitler", "Fungal deri enfeksiyonları", "Alopesi"],
          },
          {
            slug: "yara-ve-doku",
            icon: Bandaids,
            title: "Yara ve Doku",
            bullets: ["Kronik yaralar", "Enfekte yaralar", "Cerrahi yaralar", "Doku iyileşmesinin desteklenmesi"],
          },
          {
            slug: "kulak-hastaliklari",
            icon: Ear,
            title: "Kulak Hastalıkları",
            bullets: ["Otitis externa", "Kronik ve tekrarlayan otitisler"],
          },
          {
            slug: "agiz-ve-dis",
            icon: Tooth,
            title: "Ağız ve Diş",
            bullets: ["Gingivitis", "Stomatitis", "Periodontal hastalıklar"],
          },
          {
            slug: "uriner-sistem",
            icon: Flask,
            title: "Üriner Sistem",
            bullets: ["Sistit", "Üriner sistem enfeksiyonlarında lokal destek"],
          },
        ],
      },
      {
        slug: "ortopedi-noroloji",
        title: "Ortopedi & Nöroloji",
        items: [
          {
            slug: "osteoartrit",
            icon: Bone,
            title: "Osteoartrit",
            bullets: ["Osteoartrit", "Eklem hastalıkları"],
          },
          {
            slug: "ivdd-ve-omurga",
            icon: Brain,
            title: "IVDD ve Omurga",
            bullets: ["IVDD", "Omurga kaynaklı nörolojik tablolar", "Rehabilitasyon desteği"],
          },
          {
            slug: "kas-tendon-ligament",
            icon: Pulse,
            title: "Kas-Tendon-Ligament",
            bullets: ["Kas, tendon ve ligament problemleri", "Tendon ve ligament yaralanmaları", "Kas-iskelet sistemi rehabilitasyonu"],
          },
          {
            slug: "rejeneratif-ortopedi",
            icon: Leaf,
            title: "Rejeneratif Ortopedi",
            bullets: ["Rejeneratif uygulamalar", "Eklem ve yumuşak doku uygulamaları", "Rehabilitasyon protokollerine destek"],
          },
        ],
      },
      {
        slug: "sistemik",
        title: "Sistemik",
        items: [
          {
            slug: "enfeksiyon-hastaliklari",
            icon: Virus,
            title: "Enfeksiyon Hastalıkları",
            bullets: ["Parvoviral enteritis", "Enfeksiyöz süreçlerde destekleyici uygulamalar"],
          },
          {
            slug: "onkoloji",
            icon: HandHeart,
            title: "Onkoloji",
            bullets: ["Onkolojik tedavilere eşlik eden integratif uygulamalar"],
          },
          {
            slug: "yogun-bakim",
            icon: Heartbeat,
            title: "Yoğun Bakım",
            bullets: ["Yoğun bakım süreçlerinde destekleyici uygulamalar"],
          },
          {
            slug: "kronik-hastaliklar",
            icon: Stethoscope,
            title: "Kronik Hastalıklar",
            bullets: ["Kronik hastalıkların yönetiminde destekleyici uygulamalar"],
          },
        ],
      },
      {
        slug: "buyukbas",
        title: "Büyükbaş",
        items: [
          {
            slug: "mastitis",
            icon: Cow,
            title: "Mastitis",
            bullets: ["Klinik ve subklinik mastitis üzerine uygulamalar", "Meme dokusunda inflamatuvar ve enfeksiyöz süreçler"],
          },
          {
            slug: "buzagi-hastaliklari",
            icon: FirstAid,
            title: "Buzağı Hastalıkları",
            bullets: ["Neonatal buzağı ishalleri", "Sistemik destek uygulamaları"],
          },
          {
            slug: "neonatal-sepsis",
            icon: Syringe,
            title: "Neonatal Sepsis",
            bullets: ["Neonatal sepsiste destekleyici uygulamalar"],
          },
          {
            slug: "yara-ayak",
            icon: Bandaids,
            title: "Yara & Ayak",
            bullets: ["Ayak lezyonları", "Enfekte lezyonlar", "Lokal yara uygulamaları", "Travmatik yaralar"],
          },
        ],
      },
    ],
  },
  en: {
    hero: {
      overline: "Treatment Areas",
      title: "Clinical fields where ozone therapy is applied.",
      sub: "Medical ozone can be used across a wide range — from small animal practice to orthopedics and neurology, from systemic cases to livestock applications — as part of the clinical approach determined by the veterinarian.",
    },
    groups: [
      {
        slug: "kucuk-hayvan",
        title: "Small Animal",
        items: [
          {
            slug: "dermatoloji",
            icon: Drop,
            title: "Dermatology",
            bullets: ["Pyoderma", "Chronic dermatitis", "Fungal skin infections", "Alopecia"],
          },
          {
            slug: "yara-ve-doku",
            icon: Bandaids,
            title: "Wound and Tissue",
            bullets: ["Chronic wounds", "Infected wounds", "Surgical wounds", "Support for tissue healing"],
          },
          {
            slug: "kulak-hastaliklari",
            icon: Ear,
            title: "Ear Conditions",
            bullets: ["Otitis externa", "Chronic and recurrent otitis"],
          },
          {
            slug: "agiz-ve-dis",
            icon: Tooth,
            title: "Oral and Dental",
            bullets: ["Gingivitis", "Stomatitis", "Periodontal disease"],
          },
          {
            slug: "uriner-sistem",
            icon: Flask,
            title: "Urinary System",
            bullets: ["Cystitis", "Local support in urinary tract infections"],
          },
        ],
      },
      {
        slug: "ortopedi-noroloji",
        title: "Orthopedics & Neurology",
        items: [
          {
            slug: "osteoartrit",
            icon: Bone,
            title: "Osteoarthritis",
            bullets: ["Osteoarthritis", "Joint conditions"],
          },
          {
            slug: "ivdd-ve-omurga",
            icon: Brain,
            title: "IVDD and Spine",
            bullets: ["IVDD", "Spine-related neurological presentations", "Rehabilitation support"],
          },
          {
            slug: "kas-tendon-ligament",
            icon: Pulse,
            title: "Muscle-Tendon-Ligament",
            bullets: ["Muscle, tendon and ligament problems", "Tendon and ligament injuries", "Musculoskeletal rehabilitation"],
          },
          {
            slug: "rejeneratif-ortopedi",
            icon: Leaf,
            title: "Regenerative Orthopedics",
            bullets: ["Regenerative applications", "Joint and soft tissue applications", "Support for rehabilitation protocols"],
          },
        ],
      },
      {
        slug: "sistemik",
        title: "Systemic",
        items: [
          {
            slug: "enfeksiyon-hastaliklari",
            icon: Virus,
            title: "Infectious Diseases",
            bullets: ["Parvoviral enteritis", "Supportive applications in infectious processes"],
          },
          {
            slug: "onkoloji",
            icon: HandHeart,
            title: "Oncology",
            bullets: ["Integrative applications alongside oncological treatment"],
          },
          {
            slug: "yogun-bakim",
            icon: Heartbeat,
            title: "Intensive Care",
            bullets: ["Supportive applications during intensive care"],
          },
          {
            slug: "kronik-hastaliklar",
            icon: Stethoscope,
            title: "Chronic Conditions",
            bullets: ["Supportive applications in the management of chronic conditions"],
          },
        ],
      },
      {
        slug: "buyukbas",
        title: "Livestock",
        items: [
          {
            slug: "mastitis",
            icon: Cow,
            title: "Mastitis",
            bullets: ["Applications for clinical and subclinical mastitis", "Inflammatory and infectious processes in udder tissue"],
          },
          {
            slug: "buzagi-hastaliklari",
            icon: FirstAid,
            title: "Calf Diseases",
            bullets: ["Neonatal calf diarrhea", "Systemic support applications"],
          },
          {
            slug: "neonatal-sepsis",
            icon: Syringe,
            title: "Neonatal Sepsis",
            bullets: ["Supportive applications in neonatal sepsis"],
          },
          {
            slug: "yara-ayak",
            icon: Bandaids,
            title: "Wound & Hoof",
            bullets: ["Hoof lesions", "Infected lesions", "Local wound applications", "Traumatic wounds"],
          },
        ],
      },
    ],
  },
};
