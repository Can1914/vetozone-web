import { useEffect } from "react";
import Lenis from "lenis";
import { Toaster } from "sonner";
import "@/App.css";
import { LanguageProvider } from "@/context/LanguageContext";
import { Navbar } from "@/components/landing/Navbar";
import { Hero } from "@/components/landing/Hero";
import { ManifestoMarquee } from "@/components/landing/ManifestoMarquee";
import { Manifesto } from "@/components/landing/Manifesto";
import { Features } from "@/components/landing/Features";
import { UseCases } from "@/components/landing/UseCases";
import { TechSpecs } from "@/components/landing/TechSpecs";
import { Testimonials } from "@/components/landing/Testimonials";
import { Contact } from "@/components/landing/Contact";
import { Footer } from "@/components/landing/Footer";

function App() {
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
    };
  }, []);

  return (
    <LanguageProvider>
      <div className="App bg-[var(--ink)]">
        <Toaster position="top-center" richColors />
        <Navbar />
        <main>
          <Hero />
          <ManifestoMarquee />
          <Manifesto />
          <Features />
          <UseCases />
          <TechSpecs />
          <Testimonials />
          <Contact />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}

export default App;
