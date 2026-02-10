"use client";

import dynamic from 'next/dynamic';
import { useLenis } from "@/hooks/useLenis";

import Navigation from "@/components/layout/Navigation";
import ScrollProgress from "@/components/layout/ScrollProgress";
import CustomCursor from "@/components/effects/CustomCursor";
import Preloader from "@/components/effects/Preloader";
import Hero from "@/components/sections/Hero";

const TrustMarquee = dynamic(() => import("@/components/sections/TrustMarquee"));
const About = dynamic(() => import("@/components/sections/About"));
const Operations = dynamic(() => import("@/components/sections/Operations"));
const Approach = dynamic(() => import("@/components/sections/Approach"));
const Commitment = dynamic(() => import("@/components/sections/Commitment"));
const FAQ = dynamic(() => import("@/components/sections/FAQ"));
const Contact = dynamic(() => import("@/components/sections/Contact"));
const Footer = dynamic(() => import("@/components/layout/Footer"));

export default function Home() {
  useLenis();

  return (
    <>
      <Preloader />
      <CustomCursor />
      <ScrollProgress />
      <Navigation />

      <main id="main-content">
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
