import { Hero } from "@/components/landing/Hero";
import { ManifestoMarquee } from "@/components/landing/ManifestoMarquee";
import { Integration } from "@/components/landing/Integration";
import { Testimonials } from "@/components/landing/Testimonials";
import { VideoReel } from "@/components/landing/VideoReel";
import { Features } from "@/components/landing/Features";
import { UseCases } from "@/components/landing/UseCases";
import { Comparison } from "@/components/landing/Comparison";
import { Gallery } from "@/components/landing/Gallery";
import { ReferencesMarquee } from "@/components/landing/ReferencesMarquee";
import { Contact } from "@/components/landing/Contact";

export default function Landing() {
  return (
    <>
      <Hero />
      <ManifestoMarquee />
      <Integration />
      <Testimonials />
      <VideoReel />
      <Features />
      <UseCases />
      <Comparison />
      <Gallery />
      <ReferencesMarquee />
      <Contact />
    </>
  );
}
