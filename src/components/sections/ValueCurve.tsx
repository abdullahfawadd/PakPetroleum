"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";

const VALUE_COLUMNS = [
  {
    title: "Secures",
    items: ["requirements", "expectations", "context", "facts"],
  },
  {
    title: "Aligns",
    items: ["dependencies", "stakeholders", "processes", "vendors"],
  },
  {
    title: "Validates",
    items: ["completeness", "coherence", "assurances", "details"],
  },
  {
    title: "Curates",
    items: ["deliverables", "resolutions", "initiatives", "stages"],
  },
];

export default function ValueCurve() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const columnsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      if (headerRef.current) {
        gsap.from(headerRef.current.children, {
          opacity: 0, y: 40, duration: 0.8, ease: "power3.out", stagger: 0.12,
          scrollTrigger: { trigger: headerRef.current, start: "top 85%", toggleActions: "play none none none" },
        });
      }

      const columns = columnsRef.current.filter(Boolean) as HTMLDivElement[];
      if (columns.length > 0) {
        gsap.from(columns, {
          opacity: 0, y: 30, duration: 0.7, ease: "power3.out", stagger: 0.12,
          scrollTrigger: { trigger: columns[0], start: "top 85%", toggleActions: "play none none none" },
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="value" ref={sectionRef} className="section-padding" style={{ background: '#1A1726' }}>
      <div className="container-custom">
        <div ref={headerRef} className="text-center max-w-3xl mx-auto mb-14">
          <span className="badge-primary mb-4 inline-flex">Dependable Precision</span>
          <h2 className="text-display-sm md:text-display-md font-heading text-white">
            One practical, holistic service.
            <span className="block text-gradient-warm">Exponential daily value.</span>
          </h2>
          <p className="mt-4 text-lg text-white/50">
            PAK Petroleum teams secure, align, validate, and curate the operational
            details that keep energy networks moving.
          </p>
        </div>

        <div className="relative card-premium overflow-hidden">
          <div className="absolute inset-0 bg-mesh opacity-40" aria-hidden="true" />
          <div className="relative z-10 grid md:grid-cols-4 gap-6">
            {VALUE_COLUMNS.map((col, index) => (
              <div
                key={col.title}
                ref={(el) => { columnsRef.current[index] = el; }}
                className="space-y-3"
              >
                <p className="text-xs uppercase tracking-[0.25em]" style={{ color: '#C86FFF' }}>
                  {col.title}
                </p>
                <div className="h-16 w-px" style={{ background: 'linear-gradient(to bottom, #C86FFF, #FFD600, transparent)' }} />
                <ul className="space-y-2 text-sm text-white/50">
                  {col.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="relative z-10 mt-10">
            <svg viewBox="0 0 900 200" className="w-full h-auto" aria-hidden="true">
              <defs>
                <linearGradient id="valueWave" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#AC24FF" stopOpacity="0.3" />
                  <stop offset="35%" stopColor="#C86FFF" stopOpacity="0.3" />
                  <stop offset="65%" stopColor="#FE881B" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="#FFD600" stopOpacity="0.3" />
                </linearGradient>
                <linearGradient id="valueStroke" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#AC24FF" />
                  <stop offset="35%" stopColor="#C86FFF" />
                  <stop offset="65%" stopColor="#FE881B" />
                  <stop offset="100%" stopColor="#FFD600" />
                </linearGradient>
              </defs>
              <path
                d="M0 140 C 120 60, 260 220, 380 140 C 500 60, 640 220, 760 140 C 840 90, 900 80, 900 80 L 900 200 L 0 200 Z"
                fill="url(#valueWave)"
              />
              <path
                d="M0 140 C 120 60, 260 220, 380 140 C 500 60, 640 220, 760 140 C 840 90, 900 80, 900 80"
                fill="none"
                stroke="url(#valueStroke)"
                strokeWidth="3"
                strokeLinecap="round"
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
