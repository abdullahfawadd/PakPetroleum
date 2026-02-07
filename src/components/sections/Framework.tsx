"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";

const FRAMEWORK_PILLARS = [
  {
    title: "Secures",
    label: "01",
    items: [
      "Requirements and allocation windows",
      "Strategic supplier coverage",
      "Critical equipment readiness",
    ],
  },
  {
    title: "Aligns",
    label: "02",
    items: [
      "Stakeholders, vendors, and schedules",
      "Contracted service levels",
      "On-ground delivery playbooks",
    ],
  },
  {
    title: "Validates",
    label: "03",
    items: [
      "Quality checks and documentation",
      "Compliance with OGRA standards",
      "Chain-of-custody transparency",
    ],
  },
  {
    title: "Curates",
    label: "04",
    items: [
      "Decision-ready reports",
      "Fuel performance insights",
      "Operational continuity summaries",
    ],
  },
];

export default function Framework() {
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
    <section id="framework" ref={sectionRef} className="section-padding bg-bg-surface">
      <div className="container-custom">
        <div ref={headerRef} className="text-center max-w-3xl mx-auto mb-16">
          <span className="badge-primary mb-4 inline-flex">Our Framework</span>
          <h2 className="text-display-sm md:text-display-md font-heading text-text-primary">
            One practical system.
            <span className="block gradient-text">Exponential daily value.</span>
          </h2>
          <p className="mt-4 text-lg text-text-secondary">
            Our teams secure, align, validate, and curate the operational details
            that keep petroleum supply chains stable.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {FRAMEWORK_PILLARS.map((pillar, index) => (
            <div
              key={pillar.title}
              ref={(el) => {
                cardsRef.current[index] = el;
              }}
              className="card-premium border border-border-light"
            >
              <div className="flex items-center justify-between">
                <h3 className="text-2xl font-heading text-text-primary">
                  {pillar.title}
                </h3>
                <span className="text-xs font-semibold uppercase tracking-[0.3em] text-text-muted">
                  {pillar.label}
                </span>
              </div>
              <ul className="mt-6 space-y-3">
                {pillar.items.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-text-secondary">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary-600" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
