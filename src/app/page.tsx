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
import ValueCurve from "@/components/sections/ValueCurve";
import Insights from "@/components/sections/Insights";
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
        {/* Purple glow band transition */}
        <div className="h-32 glow-band" aria-hidden="true" />
        <About />
        <Operations />
        {/* Purple glow band transition */}
        <div className="h-24 glow-band" aria-hidden="true" />
        <Continuity />
        <Framework />
        <Need />
        <Systems />
        {/* Purple glow band transition */}
        <div className="h-24 glow-band" aria-hidden="true" />
        <ValueCurve />
        <Metrics />
        <Commitment />
        <Insights />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
