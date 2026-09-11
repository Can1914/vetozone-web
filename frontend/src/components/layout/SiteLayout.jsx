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
