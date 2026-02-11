'use client';

import React from 'react';
import { TrendingUp, Database, Truck, LucideIcon } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@/hooks/useGSAP';
import { Section } from '@/components/ui/Section';
import { EnterpriseCard } from '@/components/ui/EnterpriseCard';
import { StickyHeader } from '@/components/ui/StickyHeader';
import { Divider } from '@/components/ui/Divider';
import { CORE_OPERATIONS } from '@/lib/constants';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const ICONS: Record<string, LucideIcon> = {
  trading: TrendingUp,
  storage: Database,
  distribution: Truck,
};

export default function CoreOperations() {
  const containerRef = useGSAP<HTMLElement>(() => {
    // Reveal animation for cards
    gsap.from(".operation-card", {
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 75%",
      },
      y: 50,
      opacity: 0,
      stagger: 0.2,
      duration: 1,
      ease: "power3.out"
    });

    // Reveal animation for header
    gsap.from(".sticky-header-content", {
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
      },
      x: -30,
      opacity: 0,
      duration: 1,
      ease: "power3.out"
    });
  });

  return (
    <Section ref={containerRef} variant="large" className="relative z-10" containerClassName="py-12">
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-start relative">

        {/* Sticky Header - Left Column */}
        <div className="lg:w-1/3 sticky-header-content relative">
          <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-teal-400/20 via-white/5 to-transparent -ml-6 hidden lg:block" />
          <StickyHeader
            label="Capabilities"
            title="End-to-End Petroleum Logistics"
            description="We manage the complete lifecycle of energy distribution, from global trading desks to local retail stations, ensuring quality and continuity at every node of the supply chain."
          >
            <div className="mt-8 hidden lg:block">
              <div className="flex items-center gap-4 text-sm text-slate-400 font-mono">
                <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse"></span>
                <span>Operational Status: Normal</span>
              </div>
            </div>
          </StickyHeader>
        </div>

        {/* Operations Grid - Right Column */}
        <div className="lg:w-2/3 flex flex-col gap-6 w-full">
          {CORE_OPERATIONS.map((op) => {
            const Icon = ICONS[op.icon as string] || TrendingUp;
            return (
              <EnterpriseCard
                key={op.title}
                icon={Icon}
                title={op.title}
                description={op.description}
                className="operation-card w-full"
                actionLabel="Explore Capability"
              />
            );
          })}
        </div>
      </div>

      <Divider gradient className="mt-24" />
    </Section>
  );
}
