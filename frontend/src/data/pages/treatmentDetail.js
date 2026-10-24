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
      intro: {
        lead: "Veteriner ozon uygulamaları, yara bakımı ve hasarlı dokuların onarımına yönelik tedavi süreçlerinde farklı yöntemlerle değerlendirilmektedir.",
        paragraphs: [
          "Uygulama seçimi, doku hasarının türüne ve hastanın klinik ihtiyaçlarına göre yapılır.",
        ],
        closing:
          "Bu alanlarda ozonlu su, ozonlu yağ, torbalama ve perilezyonel ozon infiltrasyonu gibi yöntemler kullanılmaktadır. Ozon uygulamaları, gerekli cerrahi müdahalelerin ve standart yara tedavisinin yerine değil, bunlara ek olarak değerlendirilir.",
      },
      conditions: [
        { title: "Travmatik Yaralar", text: "Isırık, kesik, sıyrık ve kazalara bağlı oluşan açık yaraların bakımında" },
        { title: "Cerrahi Yaralar", text: "Operasyon sonrası yara bakımında ve doku iyileşmesinin takip edildiği süreçlerde" },
        { title: "Kronik ve Geç İyileşen Yaralar", text: "Uzun süre kapanmayan, tekrarlayan bakım gerektiren ve doku kaybının eşlik ettiği yaralarda" },
        { title: "Enfekte Yaralar", text: "Enfeksiyon kontrolü, yara temizliği ve lokal bakımın birlikte yürütüldüğü tedavi süreçlerinde" },
        { title: "Ülseratif Lezyonlar ve Bası Yaraları", text: "Deri bütünlüğünün bozulduğu, derin doku hasarının gelişebildiği bölgelerde" },
        { title: "Doku Kaybı ve Rekonstrüktif Cerrahi", text: "Deri flepleri ve greftlerle gerçekleştirilen cerrahi onarımın öncesinde veya sonrasında" },
      ],
      methods: [
        { icon: Drop, image: ASSETS.methods.woundIrrigation, title: "Ozonlu Su", text: "Yara yüzeyinin temizlenmesi ve irrigasyonu" },
        { icon: Eyedropper, image: ASSETS.methods.oil, title: "Ozonlu Yağ", text: "Yara yüzeyine yönelik lokal bakım" },
        { icon: Syringe, image: ASSETS.methods.poi, title: "Ozon İnfiltrasyonu (POİ)", text: "Yara çevresindeki dokulara ozon gazı uygulaması" },
        { icon: Package, image: ASSETS.methods.baggingLimb, title: "Torbalama", text: "Yara bölgesinin kontrollü ozon gazı ortamında tutulması" },
        { icon: Syringe, image: ASSETS.methods.autohemotherapy, title: "Sistemik Uygulamalar", text: "Uygun vakalarda tamamlayıcı sistemik yaklaşımlar" },
      ],
    },
    en: {
      titleLines: ["Ozone Therapy in", "Wound Management"],
      accentLine: "Wound Management",
      script: "Better Healing",
      lead: "An additional option in slow-healing wounds.",
      body: "Medical ozone is evaluated in acute and chronic wound management through local and systemic methods, owing to its antimicrobial effects and potential effects on tissue healing.",
      image: ASSETS.species.dogcat,
      intro: {
        lead: "Veterinary ozone applications are considered through a range of methods in wound care and in the repair of damaged tissue.",
        paragraphs: [
          "The choice of application is made according to the type of tissue damage and the clinical needs of the patient.",
        ],
        closing:
          "Methods such as ozonated water, ozonated oil, bagging and perilesional ozone infiltration are used in these areas. Ozone applications are considered as an addition to necessary surgical intervention and standard wound treatment, not as a replacement for them.",
      },
      conditions: [
        { title: "Traumatic Wounds", text: "Care of open wounds from bites, cuts, abrasions and accidents" },
        { title: "Surgical Wounds", text: "Post-operative wound care and follow-up of tissue healing" },
        { title: "Chronic and Slow-Healing Wounds", text: "Wounds that stay open, need repeated care, or come with tissue loss" },
        { title: "Infected Wounds", text: "Treatment combining infection control, wound cleansing and local care" },
        { title: "Ulcerative Lesions and Pressure Sores", text: "Areas where skin integrity is lost and deep tissue damage can develop" },
        { title: "Tissue Loss and Reconstructive Surgery", text: "Before or after surgical repair with skin flaps and grafts" },
      ],
      methods: [
        { icon: Drop, image: ASSETS.methods.woundIrrigation, title: "Ozonated Water", text: "Cleansing and irrigation of the wound surface" },
        { icon: Eyedropper, image: ASSETS.methods.oil, title: "Ozonated Oil", text: "Local care applied to the wound surface" },
        { icon: Syringe, image: ASSETS.methods.poi, title: "Ozone Infiltration (POI)", text: "Ozone gas applied to the tissue around the wound" },
        { icon: Package, image: ASSETS.methods.baggingLimb, title: "Bagging", text: "Holding the wound area in a controlled ozone gas environment" },
        { icon: Syringe, image: ASSETS.methods.autohemotherapy, title: "Systemic Applications", text: "Complementary systemic approaches in suitable cases" },
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
      intro: {
        lead: "Veteriner ozon tedavisi, dış kulak yolu hastalıklarında enfeksiyon kontrolünü ve lokal bakımı destekleyen tamamlayıcı uygulamalar arasında yer alır.",
        paragraphs: [
          "Özellikle bakteriyel enfeksiyonların eşlik ettiği otitis vakalarında, kulak temizliği ve hastalığın nedenine yönelik tedaviyle birlikte kullanılır.",
        ],
        closing:
          "Uygulama yöntemi; kulak kanalının durumu, kulak zarı bütünlüğü ve enfeksiyonun özellikleri değerlendirilerek belirlenir.",
      },
      conditions: [
        { title: "Otitis Eksterna (Dış Kulak Yolu İltihabı)", text: "Bakteriyel enfeksiyonların eşlik ettiği dış kulak yolu iltihaplarında lokal ozon uygulamaları" },
        { title: "Kronik Otitis", text: "Uzun süreli inflamasyon, akıntı ve kulak kanalında değişikliklerle seyreden vakalarda tamamlayıcı bakım" },
        { title: "Tekrarlayan Kulak Enfeksiyonları", text: "Nükseden otitis vakalarında, altta yatan nedenin tedavisiyle birlikte lokal ozon uygulamaları" },
        { title: "Bakteriyel Kulak Enfeksiyonları", text: "Bakteriyel yükün azaltılmasına yönelik kulak temizliği ve antimikrobiyal tedavi süreçlerinde destekleyici uygulamalar" },
        { title: "Kulak Kepçesi Lezyonları", text: "Yüzeysel yaralar, tahriş ve deri bütünlüğünün bozulduğu alanlarda ozonlu su ve ozonlu yağ ile lokal bakım" },
      ],
      methods: [
        { icon: Sparkle, image: ASSETS.methods.earGas, title: "Ozon Gazı Uygulaması", text: "Dış kulak yoluna kontrollü lokal ozon uygulaması" },
        { icon: Drop, image: ASSETS.methods.earWater, title: "Ozonlu Su", text: "Dış kulak yolunun temizlenmesi ve irrigasyonu" },
        { icon: Eyedropper, image: ASSETS.methods.earOil, title: "Ozonlu Yağ", text: "Kulak kepçesi ve dış kulak girişinde lokal bakım" },
        { icon: Syringe, image: ASSETS.methods.autohemotherapy, title: "Sistemik Uygulamalar", text: "Uygun vakalarda tamamlayıcı sistemik yaklaşımlar" },
      ],
    },
    en: {
      titleLines: ["Ozone Therapy in", "Ear Conditions"],
      accentLine: "Ear Conditions",
      script: "Comfortable Ears",
      lead: "A supportive approach in recurrent otitis cases.",
      body: "In conditions of the external ear canal, medical ozone is evaluated as a support to existing treatment through ozonated oil and local application methods.",
      image: ASSETS.species.dogcat,
      intro: {
        lead: "Veterinary ozone therapy is among the complementary applications that support infection control and local care in conditions of the external ear canal.",
        paragraphs: [
          "It is used above all in otitis cases accompanied by bacterial infection, alongside ear cleansing and treatment directed at the underlying cause.",
        ],
        closing:
          "The method of application is decided by assessing the state of the ear canal, the integrity of the eardrum and the characteristics of the infection.",
      },
      conditions: [
        { title: "Otitis Externa (External Ear Canal Inflammation)", text: "Local ozone applications in inflammation of the external ear canal accompanied by bacterial infection" },
        { title: "Chronic Otitis", text: "Complementary care in cases with long-standing inflammation, discharge and changes in the ear canal" },
        { title: "Recurrent Ear Infections", text: "Local ozone applications in relapsing otitis, alongside treatment of the underlying cause" },
        { title: "Bacterial Ear Infections", text: "Supportive applications during ear cleansing and antimicrobial treatment aimed at reducing bacterial load" },
        { title: "Pinna Lesions", text: "Local care with ozonated water and ozonated oil on superficial wounds, irritation and areas where skin integrity is lost" },
      ],
      methods: [
        { icon: Sparkle, image: ASSETS.methods.earGas, title: "Ozone Gas Application", text: "Controlled local ozone application into the external ear canal" },
        { icon: Drop, image: ASSETS.methods.earWater, title: "Ozonated Water", text: "Cleansing and irrigation of the external ear canal" },
        { icon: Eyedropper, image: ASSETS.methods.earOil, title: "Ozonated Oil", text: "Local care on the pinna and at the entrance of the ear canal" },
        { icon: Syringe, image: ASSETS.methods.autohemotherapy, title: "Systemic Applications", text: "Complementary systemic approaches in suitable cases" },
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
      intro: {
        lead: "Veteriner ozon tedavisi; diş eti hastalıkları, ağız içi lezyonlar ve periodontal bakımda tamamlayıcı olarak kullanılır.",
        paragraphs: [
          "Ozonlu su, ozonlu yağ ve diş eti çevresindeki dokulara lokal ozon gazı infiltrasyonu başlıca uygulama yöntemleridir.",
        ],
        closing:
          "Uygulamalar, veteriner hekimin muayenesi doğrultusunda gerekli diş hekimliği ve medikal tedavilerle birlikte yürütülür.",
      },
      conditions: [
        { title: "Gingivitis (Diş Eti İltihabı)", text: "Diş eti inflamasyonunda lokal ozon gazı infiltrasyonu ve ozonlu su uygulamaları" },
        { title: "Periodontal Hastalıklar", text: "Diş taşı temizliği ve periodontal tedaviye ek olarak ozonlu su ve lokal ozon gazı uygulamaları" },
        { title: "Stomatitis", text: "Ağız mukozasındaki inflamasyon ve lezyonlarda ozonlu su ve ozonlu yağ ile lokal bakım" },
        { title: "Oral Papillomatozis", text: "Ağız içi papillomların çevresindeki mukozanın temizliği ve bakımında tamamlayıcı uygulamalar" },
        { title: "Ağız İçi Ülserler", text: "Mukozal yaraların temizliği ve lokal bakımında ozonlu su ve ozonlu yağ uygulamaları" },
        { title: "Diş Çekimi ve Oral Cerrahi", text: "Cerrahi sonrası yara bakımında lokal ozon uygulamaları" },
      ],
      methods: [
        { icon: Syringe, image: ASSETS.methods.oralInfiltration, title: "Lokal Ozon Gazı İnfiltrasyonu", text: "Diş eti çevresindeki dokulara ozon gazı uygulaması" },
        { icon: Drop, image: ASSETS.methods.oralWater, title: "Ozonlu Su", text: "Ağız içi temizlik ve irrigasyon uygulamaları" },
        { icon: Eyedropper, image: ASSETS.methods.oralOil, title: "Ozonlu Yağ", text: "Mukozal lezyonlarda lokal bakım" },
      ],
    },
    en: {
      titleLines: ["Ozone Therapy in", "Oral and Dental Health"],
      accentLine: "Oral and Dental Health",
      script: "A Healthy Mouth",
      lead: "An additional tool in supporting the oral mucosa.",
      body: "In gingivitis, stomatitis and periodontal problems, medical ozone is evaluated as a support to dental practice through ozonated water and local applications.",
      image: ASSETS.species.dogcat,
      intro: {
        lead: "Veterinary ozone therapy is used as a complement in gum disease, intraoral lesions and periodontal care.",
        paragraphs: [
          "Ozonated water, ozonated oil and local ozone gas infiltration into the tissue around the gums are the principal methods of application.",
        ],
        closing:
          "Applications are carried out in line with the veterinarian's examination, alongside the dental and medical treatment the case requires.",
      },
      conditions: [
        { title: "Gingivitis (Inflammation of the Gums)", text: "Local ozone gas infiltration and ozonated water applications in gum inflammation" },
        { title: "Periodontal Disease", text: "Ozonated water and local ozone gas applications in addition to scaling and periodontal treatment" },
        { title: "Stomatitis", text: "Local care with ozonated water and ozonated oil in inflammation and lesions of the oral mucosa" },
        { title: "Oral Papillomatosis", text: "Complementary applications in cleansing and caring for the mucosa around intraoral papillomas" },
        { title: "Intraoral Ulcers", text: "Ozonated water and ozonated oil applications in cleansing and local care of mucosal wounds" },
        { title: "Tooth Extraction and Oral Surgery", text: "Local ozone applications in post-operative wound care" },
      ],
      methods: [
        { icon: Syringe, image: ASSETS.methods.oralInfiltration, title: "Local Ozone Gas Infiltration", text: "Ozone gas applied to the tissue around the gums" },
        { icon: Drop, image: ASSETS.methods.oralWater, title: "Ozonated Water", text: "Intraoral cleansing and irrigation" },
        { icon: Eyedropper, image: ASSETS.methods.oralOil, title: "Ozonated Oil", text: "Local care on mucosal lesions" },
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
      intro: {
        lead: "Veteriner ozon uygulamaları; böbrek hastalıkları, mesane problemleri ve idrar yolu enfeksiyonlarında standart tedaviyi tamamlayan yöntemler arasında yer alır.",
        paragraphs: [
          "Klinik uygulamalarda rektal ozon, ozonlanmış serum fizyolojik ve lokal uygulama yöntemleri kullanılır.",
        ],
        closing:
          "Uygulama yöntemi; hastanın böbrek fonksiyonları, idrar tahlili, enfeksiyon durumu ve klinik bulguları doğrultusunda veteriner hekim tarafından belirlenir.",
      },
      conditions: [
        { title: "Akut ve Kronik Böbrek Hastalıkları", text: "Böbrek fonksiyonlarının etkilendiği hastalarda, standart tedaviye ek olarak rektal ozon ve intravenöz ozonlanmış serum fizyolojik uygulamaları. Birlikte çalıştığımız veteriner kliniklerinden, bu uygulamaların ardından kreatinin ve üre değerlerinde olumlu değişimler görüldüğüne ilişkin geri bildirimler alıyoruz." },
        { title: "Sistit (Mesane İltihabı)", text: "Mesane mukozasında inflamasyonun görüldüğü vakalarda, hastalığın nedenine yönelik tedaviyle birlikte tamamlayıcı lokal uygulamalar" },
        { title: "Tekrarlayan İdrar Yolu Enfeksiyonları", text: "Bakteriyel enfeksiyonların tekrarladığı vakalarda, kültür ve antibiyogram sonuçlarına göre belirlenen tedaviye ek ozon uygulamaları" },
        { title: "Kronik Sistit", text: "Uzun süreli mesane inflamasyonunda, mesane mukozasına yönelik lokal bakım uygulamaları" },
        { title: "Mesane Mukozası Hasarları", text: "Mesane iç yüzeyinde irritasyon ve doku hasarının bulunduğu vakalarda, lokal bakım ve doku onarımına yönelik tamamlayıcı uygulamalar" },
      ],
      methods: [
        { icon: Sparkle, image: ASSETS.methods.rectal, title: "Rektal Ozon Uygulaması", text: "Böbrek hastalıklarında tamamlayıcı sistemik uygulama" },
        { icon: Drop, image: ASSETS.methods.ozonatedSaline, title: "Ozonlanmış Serum Fizyolojik", text: "İntravenöz uygulamayla sistemik destek" },
        { icon: Drop, title: "Mesane İrrigasyonu", text: "Mesane içinin ozonlanmış serum fizyolojik ile yıkanması" },
        { icon: Syringe, image: ASSETS.methods.majorAutohemotherapy, title: "Majör Otohemoterapi (MAH)", text: "Hastanın kanı üzerinden gerçekleştirilen sistemik ozon uygulaması" },
      ],
    },
    en: {
      titleLines: ["Ozone Therapy in", "The Urinary System"],
      accentLine: "The Urinary System",
      script: "Local Support",
      lead: "A supportive application in lower urinary tract cases.",
      body: "In cystitis and urinary tract infections, medical ozone is evaluated for local support through ozonated solutions.",
      image: ASSETS.species.dogcat,
      intro: {
        lead: "Veterinary ozone applications are among the methods that complement standard treatment in kidney disease, bladder problems and urinary tract infections.",
        paragraphs: [
          "In clinical practice, rectal ozone, ozonated saline and local application methods are used.",
        ],
        closing:
          "The method of application is decided by the veterinarian in line with the patient's kidney function, urinalysis, infection status and clinical findings.",
      },
      conditions: [
        { title: "Acute and Chronic Kidney Disease", text: "Rectal ozone and intravenous ozonated saline in addition to standard treatment in patients whose kidney function is affected. The veterinary clinics we work with report favourable changes in creatinine and urea values following these applications." },
        { title: "Cystitis (Inflammation of the Bladder)", text: "Complementary local applications alongside treatment directed at the underlying cause, in cases with inflammation of the bladder mucosa" },
        { title: "Recurrent Urinary Tract Infections", text: "Ozone applications in addition to the treatment determined by culture and antibiogram results, in cases where bacterial infection recurs" },
        { title: "Chronic Cystitis", text: "Local care directed at the bladder mucosa in long-standing bladder inflammation" },
        { title: "Damage to the Bladder Mucosa", text: "Complementary applications for local care and tissue repair in cases with irritation and tissue damage on the inner surface of the bladder" },
      ],
      methods: [
        { icon: Sparkle, image: ASSETS.methods.rectal, title: "Rectal Ozone Application", text: "Complementary systemic application in kidney disease" },
        { icon: Drop, image: ASSETS.methods.ozonatedSaline, title: "Ozonated Saline", text: "Systemic support by intravenous application" },
        { icon: Drop, title: "Bladder Irrigation", text: "Flushing the inside of the bladder with ozonated saline" },
        { icon: Syringe, image: ASSETS.methods.majorAutohemotherapy, title: "Major Autohemotherapy (MAH)", text: "Systemic ozone application carried out through the patient's own blood" },
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
      intro: {
        lead: "Osteoartrit; eklem kıkırdağı, kemik ve çevre dokuları etkileyen, ağrı ve hareket kısıtlılığına neden olan kronik bir eklem hastalığıdır.",
        paragraphs: [
          "Veteriner ozon uygulamaları, osteoartritli hastalarda ağrı yönetimi ve hareket konforunu desteklemek amacıyla mevcut tedavi programına eklenir.",
        ],
        closing:
          "Ozon uygulamaları; veteriner hekimin belirlediği ağrı tedavisi, kilo kontrolü, egzersiz düzenlemesi ve fiziksel rehabilitasyonla birlikte yürütülür.",
      },
      conditions: [
        { title: "Kalça Osteoartriti", text: "Kalça eklemindeki dejeneratif değişikliklere bağlı ağrı, tutukluk ve yürüme güçlüğünün yönetiminde" },
        { title: "Diz ve Dirsek Osteoartriti", text: "Eklem hareketlerinde zorlanma, yük verme güçlüğü ve kronik ağrının eşlik ettiği vakalarda" },
        { title: "Kronik Eklem Ağrısı", text: "Uzun süreli ağrı ve hassasiyetin kontrolüne yönelik tamamlayıcı uygulamalarda" },
        { title: "Hareket Kısıtlılığı", text: "Ayağa kalkma, yürüme, merdiven çıkma ve günlük aktivitelerde zorlanan hastaların tedavi programlarında" },
        { title: "Yaşa Bağlı Dejeneratif Eklem Problemleri", text: "İleri yaştaki hastalarda eklem sertliği ve hareket güçlüğünün yönetiminde" },
      ],
      methods: [
        { icon: Syringe, image: ASSETS.methods.intraarticular, title: "Eklem İçi Ozon", text: "Eklem boşluğuna yönelik intraartiküler ozon uygulaması" },
        { icon: Syringe, image: ASSETS.methods.periarticular, title: "Periartiküler Ozon", text: "Eklem çevresindeki dokulara lokal ozon gazı infiltrasyonu" },
        { icon: Sparkle, image: ASSETS.methods.rectal, title: "Rektal Ozon", text: "Rektal yolla gerçekleştirilen sistemik ozon uygulaması" },
        { icon: Syringe, image: ASSETS.methods.minorAutohemotherapy, title: "Minör Otohemoterapi (MiAH)", text: "Ozonlanan otolog kanın derin intramüsküler uygulanması" },
      ],
    },
    en: {
      titleLines: ["Ozone Therapy in", "Osteoarthritis"],
      accentLine: "Osteoarthritis",
      script: "Easier Movement",
      lead: "An option aimed at supporting joint comfort.",
      body: "In osteoarthritis and joint disease, medical ozone is evaluated within the framework of pain management and functional support through intra-articular and peri-articular applications.",
      image: ASSETS.species.horse,
      intro: {
        lead: "Osteoarthritis is a chronic joint disease that affects the joint cartilage, bone and surrounding tissue, causing pain and restricted movement.",
        paragraphs: [
          "Veterinary ozone applications are added to the existing treatment programme to support pain management and comfort of movement in patients with osteoarthritis.",
        ],
        closing:
          "Ozone applications are carried out alongside the pain treatment, weight control, exercise regime and physical rehabilitation set out by the veterinarian.",
      },
      conditions: [
        { title: "Hip Osteoarthritis", text: "In managing pain, stiffness and difficulty walking caused by degenerative change in the hip joint" },
        { title: "Stifle and Elbow Osteoarthritis", text: "In cases with difficulty moving the joint, difficulty bearing weight and accompanying chronic pain" },
        { title: "Chronic Joint Pain", text: "In complementary applications aimed at controlling long-standing pain and tenderness" },
        { title: "Restricted Movement", text: "In treatment programmes for patients who struggle to stand, walk, climb stairs and carry out daily activities" },
        { title: "Age-Related Degenerative Joint Problems", text: "In managing joint stiffness and difficulty moving in older patients" },
      ],
      methods: [
        { icon: Syringe, image: ASSETS.methods.intraarticular, title: "Intra-Articular Ozone", text: "Intra-articular ozone application into the joint space" },
        { icon: Syringe, image: ASSETS.methods.periarticular, title: "Peri-Articular Ozone", text: "Local ozone gas infiltration into the tissue around the joint" },
        { icon: Sparkle, image: ASSETS.methods.rectal, title: "Rectal Ozone", text: "Systemic ozone application carried out by the rectal route" },
        { icon: Syringe, image: ASSETS.methods.minorAutohemotherapy, title: "Minor Autohemotherapy (MiAH)", text: "Deep intramuscular application of ozonated autologous blood" },
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
      intro: {
        lead: "İntervertebral disk hastalığı (IVDD), omurlar arasındaki disklerin yapısal değişiklikleri sonucunda ağrı, hareket güçlüğü ve nörolojik problemlere neden olabilen bir omurga hastalığıdır.",
        paragraphs: [
          "Veteriner ozon uygulamaları; özellikle kronik disk protrüzyonu bulunan hastalarda ağrı yönetimini, hareket konforunu ve rehabilitasyon sürecini desteklemek amacıyla mevcut tedavi programına eklenir.",
        ],
        closing:
          "Ozon uygulamaları; hastanın nörolojik muayenesi, görüntüleme bulguları ve mevcut tedavi planı değerlendirilerek veteriner hekim tarafından belirlenir.",
      },
      conditions: [
        { title: "Kronik Disk Protrüzyonu (Hansen Tip II)", text: "Omurlar arasındaki diskin omurilik kanalına doğru çıkıntı oluşturduğu kronik vakalarda tamamlayıcı ozon uygulamaları" },
        { title: "Boyun ve Sırt Ağrıları", text: "Servikal ve torakolomber bölgelerde görülen ağrı, hassasiyet ve hareket güçlüğünün yönetiminde" },
        { title: "Geriatrik Hastalarda Omurga Problemleri", text: "İleri yaş köpeklerde kronik disk dejenerasyonu, omurga ağrısı ve hareket kısıtlılığının yönetiminde; yaşam kalitesini ve günlük hareket konforunu destekleyen tamamlayıcı uygulamalar" },
        { title: "Omurga Kaynaklı Hareket Kısıtlılığı", text: "Ayağa kalkma, yürüme, dönme ve günlük hareketlerde zorlanan hastaların destekleyici tedavi programlarında" },
        { title: "Paravertebral Kas Gerginliği", text: "Omurga çevresindeki kaslarda ağrıya eşlik eden gerginlik ve hassasiyetin bulunduğu vakalarda lokal uygulamalar" },
        { title: "Kronik Nörolojik Bulgular", text: "Disk hastalığına bağlı koordinasyon ve hareket problemleri bulunan hastaların medikal tedavi ve rehabilitasyon süreçlerinde" },
        { title: "Rehabilitasyon ve İyileşme Dönemi", text: "Veteriner hekimin uygun gördüğü hastalarda ağrı kontrolü ve hareket fonksiyonlarının desteklenmesine yönelik tamamlayıcı uygulamalar" },
      ],
      methods: [
        { icon: Syringe, image: ASSETS.methods.paravertebral, title: "Paravertebral Ozon İnfiltrasyonu", text: "Omurganın iki yanındaki kas dokusuna lokal ozon gazı uygulaması" },
        { icon: Sparkle, image: ASSETS.methods.rectal, title: "Rektal Ozon", text: "Rektal yolla gerçekleştirilen sistemik ozon uygulaması" },
        { icon: Syringe, image: ASSETS.methods.subcutaneous, title: "Subkutan Ozon İnfiltrasyonu", text: "Omurga çevresindeki deri altı dokulara lokal ozon gazı uygulaması" },
      ],
    },
    en: {
      titleLines: ["Ozone Therapy in", "IVDD and the Spine"],
      accentLine: "IVDD and the Spine",
      script: "Support for Movement",
      lead: "Applications that accompany the neurological rehabilitation process.",
      body: "In IVDD and spine-related neurological presentations, medical ozone is evaluated as a support to rehabilitation protocols through paravertebral and systemic applications.",
      image: ASSETS.species.dogcat,
      intro: {
        lead: "Intervertebral disc disease (IVDD) is a condition of the spine in which structural changes in the discs between the vertebrae can cause pain, difficulty moving and neurological problems.",
        paragraphs: [
          "Veterinary ozone applications are added to the existing treatment programme to support pain management, comfort of movement and the rehabilitation process, above all in patients with chronic disc protrusion.",
        ],
        closing:
          "Ozone applications are decided by the veterinarian after assessing the patient's neurological examination, imaging findings and current treatment plan.",
      },
      conditions: [
        { title: "Chronic Disc Protrusion (Hansen Type II)", text: "Complementary ozone applications in chronic cases where the disc protrudes towards the spinal canal" },
        { title: "Neck and Back Pain", text: "In managing pain, tenderness and difficulty moving in the cervical and thoracolumbar regions" },
        { title: "Spinal Problems in Geriatric Patients", text: "In managing chronic disc degeneration, spinal pain and restricted movement in older dogs; complementary applications supporting quality of life and everyday comfort of movement" },
        { title: "Restricted Movement of Spinal Origin", text: "In supportive treatment programmes for patients who struggle to stand, walk, turn and carry out daily movements" },
        { title: "Paravertebral Muscle Tension", text: "Local applications in cases with tension and tenderness accompanying pain in the muscles around the spine" },
        { title: "Chronic Neurological Signs", text: "In the medical treatment and rehabilitation of patients with coordination and movement problems caused by disc disease" },
        { title: "Rehabilitation and Recovery", text: "Complementary applications for pain control and support of movement function in patients the veterinarian considers suitable" },
      ],
      methods: [
        { icon: Syringe, image: ASSETS.methods.paravertebral, title: "Paravertebral Ozone Infiltration", text: "Local ozone gas application into the muscle on either side of the spine" },
        { icon: Sparkle, image: ASSETS.methods.rectal, title: "Rectal Ozone", text: "Systemic ozone application carried out by the rectal route" },
        { icon: Syringe, image: ASSETS.methods.subcutaneous, title: "Subcutaneous Ozone Infiltration", text: "Local ozone gas application into the subcutaneous tissue around the spine" },
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
      intro: {
        lead: "Kas yaralanmalarında ağrı, spazm ve hareket kısıtlılığı tedavinin temel odaklarıdır.",
        paragraphs: [
          "Medikal ozon, hücresel antioksidan savunmayı ve inflamatuvar yanıtı düzenleyen biyolojik mekanizmaları üzerinden değerlendirilir. Veteriner klinik uygulamalarında kas kaynaklı ağrıların yönetimi ve hareket konforunun desteklenmesi amacıyla kullanılır.",
          "Tendon problemlerinde kolajen liflerinin organizasyonu ve dokunun yük taşıma kapasitesi, ligament yaralanmalarında ise bağ dokusunun bütünlüğü ve eklem stabilitesi ön plandadır. Medikal ozonun fibroblast aktivitesi, kolajen metabolizması ve inflamatuvar süreçlerle ilişkili etkileri, bu dokuların onarımına yönelik rejeneratif araştırmaların temelini oluşturur.",
          "Veteriner ozon uygulamaları; kas zorlanmaları, kronik tendinopatiler ve ligament yaralanmalarında ortopedik tedavi ve rehabilitasyon programlarının bir parçası olarak kullanılır. Ağrı yönetimi, hareket kabiliyetinin desteklenmesi ve fonksiyonel iyileşme, klinik uygulamaların başlıca hedefleridir.",
        ],
        closing:
          "Uygulama yöntemi, yaralanmanın türüne ve hastanın klinik durumuna göre veteriner hekim tarafından belirlenir.",
      },
      conditions: [
        { title: "Tendon Yaralanmaları", text: "Tendon kaynaklı hasar ve topallık" },
        { title: "Ligament Problemleri", text: "Bağ dokusu yaralanmaları" },
        { title: "Kas Problemleri", text: "Kas kaynaklı ağrı ve fonksiyon kaybı" },
        { title: "Rehabilitasyon", text: "Kas-iskelet sistemi rehabilitasyonu" },
      ],
      methodGroups: [
        {
          title: "Ana Uygulamalar",
          items: [
            { icon: Syringe, image: ASSETS.methods.paravertebral, title: "İntramüsküler Ozon İnfiltrasyonu", text: "Kas dokusuna yönelik lokal ozon gazı uygulaması. Kas yaralanmaları, spazmlar ve miyofasiyal ağrıların yönetiminde kullanılır" },
            { icon: Syringe, image: ASSETS.methods.periarticular, title: "Peritendinöz Ozon İnfiltrasyonu", text: "Tendon çevresindeki yumuşak dokulara lokal ozon gazı uygulaması. Tendinopati ve tendon çevresi ağrıların yönetiminde değerlendirilir" },
            { icon: Syringe, image: ASSETS.methods.periligamentous, title: "Periligamentöz Ozon İnfiltrasyonu", text: "Ligament çevresindeki dokulara lokal ozon gazı uygulaması. Bağ yaralanmalarında ortopedik tedavi ve rehabilitasyona eşlik eden tamamlayıcı yöntemdir" },
          ],
        },
        {
          title: "Tamamlayıcı Yöntemler",
          items: [
            { icon: Syringe, title: "Subkutan Ozon İnfiltrasyonu", text: "Etkilenen anatomik bölgenin deri altı dokularına lokal ozon gazı uygulaması" },
            { icon: Syringe, title: "Minör Otohemoterapi (MiAH)", text: "Hastadan alınan kanın ozonlanarak derin intramüsküler yolla uygulanması" },
            { icon: Sparkle, title: "Rektal Ozon Uygulaması", text: "Rektal yolla gerçekleştirilen sistemik ozon uygulaması" },
          ],
        },
      ],
    },
    en: {
      titleLines: ["Ozone Therapy in", "Muscle, Tendon and Ligament"],
      accentLine: "Muscle, Tendon and Ligament",
      script: "A Strong Return",
      lead: "A supportive approach in soft tissue injuries.",
      body: "In muscle, tendon and ligament problems, medical ozone is evaluated through local applications as support for the healing and rehabilitation process.",
      image: ASSETS.species.horse,
      intro: {
        lead: "In muscle injuries, pain, spasm and restricted movement are the central concerns of treatment.",
        paragraphs: [
          "Medical ozone is evaluated through the biological mechanisms by which it regulates cellular antioxidant defence and the inflammatory response. In veterinary clinical practice it is used to manage muscle-related pain and to support comfort of movement.",
          "In tendon problems, the organisation of the collagen fibres and the tissue's load-bearing capacity come to the fore; in ligament injuries, the integrity of the connective tissue and the stability of the joint. The effects of medical ozone on fibroblast activity, collagen metabolism and inflammatory processes form the basis of regenerative research into the repair of these tissues.",
          "Veterinary ozone applications are used as part of orthopaedic treatment and rehabilitation programmes in muscle strains, chronic tendinopathies and ligament injuries. Pain management, support for mobility and functional recovery are the principal aims of clinical practice.",
        ],
        closing:
          "The method of application is decided by the veterinarian according to the type of injury and the patient's clinical condition.",
      },
      conditions: [
        { title: "Tendon Injuries", text: "Tendon-related damage and lameness" },
        { title: "Ligament Problems", text: "Injuries to connective tissue" },
        { title: "Muscle Problems", text: "Muscle-related pain and loss of function" },
        { title: "Rehabilitation", text: "Musculoskeletal rehabilitation" },
      ],
      methodGroups: [
        {
          title: "Main Applications",
          items: [
            { icon: Syringe, image: ASSETS.methods.paravertebral, title: "Intramuscular Ozone Infiltration", text: "Local ozone gas application into the muscle tissue. Used in managing muscle injuries, spasm and myofascial pain" },
            { icon: Syringe, image: ASSETS.methods.periarticular, title: "Peritendinous Ozone Infiltration", text: "Local ozone gas application into the soft tissue around the tendon. Considered in managing tendinopathy and pain around the tendon" },
            { icon: Syringe, image: ASSETS.methods.periligamentous, title: "Periligamentous Ozone Infiltration", text: "Local ozone gas application into the tissue around the ligament. A complementary method accompanying orthopaedic treatment and rehabilitation in ligament injuries" },
          ],
        },
        {
          title: "Complementary Methods",
          items: [
            { icon: Syringe, title: "Subcutaneous Ozone Infiltration", text: "Local ozone gas application into the subcutaneous tissue of the affected anatomical region" },
            { icon: Syringe, title: "Minor Autohemotherapy (MiAH)", text: "Blood taken from the patient, ozonated and applied by the deep intramuscular route" },
            { icon: Sparkle, title: "Rectal Ozone Application", text: "Systemic ozone application carried out by the rectal route" },
          ],
        },
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
