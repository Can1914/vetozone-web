import { Hero } from "@/components/landing/Hero";
import { ManifestoMarquee } from "@/components/landing/ManifestoMarquee";
import { Manifesto } from "@/components/landing/Manifesto";
import { VideoReel } from "@/components/landing/VideoReel";
import { Features } from "@/components/landing/Features";
import { UseCases } from "@/components/landing/UseCases";
import { MobileProduct } from "@/components/landing/MobileProduct";
import { Comparison } from "@/components/landing/Comparison";
import { Gallery } from "@/components/landing/Gallery";
import { TechSpecs } from "@/components/landing/TechSpecs";
import { Testimonials } from "@/components/landing/Testimonials";
import { ReferencesMarquee } from "@/components/landing/ReferencesMarquee";
import { Contact } from "@/components/landing/Contact";

export default function Landing() {
  return (
    <>
      <Hero />
      <ManifestoMarquee />
      <Manifesto />
      <VideoReel />
      <Features />
      <UseCases />
      <MobileProduct />
      <Comparison />
      <Gallery />
      <TechSpecs />
      <Testimonials />
      <ReferencesMarquee />
      <Contact />
    </>
  );
}
