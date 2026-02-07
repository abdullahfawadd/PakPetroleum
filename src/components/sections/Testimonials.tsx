'use client';

import { useEffect, useRef } from 'react';
import { Star } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { TESTIMONIALS } from '@/lib/constants';

gsap.registerPlugin(ScrollTrigger);

function getInitials(name: string): string {
  return name
    .split(' ')
    .map((part) => part[0])
    .join('')
    .toUpperCase();
}

export default function Testimonials() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header entrance
      gsap.from(headingRef.current, {
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: headingRef.current,
          start: 'top 85%',
          toggleActions: 'play none none reverse',
        },
      });

      // Staggered card entrance
      gsap.from(
        cardsRef.current.filter(Boolean),
        {
          y: 60,
          opacity: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: cardsRef.current[0],
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="section-padding bg-bg-surface relative overflow-hidden"
    >
      {/* Decorative background quote marks */}
      <div
        aria-hidden="true"
        className="absolute top-12 left-8 text-[12rem] leading-none font-heading text-primary-100/60 select-none pointer-events-none"
      >
        &ldquo;
      </div>
      <div
        aria-hidden="true"
        className="absolute bottom-8 right-8 text-[12rem] leading-none font-heading text-primary-100/50 select-none pointer-events-none rotate-180"
      >
        &ldquo;
      </div>

      <div className="container-custom relative z-10">
        {/* Section header */}
        <div ref={headingRef} className="text-center mb-16">
          <span className="badge-primary mb-4 inline-flex">Client Experience</span>
          <h2 className="text-display-sm md:text-display-md font-heading mt-4">
            Trusted by{' '}
            <span className="gradient-text">operators who scale.</span>
          </h2>
          <p className="mt-4 text-lg text-text-secondary max-w-2xl mx-auto">
            Fleet leaders and station partners rely on us for consistent supply,
            clean documentation, and rapid response.
          </p>
        </div>

        {/* Testimonial cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TESTIMONIALS.map((testimonial, index) => (
            <div
              key={index}
              ref={(el) => {
                cardsRef.current[index] = el;
              }}
              className="card-premium flex flex-col justify-between"
            >
              {/* Quote icon */}
              <div className="mb-5">
                <span
                  aria-hidden="true"
                  className="block text-6xl leading-none font-heading text-primary-100 select-none"
                >
                  &ldquo;
                </span>
              </div>

              {/* Testimonial text */}
              <p className="text-text-secondary italic leading-relaxed flex-1">
                {testimonial.content}
              </p>

              {/* Star rating */}
              <div className="flex items-center gap-1 mt-6">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-secondary-500 text-secondary-500"
                  />
                ))}
              </div>

              {/* Author section */}
              <div className="flex items-center gap-4 mt-6 pt-6 border-t border-border">
                {/* Initials avatar */}
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary-600 to-secondary-500 flex items-center justify-center flex-shrink-0">
                  <span className="text-sm font-bold text-white tracking-wide">
                    {getInitials(testimonial.name)}
                  </span>
                </div>

                <div>
                  <p className="font-semibold text-text-primary">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-text-secondary">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
