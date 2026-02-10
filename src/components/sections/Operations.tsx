'use client';

import { useEffect, useRef, useMemo } from 'react';
import { ShoppingCart, Database, Truck, TrendingUp, ArrowUpRight } from 'lucide-react';
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
          opacity: 0, y: 30, duration: 0.8, ease: 'power3.out', stagger: 0.1,
          scrollTrigger: { trigger: validCards[0], start: 'top 90%', toggleActions: 'play none none none' },
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="services"
      ref={sectionRef}
      className="section-spacing relative overflow-hidden bg-[#0a192f]"
    >
      <div className="container-custom relative z-10">
        <div ref={headerRef} className="flex flex-col md:flex-row justify-between items-end mb-20 lg:mb-28 gap-8 border-b border-[#1e2d4d] pb-8">
            <div>
              <p className="overline-tag mb-4">Core Operations</p>
              <h2 className="text-heading font-display text-slate-light max-w-2xl">
                End-to-End <span className="text-teal-400">Petroleum Logistics</span>
              </h2>
            </div>
            <p className="text-slate-400 max-w-sm mb-2 text-sm leading-relaxed">
               We manage the complete lifecycle of energy distribution, ensuring quality and continuity at every node.
            </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {OPERATIONS.map((operation, index) => {
            const IconComponent = ICON_MAP[operation.icon];

            return (
              <div
                key={operation.title}
                ref={setCardRefs[index]}
                className="group relative overflow-hidden p-8 lg:p-10 border border-[#1e2d4d] bg-[#020c1b] hover:border-teal-500/30 transition-all duration-500"
              >
                <div className="flex justify-between items-start mb-8">
                   <div className="w-12 h-12 rounded bg-[#112240] flex items-center justify-center group-hover:bg-teal-900/20 transition-colors">
                      {IconComponent && (
                        <IconComponent className="w-6 h-6 text-teal-400" strokeWidth={1.5} />
                      )}
                   </div>
                   <span className="font-mono text-xs text-slate-600 font-bold">
                      {NUMBER_LABELS[index]}
                   </span>
                </div>

                <h3 className="font-display text-2xl text-slate-light mb-4 group-hover:text-teal-400 transition-colors">
                  {operation.title}
                </h3>

                <p className="text-slate-400 leading-relaxed text-sm mb-8 pr-8">
                  {operation.description}
                </p>

                <div className="absolute bottom-6 right-6 opacity-0 transform translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                   <ArrowUpRight className="w-5 h-5 text-teal-400" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
