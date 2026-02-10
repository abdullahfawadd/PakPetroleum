'use client';

import { useEffect, useRef } from 'react';
import { Shield, Leaf, Activity, type LucideIcon } from 'lucide-react';
import { gsap } from '@/lib/gsap';
import { COMMITMENTS } from '@/lib/constants';

const ICON_MAP: Record<string, LucideIcon> = {
  shield: Shield,
  leaf: Leaf,
  lightbulb: Activity, // Changed to Activity for "Standards"
};

export default function Commitment() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      if (headerRef.current) {
        gsap.from(headerRef.current.children, {
          opacity: 0, y: 40, duration: 0.8, ease: 'power3.out', stagger: 0.12,
          scrollTrigger: { trigger: headerRef.current, start: 'top 85%', toggleActions: 'play none none none' },
        });
      }

      if (cardsRef.current) {
        gsap.from(cardsRef.current.children, {
          opacity: 0, y: 30, duration: 0.8, ease: 'power3.out', stagger: 0.1,
          scrollTrigger: { trigger: cardsRef.current, start: 'top 85%', toggleActions: 'play none none none' },
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="section-spacing relative bg-[#020c1b] border-t border-[#1e2d4d]"
    >
      <div className="container-custom relative z-10">
        <div ref={headerRef} className="text-center max-w-3xl mx-auto mb-20 lg:mb-28">
          <p className="overline-tag mb-6 text-teal-400">Our Standards</p>
          <h2 className="text-heading font-display text-slate-light mb-6">
            Uncompromising <br/>
            <span className="text-teal-400">Compliance & Safety.</span>
          </h2>
          <p className="text-lg text-slate-400 leading-relaxed max-w-2xl mx-auto">
            We operate under the strictest international guidelines for environmental protection,
            occupational health, and product quality.
          </p>
        </div>

        <div ref={cardsRef} className="grid md:grid-cols-3 gap-px bg-[#1e2d4d] border border-[#1e2d4d]">
          {COMMITMENTS.map((item) => {
            const Icon = ICON_MAP[item.icon] ?? Shield;

            return (
              <div
                key={item.title}
                className="group p-10 bg-[#0a192f] hover:bg-[#112240] transition-colors duration-300 flex flex-col items-center text-center"
              >
                <div className="mb-6 w-16 h-16 rounded-full bg-[#020c1b] flex items-center justify-center border border-[#1e2d4d] group-hover:border-teal-400/30 transition-colors">
                  <Icon className="w-8 h-8 text-teal-400" strokeWidth={1.5} />
                </div>

                <h3 className="text-xl font-bold font-display text-slate-light mb-4">{item.title}</h3>
                <p className="text-sm leading-relaxed text-slate-400">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
