"use client";

import { useEffect, useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import { gsap } from "@/lib/gsap";

const CONTINUITY_ITEMS = [
  {
    challenge: "Disruptive reactions to missed allocations",
    response: "Proactive allocation planning with weekly demand check-ins.",
  },
  {
    challenge: "Fragmented documentation across vendors",
    response: "Single-source compliance logs with audit-ready trails.",
  },
  {
    challenge: "Inconsistent delivery windows",
    response: "GPS-tracked ETAs with escalation-ready routing control.",
  },
  {
    challenge: "Reactive quality checks",
    response: "Batch testing plus chain-of-custody validation at every handoff.",
  },
  {
    challenge: "Unclear escalation ownership",
    response: "Dedicated operations desk with 24/7 response coverage.",
  },
];

export default function Continuity() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      if (headerRef.current) {
        gsap.from(headerRef.current.children, {
          opacity: 0,
          y: 40,
          duration: 0.8,
          ease: "power3.out",
          stagger: 0.12,
          scrollTrigger: {
            trigger: headerRef.current,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        });
      }

      const validItems = itemsRef.current.filter(Boolean) as HTMLDivElement[];
      if (validItems.length > 0) {
        gsap.from(validItems, {
          opacity: 0,
          y: 30,
          duration: 0.7,
          ease: "power3.out",
          stagger: 0.12,
          scrollTrigger: {
            trigger: validItems[0],
            start: "top 85%",
            toggleActions: "play none none none",
          },
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="continuity" ref={sectionRef} className="section-padding bg-bg">
      <div className="container-custom">
        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-12 items-start">
          <div ref={headerRef} className="space-y-6">
            <span className="badge-primary">Continuity</span>
            <h2 className="text-display-sm md:text-display-md font-heading text-text-primary">
              Stop playing catch up.
              <span className="block gradient-text">Enjoy calm execution.</span>
            </h2>
            <p className="text-lg text-text-secondary leading-relaxed">
              We turn complexity into clarity by stabilizing every handoff in the
              petroleum chain. Less firefighting, more predictable operations.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 text-sm font-semibold text-primary-700"
            >
              Build a continuity plan
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

          <div className="space-y-4">
            {CONTINUITY_ITEMS.map((item, index) => (
              <div
                key={item.challenge}
                ref={(el) => {
                  itemsRef.current[index] = el;
                }}
                className="grid md:grid-cols-2 gap-6 rounded-3xl border border-border bg-bg-card p-6 shadow-soft"
              >
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-text-muted">
                    Before
                  </p>
                  <p className="mt-3 text-base font-semibold text-text-primary">
                    {item.challenge}
                  </p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-text-muted">
                    After
                  </p>
                  <p className="mt-3 text-base font-semibold text-text-primary">
                    {item.response}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
