"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const stats = [
  { value: "150+", label: "Fuel Stations", color: "border-primary-200" },
  { value: "25+", label: "Cities Covered", color: "border-secondary-200" },
  { value: "99.9%", label: "Uptime Rate", color: "border-accent-200" },
];

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const headRef = useRef<HTMLDivElement>(null);
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;
    const ctx = gsap.context(() => {
      gsap.from(headRef.current, {
        opacity: 0, y: 60, duration: 1, ease: "power3.out",
        scrollTrigger: { trigger: sectionRef.current, start: "top 80%", toggleActions: "play none none none" },
      });
      gsap.from(leftRef.current, {
        opacity: 0, x: -40, duration: 1, ease: "power3.out",
        scrollTrigger: { trigger: leftRef.current, start: "top 85%", toggleActions: "play none none none" },
      });
      gsap.from(rightRef.current, {
        opacity: 0, x: 40, duration: 1, ease: "power3.out",
        scrollTrigger: { trigger: rightRef.current, start: "top 85%", toggleActions: "play none none none" },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="about" className="section-padding bg-bg">
      <div className="container-main">
        {/* Header */}
        <div ref={headRef} className="mb-16">
          <p className="overline-tag mb-6">About</p>
          <h2 className="text-display font-heading text-text-primary max-w-4xl">
            Petroleum, engineered for
            <span className="block gradient-text">reliability at scale.</span>
          </h2>
        </div>

        {/* Two columns */}
        <div className="grid lg:grid-cols-5 gap-16 lg:gap-24">
          {/* Left - text */}
          <div ref={leftRef} className="lg:col-span-3">
            <p className="text-body-lg text-text-secondary mb-6 leading-relaxed">
              PAK Petroleum is a 2026 launch built for mission-critical fuel
              continuity. We align procurement, storage, and distribution so
              operators, fleets, and partners can move with confidence.
            </p>
            <p className="text-body-lg text-text-secondary leading-relaxed">
              From Islamabad-Rawalpindi to the nation&apos;s highest-demand corridors,
              we deliver dependable supply, rigorous compliance, and a modern
              logistics backbone designed for growth.
            </p>
            <div className="mt-8 inline-flex items-center gap-3 px-5 py-3 rounded-full bg-primary-50 text-primary-900 text-xs font-semibold uppercase tracking-[0.2em]">
              Founded 2026
            </div>
          </div>

          {/* Right - stats */}
          <div ref={rightRef} className="lg:col-span-2 space-y-6">
            {stats.map((stat, i) => (
              <div key={i} className={`card-premium border-l-4 ${stat.color}`}>
                <p className="text-display font-heading text-text-primary leading-none">
                  {stat.value}
                </p>
                <p className="text-caption text-text-muted uppercase tracking-widest mt-2">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
