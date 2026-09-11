import { BookOpen, GraduationCap, VideoCamera, Certificate, CalendarBlank, NotePencil } from "@phosphor-icons/react";

export const ACADEMY_CONTENT = {
  tr: {
    hero: {
      overline: "Vetozone Akademi",
      title: "Ozon terapide eğitim ve sertifikasyon.",
      sub: "Hekimlerimiz için temel eğitimlerden ileri seviye sertifika programlarına kadar bir eğitim merkezi.",
    },
    items: [
      { slug: "temel-egitimler", icon: BookOpen, title: "Temel Eğitimler", blurb: "Ozon terapiye giriş ve temel uygulama eğitimleri.", comingSoon: true },
      { slug: "ileri-seviye-egitimler", icon: GraduationCap, title: "İleri Seviye Eğitimler", blurb: "Vaka bazlı, ileri seviye klinik yaklaşım eğitimleri.", comingSoon: true },
      { slug: "webinarlar", icon: VideoCamera, title: "Webinarlar", blurb: "Alanında uzman hekimlerle canlı ve kayıtlı webinarlar.", comingSoon: true },
      { slug: "sertifika-programlari", icon: Certificate, title: "Sertifika Programları", blurb: "Tamamlanan eğitimler sonrası katılım/başarı sertifikaları.", comingSoon: true },
      { slug: "egitim-takvimi", icon: CalendarBlank, title: "Eğitim Takvimi", blurb: "Yaklaşan eğitim ve webinar tarihleri.", comingSoon: true },
    ],
    form: {
      slug: "kayit-formu",
      icon: NotePencil,
      title: "Kayıt Formu",
      sub: "Eğitimlerimizden haberdar olmak için bilgilerinizi bırakın, sizi arayalım.",
    },
  },
  en: {
    hero: {
      overline: "Vetozone Academy",
      title: "Training and certification in ozone therapy.",
      sub: "A training hub for our veterinarians — from foundational courses to advanced certification programs.",
    },
    items: [
      { slug: "temel-egitimler", icon: BookOpen, title: "Foundational Courses", blurb: "Introductory and basic-application training in ozone therapy.", comingSoon: true },
      { slug: "ileri-seviye-egitimler", icon: GraduationCap, title: "Advanced Courses", blurb: "Case-based, advanced clinical approach training.", comingSoon: true },
      { slug: "webinarlar", icon: VideoCamera, title: "Webinars", blurb: "Live and recorded webinars with expert veterinarians.", comingSoon: true },
      { slug: "sertifika-programlari", icon: Certificate, title: "Certificate Programs", blurb: "Attendance/achievement certificates upon course completion.", comingSoon: true },
      { slug: "egitim-takvimi", icon: CalendarBlank, title: "Training Calendar", blurb: "Upcoming course and webinar dates.", comingSoon: true },
    ],
    form: {
      slug: "kayit-formu",
      icon: NotePencil,
      title: "Registration",
      sub: "Leave your details to hear about our upcoming courses — we'll call you.",
    },
  },
};
