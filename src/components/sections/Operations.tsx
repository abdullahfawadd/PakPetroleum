'use client';

import { useEffect, useRef, useCallback } from 'react';
import { ShoppingCart, Database, Truck, TrendingUp, ArrowRight } from 'lucide-react';
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

  const setCardRef = useCallback(
    (index: number) => (el: HTMLDivElement | null) => {
      cardsRef.current[index] = el;
    },
    []
  );

  // GSAP scroll-triggered animations
  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Header reveal animation
      if (headerRef.current) {
        gsap.from(headerRef.current.children, {
          opacity: 0,
          y: 40,
          duration: 0.8,
          ease: 'power3.out',
          stagger: 0.12,
          scrollTrigger: {
            trigger: headerRef.current,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        });
      }

      // Cards staggered reveal
      const validCards = cardsRef.current.filter(Boolean) as HTMLDivElement[];
      if (validCards.length > 0) {
        gsap.from(validCards, {
          opacity: 0,
          y: 80,
          duration: 0.9,
          ease: 'power3.out',
          stagger: 0.15,
          scrollTrigger: {
            trigger: validCards[0],
            start: 'top 88%',
            toggleActions: 'play none none none',
          },
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // 3D tilt effect on mouse move
  useEffect(() => {
    const cards = cardsRef.current.filter(Boolean) as HTMLDivElement[];
    const cleanups: (() => void)[] = [];

    cards.forEach((card) => {
      const handleMouseMove = (e: MouseEvent) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = ((y - centerY) / centerY) * -8;
        const rotateY = ((x - centerX) / centerX) * 8;

        gsap.to(card, {
          rotateX,
          rotateY,
          duration: 0.4,
          ease: 'power2.out',
          transformPerspective: 800,
        });
      };

      const handleMouseLeave = () => {
        gsap.to(card, {
          rotateX: 0,
          rotateY: 0,
          duration: 0.6,
          ease: 'elastic.out(1, 0.4)',
        });
      };

      card.addEventListener('mousemove', handleMouseMove);
      card.addEventListener('mouseleave', handleMouseLeave);

      cleanups.push(() => {
        card.removeEventListener('mousemove', handleMouseMove);
        card.removeEventListener('mouseleave', handleMouseLeave);
      });
    });

    return () => {
      cleanups.forEach((fn) => fn());
    };
  }, []);

  return (
    <section
      id="operations"
      ref={sectionRef}
      className="section-padding relative overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-mesh-gradient opacity-60 pointer-events-none" />
      <div className="absolute top-1/4 -right-32 w-96 h-96 bg-primary-200/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -left-32 w-96 h-96 bg-secondary-200/40 rounded-full blur-3xl pointer-events-none" />

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div ref={headerRef} className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <span className="badge-primary mb-6 inline-flex">
            <span className="w-2 h-2 rounded-full bg-primary-600" />
            Our Approach
          </span>

          <h2 className="text-display-sm lg:text-display-md font-heading text-text-primary mb-6">
            One connected chain for
            <span className="block gradient-text">petroleum continuity.</span>
          </h2>

          <p className="text-lg text-text-secondary leading-relaxed">
            We align sourcing, storage, and delivery so partners get reliable
            fuel supply without disruption, paperwork friction, or blind spots.
          </p>
        </div>

        {/* Operations Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {OPERATIONS.map((operation, index) => {
            const IconComponent = ICON_MAP[operation.icon];

            return (
              <div
                key={operation.title}
                ref={setCardRef(index)}
                className="group card-premium relative overflow-hidden cursor-pointer
                           border border-border hover:border-border-active
                           transition-all duration-500 ease-out-expo
                           hover:-translate-y-1 hover:shadow-soft"
                style={{ transformStyle: 'preserve-3d' }}
              >
                {/* Number indicator */}
                <span className="absolute top-6 right-8 text-[4.5rem] leading-none font-heading text-text-muted/70 select-none pointer-events-none transition-colors duration-500 group-hover:text-primary-100/70">
                  {NUMBER_LABELS[index]}
                </span>

                {/* Content wrapper */}
                <div className="relative z-10">
                  {/* Icon area */}
                  <div className="mb-6">
                    <div
                      className={`relative w-14 h-14 rounded-2xl bg-gradient-to-br ${operation.gradient}
                                  flex items-center justify-center shadow-md
                                  transition-transform duration-500 ease-out-expo
                                  group-hover:scale-105`}
                    >
                      {IconComponent && (
                        <IconComponent className="w-7 h-7 text-white relative z-10" strokeWidth={1.8} />
                      )}
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="font-heading text-xl text-text-primary mb-3 transition-colors duration-300 group-hover:text-primary-700">
                    {operation.title}
                  </h3>

                  {/* Description */}
                  <p className="text-text-secondary leading-relaxed mb-6">
                    {operation.description}
                  </p>

                  {/* Learn More link */}
                  <div className="inline-flex items-center gap-2 text-sm font-semibold text-primary-700 transition-all duration-300 group-hover:gap-3">
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </div>
                </div>

                {/* Bottom accent line */}
                <div
                  className={`absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r ${operation.gradient}
                              transition-all duration-700 ease-out-expo group-hover:w-full`}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
