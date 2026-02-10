"use client";

import { Leaf, ShieldCheck, Droplets } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@/hooks/useGSAP";

gsap.registerPlugin(ScrollTrigger);

export default function Sustainability() {
  const containerRef = useGSAP<HTMLElement>(() => {
    gsap.from(".sustain-card", {
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
      },
      y: 40,
      opacity: 0,
      stagger: 0.15,
      duration: 0.8,
      ease: "power3.out"
    });
  });

  return (
    <section className="py-24 bg-navy-950 relative overflow-hidden" ref={containerRef}>
       <div className="container-main">
          <div className="max-w-3xl mb-16">
              <span className="text-teal-400 font-mono text-sm tracking-wider uppercase block mb-2">Sustainability & Compliance</span>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
                  Responsible <span className="text-slate-400">Energy</span>
              </h2>
              <p className="text-slate-400 text-lg leading-relaxed">
                  We are committed to reducing our environmental footprint and ensuring the highest standards of safety and compliance in every operation.
              </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="sustain-card p-8 bg-navy-900/50 border border-white/5 rounded-2xl hover:bg-navy-900 transition-colors group">
                  <div className="w-14 h-14 rounded-full bg-teal-400/10 flex items-center justify-center mb-6 group-hover:bg-teal-400/20 transition-colors">
                      <Leaf className="w-7 h-7 text-teal-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">Environmental Stewardship</h3>
                  <p className="text-slate-400">Implementing cleaner logistics and vapor recovery systems to minimize emissions.</p>
              </div>
              <div className="sustain-card p-8 bg-navy-900/50 border border-white/5 rounded-2xl hover:bg-navy-900 transition-colors group">
                  <div className="w-14 h-14 rounded-full bg-teal-400/10 flex items-center justify-center mb-6 group-hover:bg-teal-400/20 transition-colors">
                     <ShieldCheck className="w-7 h-7 text-teal-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">Regulatory Compliance</h3>
                  <p className="text-slate-400">Full adherence to OGRA regulations and international ISO standards.</p>
              </div>
              <div className="sustain-card p-8 bg-navy-900/50 border border-white/5 rounded-2xl hover:bg-navy-900 transition-colors group">
                  <div className="w-14 h-14 rounded-full bg-teal-400/10 flex items-center justify-center mb-6 group-hover:bg-teal-400/20 transition-colors">
                      <Droplets className="w-7 h-7 text-teal-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">Community Impact</h3>
                  <p className="text-slate-400">Investing in local communities through education and infrastructure support.</p>
              </div>
          </div>
       </div>
    </section>
  );
}
