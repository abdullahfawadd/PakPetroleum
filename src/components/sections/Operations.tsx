'use client';

import { useEffect, useRef, useMemo } from 'react';
import { ShoppingCart, Database, Truck, TrendingUp } from 'lucide-react';
import { gsap } from '@/lib/gsap';
import { OPERATIONS } from '@/lib/constants';

const ICON_MAP: Record<string, React.ElementType> = {
  procurement: ShoppingCart,
  storage: Database,
  distribution: Truck,
  trading: TrendingUp,
};

const NUMBER_LABELS = ['01', '02', '03', '04'] as const;

export default function Operations() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const headerRef = useRef<HTMLDivElement>(null);

  const setCardRefs = useMemo(
    () =>
      OPERATIONS.map((_, index) => (el: HTMLDivElement | null) => {
        cardsRef.current[index] = el;
      }),
    []
  );

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      if (headerRef.current) {
        gsap.from(headerRef.current.children, {
          opacity: 0, y: 40, duration: 0.8, ease: 'power3.out', stagger: 0.12,
          scrollTrigger: { trigger: headerRef.current, start: 'top 85%', toggleActions: 'play none none none' },
        });
      }

      const validCards = cardsRef.current.filter(Boolean) as HTMLDivElement[];
      if (validCards.length > 0) {
        gsap.from(validCards, {
          opacity: 0, y: 80, duration: 0.9, ease: 'power3.out', stagger: 0.15,
          scrollTrigger: { trigger: validCards[0], start: 'top 88%', toggleActions: 'play none none none' },
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="services"
      ref={sectionRef}
      className="section-spacing relative overflow-hidden"
      style={{ background: '#1A1726' }}
    >
      <div
        aria-hidden="true"
        className="absolute top-1/4 -right-32 w-96 h-96 rounded-full pointer-events-none"
        style={{ background: 'rgba(200, 111, 255, 0.06)', filter: 'blur(80px)' }}
      />

      <div className="container-custom relative z-10">
        <div ref={headerRef} className="text-center max-w-3xl mx-auto mb-20 lg:mb-28">
          <p className="overline-tag mb-6">What We Do</p>

          <h2 className="text-display font-heading text-white mb-6">
            One connected chain for
            <span className="block text-gradient">petroleum continuity.</span>
          </h2>

          <p className="text-lg text-white/45 leading-relaxed max-w-2xl mx-auto">
            We align sourcing, storage, and delivery so partners get reliable
            fuel supply without disruption or blind spots.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {OPERATIONS.map((operation, index) => {
            const IconComponent = ICON_MAP[operation.icon];

            return (
              <div
                key={operation.title}
                ref={setCardRefs[index]}
                className="group card-dark relative overflow-hidden"
              >
                <span className="absolute top-6 right-8 text-[4.5rem] leading-none font-heading text-white/[0.03] select-none pointer-events-none transition-colors duration-500 group-hover:text-white/[0.06]">
                  {NUMBER_LABELS[index]}
                </span>

                <div className="relative z-10">
                  <div className="mb-6">
                    <div
                      className="relative w-14 h-14 rounded-2xl flex items-center justify-center transition-transform duration-500 group-hover:scale-105"
                      style={{ background: 'linear-gradient(135deg, rgba(200, 111, 255, 0.15), rgba(27, 77, 254, 0.1))' }}
                    >
                      {IconComponent && (
                        <IconComponent className="w-7 h-7 text-purple-400 relative z-10" strokeWidth={1.8} />
                      )}
                    </div>
                  </div>

                  <h3 className="font-heading text-xl text-white mb-3 transition-colors duration-300 group-hover:text-purple-300">
                    {operation.title}
                  </h3>

                  <p className="text-white/45 leading-relaxed">
                    {operation.description}
                  </p>
                </div>

                <div
                  className="absolute bottom-0 left-0 h-[2px] w-0 transition-all duration-700 group-hover:w-full"
                  style={{ background: 'linear-gradient(90deg, #AC24FF, #C86FFF, #E59DFA)' }}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
