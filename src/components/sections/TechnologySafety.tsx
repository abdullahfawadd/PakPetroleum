"use client";

import { Shield, Activity, Lock, Server } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@/hooks/useGSAP";
import { SAFETY_METRICS } from "@/lib/constants";

gsap.registerPlugin(ScrollTrigger);

export default function TechnologySafety() {
  const containerRef = useGSAP<HTMLElement>(() => {
    gsap.from(".tech-feature", {
      scrollTrigger: {
        trigger: ".tech-grid",
        start: "top 80%",
      },
      y: 30,
      opacity: 0,
      stagger: 0.1,
      duration: 0.8,
      ease: "power3.out"
    });

    gsap.from(".stat-card", {
      scrollTrigger: {
        trigger: ".stats-grid",
        start: "top 85%",
      },
      y: 40,
      opacity: 0,
      stagger: 0.1,
      duration: 0.8,
      ease: "power3.out"
    });
  });

  return (
    <section className="py-24 bg-navy-950 relative overflow-hidden" ref={containerRef}>
      {/* Decorative background */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-teal-500/20 rounded-full blur-[120px]" />
      </div>

      <div className="container-main relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-teal-400 font-mono text-sm tracking-wider uppercase block mb-2">Technology & Safety</span>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
              Intelligence Meets <br/><span className="text-slate-400">Industrial Integrity</span>
            </h2>
            <p className="text-slate-400 text-lg leading-relaxed mb-8">
              We leverage advanced telemetry and real-time monitoring to ensure that every drop of fuel is accounted for, and every operation meets the highest international safety standards.
            </p>

            <div className="tech-grid grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="tech-feature flex items-start gap-4">
                <div className="p-3 rounded-lg bg-navy-800 text-teal-400">
                  <Activity className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1">Real-time Telemetry</h4>
                  <p className="text-sm text-slate-400">Live monitoring of flow rates and tank levels.</p>
                </div>
              </div>
              <div className="tech-feature flex items-start gap-4">
                 <div className="p-3 rounded-lg bg-navy-800 text-teal-400">
                  <Shield className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1">HSE First</h4>
                  <p className="text-sm text-slate-400">Zero-compromise safety protocols across all sites.</p>
                </div>
              </div>
              <div className="tech-feature flex items-start gap-4">
                 <div className="p-3 rounded-lg bg-navy-800 text-teal-400">
                  <Lock className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1">Secure Supply</h4>
                  <p className="text-sm text-slate-400">Tamper-proof seals and digital tracking.</p>
                </div>
              </div>
               <div className="tech-feature flex items-start gap-4">
                 <div className="p-3 rounded-lg bg-navy-800 text-teal-400">
                  <Server className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1">Data-Driven</h4>
                  <p className="text-sm text-slate-400">Predictive analytics for demand forecasting.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="stats-grid grid grid-cols-2 gap-4">
            {SAFETY_METRICS.map((metric, idx) => (
              <div key={idx} className="stat-card p-6 bg-navy-900 border border-white/5 rounded-2xl hover:border-teal-500/20 transition-all">
                <h3 className="text-3xl md:text-4xl font-mono font-bold text-teal-400 mb-2">{metric.value}</h3>
                <p className="text-slate-400 text-sm font-medium uppercase tracking-wide">{metric.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
