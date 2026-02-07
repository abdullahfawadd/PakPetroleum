"use client";

import { useEffect, useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import { gsap } from "@/lib/gsap";

const SYSTEM_LAYERS = [
  {
    title: "Supply Intelligence",
    detail: "Demand forecasting, allocation windows, and reserve positioning.",
  },
  {
    title: "Storage Control",
    detail: "Tank monitoring, quality checks, and regulated safety protocols.",
  },
  {
    title: "Dispatch Rhythm",
    detail: "Route orchestration, GPS tracking, and exception handling.",
  },
  {
    title: "Compliance Proof",
    detail: "OGRA-aligned documentation with audit-ready trails.",
  },
];

export default function Systems() {
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
          y: 30,
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
    <section id="systems" ref={sectionRef} className="section-padding bg-bg">
      <div className="container-custom">
        <div ref={headerRef} className="text-center max-w-3xl mx-auto mb-14">
          <span className="badge-primary mb-4 inline-flex">Systems</span>
          <h2 className="text-display-sm md:text-display-md font-heading text-text-primary">
            One petroleum system.
            <span className="block gradient-text">Every handoff synchronized.</span>
          </h2>
          <p className="mt-4 text-lg text-text-secondary">
            We design the operational system behind every delivery so the network
            runs with steady cadence, clear accountability, and zero surprises.
          </p>
        </div>

        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-8">
          <div className="grid sm:grid-cols-2 gap-6">
            {SYSTEM_LAYERS.map((layer, index) => (
              <div
                key={layer.title}
                ref={(el) => {
                  cardsRef.current[index] = el;
                }}
                className="card-premium border border-border-light"
              >
                <p className="text-xs uppercase tracking-[0.2em] text-text-muted">
                  Layer {index + 1}
                </p>
                <h3 className="mt-4 text-xl font-heading text-text-primary">
                  {layer.title}
                </h3>
                <p className="mt-3 text-sm text-text-secondary leading-relaxed">
                  {layer.detail}
                </p>
              </div>
            ))}
          </div>

          <div className="relative rounded-3xl border border-border bg-bg-card p-8 shadow-soft">
            <div className="absolute inset-0 rounded-3xl bg-mesh-gradient opacity-70" aria-hidden="true" />
            <div className="relative z-10 space-y-6">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-text-muted">
                  Continuity OS
                </p>
                <h3 className="mt-3 text-3xl font-heading text-text-primary">
                  Decision-ready intelligence
                </h3>
              </div>
              <p className="text-text-secondary leading-relaxed">
                A unified layer of context, validation, and execution signals that
                keeps your petroleum network aligned from procurement to delivery.
              </p>
              <div className="grid grid-cols-2 gap-4 text-sm text-text-secondary">
                <div className="rounded-2xl border border-border bg-bg-surface px-4 py-3">
                  24/7 operations desk
                </div>
                <div className="rounded-2xl border border-border bg-bg-surface px-4 py-3">
                  Weekly allocation syncs
                </div>
                <div className="rounded-2xl border border-border bg-bg-surface px-4 py-3">
                  Audit-ready reporting
                </div>
                <div className="rounded-2xl border border-border bg-bg-surface px-4 py-3">
                  Escalation ownership
                </div>
              </div>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 text-sm font-semibold text-primary-700"
              >
                Talk to the continuity team
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
