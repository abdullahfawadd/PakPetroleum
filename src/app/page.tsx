"use client";

import { useLenis } from "@/hooks/useLenis";

import Navigation from "@/components/layout/Navigation";
import ScrollProgress from "@/components/layout/ScrollProgress";
import CustomCursor from "@/components/effects/CustomCursor";
import Preloader from "@/components/effects/Preloader";
import Hero from "@/components/sections/Hero";
import TrustMarquee from "@/components/sections/TrustMarquee";
import About from "@/components/sections/About";
import Operations from "@/components/sections/Operations";
import Continuity from "@/components/sections/Continuity";
import Framework from "@/components/sections/Framework";
import Systems from "@/components/sections/Systems";
import Need from "@/components/sections/Need";
import Commitment from "@/components/sections/Commitment";
import Metrics from "@/components/sections/Metrics";
import Testimonials from "@/components/sections/Testimonials";
import FAQ from "@/components/sections/FAQ";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/layout/Footer";

export default function Home() {
  useLenis();

  return (
    <>
      <Preloader />
      <CustomCursor />
      <ScrollProgress />
      <Navigation />

      <main>
        <Hero />
        <TrustMarquee />
        <About />
        <Operations />
        <Continuity />
        <Framework />
        <Need />
        <Systems />
        <Metrics />
        <Commitment />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
