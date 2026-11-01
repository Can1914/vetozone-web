import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Lenis from "lenis";
import { Navbar } from "@/components/landing/Navbar";
import { Footer } from "@/components/landing/Footer";
import { WhatsAppButton } from "@/components/landing/WhatsAppButton";

export default function SiteLayout() {
  const location = useLocation();

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });
    window.lenis = lenis;
    let raf;
    const loop = (time) => {
      lenis.raf(time);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => {
      cancelAnimationFrame(raf);
      lenis.destroy();
      window.lenis = null;
    };
  }, []);

  // index.html'deki canonical her sayfada ana sayfayı işaret ediyordu; tek
  // sayfa uygulamada o etiket rota değişince güncellenmiyor. Arama motoruna
  // bütün sayfaları ana sayfanın kopyası diye bildirmemek için rotaya göre
  // yazıyoruz. Alan adı www'li sürüm: içerik hem www'li hem www'siz adreste
  // açıldığı için hangisinin asıl olduğu bir yerde söylenmeli.
  useEffect(() => {
    const href = `https://www.vetozone.com.tr${location.pathname}`;
    let tag = document.querySelector('link[rel="canonical"]');
    if (!tag) {
      tag = document.createElement("link");
      tag.rel = "canonical";
      document.head.appendChild(tag);
    }
    tag.href = href;
  }, [location.pathname]);

  useEffect(() => {
    if (location.hash) return;
    window.lenis?.scrollTo(0, { immediate: true });
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="bg-[var(--ink)]">
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
