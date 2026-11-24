import { ASSETS } from "../content";

// Üç cihaz, her biri kendi sayfasıyla. Değerler kaldırılan karşılaştırma
// tablosundan geliyor; artık yan yana değil, cihaz cihaz okunuyor.
//
// Gövde fotoğrafları: altın olan düz Vetozone, mavi olan Plus.
export const DEVICE_SLUGS = ["vetozone", "vetozone-plus", "vetozone-mobil"];

export const DEVICES = {
  tr: {
    overline: "Cihazlar",
    title: "Üç Vetozone, üç kullanım biçimi.",
    sub: "Klinik içi kullanımdan sahaya; cihazı seçin, teknik verilerini görün.",
    cta: "Özellikleri İncele",
    specsTitle: "Teknik Özellikler",
    highlightsTitle: "Öne Çıkanlar",
    otherTitle: "Diğer modeller",
    quote: "Fiyat Teklifi Al",
    items: [
      {
        slug: "vetozone",
        name: "Vetozone",
        tagline: "Klinik içi uygulamalar için temel model.",
        image: ASSETS.deviceSpecs,
        text: "Sehpalı gövdesi ve 0,1 – 50 µg/ml doz aralığıyla kliniğinizde günlük ozon uygulamalarının tamamını karşılar.",
        highlights: ["Sehpalı gövde", "0,1 – 50 µg/ml doz aralığı", "Tüm ozon protokolleri"],
        specs: [
          ["Kullanım yeri", "Klinik"],
          ["Gövde tasarımı", "Sehpalı"],
          ["Doz aralığı", "0,1 – 50 µg/ml"],
          ["Ayarlanabilir vakum", "150 – 800 mBar"],
          ["Medikal oksijenle üretim", "Var"],
          ["Çift katalizatör", "Var"],
          ["Tüm ozon protokolleri", "Var"],
          ["İdeal kullanım", "Klinik içi uygulamalar"],
        ],
      },
      {
        slug: "vetozone-plus",
        name: "Vetozone Plus",
        tagline: "Yoğun klinik kullanımı için geniş doz aralığı.",
        image: ASSETS.deviceHero,
        text: "0,1 – 80 µg/ml doz aralığı ve 5 litrelik oksijen tüpünü içine alan özel sehpasıyla gün boyu kesintisiz çalışmaya göre tasarlandı.",
        highlights: ["0,1 – 80 µg/ml doz aralığı", "5 L tüp bölmeli özel sehpa", "Yoğun kullanıma uygun"],
        specs: [
          ["Kullanım yeri", "Klinik / yoğun kullanım"],
          ["Gövde tasarımı", "Özel sehpa + 5 L tüp bölmesi"],
          ["Doz aralığı", "0,1 – 80 µg/ml"],
          ["Ayarlanabilir vakum", "150 – 800 mBar"],
          ["Medikal oksijenle üretim", "Var"],
          ["Çift katalizatör", "Var"],
          ["Tüm ozon protokolleri", "Var"],
          ["İdeal kullanım", "Yoğun klinik kullanımı"],
        ],
      },
      {
        slug: "vetozone-mobil",
        name: "Vetozone Mobil",
        tagline: "Sahaya çıkan hekim için taşınabilir valiz modeli.",
        image: ASSETS.deviceMobile,
        text: "Dayanıklı valiz gövdesi, tekerlekleri ve teleskopik koluyla cihazı kliniğin dışına, hastanın yanına taşır.",
        highlights: ["Tekerlekli taşıma valizi", "Teleskopik kol", "Gezici veteriner ve büyükbaş"],
        specs: [
          ["Kullanım yeri", "Saha & mobil"],
          ["Gövde tasarımı", "Taşıma valizi"],
          ["Doz aralığı", "0,1 – 50 µg/ml"],
          ["Ayarlanabilir vakum", "150 – 800 mBar"],
          ["Medikal oksijenle üretim", "Var"],
          ["Çift katalizatör", "Var"],
          ["Tüm ozon protokolleri", "Var"],
          ["İdeal kullanım", "Gezici veteriner / büyükbaş"],
        ],
      },
    ],
  },

  en: {
    overline: "Devices",
    title: "Three Vetozone models, three ways of working.",
    sub: "From in-clinic use to the field: choose a device and see its technical data.",
    cta: "See Specifications",
    specsTitle: "Technical Specifications",
    highlightsTitle: "Highlights",
    otherTitle: "Other models",
    quote: "Get a Quote",
    items: [
      {
        slug: "vetozone",
        name: "Vetozone",
        tagline: "The base model for in-clinic applications.",
        image: ASSETS.deviceSpecs,
        text: "With its stand-mounted body and a dose range of 0.1 – 50 µg/ml, it covers the whole of your clinic's daily ozone work.",
        highlights: ["Stand-mounted body", "0.1 – 50 µg/ml dose range", "All ozone protocols"],
        specs: [
          ["Place of use", "Clinic"],
          ["Body design", "Stand-mounted"],
          ["Dose range", "0.1 – 50 µg/ml"],
          ["Adjustable vacuum", "150 – 800 mBar"],
          ["Production with medical oxygen", "Yes"],
          ["Dual catalyst", "Yes"],
          ["All ozone protocols", "Yes"],
          ["Ideal use", "In-clinic applications"],
        ],
      },
      {
        slug: "vetozone-plus",
        name: "Vetozone Plus",
        tagline: "A wider dose range for intensive clinical use.",
        image: ASSETS.deviceHero,
        text: "A dose range of 0.1 – 80 µg/ml and a purpose-built stand that houses a 5-litre oxygen cylinder, designed for working without interruption all day.",
        highlights: ["0.1 – 80 µg/ml dose range", "Stand with 5 L cylinder compartment", "Suited to intensive use"],
        specs: [
          ["Place of use", "Clinic / intensive use"],
          ["Body design", "Purpose-built stand + 5 L cylinder compartment"],
          ["Dose range", "0.1 – 80 µg/ml"],
          ["Adjustable vacuum", "150 – 800 mBar"],
          ["Production with medical oxygen", "Yes"],
          ["Dual catalyst", "Yes"],
          ["All ozone protocols", "Yes"],
          ["Ideal use", "Intensive clinical use"],
        ],
      },
      {
        slug: "vetozone-mobil",
        name: "Vetozone Mobile",
        tagline: "A portable case for the veterinarian who works in the field.",
        image: ASSETS.deviceMobile,
        text: "Its rugged case body, wheels and telescopic handle take the device beyond the clinic, to the patient.",
        highlights: ["Wheeled carrying case", "Telescopic handle", "Mobile practice and cattle"],
        specs: [
          ["Place of use", "Field & mobile"],
          ["Body design", "Carrying case"],
          ["Dose range", "0.1 – 50 µg/ml"],
          ["Adjustable vacuum", "150 – 800 mBar"],
          ["Production with medical oxygen", "Yes"],
          ["Dual catalyst", "Yes"],
          ["All ozone protocols", "Yes"],
          ["Ideal use", "Mobile practice / cattle"],
        ],
      },
    ],
  },
};

export const findDevice = (lang, slug) =>
  (DEVICES[lang] || DEVICES.tr).items.find((item) => item.slug === slug);
