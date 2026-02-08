import Link from 'next/link';
import { Linkedin, Twitter, Facebook } from 'lucide-react';
import { SITE_CONFIG } from '@/lib/constants';

const FOOTER_LINKS = [
  { name: 'What We Do', href: '/services' },
  { name: 'Our Approach', href: '/approach' },
  { name: 'About Us', href: '/about' },
  { name: 'Insights', href: '/insights' },
  { name: 'Contact', href: '/contact' },
] as const;

const SERVICES = [
  { name: 'Fuel Distribution', href: '/services' },
  { name: 'Storage Solutions', href: '/services' },
  { name: 'Trading', href: '/services' },
  { name: 'Logistics', href: '/services' },
] as const;

const SOCIAL_LINKS = [
  { icon: Linkedin, href: SITE_CONFIG.socials.linkedin, label: 'LinkedIn' },
  { icon: Twitter, href: SITE_CONFIG.socials.twitter, label: 'Twitter' },
  { icon: Facebook, href: SITE_CONFIG.socials.facebook, label: 'Facebook' },
] as const;

export default function Footer() {
  return (
    <footer style={{ background: '#0F0E1A' }} className="text-white">
      {/* Top Divider */}
      <div className="divider-gradient" />

      {/* Main Footer Content */}
      <div className="container-custom py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Column 1 - Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-5">
              <span className="text-2xl font-bold tracking-tight">
                <span className="text-white">PAK</span>
                <span className="text-white/50 ml-1">Petroleum</span>
              </span>
            </Link>

            <p className="text-white/40 leading-relaxed mb-6 max-w-xs text-sm">
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
                    className="w-10 h-10 rounded-lg flex items-center justify-center text-white/40 hover:text-white transition-all duration-300"
                    style={{
                      background: 'rgba(255, 255, 255, 0.04)',
                      border: '1px solid rgba(255, 255, 255, 0.06)',
                    }}
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Column 2 - Links */}
          <div>
            <h4 className="text-white font-semibold mb-5">Company</h4>
            <ul className="space-y-3">
              {FOOTER_LINKS.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-white/40 hover:text-purple-300 transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 - Services */}
          <div>
            <h4 className="text-white font-semibold mb-5">Services</h4>
            <ul className="space-y-3">
              {SERVICES.map((service) => (
                <li key={service.name}>
                  <Link
                    href={service.href}
                    className="text-white/40 hover:text-purple-300 transition-colors duration-300 text-sm"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 - Contact */}
          <div>
            <h4 className="text-white font-semibold mb-5">Contact</h4>
            <ul className="space-y-3">
              <li>
                <p className="text-white/40 text-sm leading-relaxed">
                  {SITE_CONFIG.address}
                </p>
              </li>
              <li>
                <a
                  href={`tel:${SITE_CONFIG.phone.replace(/\s/g, '')}`}
                  className="text-white/40 hover:text-purple-300 transition-colors duration-300 text-sm"
                >
                  {SITE_CONFIG.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${SITE_CONFIG.email}`}
                  className="text-white/40 hover:text-purple-300 transition-colors duration-300 text-sm"
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
          <p className="text-white/30 text-sm">
            &copy; 2026 {SITE_CONFIG.name}. All rights reserved.
          </p>
          <p className="text-white/30 text-sm">
            {SITE_CONFIG.tagline}
          </p>
        </div>
      </div>
    </footer>
  );
}
