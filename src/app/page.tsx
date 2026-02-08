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
import Approach from "@/components/sections/Approach";
import Commitment from "@/components/sections/Commitment";
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
        <Approach />
        <Commitment />
        <FAQ />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
