"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@/hooks/useGSAP";
import { STATS, CERTIFICATIONS } from "@/lib/constants";

gsap.registerPlugin(ScrollTrigger);

export default function MetricsTrust() {
  const containerRef = useGSAP<HTMLElement>(() => {
    gsap.from(".stat-item", {
        scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
        },
        y: 20,
        opacity: 0,
        stagger: 0.1,
        duration: 0.8,
        ease: "power3.out"
    });
  });

  return (
    <section className="py-20 bg-navy-900 border-y border-white/5 relative" ref={containerRef}>
        <div className="container-main">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
                {STATS.map((stat, idx) => (
                    <div key={idx} className="stat-item text-center">
                        <div className="text-4xl md:text-6xl font-display font-bold text-white mb-2">
                            {stat.value}<span className="text-teal-400 text-3xl md:text-4xl align-top ml-1">{stat.suffix}</span>
                        </div>
                        <p className="text-slate-400 text-xs md:text-sm tracking-widest uppercase font-mono">{stat.label}</p>
                    </div>
                ))}
            </div>

            <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16 opacity-50 hover:opacity-100 transition-opacity duration-500">
                {CERTIFICATIONS.map((cert, idx) => (
                    <span key={idx} className="text-xl md:text-2xl font-display font-bold text-slate-400 cursor-default select-none border border-white/10 px-6 py-2 rounded-full">
                        {cert}
                    </span>
                ))}
            </div>
        </div>
    </section>
  );
}
