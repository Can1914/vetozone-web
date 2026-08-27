import { useEffect } from "react";
import Lenis from "lenis";
import { Navbar } from "@/components/landing/Navbar";
import { Hero } from "@/components/landing/Hero";
import { ManifestoMarquee } from "@/components/landing/ManifestoMarquee";
import { Manifesto } from "@/components/landing/Manifesto";
import { Features } from "@/components/landing/Features";
import { UseCases } from "@/components/landing/UseCases";
import { MobileProduct } from "@/components/landing/MobileProduct";
import { Comparison } from "@/components/landing/Comparison";
import { Gallery } from "@/components/landing/Gallery";
import { TechSpecs } from "@/components/landing/TechSpecs";
import { Testimonials } from "@/components/landing/Testimonials";
import { ReferencesMarquee } from "@/components/landing/ReferencesMarquee";
import { Contact } from "@/components/landing/Contact";
import { Footer } from "@/components/landing/Footer";
import { WhatsAppButton } from "@/components/landing/WhatsAppButton";

export default function Landing() {
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
    <div className="bg-[var(--ink)]">
      <Navbar />
      <main>
        <Hero />
        <ManifestoMarquee />
        <Manifesto />
        <Features />
        <UseCases />
        <MobileProduct />
        <Comparison />
        <Gallery />
        <TechSpecs />
        <Testimonials />
        <ReferencesMarquee />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
