"use client";

import { useGSAP } from "@/hooks/useGSAP";
import { gsap } from "gsap";
import { Section } from "@/components/ui/Section";
import MetricsTrust from "@/components/sections/MetricsTrust";
import { Shield, CheckCircle, Leaf } from "lucide-react";

export default function SustainabilityPage() {
  const containerRef = useGSAP<HTMLDivElement>(() => {
    gsap.from(".hero-text", {
      y: 50,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
      stagger: 0.1
    });

    gsap.from(".principle-card", {
        scrollTrigger: {
            trigger: ".principles-grid",
            start: "top 80%",
        },
        y: 30,
        opacity: 0,
        stagger: 0.15,
        duration: 0.8
    });
  });

  return (
    <main className="min-h-screen pt-32 pb-20" ref={containerRef}>
      <div className="container-main mb-24">
        <p className="hero-text text-teal-400 font-mono text-sm tracking-widest uppercase mb-4">
          Health, Safety, Environment
        </p>
        <h1 className="hero-text text-5xl md:text-7xl font-display font-bold text-white mb-8">
          Responsible <br /> <span className="text-slate-400">Energy.</span>
        </h1>
        <p className="hero-text text-xl text-slate-400 max-w-2xl leading-relaxed">
          We believe that operational excellence is inseparable from environmental stewardship and personnel safety.
        </p>
      </div>

      <MetricsTrust />

      <Section className="py-24">
         <div className="principles-grid grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="principle-card bg-navy-900 border border-white/5 p-8 rounded-xl">
                <Shield className="w-10 h-10 text-teal-400 mb-6" />
                <h3 className="text-xl font-bold text-white mb-3">Safety First</h3>
                <p className="text-slate-400">Our Goal Zero policy ensures that every employee returns home safely, every day.</p>
            </div>
             <div className="principle-card bg-navy-900 border border-white/5 p-8 rounded-xl">
                <Leaf className="w-10 h-10 text-teal-400 mb-6" />
                <h3 className="text-xl font-bold text-white mb-3">Environmental Care</h3>
                <p className="text-slate-400">We invest in advanced spill prevention and vapor recovery systems to protect our ecosystems.</p>
            </div>
             <div className="principle-card bg-navy-900 border border-white/5 p-8 rounded-xl">
                <CheckCircle className="w-10 h-10 text-teal-400 mb-6" />
                <h3 className="text-xl font-bold text-white mb-3">Full Compliance</h3>
                <p className="text-slate-400">Strict adherence to OGRA regulations and international ISO standards for quality management.</p>
            </div>
         </div>
      </Section>

    </main>
  );
}
