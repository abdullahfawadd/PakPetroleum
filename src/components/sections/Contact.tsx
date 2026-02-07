'use client';

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
    gradient: 'from-primary-500 to-primary-700',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'info@pakpetroleum.com',
    href: 'mailto:info@pakpetroleum.com',
    gradient: 'from-secondary-500 to-secondary-700',
  },
  {
    icon: MapPin,
    label: 'Address',
    value: 'Blue Area, Islamabad',
    href: '#',
    gradient: 'from-accent-500 to-accent-700',
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
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
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

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({ name: '', email: '', subject: '', message: '' });

    setTimeout(() => setIsSubmitted(false), 5000);
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Left column entrance
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

      // Contact info cards stagger
      const cards = contactCardsRef.current?.children;
      if (cards) {
        gsap.from(cards, {
          y: 30,
          opacity: 0,
          duration: 0.6,
          stagger: 0.15,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: contactCardsRef.current,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        });
      }

      // Right column (form card) entrance
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
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="contact" ref={sectionRef} className="section-padding bg-gray-50/50">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left Column */}
          <div ref={leftColRef}>
            <span className="badge-primary mb-6">Get in Touch</span>

            <h2 className="text-display-sm font-bold text-dark-500 mt-4 mb-6">
              Let&apos;s Power{' '}
              <span className="gradient-text">Your Business</span>
            </h2>

            <p className="text-lg text-dark-300 leading-relaxed mb-10 max-w-lg">
              Whether you&apos;re looking for a reliable fuel supply partner, exploring distribution
              opportunities, or seeking innovative energy solutions, we&apos;re here to help.
              Reach out and let&apos;s build a powerful partnership together.
            </p>

            {/* Contact Info Cards */}
            <div ref={contactCardsRef} className="flex flex-col gap-4">
              {CONTACT_INFO.map((info) => {
                const Icon = info.icon;
                return (
                  <a
                    key={info.label}
                    href={info.href}
                    className="flex items-center gap-4 group"
                  >
                    <div
                      className={`flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br ${info.gradient} flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow duration-300`}
                    >
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-dark-200 font-medium">{info.label}</p>
                      <p className="text-dark-500 font-semibold group-hover:text-primary-500 transition-colors duration-300">
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
            <div className="card-premium !p-8 lg:!p-10">
              {isSubmitted ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-secondary-500 to-secondary-700 flex items-center justify-center mb-6">
                    <svg
                      className="w-8 h-8 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-dark-500 mb-2">
                    Message Sent Successfully!
                  </h3>
                  <p className="text-dark-300">
                    Thank you for reaching out. We&apos;ll get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate>
                  <h3 className="text-xl font-bold text-dark-500 mb-6">
                    Send us a Message
                  </h3>

                  {/* Name Field */}
                  <div className="mb-5">
                    <label
                      htmlFor="contact-name"
                      className="block text-sm font-medium text-dark-400 mb-2"
                    >
                      Full Name
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your full name"
                      className={`input ${errors.name ? 'border-red-400 focus:ring-red-500/20 focus:border-red-500' : ''}`}
                    />
                    {errors.name && (
                      <p className="mt-1.5 text-sm text-red-500">{errors.name}</p>
                    )}
                  </div>

                  {/* Email Field */}
                  <div className="mb-5">
                    <label
                      htmlFor="contact-email"
                      className="block text-sm font-medium text-dark-400 mb-2"
                    >
                      Email Address
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                      className={`input ${errors.email ? 'border-red-400 focus:ring-red-500/20 focus:border-red-500' : ''}`}
                    />
                    {errors.email && (
                      <p className="mt-1.5 text-sm text-red-500">{errors.email}</p>
                    )}
                  </div>

                  {/* Subject Field */}
                  <div className="mb-5">
                    <label
                      htmlFor="contact-subject"
                      className="block text-sm font-medium text-dark-400 mb-2"
                    >
                      Subject
                    </label>
                    <select
                      id="contact-subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className={`input ${!formData.subject ? 'text-dark-200' : ''} ${errors.subject ? 'border-red-400 focus:ring-red-500/20 focus:border-red-500' : ''}`}
                    >
                      {SUBJECT_OPTIONS.map((option) => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                    {errors.subject && (
                      <p className="mt-1.5 text-sm text-red-500">{errors.subject}</p>
                    )}
                  </div>

                  {/* Message Field */}
                  <div className="mb-6">
                    <label
                      htmlFor="contact-message"
                      className="block text-sm font-medium text-dark-400 mb-2"
                    >
                      Message
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your requirements..."
                      rows={4}
                      className={`input resize-none ${errors.message ? 'border-red-400 focus:ring-red-500/20 focus:border-red-500' : ''}`}
                    />
                    {errors.message && (
                      <p className="mt-1.5 text-sm text-red-500">{errors.message}</p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-primary w-full disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:translate-y-0 disabled:hover:shadow-none"
                  >
                    <span className="flex items-center justify-center gap-2">
                      {isSubmitting ? (
                        <>
                          <svg
                            className="animate-spin h-5 w-5 text-white"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                            />
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            />
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
