'use client';

import { useRef } from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@/hooks/useGSAP';
import { ContactForm } from './ContactForm';

gsap.registerPlugin(ScrollTrigger);

const CONTACT_INFO = [
  {
    icon: Phone,
    label: 'Phone',
    value: '+92 51 234 5678',
    href: 'tel:+925123456789',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'info@pakpetroleum.com',
    href: 'mailto:info@pakpetroleum.com',
  },
  {
    icon: MapPin,
    label: 'Address',
    value: 'Blue Area, Islamabad',
    href: '#',
  },
] as const;

export default function Contact() {
  const leftColRef = useRef<HTMLDivElement>(null);
  const rightColRef = useRef<HTMLDivElement>(null);

  const sectionRef = useGSAP<HTMLElement>(() => {
    // Left column animation
    if (leftColRef.current) {
      gsap.from(leftColRef.current, {
        x: -60,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
          toggleActions: 'play none none none',
        },
      });
    }

    // Right column animation
    if (rightColRef.current) {
      gsap.from(rightColRef.current, {
        x: 60,
        opacity: 0,
        duration: 1,
        delay: 0.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
          toggleActions: 'play none none none',
        },
      });
    }
  });

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="section-spacing bg-navy-950" // Replaced inline style with Tailwind class if possible, or keep style if specific color needed. Using bg-navy-950 as it matches design.
    >
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20">
          {/* Left Column */}
          <div ref={leftColRef}>
            <p className="overline-tag mb-6">Get in Touch</p>

            <h2 className="text-display font-heading text-white mb-6">
              Let&apos;s build your <br />
              <span className="text-teal-400">supply plan.</span>
            </h2>

            <p className="text-lg text-white/45 leading-relaxed mb-12 max-w-lg">
              Whether you need bulk supply, distribution coverage, or a strategic
              partnership, our team is ready to help.
            </p>

            {/* Contact Info */}
            <div className="flex flex-col gap-6">
              {CONTACT_INFO.map((info) => {
                const Icon = info.icon;
                return (
                  <a
                    key={info.label}
                    href={info.href}
                    className="flex items-center gap-4 group"
                  >
                    <div
                      className="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-105"
                      style={{
                        background: 'linear-gradient(135deg, rgba(100, 255, 218, 0.15), rgba(10, 25, 47, 0.1))',
                      }}
                    >
                      <Icon className="w-5 h-5 text-teal-400" />
                    </div>
                    <div>
                      <p className="text-sm text-white/35 font-medium">{info.label}</p>
                      <p className="text-white font-medium group-hover:text-teal-400 transition-colors duration-300">
                        {info.value}
                      </p>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div ref={rightColRef}>
            <div className="card-dark p-8 lg:p-10">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
