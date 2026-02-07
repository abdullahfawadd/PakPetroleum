'use client';

import { useEffect, useRef } from 'react';
import { Shield, Leaf, FileCheck, Lightbulb, Users, Award, type LucideIcon } from 'lucide-react';
import { gsap } from '@/lib/gsap';
import { COMMITMENTS } from '@/lib/constants';
import { cn } from '@/lib/utils';

/* ----------------------------------------
   Icon mapping for each commitment entry
   ---------------------------------------- */
const ICON_MAP: Record<string, LucideIcon> = {
  shield: Shield,
  leaf: Leaf,
  document: FileCheck,
  lightbulb: Lightbulb,
  people: Users,
  star: Award,
};

/* ----------------------------------------
   Single commitment card
   ---------------------------------------- */
interface CommitmentCardProps {
  title: string;
  description: string;
  icon: string;
  index: number;
}

function CommitmentCard({ title, description, icon, index }: CommitmentCardProps) {
  const Icon = ICON_MAP[icon] ?? Shield;

  return (
    <div
      className={cn(
        'commitment-card card-dark group',
        'flex flex-col items-start gap-5',
        'hover:border-white/20 hover:shadow-[0_0_30px_rgba(11,42,66,0.25)]',
      )}
      data-index={index}
    >
      {/* Icon container with gradient background */}
      <div
        className={cn(
          'flex items-center justify-center w-14 h-14 rounded-xl',
          'bg-gradient-to-br from-primary-500/20 to-secondary-500/20',
          'transition-transform duration-500 group-hover:scale-110',
        )}
      >
        <Icon className="w-7 h-7 text-primary-400" strokeWidth={1.8} />
      </div>

      {/* Title */}
      <h3 className="text-lg font-bold text-white">{title}</h3>

      {/* Description */}
      <p className="text-sm leading-relaxed text-white/60">{description}</p>
    </div>
  );
}

/* ----------------------------------------
   Commitment section
   ---------------------------------------- */
export default function Commitment() {
  const sectionRef = useRef<HTMLElement>(null);
  const orbRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      /* --- Header entrance --- */
      gsap.from('.commitment-header', {
        opacity: 0,
        y: 40,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.commitment-header',
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
      });

      /* --- Staggered card entrance --- */
      gsap.from('.commitment-card', {
        opacity: 0,
        y: 60,
        scale: 0.95,
        duration: 0.7,
        ease: 'power3.out',
        stagger: 0.12,
        scrollTrigger: {
          trigger: '.commitment-grid',
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
      });

      /* --- Floating orb animation --- */
      if (orbRef.current) {
        gsap.to(orbRef.current, {
          y: -30,
          x: 15,
          duration: 6,
          ease: 'sine.inOut',
          repeat: -1,
          yoyo: true,
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
      <section
      ref={sectionRef}
      id="commitment"
      className="relative bg-primary-900 text-white section-padding overflow-hidden"
    >
      {/* ---- Decorative gradient orb ---- */}
      <div
        ref={orbRef}
        aria-hidden="true"
        className={cn(
          'absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full',
          'bg-gradient-to-br from-primary-500/12 via-secondary-500/10 to-transparent',
          'blur-3xl pointer-events-none',
        )}
      />

      {/* ---- Subtle secondary orb bottom-left ---- */}
      <div
        aria-hidden="true"
        className={cn(
          'absolute -bottom-40 -left-40 w-[400px] h-[400px] rounded-full',
          'bg-gradient-to-tr from-secondary-500/12 via-primary-500/8 to-transparent',
          'blur-3xl pointer-events-none',
        )}
      />

      <div className="container-custom relative z-10">
        {/* ---- Header ---- */}
        <div className="commitment-header text-center max-w-2xl mx-auto mb-16">
          <span className="badge-primary mb-4 inline-flex bg-white/10 text-white">Our Promise</span>
          <h2 className="text-display-sm lg:text-display-md font-heading text-white mt-4 mb-5">
            Standards that never bend
          </h2>
          <p className="text-base lg:text-lg text-white/70 leading-relaxed">
            Every supply decision is anchored in safety, environmental integrity,
            and consistent service delivery.
          </p>
        </div>

        {/* ---- Cards grid ---- */}
        <div className="commitment-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {COMMITMENTS.map((item, index) => (
            <CommitmentCard
              key={item.title}
              title={item.title}
              description={item.description}
              icon={item.icon}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
