'use client';

import React, { useRef } from 'react';
import { cn } from '@/lib/utils';
import { gsap } from '@/lib/gsap';
import { useGSAP } from '@/hooks/useGSAP';
import { EASINGS } from '@/lib/motion';

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
  const countRef = useRef<HTMLSpanElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const el = countRef.current;
    if (!el) return;

    const obj = { val: 0 };

    gsap.to(obj, {
      val: value,
      duration: duration,
      delay: idx * 0.1, // Stagger based on idx
      ease: EASINGS.EXPO, // Power/Stability
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 85%",
        toggleActions: "play none none none",
      },
      onUpdate: () => {
        el.textContent = obj.val.toLocaleString(undefined, {
          minimumFractionDigits: decimals,
          maximumFractionDigits: decimals,
        });
      },
    });
  }, [value, duration, decimals, idx]);

  return (
    <div
      ref={containerRef}
      className={cn(
        "kpi-block group relative flex flex-col items-start p-6 border-l border-white/10 hover:border-teal-400/50 transition-colors duration-500 bg-navy-900/20 hover:bg-navy-800/30 backdrop-blur-sm",
        className
      )}
    >
      <div className="absolute top-0 left-0 w-1 h-0 bg-teal-400 group-hover:h-full transition-all duration-700 ease-in-out" />

      <div className="flex items-baseline gap-1 mb-2">
        <span
          ref={countRef}
          className="text-4xl md:text-5xl lg:text-6xl font-mono font-bold text-white tracking-tighter tabular-nums"
        >
          0
        </span>
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
