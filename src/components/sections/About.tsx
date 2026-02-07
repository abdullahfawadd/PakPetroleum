"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const stats = [
  { value: "150+", label: "Fuel Stations" },
  { value: "25+", label: "Cities Covered" },
  { value: "99.9%", label: "Uptime Rate" },
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
    <section ref={sectionRef} id="about" className="section-padding relative overflow-hidden" style={{ background: '#13101C' }}>
      {/* Background orb */}
      <div
        aria-hidden="true"
        className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(200,111,255,0.06) 0%, transparent 60%)', filter: 'blur(60px)' }}
      />

      <div className="container-main relative z-10">
        <div ref={headRef} className="mb-20">
          <p className="overline-tag mb-6">About</p>
          <h2 className="text-display font-heading text-white max-w-4xl">
            Petroleum, engineered for
            <span className="block text-gradient">reliability at scale.</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-5 gap-16 lg:gap-24">
          <div ref={leftRef} className="lg:col-span-3">
            <p className="text-body-lg text-white/55 mb-6 leading-relaxed">
              PAK Petroleum is a 2026 launch built for mission-critical fuel
              continuity. We align procurement, storage, and distribution so
              operators, fleets, and partners can move with confidence.
            </p>
            <p className="text-body-lg text-white/55 leading-relaxed">
              From Islamabad-Rawalpindi to the nation&apos;s highest-demand corridors,
              we deliver dependable supply, rigorous compliance, and a modern
              logistics backbone designed for growth.
            </p>
            <div className="mt-8 badge-primary">
              Founded 2026
            </div>
          </div>

          <div ref={rightRef} className="lg:col-span-2 space-y-6">
            {stats.map((stat) => (
              <div key={stat.label} className="card-premium" style={{ borderLeft: '3px solid rgba(200, 111, 255, 0.4)' }}>
                <p className="text-display font-heading text-gradient leading-none">
                  {stat.value}
                </p>
                <p className="text-caption text-white/35 uppercase tracking-widest mt-2">
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
