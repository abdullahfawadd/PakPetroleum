'use client';

import { useEffect, useRef } from 'react';
import { Shield, Leaf, Lightbulb, type LucideIcon } from 'lucide-react';
import { gsap } from '@/lib/gsap';
import { COMMITMENTS } from '@/lib/constants';

const ICON_MAP: Record<string, LucideIcon> = {
  shield: Shield,
  leaf: Leaf,
  lightbulb: Lightbulb,
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
          opacity: 0, y: 50, scale: 0.97, duration: 0.7, ease: 'power3.out', stagger: 0.12,
          scrollTrigger: { trigger: cardsRef.current, start: 'top 85%', toggleActions: 'play none none none' },
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="section-spacing relative overflow-hidden"
      style={{ background: '#1A1726' }}
    >
      <div
        aria-hidden="true"
        className="absolute -top-32 -right-32 w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(200, 111, 255, 0.06) 0%, transparent 60%)',
          filter: 'blur(60px)',
        }}
      />

      <div className="container-custom relative z-10">
        <div ref={headerRef} className="text-center max-w-3xl mx-auto mb-20 lg:mb-28">
          <p className="overline-tag mb-6">Our Promise</p>
          <h2 className="text-display font-heading text-white mb-6">
            Standards that never bend.
          </h2>
          <p className="text-lg text-white/45 leading-relaxed max-w-2xl mx-auto">
            Every supply decision is anchored in safety, environmental integrity,
            and consistent service delivery.
          </p>
        </div>

        <div ref={cardsRef} className="grid md:grid-cols-3 gap-6">
          {COMMITMENTS.map((item) => {
            const Icon = ICON_MAP[item.icon] ?? Shield;

            return (
              <div
                key={item.title}
                className="group card-dark flex flex-col items-start gap-6"
              >
                <div
                  className="flex items-center justify-center w-14 h-14 rounded-xl transition-transform duration-500 group-hover:scale-110"
                  style={{
                    background: 'linear-gradient(135deg, rgba(200, 111, 255, 0.15), rgba(27, 77, 254, 0.1))',
                  }}
                >
                  <Icon className="w-7 h-7" style={{ color: '#C86FFF' }} strokeWidth={1.8} />
                </div>

                <h3 className="text-lg font-bold text-white">{item.title}</h3>
                <p className="text-sm leading-relaxed text-white/45">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
