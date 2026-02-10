"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@/hooks/useGSAP";
import { LEADERSHIP_TEAM } from "@/lib/constants";

gsap.registerPlugin(ScrollTrigger);

export default function Leadership() {
  const containerRef = useGSAP<HTMLElement>(() => {
    gsap.from(".leader-card", {
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
  });

  return (
    <section className="py-24 bg-navy-950 relative overflow-hidden" ref={containerRef}>
        <div className="container-main">
            <div className="mb-16">
                <span className="text-teal-400 font-mono text-sm tracking-wider uppercase block mb-2">Governance</span>
                <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
                    Our <span className="text-slate-400">Leadership</span>
                </h2>
                <p className="text-slate-400 max-w-2xl text-lg">
                    Guided by decades of experience in global energy markets and infrastructure development.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {LEADERSHIP_TEAM.map((leader, idx) => (
                    <div key={idx} className="leader-card group bg-navy-900 border border-white/5 p-6 rounded-2xl hover:border-teal-500/20 transition-all duration-300">
                        <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-navy-800 mb-6 flex items-center justify-center">
                            {/* Placeholder for image */}
                            <div className="w-20 h-20 rounded-full bg-navy-700 flex items-center justify-center text-3xl font-bold text-navy-400 font-display">
                                {leader.name.charAt(0)}
                            </div>
                        </div>
                        <h3 className="text-2xl font-display font-bold text-white mb-1 group-hover:text-teal-400 transition-colors">{leader.name}</h3>
                        <p className="text-teal-400 text-xs font-mono uppercase tracking-wide mb-4">{leader.role}</p>
                        <p className="text-slate-400 text-sm leading-relaxed">{leader.bio}</p>
                    </div>
                ))}
            </div>
        </div>
    </section>
  );
}
