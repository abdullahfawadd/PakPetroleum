'use client';

import { useEffect, useRef } from 'react';
import CountUp from 'react-countup';
import { gsap } from '@/lib/gsap';
import { STATS } from '@/lib/constants';

interface StatCardProps {
  value: number;
  suffix: string;
  label: string;
  index: number;
  isLast: boolean;
}

function StatCard({ value, suffix, label, index, isLast }: StatCardProps) {
  const decimals = value % 1 !== 0 ? 1 : 0;

  return (
    <div className="stat-card relative flex flex-col items-center text-center px-6 py-8 lg:py-0">
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
              className="text-display-md lg:text-display-lg font-bold text-gradient"
            />
          )}
        </CountUp>
        <span className="text-display-sm lg:text-display-md font-bold text-gradient">
          {suffix}
        </span>
      </div>

      <p className="mt-2 text-sm lg:text-base font-medium text-white/50">
        {label}
      </p>

      {!isLast && (
        <div
          aria-hidden="true"
          className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 w-px h-16"
          style={{ background: 'linear-gradient(to bottom, transparent, rgba(200, 111, 255, 0.3), transparent)' }}
        />
      )}
    </div>
  );
}

export default function Metrics() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      gsap.from('.metrics-inner', {
        opacity: 0, y: 50, duration: 0.9, ease: 'power3.out',
        scrollTrigger: { trigger: sectionRef.current, start: 'top 85%', toggleActions: 'play none none none' },
      });

      gsap.from('.stat-card', {
        opacity: 0, y: 30, duration: 0.6, ease: 'power3.out', stagger: 0.15,
        scrollTrigger: { trigger: '.metrics-grid', start: 'top 88%', toggleActions: 'play none none none' },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative overflow-hidden section-padding-sm" style={{ background: '#1A1726' }}>
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 80% 50% at 50% -20%, rgba(200, 111, 255, 0.08), transparent)' }}
      />

      <div
        aria-hidden="true"
        className="absolute top-0 left-0 w-full h-px"
        style={{ background: 'linear-gradient(to right, transparent, rgba(200, 111, 255, 0.2), transparent)' }}
      />

      <div className="container-custom relative z-10">
        <div className="metrics-inner">
          <div className="text-center mb-14">
            <h2 className="text-display-sm lg:text-display-md font-heading text-white">
              Measurable momentum
            </h2>
            <p className="mt-4 text-white/50 max-w-2xl mx-auto">
              Transparent performance metrics from our growing 2026 launch network.
            </p>
            <div className="mt-6 mx-auto w-16 h-1 rounded-full gradient-bar" />
          </div>

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

      <div
        aria-hidden="true"
        className="absolute bottom-0 left-0 w-full h-px"
        style={{ background: 'linear-gradient(to right, transparent, rgba(200, 111, 255, 0.2), transparent)' }}
      />
    </section>
  );
}
