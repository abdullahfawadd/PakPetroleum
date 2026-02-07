"use client";

import { useEffect, useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import { gsap } from "@/lib/gsap";

const NEED_POINTS = [
  "Allocations slip when supply signals are fragmented.",
  "Quality checks happen too late in the chain.",
  "Escalations stay invisible until delivery risk spikes.",
  "Vendor handoffs create documentation gaps.",
  "Operations teams lose focus to manual re-checking.",
];

const SOLUTION_POINTS = [
  "Unified allocation planning prevents supply drift.",
  "Continuous validations sync to every handoff.",
  "Single point of contact across vendors and sites.",
  "Audit-ready context accelerates decisions.",
  "Predictable delivery windows for fleets and stations.",
];

export default function Need() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      if (headerRef.current) {
        gsap.from(headerRef.current.children, {
          opacity: 0, y: 40, duration: 0.8, ease: "power3.out", stagger: 0.12,
          scrollTrigger: { trigger: headerRef.current, start: "top 85%", toggleActions: "play none none none" },
        });
      }

      if (leftRef.current) {
        gsap.from(leftRef.current.children, {
          opacity: 0, y: 30, duration: 0.7, ease: "power3.out", stagger: 0.1,
          scrollTrigger: { trigger: leftRef.current, start: "top 85%", toggleActions: "play none none none" },
        });
      }

      if (rightRef.current) {
        gsap.from(rightRef.current, {
          opacity: 0, y: 30, duration: 0.7, ease: "power3.out",
          scrollTrigger: { trigger: rightRef.current, start: "top 85%", toggleActions: "play none none none" },
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="need" ref={sectionRef} className="section-padding text-white" style={{ background: '#13101C' }}>
      <div className="container-custom">
        <div ref={headerRef} className="text-center max-w-3xl mx-auto mb-12">
          <span className="badge-primary mb-4 inline-flex">Why Now</span>
          <h2 className="text-display-sm md:text-display-md font-heading">
            Stop playing catch up.
            <span className="block text-white/55">Enjoy peace of mind.</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-[1fr_auto_1fr] gap-8 items-center">
          <div ref={leftRef} className="space-y-4">
            <p className="text-xs uppercase tracking-[0.25em]" style={{ color: '#C86FFF' }}>Before</p>
            {NEED_POINTS.map((point) => (
              <div key={point} className="rounded-2xl p-4" style={{ background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.06)' }}>
                <p className="text-sm text-white/65">{point}</p>
              </div>
            ))}
          </div>

          <div className="relative hidden lg:flex items-center justify-center">
            <div
              className="h-56 w-56 rounded-full"
              style={{
                background: "radial-gradient(circle, rgba(200,111,255,0.15) 0%, rgba(200,111,255,0.02) 55%, transparent 70%)",
                border: "1px solid rgba(200,111,255,0.15)",
                boxShadow: "0 0 80px rgba(200,111,255,0.2)",
              }}
            />
            <div
              className="absolute h-40 w-40 rounded-full"
              style={{
                border: "1px solid rgba(255,214,0,0.2)",
                boxShadow: "0 0 60px rgba(255,214,0,0.1)",
              }}
            />
          </div>

          <div ref={rightRef} className="space-y-4">
            <p className="text-xs uppercase tracking-[0.25em]" style={{ color: '#FFD600' }}>After</p>
            {SOLUTION_POINTS.map((point) => (
              <div key={point} className="rounded-2xl p-4" style={{ background: 'rgba(200, 111, 255, 0.06)', border: '1px solid rgba(200, 111, 255, 0.12)' }}>
                <p className="text-sm text-white/85">{point}</p>
              </div>
            ))}
            <a
              href="#contact"
              className="inline-flex items-center gap-2 text-sm font-semibold"
              style={{ color: '#C86FFF' }}
            >
              Build the plan
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
