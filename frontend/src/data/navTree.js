import { PawPrint, Bone, Virus, Cow } from "@phosphor-icons/react";
import { ASSETS } from "./content";

// Primary site navigation tree. Paths and slugs are shared by both languages;
// only the labels differ, so each node carries its English text alongside the
// Turkish rather than the tree being duplicated. Read labels with navText()
// so a missing translation falls back to Turkish instead of rendering blank.
// Each child's `to` hash must match the matching content item's `slug` in
// `data/pages/*.js` / the `id` rendered on that page.
export const navText = (node, key, lang) =>
  (lang === "en" && node[`${key}En`]) || node[key];

export const NAV_TREE = [
  {
    key: "treatmentAreas",
    to: "/tedavi-alanlari",
    // Rendered as a full-width mega menu instead of a single dropdown column.
    mega: [
      {
        slug: "kucuk-hayvan",
        title: "KÜÇÜK HAYVAN",
        titleEn: "SMALL ANIMAL",
        desc: "Köpek ve kedilerde klinik uygulama alanları",
        descEn: "Clinical application areas in dogs and cats",
        icon: PawPrint,
        image: ASSETS.species.dogcat,
        items: [
          { label: "Dermatoloji", labelEn: "Dermatology", to: "/tedavi-alanlari/dermatoloji" },
          { label: "Yara ve Doku İyileşmesi", labelEn: "Wound and Tissue Healing", to: "/tedavi-alanlari/yara-ve-doku" },
          { label: "Kulak Hastalıkları", labelEn: "Ear Conditions", to: "/tedavi-alanlari/kulak-hastaliklari" },
          { label: "Ağız ve Diş Sağlığı", labelEn: "Oral and Dental Health", to: "/tedavi-alanlari/agiz-ve-dis" },
          { label: "Üriner Sistem", labelEn: "Urinary System", to: "/tedavi-alanlari/uriner-sistem" },
        ],
      },
      {
        slug: "ortopedi-noroloji",
        title: "ORTOPEDİ & NÖROLOJİ",
        titleEn: "ORTHOPAEDICS & NEUROLOGY",
        desc: "Hareket sistemi ve nörolojik uygulamalar",
        descEn: "Musculoskeletal and neurological applications",
        icon: Bone,
        image: ASSETS.species.horse,
        items: [
          { label: "Osteoartrit", labelEn: "Osteoarthritis", to: "/tedavi-alanlari/osteoartrit" },
          { label: "IVDD ve Omurga", labelEn: "IVDD and Spine", to: "/tedavi-alanlari/ivdd-ve-omurga" },
          { label: "Kas - Tendon - Ligament", labelEn: "Muscle - Tendon - Ligament", to: "/tedavi-alanlari/kas-tendon-ligament" },
          { label: "Rejeneratif Ortopedi", labelEn: "Regenerative Orthopaedics", to: "/tedavi-alanlari/rejeneratif-ortopedi" },
        ],
      },
      {
        slug: "sistemik",
        title: "SİSTEMİK",
        titleEn: "SYSTEMIC",
        desc: "Sistemik destek ve kompleks klinik tablolar",
        descEn: "Systemic support and complex clinical pictures",
        icon: Virus,
        image: ASSETS.gallery[0],
        items: [
          { label: "Enfeksiyon Hastalıkları", labelEn: "Infectious Diseases", to: "/tedavi-alanlari/enfeksiyon-hastaliklari" },
          { label: "Onkoloji", labelEn: "Oncology", to: "/tedavi-alanlari/onkoloji" },
          { label: "Yoğun Bakım", labelEn: "Intensive Care", to: "/tedavi-alanlari/yogun-bakim" },
          { label: "Kronik Hastalıklar", labelEn: "Chronic Conditions", to: "/tedavi-alanlari/kronik-hastaliklar" },
        ],
      },
      {
        slug: "buyukbas",
        title: "BÜYÜKBAŞ & KÜÇÜKBAŞ",
        titleEn: "CATTLE & SMALL RUMINANTS",
        desc: "Saha ve çiftlik hayvanlarında uygulama alanları",
        descEn: "Application areas in field and farm animals",
        icon: Cow,
        image: ASSETS.species.cattle,
        items: [
          { label: "Mastitis", labelEn: "Mastitis", to: "/tedavi-alanlari/mastitis" },
          { label: "Buzağı Hastalıkları", labelEn: "Calf Diseases", to: "/tedavi-alanlari/buzagi-hastaliklari" },
          { label: "Neonatal Sepsis", labelEn: "Neonatal Sepsis", to: "/tedavi-alanlari/neonatal-sepsis" },
          { label: "Yara & Ayak", labelEn: "Wound & Foot", to: "/tedavi-alanlari/yara-ayak" },
          { label: "Üreme Sistemi", labelEn: "Reproductive System", to: "/tedavi-alanlari/ureme-sistemi" },
        ],
      },
    ],
    megaFooter: {
      title: "Tüm Tedavi Alanlarını Gör",
      titleEn: "See All Treatment Areas",
      desc: "Veteriner hekimlikte ozon tedavisinin tüm uygulama alanlarına ulaşın.",
      descEn: "Reach every application area of ozone therapy in veterinary medicine.",
      to: "/tedavi-alanlari",
    },
  },
  {
    key: "devices",
    to: "/cihazlar",
    children: [
      { label: "Vetozone", labelEn: "Vetozone", to: "/cihazlar#vetozone" },
      { label: "Vetozone Plus", labelEn: "Vetozone Plus", to: "/cihazlar#vetozone-plus" },
      { label: "Vetozone Mobil", labelEn: "Vetozone Mobile", to: "/cihazlar#vetozone-mobil" },
      { label: "Teknoloji", labelEn: "Technology", to: "/cihazlar#teknoloji" },
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
      { label: "Temel Eğitimler", labelEn: "Core Training", to: "/vetozone-akademi#temel-egitimler" },
      { label: "İleri Seviye Eğitimler", labelEn: "Advanced Training", to: "/vetozone-akademi#ileri-seviye-egitimler" },
      { label: "Webinarlar", labelEn: "Webinars", to: "/vetozone-akademi#webinarlar" },
      { label: "Sertifika Programları", labelEn: "Certificate Programmes", to: "/vetozone-akademi#sertifika-programlari" },
      { label: "Eğitim Takvimi", labelEn: "Training Calendar", to: "/vetozone-akademi#egitim-takvimi" },
      { label: "Kayıt Formu", labelEn: "Registration Form", to: "/vetozone-akademi#kayit-formu" },
    ],
  },
  {
    key: "caseCenter",
    to: "/vaka-merkezi",
    children: [
      { label: "Dermatoloji Vakaları", labelEn: "Dermatology Cases", to: "/vaka-merkezi#dermatoloji-vakalari" },
      { label: "Yara Vakaları", labelEn: "Wound Cases", to: "/vaka-merkezi#yara-vakalari" },
      { label: "Otitis Vakaları", labelEn: "Otitis Cases", to: "/vaka-merkezi#otitis-vakalari" },
      { label: "Nörolojik Vakalar", labelEn: "Neurological Cases", to: "/vaka-merkezi#norolojik-vakalar" },
      { label: "Büyükbaş Vakaları", labelEn: "Cattle Cases", to: "/vaka-merkezi#buyukbas-vakalari" },
      { label: "Önce / Sonra Galerisi", labelEn: "Before / After Gallery", to: "/vaka-merkezi#once-sonra-galerisi" },
    ],
  },
  {
    key: "library",
    to: "/bilimsel-kutuphane",
    children: [
      { label: "Makaleler", labelEn: "Articles", to: "/bilimsel-kutuphane#makaleler" },
      { label: "Klinik Rehberler", labelEn: "Clinical Guides", to: "/bilimsel-kutuphane#klinik-rehberler" },
      { label: "PDF Kaynaklar", labelEn: "PDF Resources", to: "/bilimsel-kutuphane#pdf-kaynaklar" },
      { label: "Webinar Kayıtları", labelEn: "Webinar Recordings", to: "/bilimsel-kutuphane#webinar-kayitlari" },
      { label: "Sık Sorulan Sorular", labelEn: "Frequently Asked Questions", to: "/bilimsel-kutuphane#sik-sorulan-sorular" },
      { label: "Ozon Tedavisi Nedir?", labelEn: "What Is Ozone Therapy?", to: "/bilimsel-kutuphane#ozon-tedavisi-nedir" },
    ],
  },
  {
    key: "corporate",
    to: "/kurumsal",
    children: [
      { label: "Hakkımızda", labelEn: "About Us", to: "/kurumsal#hakkimizda" },
      { label: "Misyonumuz", labelEn: "Our Mission", to: "/kurumsal#misyonumuz" },
      { label: "İş Ortaklarımız", labelEn: "Our Partners", to: "/kurumsal#is-ortaklarimiz" },
      { label: "Kongre ve Etkinlikler", labelEn: "Congresses and Events", to: "/kurumsal#kongre-ve-etkinlikler" },
      { label: "Haberler", labelEn: "News", to: "/kurumsal#haberler" },
    ],
  },
];

// Top-level nav keys that still map to an in-page section on the homepage —
// clicking these while on "/" smooth-scrolls instead of navigating away.
export const HOMEPAGE_ANCHOR = {
  doctorsSay: "testimonials",
};
