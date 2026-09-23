import { PawPrint, Bone, Virus, Cow } from "@phosphor-icons/react";
import { ASSETS } from "./content";

// Primary site navigation tree. Sub-item labels are fixed Turkish proper
// nouns (not translated, like REFERENCES) — they mirror the menu-tree
// reference the site structure is built from. Each child's `to` hash must
// match the matching content item's `slug` in `data/pages/*.js` / the `id`
// rendered on that page.
export const NAV_TREE = [
  {
    key: "treatmentAreas",
    to: "/tedavi-alanlari",
    // Rendered as a full-width mega menu instead of a single dropdown column.
    mega: [
      {
        slug: "kucuk-hayvan",
        title: "KÜÇÜK HAYVAN",
        desc: "Köpek ve kedilerde klinik uygulama alanları",
        icon: PawPrint,
        image: ASSETS.species.dogcat,
        items: [
          { label: "Dermatoloji", to: "/tedavi-alanlari/dermatoloji" },
          { label: "Yara ve Doku İyileşmesi", to: "/tedavi-alanlari/yara-ve-doku" },
          { label: "Kulak Hastalıkları", to: "/tedavi-alanlari/kulak-hastaliklari" },
          { label: "Ağız ve Diş Sağlığı", to: "/tedavi-alanlari/agiz-ve-dis" },
          { label: "Üriner Sistem", to: "/tedavi-alanlari/uriner-sistem" },
        ],
      },
      {
        slug: "ortopedi-noroloji",
        title: "ORTOPEDİ & NÖROLOJİ",
        desc: "Hareket sistemi ve nörolojik uygulamalar",
        icon: Bone,
        image: ASSETS.species.horse,
        items: [
          { label: "Osteoartrit", to: "/tedavi-alanlari/osteoartrit" },
          { label: "IVDD ve Omurga", to: "/tedavi-alanlari/ivdd-ve-omurga" },
          { label: "Kas - Tendon - Ligament", to: "/tedavi-alanlari/kas-tendon-ligament" },
          { label: "Rejeneratif Ortopedi", to: "/tedavi-alanlari/rejeneratif-ortopedi" },
        ],
      },
      {
        slug: "sistemik",
        title: "SİSTEMİK",
        desc: "Sistemik destek ve kompleks klinik tablolar",
        icon: Virus,
        image: ASSETS.gallery[0],
        items: [
          { label: "Enfeksiyon Hastalıkları", to: "/tedavi-alanlari/enfeksiyon-hastaliklari" },
          { label: "Onkoloji", to: "/tedavi-alanlari/onkoloji" },
          { label: "Yoğun Bakım", to: "/tedavi-alanlari/yogun-bakim" },
          { label: "Kronik Hastalıklar", to: "/tedavi-alanlari/kronik-hastaliklar" },
        ],
      },
      {
        slug: "buyukbas",
        title: "BÜYÜKBAŞ & KÜÇÜKBAŞ",
        desc: "Saha ve çiftlik hayvanlarında uygulama alanları",
        icon: Cow,
        image: ASSETS.species.cattle,
        items: [
          { label: "Mastitis", to: "/tedavi-alanlari/mastitis" },
          { label: "Buzağı Hastalıkları", to: "/tedavi-alanlari/buzagi-hastaliklari" },
          { label: "Neonatal Sepsis", to: "/tedavi-alanlari/neonatal-sepsis" },
          { label: "Yara & Ayak", to: "/tedavi-alanlari/yara-ayak" },
          { label: "Üreme Sistemi", to: "/tedavi-alanlari/ureme-sistemi" },
        ],
      },
    ],
    megaFooter: {
      title: "Tüm Tedavi Alanlarını Gör",
      desc: "Veteriner hekimlikte ozon tedavisinin tüm uygulama alanlarına ulaşın.",
      to: "/tedavi-alanlari",
    },
  },
  {
    key: "devices",
    to: "/cihazlar",
    children: [
      { label: "Vetozone", to: "/cihazlar#vetozone" },
      { label: "Vetozone Plus", to: "/cihazlar#vetozone-plus" },
      { label: "Vetozone Mobil", to: "/cihazlar#vetozone-mobil" },
      { label: "Teknoloji", to: "/cihazlar#teknoloji" },
    ],
  },
  {
    key: "doctorsSay",
    to: "/hekimler-ne-diyor",
  },
  {
    key: "academy",
    to: "/vetozone-akademi",
    children: [
      { label: "Temel Eğitimler", to: "/vetozone-akademi#temel-egitimler" },
      { label: "İleri Seviye Eğitimler", to: "/vetozone-akademi#ileri-seviye-egitimler" },
      { label: "Webinarlar", to: "/vetozone-akademi#webinarlar" },
      { label: "Sertifika Programları", to: "/vetozone-akademi#sertifika-programlari" },
      { label: "Eğitim Takvimi", to: "/vetozone-akademi#egitim-takvimi" },
      { label: "Kayıt Formu", to: "/vetozone-akademi#kayit-formu" },
    ],
  },
  {
    key: "caseCenter",
    to: "/vaka-merkezi",
    children: [
      { label: "Dermatoloji Vakaları", to: "/vaka-merkezi#dermatoloji-vakalari" },
      { label: "Yara Vakaları", to: "/vaka-merkezi#yara-vakalari" },
      { label: "Otitis Vakaları", to: "/vaka-merkezi#otitis-vakalari" },
      { label: "Nörolojik Vakalar", to: "/vaka-merkezi#norolojik-vakalar" },
      { label: "Büyükbaş Vakaları", to: "/vaka-merkezi#buyukbas-vakalari" },
      { label: "Önce / Sonra Galerisi", to: "/vaka-merkezi#once-sonra-galerisi" },
    ],
  },
  {
    key: "library",
    to: "/bilimsel-kutuphane",
    children: [
      { label: "Makaleler", to: "/bilimsel-kutuphane#makaleler" },
      { label: "Klinik Rehberler", to: "/bilimsel-kutuphane#klinik-rehberler" },
      { label: "PDF Kaynaklar", to: "/bilimsel-kutuphane#pdf-kaynaklar" },
      { label: "Webinar Kayıtları", to: "/bilimsel-kutuphane#webinar-kayitlari" },
      { label: "Sık Sorulan Sorular", to: "/bilimsel-kutuphane#sik-sorulan-sorular" },
      { label: "Ozon Tedavisi Nedir?", to: "/bilimsel-kutuphane#ozon-tedavisi-nedir" },
    ],
  },
  {
    key: "corporate",
    to: "/kurumsal",
    children: [
      { label: "Hakkımızda", to: "/kurumsal#hakkimizda" },
      { label: "Misyonumuz", to: "/kurumsal#misyonumuz" },
      { label: "İş Ortaklarımız", to: "/kurumsal#is-ortaklarimiz" },
      { label: "Kongre ve Etkinlikler", to: "/kurumsal#kongre-ve-etkinlikler" },
      { label: "Haberler", to: "/kurumsal#haberler" },
    ],
  },
];

// Top-level nav keys that still map to an in-page section on the homepage —
// clicking these while on "/" smooth-scrolls instead of navigating away.
export const HOMEPAGE_ANCHOR = {
  doctorsSay: "testimonials",
};
