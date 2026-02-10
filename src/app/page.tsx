"use client";

import { useLenis } from "@/hooks/useLenis";

import Navigation from "@/components/layout/Navigation";
import ScrollProgress from "@/components/layout/ScrollProgress";
import CustomCursor from "@/components/effects/CustomCursor";
import Preloader from "@/components/effects/Preloader";
import Hero from "@/components/sections/Hero";
import NationalFootprint from "@/components/sections/NationalFootprint";
import CoreOperations from "@/components/sections/CoreOperations";
import TechnologySafety from "@/components/sections/TechnologySafety";
import Sustainability from "@/components/sections/Sustainability";
import MetricsTrust from "@/components/sections/MetricsTrust";
import Leadership from "@/components/sections/Leadership";
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
        <NationalFootprint />
        <CoreOperations />
        <TechnologySafety />
        <Sustainability />
        <MetricsTrust />
        <Leadership />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
