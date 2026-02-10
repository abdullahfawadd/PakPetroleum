"use client";

import { TrendingUp, Database, Truck, ArrowUpRight } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@/hooks/useGSAP";
import { CORE_OPERATIONS } from "@/lib/constants";

const ICONS = {
  trading: TrendingUp,
  storage: Database,
  distribution: Truck,
};

gsap.registerPlugin(ScrollTrigger);

export default function CoreOperations() {
  const containerRef = useGSAP<HTMLElement>(() => {
    // Reveal animation
    gsap.from(".operation-card", {
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
      },
      y: 50,
      opacity: 0,
      stagger: 0.15,
      duration: 0.8,
      ease: "power3.out"
    });

    gsap.from(".section-header", {
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 85%",
      },
      y: 30,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out"
    });
  });

  return (
    <section className="py-24 bg-navy-900 relative overflow-hidden" ref={containerRef}>
      <div className="container-main">
        <div className="section-header mb-16 max-w-2xl">
           <span className="text-teal-400 font-mono text-sm tracking-wider uppercase block mb-2">Capabilities</span>
           <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
             End-to-End <span className="text-slate-400">Petroleum Logistics</span>
           </h2>
           <p className="text-slate-400 text-lg leading-relaxed">
             We manage the complete lifecycle of energy distribution, from global trading desks to local retail stations, ensuring quality and continuity at every node.
           </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {CORE_OPERATIONS.map((op, idx) => {
            const Icon = ICONS[op.icon as keyof typeof ICONS];
            return (
              <div
                key={idx}
                className="operation-card group relative p-8 bg-navy-950/50 border border-white/5 hover:border-teal-500/30 transition-all duration-300 rounded-2xl overflow-hidden"
              >
                <div className="absolute top-0 right-0 p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                   <ArrowUpRight className="w-6 h-6 text-teal-400" />
                </div>

                <div className="w-14 h-14 rounded-xl bg-navy-800 flex items-center justify-center mb-8 group-hover:bg-teal-400/10 transition-colors">
                  {Icon && <Icon className="w-7 h-7 text-teal-400" strokeWidth={1.5} />}
                </div>

                <h3 className="text-2xl font-display font-bold text-white mb-4 group-hover:text-teal-400 transition-colors">
                  {op.title}
                </h3>

                <p className="text-slate-400 leading-relaxed mb-8">
                  {op.description}
                </p>

                <div className="w-full h-1 bg-navy-800 rounded-full overflow-hidden">
                   <div className="h-full w-0 bg-teal-400 group-hover:w-full transition-all duration-700 ease-out" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
