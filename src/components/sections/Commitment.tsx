'use client';

import { useEffect, useRef } from 'react';
import { Shield, Leaf, FileCheck, Lightbulb, Users, Award, type LucideIcon } from 'lucide-react';
import { gsap } from '@/lib/gsap';
import { COMMITMENTS } from '@/lib/constants';

const ICON_MAP: Record<string, LucideIcon> = {
  shield: Shield,
  leaf: Leaf,
  document: FileCheck,
  lightbulb: Lightbulb,
  people: Users,
  star: Award,
};

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
      className="commitment-card card-dark group flex flex-col items-start gap-5"
      data-index={index}
    >
      <div
        className="flex items-center justify-center w-14 h-14 rounded-xl transition-transform duration-500 group-hover:scale-110"
        style={{ background: 'linear-gradient(135deg, rgba(200, 111, 255, 0.15), rgba(27, 77, 254, 0.1))' }}
      >
        <Icon className="w-7 h-7" style={{ color: '#C86FFF' }} strokeWidth={1.8} />
      </div>

      <h3 className="text-lg font-bold text-white">{title}</h3>
      <p className="text-sm leading-relaxed text-white/50">{description}</p>
    </div>
  );
}

export default function Commitment() {
  const sectionRef = useRef<HTMLElement>(null);
  const orbRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      gsap.from('.commitment-header', {
        opacity: 0, y: 40, duration: 0.8, ease: 'power3.out',
        scrollTrigger: { trigger: '.commitment-header', start: 'top 85%', toggleActions: 'play none none none' },
      });

      gsap.from('.commitment-card', {
        opacity: 0, y: 60, scale: 0.95, duration: 0.7, ease: 'power3.out', stagger: 0.12,
        scrollTrigger: { trigger: '.commitment-grid', start: 'top 85%', toggleActions: 'play none none none' },
      });

      if (orbRef.current) {
        gsap.to(orbRef.current, { y: -30, x: 15, duration: 6, ease: 'sine.inOut', repeat: -1, yoyo: true });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="commitment"
      className="relative text-white section-padding overflow-hidden"
      style={{ background: '#1A1726' }}
    >
      <div
        ref={orbRef}
        aria-hidden="true"
        className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(200, 111, 255, 0.1) 0%, transparent 60%)', filter: 'blur(60px)' }}
      />

      <div className="container-custom relative z-10">
        <div className="commitment-header text-center max-w-2xl mx-auto mb-16">
          <span className="badge-primary mb-4 inline-flex">Our Promise</span>
          <h2 className="text-display-sm lg:text-display-md font-heading text-white mt-4 mb-5">
            Standards that never bend
          </h2>
          <p className="text-base lg:text-lg text-white/55 leading-relaxed">
            Every supply decision is anchored in safety, environmental integrity,
            and consistent service delivery.
          </p>
        </div>

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
