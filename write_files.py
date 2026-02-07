import os

# File 1: Contact.tsx
contact_content = """'use client';

import { useEffect, useRef, useState } from 'react';
import { Phone, Mail, MapPin, ArrowRight } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

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

const SUBJECT_OPTIONS = [
  { value: '', label: 'Select a subject' },
  { value: 'general', label: 'General Inquiry' },
  { value: 'partnership', label: 'Partnership' },
  { value: 'fuel-supply', label: 'Fuel Supply' },
  { value: 'career', label: 'Career' },
] as const;

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const leftColRef = useRef<HTMLDivElement>(null);
  const rightColRef = useRef<HTMLDivElement>(null);
  const contactCardsRef = useRef<HTMLDivElement>(null);

  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.subject) {
      newErrors.subject = 'Please select a subject';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({ name: '', email: '', subject: '', message: '' });
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(leftColRef.current, {
        x: -60, opacity: 0, duration: 1, ease: 'power3.out',
        scrollTrigger: { trigger: sectionRef.current, start: 'top 75%', toggleActions: 'play none none none' },
      });

      const cards = contactCardsRef.current?.children;
      if (cards) {
        gsap.from(cards, {
          y: 30, opacity: 0, duration: 0.6, stagger: 0.15, ease: 'power2.out',
          scrollTrigger: { trigger: contactCardsRef.current, start: 'top 80%', toggleActions: 'play none none none' },
        });
      }

      gsap.from(rightColRef.current, {
        x: 60, opacity: 0, duration: 1, delay: 0.2, ease: 'power3.out',
        scrollTrigger: { trigger: sectionRef.current, start: 'top 75%', toggleActions: 'play none none none' },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="contact" ref={sectionRef} className="section-padding" style={{ background: '#13101C' }}>
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div ref={leftColRef}>
            <span className="badge-primary mb-6">Get in Touch</span>

            <h2 className="text-display-sm font-heading text-white mt-4 mb-6">
              Build a supply plan
              <span className="block text-gradient">that keeps you moving.</span>
            </h2>

            <p className="text-lg text-white/50 leading-relaxed mb-10 max-w-lg">
              Whether you need bulk supply, distribution coverage, or strategic
              partnership planning, our 2026 launch team is ready to respond.
            </p>

            <div ref={contactCardsRef} className="flex flex-col gap-4">
              {CONTACT_INFO.map((info) => {
                const Icon = info.icon;
                return (
                  <a key={info.label} href={info.href} className="flex items-center gap-4 group">
                    <div
                      className="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:shadow-glow-sm"
                      style={{ background: 'linear-gradient(135deg, rgba(200, 111, 255, 0.2), rgba(27, 77, 254, 0.15))' }}
                    >
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-white/35 font-medium">{info.label}</p>
                      <p className="text-white font-semibold transition-colors duration-300" style={{ color: 'white' }}>
                        {info.value}
                      </p>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>

          <div ref={rightColRef}>
            <div className="card-premium !p-8 lg:!p-10">
              {isSubmitted ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center mb-6"
                    style={{ background: 'linear-gradient(135deg, #AC24FF, #C86FFF)' }}
                  >
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Message Sent Successfully!</h3>
                  <p className="text-white/50">Thank you for reaching out. We&apos;ll get back to you within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate>
                  <h3 className="text-xl font-bold text-white mb-6">Send us a Message</h3>

                  <div className="mb-5">
                    <label htmlFor="contact-name" className="block text-sm font-medium text-white/50 mb-2">Full Name</label>
                    <input
                      id="contact-name" type="text" name="name" value={formData.name} onChange={handleChange}
                      placeholder="Your full name"
                      className={`input ${errors.name ? 'border-red-400 focus:ring-red-500/20 focus:border-red-500' : ''}`}
                    />
                    {errors.name && <p className="mt-1.5 text-sm text-red-500">{errors.name}</p>}
                  </div>

                  <div className="mb-5">
                    <label htmlFor="contact-email" className="block text-sm font-medium text-white/50 mb-2">Email Address</label>
                    <input
                      id="contact-email" type="email" name="email" value={formData.email} onChange={handleChange}
                      placeholder="you@example.com"
                      className={`input ${errors.email ? 'border-red-400 focus:ring-red-500/20 focus:border-red-500' : ''}`}
                    />
                    {errors.email && <p className="mt-1.5 text-sm text-red-500">{errors.email}</p>}
                  </div>

                  <div className="mb-5">
                    <label htmlFor="contact-subject" className="block text-sm font-medium text-white/50 mb-2">Subject</label>
                    <select
                      id="contact-subject" name="subject" value={formData.subject} onChange={handleChange}
                      className={`input ${!formData.subject ? 'text-white/30' : ''} ${errors.subject ? 'border-red-400 focus:ring-red-500/20 focus:border-red-500' : ''}`}
                    >
                      {SUBJECT_OPTIONS.map((option) => (
                        <option key={option.value} value={option.value}>{option.label}</option>
                      ))}
                    </select>
                    {errors.subject && <p className="mt-1.5 text-sm text-red-500">{errors.subject}</p>}
                  </div>

                  <div className="mb-6">
                    <label htmlFor="contact-message" className="block text-sm font-medium text-white/50 mb-2">Message</label>
                    <textarea
                      id="contact-message" name="message" value={formData.message} onChange={handleChange}
                      placeholder="Tell us about your requirements..." rows={4}
                      className={`input resize-none ${errors.message ? 'border-red-400 focus:ring-red-500/20 focus:border-red-500' : ''}`}
                    />
                    {errors.message && <p className="mt-1.5 text-sm text-red-500">{errors.message}</p>}
                  </div>

                  <button
                    type="submit" disabled={isSubmitting}
                    className="btn-primary w-full disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:translate-y-0 disabled:hover:shadow-none"
                  >
                    <span className="flex items-center justify-center gap-2">
                      {isSubmitting ? (
                        <>
                          <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                          </svg>
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message
                          <ArrowRight className="w-5 h-5" />
                        </>
                      )}
                    </span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
"""

# File 2: Footer.tsx
footer_content = """import Link from 'next/link';
import { Linkedin, Twitter, Facebook } from 'lucide-react';
import { SITE_CONFIG } from '@/lib/constants';

const QUICK_LINKS = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Operations', href: '#operations' },
  { name: 'Continuity', href: '#continuity' },
  { name: 'Framework', href: '#framework' },
  { name: 'Why Now', href: '#need' },
  { name: 'Systems', href: '#systems' },
  { name: 'Value', href: '#value' },
  { name: 'Commitment', href: '#commitment' },
  { name: 'Insights', href: '#insights' },
] as const;

const SERVICES = [
  { name: 'Fuel Distribution', href: '#operations' },
  { name: 'Storage Solutions', href: '#operations' },
  { name: 'Trading', href: '#operations' },
  { name: 'Logistics', href: '#operations' },
] as const;

const SOCIAL_LINKS = [
  { icon: Linkedin, href: SITE_CONFIG.socials.linkedin, label: 'LinkedIn' },
  { icon: Twitter, href: SITE_CONFIG.socials.twitter, label: 'Twitter' },
  { icon: Facebook, href: SITE_CONFIG.socials.facebook, label: 'Facebook' },
] as const;

export default function Footer() {
  return (
    <footer style={{ background: '#13101C' }} className="text-white">
      <div className="divider-gradient" />

      <div className="container-custom py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          <div className="lg:col-span-1">
            <Link href="#home" className="inline-block mb-5">
              <span className="text-2xl font-bold tracking-tight">
                <span className="text-white">PAK</span>
                <span className="text-white/50 ml-1">Petroleum</span>
              </span>
            </Link>

            <p className="text-white/40 leading-relaxed mb-6 max-w-xs">
              {SITE_CONFIG.tagline}. {SITE_CONFIG.description}
            </p>

            <div className="flex items-center gap-3">
              {SOCIAL_LINKS.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="w-10 h-10 rounded-lg flex items-center justify-center text-white/40 transition-all duration-300 hover:text-white"
                    style={{ background: 'rgba(255, 255, 255, 0.04)', border: '1px solid rgba(255, 255, 255, 0.06)' }}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = 'rgba(200, 111, 255, 0.15)'; (e.currentTarget as HTMLElement).style.borderColor = 'rgba(200, 111, 255, 0.3)'; }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = 'rgba(255, 255, 255, 0.04)'; (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255, 255, 255, 0.06)'; }}
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                );
              })}
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold text-lg mb-5">Quick Links</h4>
            <ul className="space-y-3">
              {QUICK_LINKS.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-white/40 hover:text-purple-400 transition-colors duration-300 text-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold text-lg mb-5">Services</h4>
            <ul className="space-y-3">
              {SERVICES.map((service) => (
                <li key={service.name}>
                  <Link href={service.href} className="text-white/40 hover:text-purple-400 transition-colors duration-300 text-sm">
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold text-lg mb-5">Contact</h4>
            <ul className="space-y-3">
              <li><p className="text-white/40 text-sm leading-relaxed">{SITE_CONFIG.address}</p></li>
              <li>
                <a href={`tel:${SITE_CONFIG.phone.replace(/\\s/g, '')}`} className="text-white/40 hover:text-purple-400 transition-colors duration-300 text-sm">
                  {SITE_CONFIG.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${SITE_CONFIG.email}`} className="text-white/40 hover:text-purple-400 transition-colors duration-300 text-sm">
                  {SITE_CONFIG.email}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="divider-gradient" />
      <div className="container-custom py-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-sm">&copy; 2026 {SITE_CONFIG.name}. All rights reserved.</p>
          <p className="text-white/30 text-sm">Mission-critical energy continuity</p>
        </div>
      </div>
    </footer>
  );
}
"""

# File 3: Preloader.tsx
preloader_content = '''"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { gsap } from "gsap";

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true);
  const counterRef = useRef<HTMLSpanElement>(null);
  const brandRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!counterRef.current || !brandRef.current || !lineRef.current) return;

    const obj = { val: 0 };

    const tl = gsap.timeline({
      onComplete: () => setIsLoading(false),
    });

    tl.fromTo(
      brandRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" },
      0
    );

    tl.to(
      obj,
      {
        val: 100,
        duration: 2.2,
        ease: "power2.inOut",
        onUpdate: () => {
          if (counterRef.current) {
            counterRef.current.textContent = Math.round(obj.val).toString();
          }
        },
      },
      0.3
    );

    tl.fromTo(
      lineRef.current,
      { scaleX: 0 },
      { scaleX: 1, duration: 2.2, ease: "power2.inOut" },
      0.3
    );

    tl.to(
      [brandRef.current, counterRef.current.parentElement],
      {
        opacity: 0, y: -30, duration: 0.4, ease: "power2.in", stagger: 0.05,
      },
      "+=0.3"
    );

    return () => { tl.kill(); };
  }, []);

  return (
    <AnimatePresence mode="wait">
      {isLoading && (
        <motion.div
          key="preloader"
          initial={{ y: 0 }}
          exit={{ y: "-100%" }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center"
          style={{ background: \'#13101C\' }}
        >
          <div
            className="absolute inset-0 opacity-[0.06]"
            style={{ background: \'radial-gradient(circle, rgba(200,111,255,0.4) 1px, transparent 1px)\', backgroundSize: \'32px 32px\' }}
          />

          <div
            aria-hidden="true"
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
            style={{ background: \'radial-gradient(circle, rgba(200,111,255,0.1) 0%, transparent 60%)\', filter: \'blur(60px)\' }}
          />

          <div ref={brandRef} className="relative mb-12 opacity-0">
            <span className="text-overline tracking-[0.3em]" style={{ color: \'rgba(200, 111, 255, 0.6)\' }}>
              PAK PETROLEUM
            </span>
          </div>

          <div className="relative flex items-baseline">
            <span
              ref={counterRef}
              className="text-[clamp(5rem,20vw,12rem)] font-extrabold leading-none tracking-tighter text-white tabular-nums"
            >
              0
            </span>
            <span className="text-[clamp(1.5rem,4vw,3rem)] font-light text-white/20 ml-1 self-start mt-[0.15em]">
              %
            </span>
          </div>

          <div className="relative mt-10 w-48 md:w-64 h-[2px] overflow-hidden" style={{ background: \'rgba(255, 255, 255, 0.06)\' }}>
            <div
              ref={lineRef}
              className="absolute inset-0 origin-left"
              style={{ transform: "scaleX(0)", background: \'linear-gradient(90deg, #1B4DFE, #AC24FF, #C86FFF)\' }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
'''

# File 4: TrustMarquee.tsx
trustmarquee_content = '''"use client";

const items = [
  "OGRA Licensed",
  "ISO 9001 Process",
  "Nationwide Network",
  "24/7 Operations",
  "HSE Aligned",
  "Fleet-Scale Supply",
  "Premium Grade Fuel",
  "Real-Time Tracking",
];

function Row({ reverse = false }: { reverse?: boolean }) {
  const doubled = [...items, ...items];
  return (
    <div className="flex overflow-hidden mask-edges">
      <div
        className={`flex shrink-0 items-center gap-10 ${
          reverse ? "animate-marquee-reverse" : "animate-marquee"
        }`}
      >
        {doubled.map((item, i) => (
          <span
            key={i}
            className="text-xs font-semibold uppercase tracking-[0.22em] whitespace-nowrap"
            style={{ color: \'rgba(200, 111, 255, 0.25)\' }}
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function TrustMarquee() {
  return (
    <section
      className="py-8 overflow-hidden"
      style={{ background: \'#1A1726\', borderTop: \'1px solid rgba(200, 111, 255, 0.06)\', borderBottom: \'1px solid rgba(200, 111, 255, 0.06)\' }}
    >
      <div className="space-y-5">
        <Row />
        <Row reverse />
      </div>
    </section>
  );
}
'''

files = {
    r'd:\pakpetroleum\pak-fuel\src\components\sections\Contact.tsx': contact_content,
    r'd:\pakpetroleum\pak-fuel\src\components\layout\Footer.tsx': footer_content,
    r'd:\pakpetroleum\pak-fuel\src\components\effects\Preloader.tsx': preloader_content,
    r'd:\pakpetroleum\pak-fuel\src\components\sections\TrustMarquee.tsx': trustmarquee_content,
}

for filepath, content in files.items():
    with open(filepath, 'w', encoding='utf-8', newline='\n') as f:
        f.write(content)
    print(f'Written: {filepath}')

print('All files written successfully.')
