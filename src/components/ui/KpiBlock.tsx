'use client';

import React from 'react';
import CountUp from 'react-countup';
import { cn } from '@/lib/utils';

interface KpiBlockProps {
  value: number;
  suffix?: string;
  label: string;
  decimals?: number;
  duration?: number;
  className?: string;
  idx?: number; // For stagger delay
}

export function KpiBlock({
  value,
  suffix = '',
  label,
  decimals = 0,
  duration = 2.5,
  className,
  idx = 0,
}: KpiBlockProps) {

  return (
    <div
      className={cn(
        "kpi-block group relative flex flex-col items-start p-6 border-l border-white/10 hover:border-teal-400/50 transition-colors duration-500 bg-navy-900/20 hover:bg-navy-800/30 backdrop-blur-sm",
        className
      )}
    >
      <div className="absolute top-0 left-0 w-1 h-0 bg-teal-400 group-hover:h-full transition-all duration-700 ease-in-out" />

      <div className="flex items-baseline gap-1 mb-2">
        <CountUp
          end={value}
          decimals={decimals}
          duration={duration}
          separator=","
          enableScrollSpy
          scrollSpyOnce
          scrollSpyDelay={idx * 100}
        >
          {({ countUpRef }) => (
            <span
              ref={countUpRef}
              className="text-4xl md:text-5xl lg:text-6xl font-mono font-bold text-white tracking-tighter tabular-nums"
            />
          )}
        </CountUp>
        {suffix && (
          <span className="text-2xl md:text-3xl font-mono text-teal-400 font-light opacity-80">
            {suffix}
          </span>
        )}
      </div>

      <p className="text-sm md:text-base font-medium text-slate-400 uppercase tracking-widest">
        {label}
      </p>
    </div>
  );
}
