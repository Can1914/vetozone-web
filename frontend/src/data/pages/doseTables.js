// "Temel Doz ve Uygulama Tabloları" sayfasının içeriği.
//
// Buradaki bütün sayılar, müşterinin verdiği üç kaynaktan birebir alınmıştır;
// hiçbiri yorumlanmamış veya yuvarlanmamıştır:
//   K1  Atik O, Birdane YO. "Veteriner Hekimlikte Ozon Terapisi."
//       Veteriner Farmakolojide Güncel Yaklaşımlar, Livre de Lyon, 2024,
//       Bölüm I, s. 1-19.
//   K2  Köpeklerde gençlik hastalığı (CDV) ve kanlı ishal (CPV) destekleyici
//       ozon protokolleri (klinik doküman).
//   K3  Kedi ve köpeklerde anal sakkülit ve perianal enflamasyonda ozon
//       tedavisi (klinik doküman).
//
// Kaynakta birimi hatalı görünen tek satır (köpek intradiskal uygulama,
// "32 µg/µL") bilinçli olarak dışarıda bırakıldı: o birim mililitre başına
// 32.000 µg'a karşılık gelir ve uygulanabilir bir doz değildir.

export const DOSE_TABLES = {
  tr: {
    overline: "Klinik Referans",
    title: "Temel Doz ve Uygulama Tabloları",
    lead:
      "Veteriner medikal ozon uygulamalarında yaygın olarak kullanılan konsantrasyon, hacim ve uygulama sıklığı aralıkları. Tablolar hekimin klinik kararının yerine geçmez; hastanın türü, ağırlığı, genel durumu ve eş zamanlı tedavileri her uygulamada ayrıca değerlendirilmelidir.",
    notice: {
      title: "Yalnızca veteriner hekimler içindir",
      text:
        "Bu sayfadaki bilgiler veteriner hekimlere yöneliktir. Hayvan sahiplerinin bu dozları kendi başlarına uygulaması sakıncalıdır; tedavi mutlaka bir veteriner hekim tarafından planlanmalı ve uygulanmalıdır.",
    },
    sections: [
      {
        id: "sistemik",
        title: "Sistemik Uygulamalar",
        intro:
          "Ozonun kan veya sindirim kanalı yoluyla tüm vücuda ulaştığı temel yöntemlerdir.",
        columns: ["Uygulama", "Konsantrasyon", "Hacim / Yöntem", "Not"],
        rows: [
          [
            "Majör otohemoterapi (O₃–OHT)",
            "Kedi ve köpek: 10 – 40 µg/ml\nKoyun, domuz, at, sığır: 20 – 50 µg/ml",
            "Toplam kan kütlesinin 1/20–1/25'i kadar kan, %3,8'lik Na-sitrat içeren steril tüpe alınır",
            "Ozonlanan kan damar içi yolla hastaya geri verilir",
          ],
          [
            "Minör otohemoterapi (MiAH)",
            "40 – 80 µg/ml",
            "3–5 ml kan, 3–5 ml gaza maruz bırakılır ve kas içi geri verilir",
            "Bağışıklık sisteminin spesifik olmayan uyarımı",
          ],
          [
            "Rektal ozon insüflasyonu (Rİ)",
            "20 – 35 µg/ml",
            "25 – 600 ml gaz; 20–30 cm polietilen kateter ile",
            "Hacim hayvanın büyüklüğüne göre belirlenir",
          ],
        ],
        source: "Kaynak: K1",
      },
      {
        id: "lokal",
        title: "Lokal Uygulamalar",
        intro:
          "Ozonun doğrudan hedef dokuya, boşluğa veya yüzeye verildiği uygulamalar.",
        columns: ["Endikasyon", "Konsantrasyon", "Hacim / Süre", "Not"],
        rows: [
          [
            "Enfeksiyöz artrit (eklem içi)",
            "20 µg/ml",
            "1 – 3 ml gaz",
            "Öncesinde eklem ozonlanmış su ile yıkanabilir",
          ],
          [
            "Apse, yüzeysel tümör, osteomiyelit, kist (lezyon içi)",
            "Başlangıç: 60 – 80 µg/ml\nDevam: 10 – 40 µg/ml",
            "Lezyonun büyüklüğüne göre",
            "Konsantrasyon seanslar ilerledikçe kademeli azaltılır",
          ],
          [
            "Torbalama (bagging) — yaygın deri lezyonu, kangren, diyabetik ayak",
            "20 – 60 µg/ml",
            "15 – 20 dakika",
            "Baş bölgesi torbanın dışında kalır; enfeksiyon giderilene kadar birkaç gün sürdürülebilir",
          ],
          [
            "Enfekte uterus ve vajina",
            "20 µg/ml",
            "Ozonlanmış su ile yıkamanın ardından gaz infüzyonu",
            "Sonrasında ozonlanmış yağ uygulanır",
          ],
          [
            "Enfekte üretra ve idrar kesesi (kedi, köpek)",
            "15 µg/ml",
            "20 – 50 ml gaz insüflasyonu",
            "Öncesinde ozonlu su ile yıkama",
          ],
          [
            "Enfekte sığır memesi",
            "Akut klinik mastitis: 6 mg/L infüzyon",
            "Çeyrek başına toplam 1 – 5 L",
            "Gaz uygulamasının ardından steril ozonlanmış yağ enjeksiyonu",
          ],
        ],
        source: "Kaynak: K1",
      },
      {
        id: "turler",
        title: "Türe Göre Klinik Örnekler",
        intro:
          "Yayımlanmış çalışmalarda bildirilen, türe ve endikasyona özgü uygulamalar.",
        columns: ["Tür ve endikasyon", "Konsantrasyon / Doz", "Uygulama", "Sıklık"],
        rows: [
          [
            "At — egzersiz öncesi antioksidan kapasite",
            "20 µg/kg",
            "400 ml otolog kana infüze edilir, 3,2 ml/kg/saat (O₃–OHT)",
            "Etki 7 – 14 gün sürer",
          ],
          [
            "At — osteoartrit",
            "20 ve 40 µg/ml",
            "İntraartiküler",
            "Çalışmada iki konsantrasyon karşılaştırılmıştır",
          ],
          [
            "At — kronik laminitis (Obel grade IV)",
            "19 mg/ml",
            "İntramüsküler, peritendinöz ve intrarektal",
            "10 hafta boyunca haftada 2 kez",
          ],
          [
            "At — sırt (bel) ağrısı",
            "30 µg/ml",
            "15 ml oksijen-ozon karışımı; interspinöz ve paravertebral kas içine lokal infiltrasyon",
            "Palpasyonda ağrı kaybolana kadar",
          ],
          [
            "Koyun — ayak hastalığı",
            "70 mg/ml",
            "Trombositten zengin plazma (PRP) ile kombine",
            "Haftalık aralıklarla 3 kez, 20'şer dakika",
          ],
          [
            "Sığır — subklinik mastitis (S. aureus)",
            "600 eq-kg (600 birim peroksit)",
            "Ozonlanmış ayçiçek yağı, topikal",
            "Etkilenen meme başına",
          ],
          [
            "Köpek — deri lezyonu / farmakodermi",
            "Ozonlanmış ayçiçek yağı\nOzonlanmış %0,9 salin: 47 µg/ml",
            "Yağ topikal, salin ile temizlik",
            "Yağ günde 2 kez 4 damla; 30 günlük tedavi",
          ],
          [
            "Köpek — ovariohisterektomi sonrası analjezi",
            "30 µg/ml",
            "Üretral kateterle rektuma, 30 saniye",
            "Uygulamadan sonra 60 saniye anüs sıkılarak gaz kaybı önlenir",
          ],
        ],
        source: "Kaynak: K1",
      },
      {
        id: "enfeksiyoz",
        title: "Enfeksiyöz Hastalıklarda Destekleyici Protokoller",
        intro:
          "Bu protokoller sıvı tedavisi ve antibiyotiğin yerine geçmez; mevcut tedaviyi destekler. Doğrudan damar içi ozon gazı uygulanmaz.",
        columns: ["Uygulama", "Konsantrasyon", "Sıklık"],
        groups: [
          {
            title: "Parvoviral enteritis (CPV) — kanlı ishal",
            rows: [
              ["Rektal ozon", "10 – 20 µg/ml", "Günde 1"],
              ["Minör otohemoterapi", "10 – 15 µg/ml", "Gün aşırı"],
              ["Serum ozonlama", "10 – 15 µg/ml", "Gün aşırı"],
            ],
          },
          {
            title: "Gençlik hastalığı (CDV)",
            rows: [
              ["Majör otohemoterapi", "20 – 25 µg/ml", "Haftada 2"],
              ["Rektal ozon", "10 – 15 µg/ml", "Günde 1"],
              ["Serum ozonlama", "10 – 15 µg/ml", "Haftada 2"],
            ],
          },
        ],
        source: "Kaynak: K2",
      },
      {
        id: "anal-sakkulit",
        title: "Anal Sakkülit ve Perianal Enflamasyon",
        intro:
          "Kedi ve köpeklerde kese boşaltma ve flushing birincil adımdır; ozon bu protokolü destekler.",
        columns: ["Klinik durum", "Konsantrasyon", "Uygulama şekli / hacim", "Sıklık"],
        rows: [
          [
            "Anal kese tıkanıklığı (enfeksiyon bulgusu yok)",
            "10 – 20 µg/ml",
            "Ozonlanmış %0,9 NaCl ile yüzey irrigasyonu, 5 – 10 ml",
            "3 – 5 gün",
          ],
          [
            "Hafif anal sakkülit (koku/kaşıntı, sistemik bulgu yok)",
            "15 – 25 µg/ml",
            "Kese içine ozonlu serum ile flushing, 3 – 5 ml/kese + %5–10 ozonize yağ",
            "Günde 1, 5 – 7 gün",
          ],
          [
            "Tekrarlayan (kronik) sakkülit",
            "Rektal: 5 – 10 µg/ml",
            "0,5 – 1 ml/kg rektal insüflasyon",
            "Haftada 1 – 2, 3 – 4 hafta",
          ],
          [
            "Perianal dermatit / ıslak lezyon",
            "10 – 20 µg/ml",
            "Ozonlu serum ile yüzey temizliği + %5–10 ozonize yağ",
            "Günlük",
          ],
          [
            "Apse / selülit şüphesi",
            "10 – 15 µg/ml (yüzey)",
            "Önce drenaj ± antibiyotik; iyileşme fazında ozonlu serum irrigasyonu + %5–10 ozonize yağ",
            "Günde 1",
          ],
        ],
        source: "Kaynak: K3",
      },
      {
        id: "guvenlik",
        title: "Güvenlik, Yan Etki ve Kontrendikasyonlar",
        intro: "Terapötik ozon kullanımında doz hayati öneme sahiptir.",
        columns: ["Başlık", "Açıklama"],
        rows: [
          [
            "Oksijen oranı",
            "Ozon hiçbir zaman saf verilmez; karışımdaki oksijen oranının %95 olması tavsiye edilir.",
          ],
          [
            "Kontrendike uygulama yolu",
            "İnhalasyon — pulmoner toksisite nedeniyle terapötik amaçla kullanılamaz.",
          ],
          [
            "Damar içi uygulama",
            "Doğrudan damar içi ozon gazı verilmez; en önemli komplikasyonu akciğer embolisidir.",
          ],
          [
            "Tipik yan etkiler",
            "Göz sulanması, rinit, öksürük, baş ağrısı, bazen bulantı ve kusma.",
          ],
          [
            "Kullanılmaması gereken durumlar",
            "Gebelik, glikoz-6-fosfat dehidrojenaz enzim eksikliği (favizm), hipertiroidizm, myastenia gravis, astım, kronik kardiyovasküler hastalıklar ve anemi.",
          ],
          [
            "Göz dokusu",
            "Ozona karşı oldukça hassastır; oftalmik uygulamalarda dikkatli olunmalı, uzun süreli maruziyetten kaçınılmalıdır.",
          ],
        ],
        source: "Kaynak: K1",
      },
    ],
    sources: {
      title: "Kaynaklar",
      items: [
        "K1 — Atik O, Birdane YO. “Veteriner Hekimlikte Ozon Terapisi.” Veteriner Farmakolojide Güncel Yaklaşımlar, Livre de Lyon, Lyon 2024, Bölüm I, s. 1–19.",
        "K2 — Köpeklerde gençlik hastalığı ve kanlı ishalde destekleyici ozon protokolleri (klinik doküman).",
        "K3 — Kedi ve köpeklerde anal sakkülit ve perianal enflamasyonda ozon tedavisi (klinik doküman).",
      ],
    },
    popup: {
      title: "Temel Doz ve Uygulama Tabloları",
      lead:
        "Veteriner medikal ozon uygulamalarında en çok kullanılan konsantrasyon aralıkları:",
      bullets: [
        ["Majör otohemoterapi", "Kedi/köpek 10 – 40 µg/ml · Büyük hayvan 20 – 50 µg/ml"],
        ["Minör otohemoterapi", "40 – 80 µg/ml · 3 – 5 ml kan"],
        ["Rektal insüflasyon", "20 – 35 µg/ml · 25 – 600 ml"],
        ["Lezyon içi", "Başlangıç 60 – 80 µg/ml · Devam 10 – 40 µg/ml"],
      ],
      cta: "Tabloların tamamını gör",
      close: "Kapat",
    },
  },

  en: {
    overline: "Clinical Reference",
    title: "Core Dose and Application Tables",
    lead:
      "Concentration, volume and frequency ranges commonly used in veterinary medical ozone therapy. These tables do not replace clinical judgement; species, weight, general condition and concurrent treatment must be assessed for every patient.",
    notice: {
      title: "For veterinarians only",
      text:
        "The information on this page is intended for veterinarians. Animal owners should not apply these doses themselves; treatment must be planned and carried out by a veterinarian.",
    },
    sections: [
      {
        id: "sistemik",
        title: "Systemic Applications",
        intro:
          "The principal routes by which ozone reaches the whole body, via the blood or the digestive tract.",
        columns: ["Application", "Concentration", "Volume / Method", "Note"],
        rows: [
          [
            "Major autohaemotherapy (O₃–OHT)",
            "Cats and dogs: 10 – 40 µg/ml\nSheep, pigs, horses, cattle: 20 – 50 µg/ml",
            "1/20–1/25 of total blood mass, drawn into a sterile tube with 3.8% Na-citrate",
            "The ozonated blood is returned to the patient intravenously",
          ],
          [
            "Minor autohaemotherapy (MiAH)",
            "40 – 80 µg/ml",
            "3–5 ml of blood exposed to 3–5 ml of gas, returned intramuscularly",
            "Non-specific stimulation of the immune system",
          ],
          [
            "Rectal ozone insufflation (RI)",
            "20 – 35 µg/ml",
            "25 – 600 ml of gas via a 20–30 cm polyethylene catheter",
            "Volume is set by the size of the animal",
          ],
        ],
        source: "Source: K1",
      },
      {
        id: "lokal",
        title: "Local Applications",
        intro:
          "Ozone delivered directly to the target tissue, cavity or surface.",
        columns: ["Indication", "Concentration", "Volume / Duration", "Note"],
        rows: [
          [
            "Infectious arthritis (intra-articular)",
            "20 µg/ml",
            "1 – 3 ml of gas",
            "The joint may first be irrigated with ozonated water",
          ],
          [
            "Abscess, superficial tumour, osteomyelitis, cyst (intralesional)",
            "Initial: 60 – 80 µg/ml\nThereafter: 10 – 40 µg/ml",
            "According to the size of the lesion",
            "Concentration is reduced gradually over successive sessions",
          ],
          [
            "Bagging — widespread skin lesions, gangrene, diabetic foot",
            "20 – 60 µg/ml",
            "15 – 20 minutes",
            "The head stays outside the bag; may continue for several days until the infection resolves",
          ],
          [
            "Infected uterus and vagina",
            "20 µg/ml",
            "Gas infusion following irrigation with ozonated water",
            "Followed by ozonated oil",
          ],
          [
            "Infected urethra and bladder (cats, dogs)",
            "15 µg/ml",
            "20 – 50 ml gas insufflation",
            "Preceded by irrigation with ozonated water",
          ],
          [
            "Infected bovine udder",
            "Acute clinical mastitis: 6 mg/L infusion",
            "1 – 5 L in total per quarter",
            "Gas application followed by sterile ozonated oil injection",
          ],
        ],
        source: "Source: K1",
      },
      {
        id: "turler",
        title: "Clinical Examples by Species",
        intro:
          "Species- and indication-specific applications reported in published studies.",
        columns: ["Species and indication", "Concentration / Dose", "Route", "Frequency"],
        rows: [
          [
            "Horse — antioxidant capacity before exercise",
            "20 µg/kg",
            "Infused into 400 ml of autologous blood, 3.2 ml/kg/hour (O₃–OHT)",
            "Effects last 7 – 14 days",
          ],
          [
            "Horse — osteoarthritis",
            "20 and 40 µg/ml",
            "Intra-articular",
            "Two concentrations compared in the study",
          ],
          [
            "Horse — chronic laminitis (Obel grade IV)",
            "19 mg/ml",
            "Intramuscular, peritendinous and intrarectal",
            "Twice weekly for 10 weeks",
          ],
          [
            "Horse — back pain",
            "30 µg/ml",
            "15 ml oxygen-ozone mixture, local infiltration into interspinous and paravertebral muscle",
            "Until pain on palpation resolves",
          ],
          [
            "Sheep — foot disease",
            "70 mg/ml",
            "Combined with platelet-rich plasma (PRP)",
            "Three times at weekly intervals, 20 minutes each",
          ],
          [
            "Cattle — subclinical mastitis (S. aureus)",
            "600 eq-kg (600 peroxide units)",
            "Ozonated sunflower oil, topical",
            "Per affected teat",
          ],
          [
            "Dog — skin lesions / pharmacoderma",
            "Ozonated sunflower oil\nOzonated 0.9% saline: 47 µg/ml",
            "Oil topically, cleansing with saline",
            "4 drops of oil twice daily; 30-day course",
          ],
          [
            "Dog — analgesia after ovariohysterectomy",
            "30 µg/ml",
            "Rectally via a urethral catheter, 30 seconds",
            "The anus is held closed for 60 seconds afterwards to prevent gas loss",
          ],
        ],
        source: "Source: K1",
      },
      {
        id: "enfeksiyoz",
        title: "Supportive Protocols in Infectious Disease",
        intro:
          "These protocols do not replace fluid therapy or antibiotics; they support existing treatment. Ozone gas is never given directly intravenously.",
        columns: ["Application", "Concentration", "Frequency"],
        groups: [
          {
            title: "Parvoviral enteritis (CPV) — haemorrhagic diarrhoea",
            rows: [
              ["Rectal ozone", "10 – 20 µg/ml", "Once daily"],
              ["Minor autohaemotherapy", "10 – 15 µg/ml", "Every other day"],
              ["Serum ozonation", "10 – 15 µg/ml", "Every other day"],
            ],
          },
          {
            title: "Canine distemper (CDV)",
            rows: [
              ["Major autohaemotherapy", "20 – 25 µg/ml", "Twice weekly"],
              ["Rectal ozone", "10 – 15 µg/ml", "Once daily"],
              ["Serum ozonation", "10 – 15 µg/ml", "Twice weekly"],
            ],
          },
        ],
        source: "Source: K2",
      },
      {
        id: "anal-sakkulit",
        title: "Anal Sacculitis and Perianal Inflammation",
        intro:
          "Expression and flushing of the sac remain the primary step in cats and dogs; ozone supports that protocol.",
        columns: ["Clinical situation", "Concentration", "Route / Volume", "Frequency"],
        rows: [
          [
            "Anal sac impaction (no sign of infection)",
            "10 – 20 µg/ml",
            "Surface irrigation with ozonated 0.9% NaCl, 5 – 10 ml",
            "3 – 5 days",
          ],
          [
            "Mild anal sacculitis (odour/pruritus, no systemic signs)",
            "15 – 25 µg/ml",
            "Intraluminal flushing with ozonated saline, 3 – 5 ml per sac + 5–10% ozonated oil",
            "Once daily, 5 – 7 days",
          ],
          [
            "Recurrent (chronic) sacculitis",
            "Rectal: 5 – 10 µg/ml",
            "0.5 – 1 ml/kg rectal insufflation",
            "Once or twice weekly, 3 – 4 weeks",
          ],
          [
            "Perianal dermatitis / moist lesion",
            "10 – 20 µg/ml",
            "Surface cleansing with ozonated saline + 5–10% ozonated oil",
            "Daily",
          ],
          [
            "Suspected abscess / cellulitis",
            "10 – 15 µg/ml (surface)",
            "Drainage ± antibiotics first; ozonated saline irrigation + 5–10% ozonated oil during healing",
            "Once daily",
          ],
        ],
        source: "Source: K3",
      },
      {
        id: "guvenlik",
        title: "Safety, Side Effects and Contraindications",
        intro: "Dosage is of vital importance in therapeutic ozone use.",
        columns: ["Topic", "Detail"],
        rows: [
          [
            "Oxygen ratio",
            "Ozone is never given pure; an oxygen ratio of 95% in the mixture is recommended.",
          ],
          [
            "Contraindicated route",
            "Inhalation — cannot be used therapeutically because of pulmonary toxicity.",
          ],
          [
            "Intravenous use",
            "Ozone gas is never given directly intravenously; its most serious complication is pulmonary embolism.",
          ],
          [
            "Typical side effects",
            "Watering eyes, rhinitis, cough, headache, and occasionally nausea and vomiting.",
          ],
          [
            "When it should not be used",
            "Pregnancy, glucose-6-phosphate dehydrogenase deficiency (favism), hyperthyroidism, myasthenia gravis, asthma, chronic cardiovascular disease and anaemia.",
          ],
          [
            "Ocular tissue",
            "Highly sensitive to ozone; ophthalmic use requires care and prolonged exposure must be avoided.",
          ],
        ],
        source: "Source: K1",
      },
    ],
    sources: {
      title: "Sources",
      items: [
        "K1 — Atik O, Birdane YO. “Ozone Therapy in Veterinary Medicine.” Veteriner Farmakolojide Güncel Yaklaşımlar, Livre de Lyon, Lyon 2024, Chapter I, pp. 1–19.",
        "K2 — Supportive ozone protocols in canine distemper and haemorrhagic diarrhoea (clinical document).",
        "K3 — Ozone therapy in feline and canine anal sacculitis and perianal inflammation (clinical document).",
      ],
    },
    popup: {
      title: "Core Dose and Application Tables",
      lead:
        "The concentration ranges most often used in veterinary medical ozone therapy:",
      bullets: [
        ["Major autohaemotherapy", "Cats/dogs 10 – 40 µg/ml · Large animals 20 – 50 µg/ml"],
        ["Minor autohaemotherapy", "40 – 80 µg/ml · 3 – 5 ml of blood"],
        ["Rectal insufflation", "20 – 35 µg/ml · 25 – 600 ml"],
        ["Intralesional", "Initial 60 – 80 µg/ml · Thereafter 10 – 40 µg/ml"],
      ],
      cta: "See all the tables",
      close: "Close",
    },
  },
};
