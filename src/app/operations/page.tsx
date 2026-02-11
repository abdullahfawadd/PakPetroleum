"use client";

import { useGSAP } from "@/hooks/useGSAP";
import { gsap } from "gsap";
import { Section } from "@/components/ui/Section";
import { EnterpriseCard } from "@/components/ui/EnterpriseCard";
import { StickyHeader } from "@/components/ui/StickyHeader";
import { CORE_OPERATIONS } from "@/lib/constants";
import { TrendingUp, Database, Truck, LucideIcon } from "lucide-react";

const ICONS: Record<string, LucideIcon> = {
  trading: TrendingUp,
  storage: Database,
  distribution: Truck,
};

export default function OperationsPage() {
  const containerRef = useGSAP<HTMLDivElement>(() => {
    gsap.from(".hero-text", {
      y: 50,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
      stagger: 0.1
    });

    gsap.from(".op-card", {
      scrollTrigger: {
        trigger: ".op-grid",
        start: "top 80%",
      },
      y: 40,
      opacity: 0,
      duration: 0.8,
      stagger: 0.15,
      ease: "power3.out"
    });
  });

  return (
    <main className="min-h-screen pt-32 pb-20" ref={containerRef}>
      <div className="container-main mb-24">
        <p className="hero-text text-teal-400 font-mono text-sm tracking-widest uppercase mb-4">
          Global to Local
        </p>
        <h1 className="hero-text text-5xl md:text-7xl font-display font-bold text-white mb-8">
          Operational <br /> <span className="text-slate-400">Excellence</span>
        </h1>
        <p className="hero-text text-xl text-slate-400 max-w-2xl leading-relaxed">
          From international trading desks to the last mile of distribution, we maintain
          strict control over quality, safety, and efficiency.
        </p>
      </div>

      <Section variant="default" className="bg-navy-900 border-y border-white/5">
         <div className="op-grid grid grid-cols-1 md:grid-cols-3 gap-8">
            {CORE_OPERATIONS.map((op, idx) => {
               const Icon = ICONS[op.icon] || TrendingUp;
               return (
                 <EnterpriseCard
                   key={idx}
                   icon={Icon}
                   title={op.title}
                   description={op.description}
                   className="op-card"
                   actionLabel="View Details"
                 />
               );
            })}
         </div>
      </Section>

      <Section>
        <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
                <StickyHeader
                    label="Infrastructure"
                    title="Built for Scale"
                    description="Our terminals are equipped with advanced automation and safety systems, ensuring 99.9% uptime and zero-incident operations."
                />
            </div>
            <div className="md:w-1/2 relative aspect-video bg-navy-800 rounded-xl overflow-hidden border border-white/5 flex items-center justify-center group">
                <div className="absolute inset-0 bg-mesh opacity-20" />
                <div className="w-16 h-16 rounded-full border border-teal-400/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                    <div className="w-2 h-2 bg-teal-400 rounded-full animate-pulse" />
                </div>
                <p className="absolute bottom-4 right-6 font-mono text-xs text-teal-400">LIVE FEED: TERMINAL A</p>
            </div>
        </div>
      </Section>

    </main>
  );
}
