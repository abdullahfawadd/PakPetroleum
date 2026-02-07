import Link from 'next/link';
import { Linkedin, Twitter, Facebook } from 'lucide-react';
import { SITE_CONFIG } from '@/lib/constants';

const QUICK_LINKS = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Operations', href: '#operations' },
  { name: 'Commitment', href: '#commitment' },
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
    <footer className="bg-bg-surface text-text-primary">
      {/* Top Divider */}
      <div className="divider-gradient" />

      {/* Main Footer Content */}
      <div className="container-custom py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Column 1 - Brand */}
          <div className="lg:col-span-1">
            <Link href="#home" className="inline-block mb-5">
              <span className="text-2xl font-bold tracking-tight">
                <span className="text-primary-900">PAK</span>
                <span className="text-text-primary ml-1">Petroleum</span>
              </span>
            </Link>

            <p className="text-text-secondary leading-relaxed mb-6 max-w-xs">
              {SITE_CONFIG.tagline}. {SITE_CONFIG.description}
            </p>

            {/* Social Icons */}
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
                    className="w-10 h-10 rounded-lg bg-bg-muted flex items-center justify-center text-text-secondary hover:bg-primary-700 hover:text-white transition-all duration-300"
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Column 2 - Quick Links */}
          <div>
            <h4 className="text-text-primary font-semibold text-lg mb-5">Quick Links</h4>
            <ul className="space-y-3">
              {QUICK_LINKS.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-text-secondary hover:text-primary-700 transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 - Services */}
          <div>
            <h4 className="text-text-primary font-semibold text-lg mb-5">Services</h4>
            <ul className="space-y-3">
              {SERVICES.map((service) => (
                <li key={service.name}>
                  <Link
                    href={service.href}
                    className="text-text-secondary hover:text-primary-700 transition-colors duration-300 text-sm"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 - Contact */}
          <div>
            <h4 className="text-text-primary font-semibold text-lg mb-5">Contact</h4>
            <ul className="space-y-3">
              <li>
                <p className="text-text-secondary text-sm leading-relaxed">
                  {SITE_CONFIG.address}
                </p>
              </li>
              <li>
                <a
                  href={`tel:${SITE_CONFIG.phone.replace(/\s/g, '')}`}
                  className="text-text-secondary hover:text-primary-700 transition-colors duration-300 text-sm"
                >
                  {SITE_CONFIG.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${SITE_CONFIG.email}`}
                  className="text-text-secondary hover:text-primary-700 transition-colors duration-300 text-sm"
                >
                  {SITE_CONFIG.email}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="divider-gradient" />
      <div className="container-custom py-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-text-secondary text-sm">
            &copy; 2026 {SITE_CONFIG.name}. All rights reserved.
          </p>
          <p className="text-text-secondary text-sm">
            Mission-critical energy continuity
          </p>
        </div>
      </div>
    </footer>
  );
}
