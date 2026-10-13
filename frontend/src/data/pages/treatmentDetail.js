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
      title: "Hangi Durumlarda Kullanılıyor?",
      sub: "Ozon tedavisinin araştırıldığı başlıca alanlar:",
      all: "Tümünü Gör",
    },
    methods: {
      overline: "Nasıl Uygulanır?",
      title: "Uygulama Yöntemleri",
      sub: "Vakanın klinik durumuna göre farklı ozon uygulama yöntemleri kullanılabilir.",
      items: [
        { icon: Drop, image: ASSETS.methods.water, title: "Ozonlu Su", text: "Temizleme ve yıkama uygulamaları" },
        { icon: Eyedropper, image: ASSETS.methods.oil, title: "Ozonlu Yağ", text: "Lokal deri uygulamaları" },
        { icon: Sparkle, image: ASSETS.methods.local, title: "Lokal Ozon", text: "Hedefe yönelik uygulamalar" },
        { icon: Package, image: ASSETS.methods.bagging, title: "Torbalama", text: "Geniş bölgelerde kapalı uygulama" },
        { icon: Syringe, image: ASSETS.methods.systemic, title: "Sistemik Uygulamalar", text: "Majör otohemoterapi ve destekleyici yaklaşımlar" },
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
      title: "Where Is It Used?",
      sub: "The main areas in which ozone therapy has been studied:",
      all: "See All",
    },
    methods: {
      overline: "How Is It Applied?",
      title: "Application Methods",
      sub: "Different ozone application methods can be used depending on the clinical picture.",
      items: [
        { icon: Drop, image: ASSETS.methods.water, title: "Ozonated Water", text: "Cleansing and irrigation" },
        { icon: Eyedropper, image: ASSETS.methods.oil, title: "Ozonated Oil", text: "Local skin applications" },
        { icon: Sparkle, image: ASSETS.methods.local, title: "Local Ozone", text: "Targeted applications" },
        { icon: Package, image: ASSETS.methods.bagging, title: "Bagging", text: "Enclosed application over larger areas" },
        { icon: Syringe, image: ASSETS.methods.systemic, title: "Systemic Applications", text: "Major autohemotherapy and supportive approaches" },
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

// Per-area copy. Deliberately hedged: ozone is described as a complementary
// or supportive option that sits alongside the veterinarian's own plan, never
// as a treatment with claimed efficacy.
export const DETAIL_OVERRIDES = {
  dermatoloji: {
    tr: {
      titleLines: ["Veteriner Dermatolojide", "Ozon Tedavisi"],
      accentLine: "Ozon Tedavisi",
      script: "Sağlıklı Deri, Mutlu Hastalar",
      lead: "Daha sağlıklı bir deri, daha iyi bir yaşam kalitesi.",
      body: "Medikal ozon; antimikrobiyal etkileri, inflamatuvar süreçler ve doku iyileşmesi üzerindeki potansiyel etkileri nedeniyle veteriner dermatolojide farklı uygulama yöntemleriyle değerlendirilmektedir.",
      image: ASSETS.species.dogcat,
      intro: {
        lead: "Kronik ve tekrarlayan deri problemlerinde farklı bir tedavi yaklaşımı.",
        paragraphs: [
          "Pyoderma, kronik dermatitler, tekrarlayan deri enfeksiyonları ve iyileşmesi güç yaralar, veteriner hekimlikte farklı tedavi seçeneklerinin değerlendirilmesini gerektirebilir.",
          "Medikal ozon; antimikrobiyal özellikleri, mikrobiyal yükü azaltma potansiyeli ve doku iyileşmesi üzerindeki etkileriyle veteriner dermatolojide giderek daha fazla araştırılan bir uygulamadır.",
          "Ozonlu su, ozonlu yağ, lokal ozon ve torbalama gibi yöntemler, vakanın özelliklerine ve mevcut bilimsel kanıtlara göre tek başına veya diğer tedavilerle birlikte değerlendirilebilir.",
        ],
        closing:
          "Vetozone ile dermatolojik vakalarda uygulama seçeneklerinizi genişletin. Medikal ozon teknolojisini eğitim ve klinik uygulama desteğiyle kliniğinize entegre edin.",
      },
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
      image: ASSETS.species.dogcat,
      intro: {
        lead: "A different treatment approach in chronic and recurrent skin problems.",
        paragraphs: [
          "Pyoderma, chronic dermatitis, recurrent skin infections and wounds that heal poorly may call for different treatment options to be considered in veterinary practice.",
          "Medical ozone is an increasingly researched application in veterinary dermatology for its antimicrobial properties, its potential to reduce microbial load, and its effects on tissue healing.",
          "Methods such as ozonated water, ozonated oil, local ozone and bagging can be considered alone or alongside other treatments, according to the characteristics of the case and the available scientific evidence.",
        ],
        closing:
          "Broaden your options in dermatological cases with Vetozone. Integrate medical ozone technology into your clinic with training and clinical application support.",
      },
      conditions: [
        { title: "Pyoderma", text: "Bacterial skin infections" },
        { title: "Dermatitis", text: "Atopic and chronic dermatitis" },
        { title: "Fungal Infections", text: "Dermatophytosis and fungal infections" },
        { title: "Alopecia", text: "Dermatological presentations with hair loss" },
        { title: "Chronic Skin Lesions", text: "Wounds and lesions with delayed healing" },
      ],
    },
  },

  "yara-ve-doku": {
    tr: {
      titleLines: ["Yara Yönetiminde", "Ozon Tedavisi"],
      accentLine: "Ozon Tedavisi",
      script: "Daha İyi İyileşme",
      lead: "Zor iyileşen yaralarda ek bir seçenek.",
      body: "Medikal ozon; antimikrobiyal etkileri ve doku iyileşmesi üzerindeki potansiyel etkileri nedeniyle akut ve kronik yara yönetiminde lokal ve sistemik yöntemlerle değerlendirilmektedir.",
      image: ASSETS.species.dogcat,
      conditions: [
        { title: "Kronik Yaralar", text: "İyileşmesi uzayan, tekrarlayan yaralar" },
        { title: "Enfekte Yaralar", text: "Bakteriyel yük taşıyan yara zeminleri" },
        { title: "Cerrahi Yaralar", text: "Operasyon sonrası yara takibi" },
        { title: "Doku İyileşmesi", text: "Granülasyon ve epitelizasyon sürecinin desteklenmesi" },
      ],
    },
    en: {
      titleLines: ["Ozone Therapy in", "Wound Management"],
      accentLine: "Wound Management",
      script: "Better Healing",
      lead: "An additional option in slow-healing wounds.",
      body: "Medical ozone is evaluated in acute and chronic wound management through local and systemic methods, owing to its antimicrobial effects and potential effects on tissue healing.",
      image: ASSETS.species.dogcat,
      conditions: [
        { title: "Chronic Wounds", text: "Recurrent wounds with prolonged healing" },
        { title: "Infected Wounds", text: "Wound beds carrying a bacterial load" },
        { title: "Surgical Wounds", text: "Post-operative wound follow-up" },
        { title: "Tissue Healing", text: "Support for granulation and epithelialisation" },
      ],
    },
  },

  "kulak-hastaliklari": {
    tr: {
      titleLines: ["Kulak Hastalıklarında", "Ozon Tedavisi"],
      accentLine: "Ozon Tedavisi",
      script: "Rahat Kulaklar",
      lead: "Tekrarlayan otitis vakalarında destekleyici yaklaşım.",
      body: "Dış kulak yolu hastalıklarında medikal ozon; ozonlu yağ ve lokal uygulama yöntemleriyle, mevcut tedaviye destek olarak değerlendirilmektedir.",
      image: ASSETS.species.dogcat,
      conditions: [
        { title: "Otitis Externa", text: "Dış kulak yolu iltihapları" },
        { title: "Kronik Otitis", text: "Tekrarlayan ve uzun süreli vakalar" },
      ],
    },
    en: {
      titleLines: ["Ozone Therapy in", "Ear Conditions"],
      accentLine: "Ear Conditions",
      script: "Comfortable Ears",
      lead: "A supportive approach in recurrent otitis cases.",
      body: "In conditions of the external ear canal, medical ozone is evaluated as a support to existing treatment through ozonated oil and local application methods.",
      image: ASSETS.species.dogcat,
      conditions: [
        { title: "Otitis Externa", text: "Inflammation of the external ear canal" },
        { title: "Chronic Otitis", text: "Recurrent and long-standing cases" },
      ],
    },
  },

  "agiz-ve-dis": {
    tr: {
      titleLines: ["Ağız ve Diş Sağlığında", "Ozon Tedavisi"],
      accentLine: "Ozon Tedavisi",
      script: "Sağlıklı Ağız",
      lead: "Oral mukozanın desteklenmesinde ek bir araç.",
      body: "Gingivitis, stomatitis ve periodontal problemlerde medikal ozon; ozonlu su ve lokal uygulamalarla, diş hekimliği pratiğine destekleyici olarak değerlendirilmektedir.",
      image: ASSETS.species.dogcat,
      conditions: [
        { title: "Gingivitis", text: "Dişeti iltihapları" },
        { title: "Stomatitis", text: "Ağız mukozası inflamasyonu" },
        { title: "Periodontal Hastalıklar", text: "Destek doku kaynaklı tablolar" },
      ],
    },
    en: {
      titleLines: ["Ozone Therapy in", "Oral and Dental Health"],
      accentLine: "Oral and Dental Health",
      script: "A Healthy Mouth",
      lead: "An additional tool in supporting the oral mucosa.",
      body: "In gingivitis, stomatitis and periodontal problems, medical ozone is evaluated as a support to dental practice through ozonated water and local applications.",
      image: ASSETS.species.dogcat,
      conditions: [
        { title: "Gingivitis", text: "Inflammation of the gums" },
        { title: "Stomatitis", text: "Inflammation of the oral mucosa" },
        { title: "Periodontal Disease", text: "Presentations arising from supporting tissue" },
      ],
    },
  },

  "uriner-sistem": {
    tr: {
      titleLines: ["Üriner Sistemde", "Ozon Tedavisi"],
      accentLine: "Ozon Tedavisi",
      script: "Lokal Destek",
      lead: "Alt üriner sistem vakalarında destekleyici uygulama.",
      body: "Sistit ve üriner sistem enfeksiyonlarında medikal ozon; ozonlanmış solüsyonlarla lokal destek amacıyla değerlendirilmektedir.",
      image: ASSETS.species.dogcat,
      conditions: [
        { title: "Sistit", text: "İdrar kesesi inflamasyonu" },
        { title: "Üriner Enfeksiyonlar", text: "Lokal destek uygulamaları" },
      ],
    },
    en: {
      titleLines: ["Ozone Therapy in", "The Urinary System"],
      accentLine: "The Urinary System",
      script: "Local Support",
      lead: "A supportive application in lower urinary tract cases.",
      body: "In cystitis and urinary tract infections, medical ozone is evaluated for local support through ozonated solutions.",
      image: ASSETS.species.dogcat,
      conditions: [
        { title: "Cystitis", text: "Inflammation of the bladder" },
        { title: "Urinary Infections", text: "Local support applications" },
      ],
    },
  },

  osteoartrit: {
    tr: {
      titleLines: ["Osteoartritte", "Ozon Tedavisi"],
      accentLine: "Ozon Tedavisi",
      script: "Daha Rahat Hareket",
      lead: "Eklem konforunu desteklemeye yönelik bir seçenek.",
      body: "Osteoartrit ve eklem hastalıklarında medikal ozon; intraartiküler ve periartiküler uygulamalarla, ağrı yönetimi ve fonksiyon desteği çerçevesinde değerlendirilmektedir.",
      image: ASSETS.species.horse,
      conditions: [
        { title: "Osteoartrit", text: "Dejeneratif eklem hastalığı" },
        { title: "Eklem Hastalıkları", text: "Kronik seyirli eklem problemleri" },
      ],
    },
    en: {
      titleLines: ["Ozone Therapy in", "Osteoarthritis"],
      accentLine: "Osteoarthritis",
      script: "Easier Movement",
      lead: "An option aimed at supporting joint comfort.",
      body: "In osteoarthritis and joint disease, medical ozone is evaluated within the framework of pain management and functional support through intra-articular and peri-articular applications.",
      image: ASSETS.species.horse,
      conditions: [
        { title: "Osteoarthritis", text: "Degenerative joint disease" },
        { title: "Joint Conditions", text: "Chronic joint problems" },
      ],
    },
  },

  "ivdd-ve-omurga": {
    tr: {
      titleLines: ["IVDD ve Omurgada", "Ozon Tedavisi"],
      accentLine: "Ozon Tedavisi",
      script: "Hareketin Desteği",
      lead: "Nörolojik rehabilitasyon sürecine eşlik eden uygulamalar.",
      body: "IVDD ve omurga kaynaklı nörolojik tablolarda medikal ozon; paravertebral ve sistemik uygulamalarla, rehabilitasyon protokollerine destek olarak değerlendirilmektedir.",
      image: ASSETS.species.dogcat,
      conditions: [
        { title: "IVDD", text: "İntervertebral disk hastalığı" },
        { title: "Omurga Kaynaklı Tablolar", text: "Spinal kökenli nörolojik bulgular" },
        { title: "Rehabilitasyon Desteği", text: "Fizik tedavi sürecine eşlik eden uygulamalar" },
      ],
    },
    en: {
      titleLines: ["Ozone Therapy in", "IVDD and the Spine"],
      accentLine: "IVDD and the Spine",
      script: "Support for Movement",
      lead: "Applications that accompany the neurological rehabilitation process.",
      body: "In IVDD and spine-related neurological presentations, medical ozone is evaluated as a support to rehabilitation protocols through paravertebral and systemic applications.",
      image: ASSETS.species.dogcat,
      conditions: [
        { title: "IVDD", text: "Intervertebral disc disease" },
        { title: "Spine-Related Presentations", text: "Neurological findings of spinal origin" },
        { title: "Rehabilitation Support", text: "Applications alongside physical therapy" },
      ],
    },
  },

  "kas-tendon-ligament": {
    tr: {
      titleLines: ["Kas, Tendon ve Ligamentte", "Ozon Tedavisi"],
      accentLine: "Ozon Tedavisi",
      script: "Güçlü Dönüş",
      lead: "Yumuşak doku yaralanmalarında destekleyici yaklaşım.",
      body: "Kas, tendon ve ligament problemlerinde medikal ozon; lokal uygulamalarla, iyileşme ve rehabilitasyon sürecine destek çerçevesinde değerlendirilmektedir.",
      image: ASSETS.species.horse,
      conditions: [
        { title: "Tendon Yaralanmaları", text: "Tendon kaynaklı hasar ve topallık" },
        { title: "Ligament Problemleri", text: "Bağ dokusu yaralanmaları" },
        { title: "Kas Problemleri", text: "Kas kaynaklı ağrı ve fonksiyon kaybı" },
        { title: "Rehabilitasyon", text: "Kas-iskelet sistemi rehabilitasyonu" },
      ],
    },
    en: {
      titleLines: ["Ozone Therapy in", "Muscle, Tendon and Ligament"],
      accentLine: "Muscle, Tendon and Ligament",
      script: "A Strong Return",
      lead: "A supportive approach in soft tissue injuries.",
      body: "In muscle, tendon and ligament problems, medical ozone is evaluated through local applications as support for the healing and rehabilitation process.",
      image: ASSETS.species.horse,
      conditions: [
        { title: "Tendon Injuries", text: "Tendon-related damage and lameness" },
        { title: "Ligament Problems", text: "Injuries to connective tissue" },
        { title: "Muscle Problems", text: "Muscle-related pain and loss of function" },
        { title: "Rehabilitation", text: "Musculoskeletal rehabilitation" },
      ],
    },
  },

  "rejeneratif-ortopedi": {
    tr: {
      titleLines: ["Rejeneratif Ortopedide", "Ozon Tedavisi"],
      accentLine: "Ozon Tedavisi",
      script: "Birlikte Daha Güçlü",
      lead: "Kombinasyon protokollerinde ozonun yeri.",
      body: "Rejeneratif ortopedi uygulamalarında medikal ozon; PRP, proloterapi ve kök hücre gibi yaklaşımlarla birlikte kombinasyon protokolleri çerçevesinde değerlendirilmektedir.",
      image: ASSETS.species.horse,
      conditions: [
        { title: "Ozon + PRP", text: "Trombositten zengin plazma ile kombinasyon" },
        { title: "Ozon + Proloterapi", text: "Proloterapi protokollerine eşlik eden uygulama" },
        { title: "Ozon + Kök Hücre", text: "Kök hücre uygulamalarıyla birlikte" },
        { title: "Eklem ve Yumuşak Doku", text: "Rehabilitasyon protokollerine destek" },
      ],
    },
    en: {
      titleLines: ["Ozone Therapy in", "Regenerative Orthopedics"],
      accentLine: "Regenerative Orthopedics",
      script: "Stronger Together",
      lead: "Where ozone sits within combination protocols.",
      body: "In regenerative orthopedic applications, medical ozone is evaluated within combination protocols alongside approaches such as PRP, prolotherapy and stem cell therapy.",
      image: ASSETS.species.horse,
      conditions: [
        { title: "Ozone + PRP", text: "Combination with platelet-rich plasma" },
        { title: "Ozone + Prolotherapy", text: "Applications alongside prolotherapy protocols" },
        { title: "Ozone + Stem Cell", text: "Together with stem cell applications" },
        { title: "Joint and Soft Tissue", text: "Support for rehabilitation protocols" },
      ],
    },
  },

  "enfeksiyon-hastaliklari": {
    tr: {
      titleLines: ["Enfeksiyon Hastalıklarında", "Ozon Tedavisi"],
      accentLine: "Ozon Tedavisi",
      script: "Destekleyici Güç",
      lead: "Enfeksiyöz süreçlerde tamamlayıcı uygulama.",
      body: "Parvoviral enteritis başta olmak üzere enfeksiyöz süreçlerde medikal ozon; rektal ve sistemik uygulamalarla, standart tedaviye destek olarak değerlendirilmektedir.",
      image: ASSETS.species.dogcat,
      conditions: [
        { title: "Parvoviral Enteritis", text: "Destekleyici uygulama protokolleri" },
        { title: "Enfeksiyöz Süreçler", text: "Genel destekleyici yaklaşımlar" },
      ],
    },
    en: {
      titleLines: ["Ozone Therapy in", "Infectious Diseases"],
      accentLine: "Infectious Diseases",
      script: "Supportive Strength",
      lead: "A complementary application in infectious processes.",
      body: "In infectious processes, parvoviral enteritis in particular, medical ozone is evaluated as a support to standard treatment through rectal and systemic applications.",
      image: ASSETS.species.dogcat,
      conditions: [
        { title: "Parvoviral Enteritis", text: "Supportive application protocols" },
        { title: "Infectious Processes", text: "General supportive approaches" },
      ],
    },
  },

  onkoloji: {
    tr: {
      titleLines: ["Onkolojide", "Destekleyici Ozon"],
      accentLine: "Destekleyici Ozon",
      script: "Yanınızdayız",
      lead: "Onkolojik tedavilere eşlik eden integratif yaklaşım.",
      body: "Onkoloji vakalarında medikal ozon; genel durumun ve yaşam kalitesinin desteklenmesi amacıyla, onkolojik tedavi planına eşlik eden integratif bir yaklaşım olarak değerlendirilmektedir.",
      image: ASSETS.species.dogcat,
      conditions: [
        { title: "İntegratif Uygulamalar", text: "Onkolojik tedaviye eşlik eden protokoller" },
        { title: "Genel Durum Desteği", text: "Yaşam kalitesinin desteklenmesi" },
      ],
    },
    en: {
      titleLines: ["Supportive Ozone in", "Oncology"],
      accentLine: "Oncology",
      script: "We're With You",
      lead: "An integrative approach alongside oncological treatment.",
      body: "In oncology cases, medical ozone is evaluated as an integrative approach accompanying the oncological treatment plan, with the aim of supporting general condition and quality of life.",
      image: ASSETS.species.dogcat,
      conditions: [
        { title: "Integrative Applications", text: "Protocols accompanying oncological treatment" },
        { title: "General Condition Support", text: "Supporting quality of life" },
      ],
    },
  },

  "yogun-bakim": {
    tr: {
      titleLines: ["Yoğun Bakımda", "Ozon Tedavisi"],
      accentLine: "Ozon Tedavisi",
      script: "Kritik Saatler",
      lead: "Kritik hastada destekleyici uygulamalar.",
      body: "Yoğun bakım süreçlerinde medikal ozon; hastanın genel durumuna göre, yoğun bakım protokollerine destek olarak değerlendirilmektedir.",
      image: ASSETS.species.dogcat,
      conditions: [
        { title: "Destekleyici Uygulamalar", text: "Yoğun bakım protokollerine eşlik eden kullanım" },
        { title: "Klinik Takip", text: "Genel duruma göre planlanan uygulamalar" },
      ],
    },
    en: {
      titleLines: ["Ozone Therapy in", "Intensive Care"],
      accentLine: "Intensive Care",
      script: "Critical Hours",
      lead: "Supportive applications in the critical patient.",
      body: "During intensive care, medical ozone is evaluated as a support to intensive care protocols, according to the patient's general condition.",
      image: ASSETS.species.dogcat,
      conditions: [
        { title: "Supportive Applications", text: "Use alongside intensive care protocols" },
        { title: "Clinical Follow-Up", text: "Applications planned around general condition" },
      ],
    },
  },

  "kronik-hastaliklar": {
    tr: {
      titleLines: ["Kronik Hastalıklarda", "Ozon Tedavisi"],
      accentLine: "Ozon Tedavisi",
      script: "Uzun Soluklu Bakım",
      lead: "Uzun süreli takip gerektiren vakalarda destek.",
      body: "Kronik hastalıkların yönetiminde medikal ozon; uzun süreli takip gerektiren vakalarda, mevcut tedavi planına destekleyici olarak değerlendirilmektedir.",
      image: ASSETS.species.dogcat,
      conditions: [
        { title: "Kronik Süreçler", text: "Uzun süreli takip gerektiren tablolar" },
        { title: "Geriatrik Hastalar", text: "Hassas hasta gruplarında planlı uygulamalar" },
      ],
    },
    en: {
      titleLines: ["Ozone Therapy in", "Chronic Conditions"],
      accentLine: "Chronic Conditions",
      script: "Long-Term Care",
      lead: "Support in cases that require long-term follow-up.",
      body: "In the management of chronic conditions, medical ozone is evaluated as a support to the existing treatment plan in cases requiring long-term follow-up.",
      image: ASSETS.species.dogcat,
      conditions: [
        { title: "Chronic Processes", text: "Presentations requiring long-term follow-up" },
        { title: "Geriatric Patients", text: "Planned applications in sensitive patient groups" },
      ],
    },
  },

  mastitis: {
    tr: {
      titleLines: ["Mastitiste", "Ozon Tedavisi"],
      accentLine: "Ozon Tedavisi",
      script: "Sağlıklı Meme",
      lead: "Meme sağlığında lokal ve sistemik uygulamalar.",
      body: "Klinik ve subklinik mastitis vakalarında medikal ozon; intramammar ve lokal uygulamalarla, sürü sağlığı yönetimine destek olarak değerlendirilmektedir.",
      image: ASSETS.species.cattle,
      conditions: [
        { title: "Klinik Mastitis", text: "Belirti veren meme iltihabı vakaları" },
        { title: "Subklinik Mastitis", text: "Takip ile saptanan, belirti vermeyen vakalar" },
        { title: "İnflamatuvar Süreçler", text: "Meme dokusunda inflamasyon" },
      ],
    },
    en: {
      titleLines: ["Ozone Therapy in", "Mastitis"],
      accentLine: "Mastitis",
      script: "Healthy Udders",
      lead: "Local and systemic applications in udder health.",
      body: "In clinical and subclinical mastitis, medical ozone is evaluated as a support to herd health management through intramammary and local applications.",
      image: ASSETS.species.cattle,
      conditions: [
        { title: "Clinical Mastitis", text: "Symptomatic cases of udder inflammation" },
        { title: "Subclinical Mastitis", text: "Asymptomatic cases identified through monitoring" },
        { title: "Inflammatory Processes", text: "Inflammation in udder tissue" },
      ],
    },
  },

  "buzagi-hastaliklari": {
    tr: {
      titleLines: ["Buzağı Hastalıklarında", "Ozon Tedavisi"],
      accentLine: "Ozon Tedavisi",
      script: "Güçlü Başlangıç",
      lead: "Neonatal dönemde destekleyici uygulamalar.",
      body: "Neonatal buzağı ishalleri başta olmak üzere buzağı hastalıklarında medikal ozon; rektal ve sistemik uygulamalarla, standart tedaviye destek olarak değerlendirilmektedir.",
      image: ASSETS.species.cattle,
      conditions: [
        { title: "Neonatal İshaller", text: "Buzağı ishallerinde destekleyici uygulama" },
        { title: "Sistemik Destek", text: "Genel durumun desteklenmesi" },
      ],
    },
    en: {
      titleLines: ["Ozone Therapy in", "Calf Diseases"],
      accentLine: "Calf Diseases",
      script: "A Strong Start",
      lead: "Supportive applications in the neonatal period.",
      body: "In calf diseases, neonatal calf diarrhea in particular, medical ozone is evaluated as a support to standard treatment through rectal and systemic applications.",
      image: ASSETS.species.cattle,
      conditions: [
        { title: "Neonatal Diarrhea", text: "Supportive application in calf diarrhea" },
        { title: "Systemic Support", text: "Supporting general condition" },
      ],
    },
  },

  "neonatal-sepsis": {
    tr: {
      titleLines: ["Neonatal Sepsiste", "Ozon Tedavisi"],
      accentLine: "Ozon Tedavisi",
      script: "İlk Günler",
      lead: "Yenidoğan döneminde destekleyici yaklaşım.",
      body: "Neonatal sepsis vakalarında medikal ozon; yoğun destekleyici bakım ve hekimin belirlediği tedavi planına eşlik eden bir uygulama olarak değerlendirilmektedir.",
      image: ASSETS.species.cattle,
      conditions: [
        { title: "Destekleyici Uygulamalar", text: "Tedavi planına eşlik eden protokoller" },
        { title: "Yenidoğan Takibi", text: "Kritik dönemde klinik izlem" },
      ],
    },
    en: {
      titleLines: ["Ozone Therapy in", "Neonatal Sepsis"],
      accentLine: "Neonatal Sepsis",
      script: "The First Days",
      lead: "A supportive approach in the neonatal period.",
      body: "In neonatal sepsis, medical ozone is evaluated as an application accompanying intensive supportive care and the treatment plan set by the veterinarian.",
      image: ASSETS.species.cattle,
      conditions: [
        { title: "Supportive Applications", text: "Protocols accompanying the treatment plan" },
        { title: "Neonatal Follow-Up", text: "Clinical monitoring during the critical period" },
      ],
    },
  },

  "yara-ayak": {
    tr: {
      titleLines: ["Yara ve Ayak Sağlığında", "Ozon Tedavisi"],
      accentLine: "Ozon Tedavisi",
      script: "Sağlam Adımlar",
      lead: "Saha koşullarında pratik lokal uygulamalar.",
      body: "Ayak lezyonları ve yara vakalarında medikal ozon; ozonlu su, ozonlu yağ ve torbalama gibi lokal yöntemlerle saha koşullarında değerlendirilmektedir.",
      image: ASSETS.species.cattle,
      conditions: [
        { title: "Ayak Lezyonları", text: "Tırnak ve ayak kaynaklı lezyonlar" },
        { title: "Enfekte Lezyonlar", text: "Bakteriyel yük taşıyan bölgeler" },
        { title: "Travmatik Yaralar", text: "Saha koşullarında oluşan yaralar" },
        { title: "Lokal Uygulamalar", text: "Torbalama ve yıkama yöntemleri" },
      ],
    },
    en: {
      titleLines: ["Ozone Therapy in", "Wound and Hoof Health"],
      accentLine: "Wound and Hoof Health",
      script: "Steady Steps",
      lead: "Practical local applications under field conditions.",
      body: "In hoof lesions and wound cases, medical ozone is evaluated under field conditions through local methods such as ozonated water, ozonated oil and bagging.",
      image: ASSETS.species.cattle,
      conditions: [
        { title: "Hoof Lesions", text: "Lesions of the hoof and foot" },
        { title: "Infected Lesions", text: "Areas carrying a bacterial load" },
        { title: "Traumatic Wounds", text: "Wounds arising under field conditions" },
        { title: "Local Applications", text: "Bagging and irrigation methods" },
      ],
    },
  },

  "ureme-sistemi": {
    tr: {
      titleLines: ["Üreme Sisteminde", "Ozon Tedavisi"],
      accentLine: "Ozon Tedavisi",
      script: "Sürü Verimliliği",
      lead: "Reprodüktif sağlıkta lokal destek.",
      body: "Endometritis ve uterin enfeksiyonlarda medikal ozon; intrauterin ve lokal uygulamalarla, postpartum dönem yönetimine destek olarak değerlendirilmektedir.",
      image: ASSETS.species.cattle,
      conditions: [
        { title: "Endometritis", text: "Uterus iç zarı inflamasyonu" },
        { title: "Uterin Enfeksiyonlar", text: "Postpartum dönem enfeksiyonları" },
        { title: "Postpartum Destek", text: "Doğum sonrası reprodüktif takip" },
      ],
    },
    en: {
      titleLines: ["Ozone Therapy in", "The Reproductive System"],
      accentLine: "The Reproductive System",
      script: "Herd Productivity",
      lead: "Local support in reproductive health.",
      body: "In endometritis and uterine infections, medical ozone is evaluated as a support to postpartum management through intrauterine and local applications.",
      image: ASSETS.species.cattle,
      conditions: [
        { title: "Endometritis", text: "Inflammation of the uterine lining" },
        { title: "Uterine Infections", text: "Infections in the postpartum period" },
        { title: "Postpartum Support", text: "Reproductive follow-up after calving" },
      ],
    },
  },
};
