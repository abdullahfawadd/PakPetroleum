"use client";

import { useEffect, useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import { gsap } from "@/lib/gsap";

const INSIGHT_FEATURES = [
  {
    title: "Solvable drags slowing fuel teams",
    label: "Eliminating friction",
    summary:
      "High-volume operators lose momentum to fragmented supply signals. We consolidate the facts and accelerate decisions.",
  },
  {
    title: "The unseen layer of petroleum management",
    label: "Achieving continuity",
    summary:
      "We map dependencies across terminals, vendors, and stations to keep supply steady across every shift.",
  },
  {
    title: "Gaps that delay critical deliveries",
    label: "Accelerating execution",
    summary:
      "We remove handoff ambiguity so allocations move with clarity and compliance stays intact.",
  },
];

export default function Insights() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

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

      const cards = cardsRef.current.filter(Boolean) as HTMLDivElement[];
      if (cards.length > 0) {
        gsap.from(cards, {
          opacity: 0,
          y: 40,
          duration: 0.7,
          ease: "power3.out",
          stagger: 0.12,
          scrollTrigger: {
            trigger: cards[0],
            start: "top 85%",
            toggleActions: "play none none none",
          },
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="insights" ref={sectionRef} className="section-padding bg-bg-surface">
      <div className="container-custom">
        <div ref={headerRef} className="text-center max-w-3xl mx-auto mb-14">
          <span className="badge-primary mb-4 inline-flex">Insights</span>
          <h2 className="text-display-sm md:text-display-md font-heading text-text-primary">
            Actionable insight from within.
            <span className="block gradient-text">Fuel teams that move first.</span>
          </h2>
          <p className="mt-4 text-lg text-text-secondary">
            We surface the critical levers that keep petroleum operations stable,
            from allocation planning to delivery execution.
          </p>
        </div>

        <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-8">
          <div className="card-premium border border-border-light">
            <p className="text-xs uppercase tracking-[0.25em] text-text-muted">
              Featured Insight
            </p>
            <h3 className="mt-4 text-2xl font-heading text-text-primary">
              Solvable drags that slow down your best teams
            </h3>
            <p className="mt-3 text-sm text-text-secondary leading-relaxed">
              We reduce over-checking, fragmented documentation, and late-stage
              escalations by centralizing supply intelligence and validation.
            </p>
            <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-primary-700">
              Read the briefing
              <ArrowUpRight className="w-4 h-4" />
            </div>
          </div>

          <div className="grid gap-6">
            {INSIGHT_FEATURES.map((item, index) => (
              <div
                key={item.title}
                ref={(el) => {
                  cardsRef.current[index] = el;
                }}
                className="card-premium border border-border-light"
              >
                <p className="text-xs uppercase tracking-[0.25em] text-text-muted">
                  {item.label}
                </p>
                <h4 className="mt-3 text-lg font-heading text-text-primary">
                  {item.title}
                </h4>
                <p className="mt-2 text-sm text-text-secondary leading-relaxed">
                  {item.summary}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
