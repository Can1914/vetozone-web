import { Stethoscope, Gauge, MapPin, Cube } from "@phosphor-icons/react";

export const DEVICES_CONTENT = {
  tr: {
    hero: {
      overline: "Cihazlar",
      title: "İhtiyacınıza uygun Vetozone modeli.",
      sub: "Klinik kullanımdan sahaya, yoğun kullanımdan büyükbaş uygulamalarına kadar üç farklı model.",
    },
    tiers: [
      {
        slug: "vetozone",
        icon: Stethoscope,
        title: "Vetozone",
        text: "Klinikler için tasarlanmış temel model.",
      },
      {
        slug: "vetozone-plus",
        icon: Gauge,
        title: "Vetozone Plus",
        text: "Yoğun kullanım için 4.3\" TFT ekranlı, tek encoder kontrollü üst seviye model.",
      },
      {
        slug: "vetozone-mobil",
        icon: MapPin,
        title: "Vetozone Mobil",
        text: "Saha ve büyükbaş uygulamaları için taşınabilir valiz model.",
      },
    ],
    techTitle: "Teknoloji",
    techIcon: Cube,
    techText: "Patentli cam tüpler, gelişmiş oksijen sistemi ve çift katalizatörlü güvenlik teknolojisiyle donatılmış, %100 yerli üretim cihazlar.",
  },
  en: {
    hero: {
      overline: "Devices",
      title: "The Vetozone model for your needs.",
      sub: "From clinic use to the field, from everyday use to intensive cattle applications — three distinct models.",
    },
    tiers: [
      {
        slug: "vetozone",
        icon: Stethoscope,
        title: "Vetozone",
        text: "The base model designed for clinics.",
      },
      {
        slug: "vetozone-plus",
        icon: Gauge,
        title: "Vetozone Plus",
        text: "A premium model with a 4.3\" TFT screen and single-encoder control, built for intensive use.",
      },
      {
        slug: "vetozone-mobil",
        icon: MapPin,
        title: "Vetozone Mobile",
        text: "A portable case model for field and cattle applications.",
      },
    ],
    techTitle: "Technology",
    techIcon: Cube,
    techText: "100% domestically manufactured devices equipped with patented glass tubes, an advanced oxygen system, and dual-catalyst safety technology.",
  },
};
