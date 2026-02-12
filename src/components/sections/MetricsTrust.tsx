"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@/hooks/useGSAP";
import { STATS, CERTIFICATIONS } from "@/lib/constants";
import { EASINGS } from "@/lib/motion";

gsap.registerPlugin(ScrollTrigger);

export default function MetricsTrust() {
  const containerRef = useGSAP<HTMLElement>(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
      }
    });

    // Initial fade in for the stats
    tl.from(".stat-item", {
        opacity: 0,
        y: 30,
        duration: 0.8,
        stagger: 0.1,
        ease: EASINGS.POWER,
    }, 0);

    // Count up animation
    const numbers = containerRef.current?.querySelectorAll<HTMLElement>(".stat-value");
    numbers?.forEach((el) => {
        const targetValue = parseFloat(el.getAttribute("data-value") || "0");
        const obj = { val: 0 };
        const isFloat = targetValue % 1 !== 0;

        tl.to(obj, {
            val: targetValue,
            duration: 2.5,
            ease: EASINGS.EXPO,
            onUpdate: () => {
                el.textContent = isFloat ? obj.val.toFixed(1) : obj.val.toFixed(0);
            }
        }, 0);
    });

  });

  return (
    <section className="py-20 bg-navy-900 border-y border-white/5 relative" ref={containerRef}>
        <div className="container-main">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
                {STATS.map((stat, idx) => (
                    <div key={idx} className="stat-item text-center group">
                        <div className="text-4xl md:text-6xl font-display font-bold text-white mb-2 flex justify-center items-baseline">
                            <span className="stat-value tabular-nums" data-value={stat.value}>0</span>
                            <span className="text-teal-400 text-3xl md:text-4xl ml-1">{stat.suffix}</span>
                        </div>
                        <p className="text-slate-400 text-xs md:text-sm tracking-widest uppercase font-mono group-hover:text-teal-400 transition-colors duration-300">{stat.label}</p>
                    </div>
                ))}
            </div>

            <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16 opacity-50 hover:opacity-100 transition-opacity duration-500">
                {CERTIFICATIONS.map((cert, idx) => (
                    <span key={idx} className="text-xl md:text-2xl font-display font-bold text-slate-400 cursor-default select-none border border-white/10 px-6 py-2 rounded-full hover:border-teal-400/30 hover:text-teal-400 transition-all duration-300">
                        {cert}
                    </span>
                ))}
            </div>
        </div>
    </section>
  );
}
