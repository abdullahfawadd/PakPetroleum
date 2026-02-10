'use client';

import React from 'react';
import { Section } from '@/components/ui/Section';
import { KpiBlock } from '@/components/ui/KpiBlock';
import { StickyHeader } from '@/components/ui/StickyHeader';
import { STATS } from '@/lib/constants';

export default function Metrics() {
  return (
    <Section variant="large" className="relative z-10" containerClassName="flex flex-col lg:flex-row gap-12 lg:gap-24">
      {/* Sticky Header - positioned on the left for desktop, top for mobile */}
      <div className="lg:w-1/3">
        <StickyHeader
          label="Performance"
          title="Measurable Momentum"
          description="Transparent performance metrics from our growing 2026 launch network. We track every drop and every mile to ensure maximum efficiency."
        />
      </div>

      {/* Grid of KPI Blocks - taking up the rest of the space */}
      <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-4">
        {STATS.map((stat, idx) => (
          <KpiBlock
            key={stat.label}
            idx={idx}
            value={stat.value}
            suffix={stat.suffix}
            label={stat.label}
            decimals={stat.value % 1 !== 0 ? 1 : 0}
            className="rounded-lg bg-navy-900/50 border border-white/5"
          />
        ))}
      </div>

      <div
        aria-hidden="true"
        className="absolute top-1/2 right-0 -translate-y-1/2 w-[500px] h-[500px] bg-teal-500/5 blur-[120px] rounded-full pointer-events-none"
      />
    </Section>
  );
}
