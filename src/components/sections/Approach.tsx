"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";

const APPROACH_PILLARS = [
  {
    label: "01",
    title: "Secure",
    description: "We lock down allocation windows, supplier relationships, and equipment readiness before operations begin.",
  },
  {
    label: "02",
    title: "Align",
    description: "Stakeholders, vendors, and delivery schedules are synchronized to contracted service levels.",
  },
  {
    label: "03",
    title: "Validate",
    description: "Quality checks, OGRA compliance, and chain-of-custody documentation verified at every handoff.",
  },
  {
    label: "04",
    title: "Deliver",
    description: "GPS-tracked dispatch with escalation ownership, ensuring predictable flow from terminal to station.",
  },
];

export default function Approach() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      if (headerRef.current) {
        gsap.from(headerRef.current.children, {
          opacity: 0, y: 40, duration: 0.8, ease: "power3.out", stagger: 0.12,
          scrollTrigger: { trigger: headerRef.current, start: "top 85%", toggleActions: "play none none none" },
        });
      }

      const cards = cardsRef.current.filter(Boolean) as HTMLDivElement[];
      if (cards.length > 0) {
        gsap.from(cards, {
          opacity: 0, y: 40, duration: 0.7, ease: "power3.out", stagger: 0.12,
          scrollTrigger: { trigger: cards[0], start: "top 85%", toggleActions: "play none none none" },
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="approach"
      ref={sectionRef}
      className="section-spacing relative overflow-hidden"
      style={{ background: "#13101C" }}
    >
      <div
        aria-hidden="true"
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(ellipse, rgba(200,111,255,0.06) 0%, transparent 60%)",
          filter: "blur(60px)",
        }}
      />

      <div className="container-custom relative z-10">
        <div ref={headerRef} className="text-center max-w-3xl mx-auto mb-20 lg:mb-28">
          <p className="overline-tag mb-6">Our Approach</p>
          <h2 className="text-display font-heading text-white mb-6">
            A practical system for
            <span className="block text-gradient">predictable operations.</span>
          </h2>
          <p className="text-lg text-white/45 leading-relaxed max-w-2xl mx-auto">
            We turn complexity into clarity by stabilizing every handoff in the
            petroleum chain. Less firefighting, more dependable execution.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {APPROACH_PILLARS.map((pillar, index) => (
            <div
              key={pillar.title}
              ref={(el) => {
                cardsRef.current[index] = el;
              }}
              className="group relative"
            >
              {index < APPROACH_PILLARS.length - 1 && (
                <div
                  aria-hidden="true"
                  className="hidden lg:block absolute top-12 -right-3 w-6 h-px"
                  style={{ background: "rgba(200, 111, 255, 0.2)" }}
                />
              )}

              <div className="card-premium h-full">
                <div className="flex items-center justify-between mb-8">
                  <span
                    className="text-xs font-semibold uppercase tracking-[0.3em]"
                    style={{ color: "#C86FFF" }}
                  >
                    {pillar.label}
                  </span>
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center"
                    style={{ background: "rgba(200, 111, 255, 0.1)" }}
                  >
                    <div
                      className="w-2 h-2 rounded-full"
                      style={{ background: "#C86FFF" }}
                    />
                  </div>
                </div>

                <h3 className="text-2xl font-heading text-white mb-4">
                  {pillar.title}
                </h3>

                <p className="text-sm text-white/45 leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
