'use client';

import { useState } from 'react';
import { ArrowRight } from 'lucide-react';

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

const SUBJECT_OPTIONS = [
  { value: '', label: 'Select a subject' },
  { value: 'general', label: 'General Inquiry' },
  { value: 'partnership', label: 'Partnership' },
  { value: 'fuel-supply', label: 'Fuel Supply' },
  { value: 'career', label: 'Career' },
] as const;

// ⚡ Bolt Optimization:
// Extracting the contact form into its own component isolates the high-frequency state updates
// (like typing into input fields) from the parent `Contact` component.
// Previously, every keystroke caused the entire `Contact` section (including GSAP hooks and static DOM)
// to unnecessarily re-render. This change significantly improves React render performance.
export function ContactForm() {
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
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({ name: '', email: '', subject: '', message: '' });
    // Reset success message after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  if (isSubmitted) {
    return (
      <div className="flex flex-col items-center justify-center py-12 text-center">
        <div
          className="w-16 h-16 rounded-full flex items-center justify-center mb-6"
          style={{ background: 'linear-gradient(135deg, rgba(100, 255, 218, 0.2), rgba(10, 25, 47, 0.15))' }}
        >
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
        <h3 className="text-xl font-bold text-white mb-2">Message Sent</h3>
        <p className="text-white/45">
          We&apos;ll get back to you within 24 hours.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate>
      <h3 className="text-xl font-bold text-white mb-8">
        Send us a message
      </h3>

      <div className="mb-5">
        <label htmlFor="contact-name" className="block text-sm font-medium text-white/50 mb-2">
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
        {errors.name && <p className="mt-1.5 text-sm text-red-500">{errors.name}</p>}
      </div>

      <div className="mb-5">
        <label htmlFor="contact-email" className="block text-sm font-medium text-white/50 mb-2">
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
        {errors.email && <p className="mt-1.5 text-sm text-red-500">{errors.email}</p>}
      </div>

      <div className="mb-5">
        <label htmlFor="contact-subject" className="block text-sm font-medium text-white/50 mb-2">
          Subject
        </label>
        <select
          id="contact-subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          className={`input ${!formData.subject ? 'text-white/30' : ''} ${errors.subject ? 'border-red-400 focus:ring-red-500/20 focus:border-red-500' : ''}`}
        >
          {SUBJECT_OPTIONS.map((option) => (
            <option key={option.value} value={option.value}>{option.label}</option>
          ))}
        </select>
        {errors.subject && <p className="mt-1.5 text-sm text-red-500">{errors.subject}</p>}
      </div>

      <div className="mb-8">
        <label htmlFor="contact-message" className="block text-sm font-medium text-white/50 mb-2">
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
        {errors.message && <p className="mt-1.5 text-sm text-red-500">{errors.message}</p>}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="btn-primary w-full disabled:opacity-60 disabled:cursor-not-allowed"
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
  );
}
