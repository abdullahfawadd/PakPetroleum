"use client";

import { useGSAP } from "@/hooks/useGSAP";
import { gsap } from "gsap";
import { Section } from "@/components/ui/Section";
import Leadership from "@/components/sections/Leadership";
import { Divider } from "@/components/ui/Divider";

export default function CompanyPage() {
  const containerRef = useGSAP<HTMLDivElement>(() => {
    gsap.from(".hero-text", {
      y: 50,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
      stagger: 0.1
    });
  });

  return (
    <main className="min-h-screen pt-32 pb-20" ref={containerRef}>
      <div className="container-main mb-24">
        <p className="hero-text text-teal-400 font-mono text-sm tracking-widest uppercase mb-4">
          Who We Are
        </p>
        <h1 className="hero-text text-5xl md:text-7xl font-display font-bold text-white mb-8">
          Built on <br /> <span className="text-slate-400">Integrity.</span>
        </h1>
        <p className="hero-text text-xl text-slate-400 max-w-2xl leading-relaxed">
          PAK Petroleum was founded with a singular mission: to provide the energy that drives Pakistan&apos;s economic engine, with uncompromised safety and reliability.
        </p>
      </div>

      <Divider gradient />

      <Section className="py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
                <h2 className="text-3xl font-display font-bold text-white mb-6">Our Story</h2>
                <div className="prose prose-invert prose-lg text-slate-400">
                    <p>
                        Established in 2026, we identified a critical gap in the national supply chain: the need for a modern, technology-first energy provider that could scale with the nation&apos;s ambitions.
                    </p>
                    <p className="mt-4">
                        Today, we operate one of the largest private distribution networks in the region, connecting global energy markets to local industries.
                    </p>
                </div>
            </div>
            <div className="relative h-full min-h-[400px] bg-navy-800 rounded-2xl overflow-hidden border border-white/5">
                <div className="absolute inset-0 bg-mesh opacity-30" />
                <div className="absolute inset-0 flex items-center justify-center">
                    <span className="font-mono text-teal-400 opacity-50 text-lg border border-teal-400/20 px-4 py-2 rounded">
                        IMAGE: HEADQUARTERS
                    </span>
                </div>
            </div>
        </div>
      </Section>

      <Leadership />

    </main>
  );
}
