'use client';

import { useEffect, useRef } from 'react';
import CountUp from 'react-countup';
import { gsap } from '@/lib/gsap';
import { STATS } from '@/lib/constants';
import { cn } from '@/lib/utils';

/* ----------------------------------------
   Single stat card
   ---------------------------------------- */
interface StatCardProps {
  value: number;
  suffix: string;
  label: string;
  index: number;
  isLast: boolean;
}

function StatCard({ value, suffix, label, index, isLast }: StatCardProps) {
  // Determine if value has decimals for formatting
  const decimals = value % 1 !== 0 ? 1 : 0;

  return (
    <div className="stat-card relative flex flex-col items-center text-center px-6 py-8 lg:py-0">
      {/* Animated count-up value */}
      <div className="flex items-baseline gap-1">
        <CountUp
          end={value}
          decimals={decimals}
          duration={2.5}
          enableScrollSpy
          scrollSpyOnce
          scrollSpyDelay={index * 150}
        >
          {({ countUpRef }) => (
            <span
              ref={countUpRef}
              className="text-display-md lg:text-display-lg font-bold text-primary-500"
            />
          )}
        </CountUp>
        <span className="text-display-sm lg:text-display-md font-bold text-primary-500">
          {suffix}
        </span>
      </div>

      {/* Label */}
      <p className="mt-2 text-sm lg:text-base font-medium text-dark-200">
        {label}
      </p>

      {/* Subtle divider between stat cards (not after the last one) */}
      {!isLast && (
        <div
          aria-hidden="true"
          className={cn(
            'hidden lg:block absolute right-0 top-1/2 -translate-y-1/2',
            'w-px h-16 bg-gradient-to-b from-transparent via-primary-200 to-transparent',
          )}
        />
      )}
    </div>
  );
}

/* ----------------------------------------
   Metrics section
   ---------------------------------------- */
export default function Metrics() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      /* --- Whole section entrance --- */
      gsap.from('.metrics-inner', {
        opacity: 0,
        y: 50,
        duration: 0.9,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
      });

      /* --- Stat cards staggered entrance --- */
      gsap.from('.stat-card', {
        opacity: 0,
        y: 30,
        duration: 0.6,
        ease: 'power3.out',
        stagger: 0.15,
        scrollTrigger: {
          trigger: '.metrics-grid',
          start: 'top 88%',
          toggleActions: 'play none none none',
        },
      });

      /* --- Decorative dots slow drift --- */
      gsap.to('.metrics-dots', {
        y: -10,
        duration: 5,
        ease: 'sine.inOut',
        repeat: -1,
        yoyo: true,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden section-padding-sm bg-gray-50"
    >
      {/* ---- Mesh-gradient overlay ---- */}
      <div
        aria-hidden="true"
        className={cn(
          'absolute inset-0 pointer-events-none',
          'bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(11,61,145,0.06),transparent)]',
        )}
      />

      {/* ---- Decorative gradient line top ---- */}
      <div
        aria-hidden="true"
        className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary-200 to-transparent"
      />

      {/* ---- Decorative dots pattern ---- */}
      <div
        aria-hidden="true"
        className={cn(
          'metrics-dots absolute -top-6 right-12 grid grid-cols-5 gap-3 opacity-20 pointer-events-none',
        )}
      >
        {Array.from({ length: 25 }).map((_, i) => (
          <span
            key={i}
            className="block w-1.5 h-1.5 rounded-full bg-primary-300"
          />
        ))}
      </div>

      {/* ---- Decorative dots pattern bottom-left ---- */}
      <div
        aria-hidden="true"
        className={cn(
          'absolute -bottom-4 left-8 grid grid-cols-4 gap-3 opacity-15 pointer-events-none',
        )}
      >
        {Array.from({ length: 16 }).map((_, i) => (
          <span
            key={i}
            className="block w-1.5 h-1.5 rounded-full bg-secondary-300"
          />
        ))}
      </div>

      <div className="container-custom relative z-10">
        <div className="metrics-inner">
          {/* ---- Header ---- */}
          <div className="text-center mb-14">
            <h2 className="text-display-sm lg:text-display-md font-bold text-dark-500">
              Our Impact in Numbers
            </h2>
            <div className="mt-4 mx-auto w-16 h-1 rounded-full bg-gradient-to-r from-primary-500 to-secondary-500" />
          </div>

          {/* ---- Stats grid ---- */}
          <div className="metrics-grid grid grid-cols-2 lg:grid-cols-4 gap-y-10 lg:gap-y-0">
            {STATS.map((stat, index) => (
              <StatCard
                key={stat.label}
                value={stat.value}
                suffix={stat.suffix}
                label={stat.label}
                index={index}
                isLast={index === STATS.length - 1}
              />
            ))}
          </div>
        </div>
      </div>

      {/* ---- Decorative gradient line bottom ---- */}
      <div
        aria-hidden="true"
        className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-secondary-200 to-transparent"
      />
    </section>
  );
}
