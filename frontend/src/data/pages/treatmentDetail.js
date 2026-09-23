import { Drop, Eyedropper, Sparkle, Package, Syringe } from "@phosphor-icons/react";
import { ASSETS } from "../content";

// Sections shared by every treatment-area detail page. Per-area overrides
// live in DETAIL_OVERRIDES below; areas without an override fall back to
// copy derived from their index-page card.
export const DETAIL_SHARED = {
  tr: {
    tabs: [
      { id: "durumlar", label: "Hangi Durumlarda?" },
      { id: "yontemler", label: "Uygulama Yöntemleri" },
      { id: "calismalar", label: "Bilimsel Çalışmalar" },
      { id: "vakalar", label: "Klinik Vakalar" },
      { id: "cozum", label: "Vetozone ile Çözüm" },
    ],
    conditions: {
      overline: "Klinik Alanlar",
      title: "Hangi Durumlarda Kullanılıyor?",
      sub: "Ozon tedavisinin araştırıldığı başlıca alanlar:",
      all: "Tümünü Gör",
    },
    methods: {
      overline: "Nasıl Uygulanır?",
      title: "Uygulama Yöntemleri",
      sub: "Vakanın klinik durumuna göre farklı ozon uygulama yöntemleri kullanılabilir.",
      videos: "Uygulama Videolarını İzle",
      items: [
        { icon: Drop, title: "Ozonlu Su", text: "Temizleme ve yıkama uygulamaları" },
        { icon: Eyedropper, title: "Ozonlu Yağ", text: "Lokal deri uygulamaları" },
        { icon: Sparkle, title: "Lokal Ozon", text: "Hedefe yönelik uygulamalar" },
        { icon: Package, title: "Torbalama", text: "Geniş bölgelerde kapalı uygulama" },
        { icon: Syringe, title: "Sistemik Uygulamalar", text: "Majör otohemoterapi ve destekleyici yaklaşımlar" },
      ],
    },
    studies: {
      overline: "Bilimsel Çalışmalar",
      title: "Ne Söylüyor?",
      sub: "Bu alanda ozon tedavisi üzerine yayımlanmış bilimsel çalışmalardan bazılarını inceleyin.",
      cta: "Tüm Çalışmaları Gör",
      empty: "Bu alandaki bilimsel çalışma özetleri hazırlanıyor.",
    },
    cases: {
      overline: "Klinik Vakalar",
      title: "Gerçek Hayattan Örnekler",
      sub: "Bu alandaki ozon uygulamalarına ait klinik örnekler.",
      cta: "Tüm Vakaları Gör",
      empty: "Vaka görselleri hazırlanıyor — yakında burada.",
      before: "Öncesi",
      after: "Sonrası",
    },
    cta: {
      title: "Bu uygulamaları kliniğinizde yapmak ister misiniz?",
      text: "Vetozone, veteriner hekimliğin farklı alanlarında güvenli ve kontrollü ozon uygulamaları için yanınızda.",
      button: "Vetozone'u İnceleyin",
      to: "/cihazlar",
    },
    defaultLead: "Klinik pratiğinizde ozon tedavisinin değerlendirilebileceği uygulama alanları.",
    defaultBody:
      "Medikal ozon; antimikrobiyal etkileri, inflamatuvar süreçler ve doku iyileşmesi üzerindeki potansiyel etkileri nedeniyle bu alanda farklı uygulama yöntemleriyle değerlendirilmektedir.",
  },
  en: {
    tabs: [
      { id: "durumlar", label: "Indications" },
      { id: "yontemler", label: "Application Methods" },
      { id: "calismalar", label: "Scientific Studies" },
      { id: "vakalar", label: "Clinical Cases" },
      { id: "cozum", label: "The Vetozone Solution" },
    ],
    conditions: {
      overline: "Clinical Areas",
      title: "Where Is It Used?",
      sub: "The main areas in which ozone therapy has been studied:",
      all: "See All",
    },
    methods: {
      overline: "How Is It Applied?",
      title: "Application Methods",
      sub: "Different ozone application methods can be used depending on the clinical picture.",
      videos: "Watch Application Videos",
      items: [
        { icon: Drop, title: "Ozonated Water", text: "Cleansing and irrigation" },
        { icon: Eyedropper, title: "Ozonated Oil", text: "Local skin applications" },
        { icon: Sparkle, title: "Local Ozone", text: "Targeted applications" },
        { icon: Package, title: "Bagging", text: "Enclosed application over larger areas" },
        { icon: Syringe, title: "Systemic Applications", text: "Major autohemotherapy and supportive approaches" },
      ],
    },
    studies: {
      overline: "Scientific Studies",
      title: "What Does It Say?",
      sub: "Review some of the published scientific work on ozone therapy in this area.",
      cta: "See All Studies",
      empty: "Study summaries for this area are being prepared.",
    },
    cases: {
      overline: "Clinical Cases",
      title: "Real-World Examples",
      sub: "Clinical examples of ozone applications in this area.",
      cta: "See All Cases",
      empty: "Case images are being prepared — coming soon.",
      before: "Before",
      after: "After",
    },
    cta: {
      title: "Would you like to offer these applications in your clinic?",
      text: "Vetozone is with you for safe, controlled ozone applications across the different fields of veterinary medicine.",
      button: "Explore Vetozone",
      to: "/cihazlar",
    },
    defaultLead: "Application areas where ozone therapy can be considered in your clinical practice.",
    defaultBody:
      "Medical ozone is evaluated in this area through different application methods, owing to its antimicrobial effects and its potential effects on inflammatory processes and tissue healing.",
  },
};

// Rich, hand-written content for individual areas. Anything not listed here
// still renders a complete page from its index-card data.
export const DETAIL_OVERRIDES = {
  dermatoloji: {
    tr: {
      titleLines: ["Veteriner Dermatolojide", "Ozon Tedavisi"],
      accentLine: "Ozon Tedavisi",
      script: "Sağlıklı Deri, Mutlu Hastalar",
      lead: "Daha sağlıklı bir deri, daha iyi bir yaşam kalitesi.",
      body: "Medikal ozon; antimikrobiyal etkileri, inflamatuvar süreçler ve doku iyileşmesi üzerindeki potansiyel etkileri nedeniyle veteriner dermatolojide farklı uygulama yöntemleriyle değerlendirilmektedir.",
      quote: "Ozon tedavisi, dermatolojik vakaların yönetiminde konvansiyonel tedavilere tamamlayıcı bir seçenek olarak değerlendirilmektedir.",
      image: ASSETS.species.dogcat,
      conditions: [
        { title: "Pyoderma", text: "Bakteriyel deri enfeksiyonları" },
        { title: "Dermatit", text: "Atopik ve kronik dermatitler" },
        { title: "Fungal Enfeksiyonlar", text: "Dermatofitozlar ve mantar enfeksiyonları" },
        { title: "Alopesi", text: "Tüy dökülmesi ile seyreden dermatolojik tablolar" },
        { title: "Kronik Deri Lezyonları", text: "İyileşmesi gecikmiş yaralar ve lezyonlar" },
      ],
    },
    en: {
      titleLines: ["Ozone Therapy in", "Veterinary Dermatology"],
      accentLine: "Veterinary Dermatology",
      script: "Healthy Skin, Happy Patients",
      lead: "Healthier skin, a better quality of life.",
      body: "Medical ozone is evaluated in veterinary dermatology through different application methods, owing to its antimicrobial effects and its potential effects on inflammatory processes and tissue healing.",
      quote: "Ozone therapy is considered a complementary option alongside conventional treatment in the management of dermatological cases.",
      image: ASSETS.species.dogcat,
      conditions: [
        { title: "Pyoderma", text: "Bacterial skin infections" },
        { title: "Dermatitis", text: "Atopic and chronic dermatitis" },
        { title: "Fungal Infections", text: "Dermatophytosis and fungal infections" },
        { title: "Alopecia", text: "Dermatological presentations with hair loss" },
        { title: "Chronic Skin Lesions", text: "Wounds and lesions with delayed healing" },
      ],
    },
  },
};
