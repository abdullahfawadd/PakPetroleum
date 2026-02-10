"use client";

import { useGSAP } from "@/hooks/useGSAP";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FOOTPRINT_LOCATIONS } from "@/lib/constants";

gsap.registerPlugin(ScrollTrigger);

export default function NationalFootprint() {
  const containerRef = useGSAP<HTMLElement>(() => {
    gsap.from(".footprint-item", {
        scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
        },
        y: 50,
        opacity: 0,
        stagger: 0.1,
        duration: 0.8,
        ease: "power3.out"
    });
  });

  return (
    <section className="py-24 bg-navy-950 relative overflow-hidden border-t border-white/5" ref={containerRef}>
        <div className="container-main">
            <div className="mb-16 md:flex justify-between items-end">
                <div>
                    <span className="text-teal-400 font-mono text-sm tracking-wider uppercase block mb-2">Scale</span>
                    <h2 className="text-4xl md:text-5xl font-display font-bold text-white">
                        National <span className="text-slate-400">Footprint</span>
                    </h2>
                </div>
                <p className="text-slate-400 max-w-md mt-4 md:mt-0 text-right md:text-left">
                    Strategically positioned terminals and distribution hubs ensuring uninterrupted supply across Pakistan.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {FOOTPRINT_LOCATIONS.map((loc, idx) => (
                    <div key={idx} className="footprint-item p-8 border border-white/5 bg-navy-900/50 hover:bg-navy-900 hover:border-teal-500/30 transition-all duration-300 group rounded-xl">
                        <div className="flex items-start justify-between mb-4">
                            <div className="w-10 h-10 rounded-lg bg-navy-800 flex items-center justify-center text-teal-400 font-mono font-bold">
                                {String(idx + 1).padStart(2, '0')}
                            </div>
                            <div className="w-2 h-2 rounded-full bg-teal-400 shadow-[0_0_10px_rgba(100,255,218,0.5)] animate-pulse" />
                        </div>

                        <h3 className="text-2xl font-display font-bold text-white group-hover:text-teal-400 transition-colors mb-2">{loc.city}</h3>
                        <p className="text-slate-400 text-sm font-mono tracking-wide uppercase">{loc.type}</p>
                    </div>
                ))}
            </div>

            {/* Background Elements */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-teal-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
        </div>
    </section>
  );
}
