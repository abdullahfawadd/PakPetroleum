import Link from 'next/link';
import { Linkedin, Twitter, Facebook, MapPin, Phone, Mail } from 'lucide-react';
import { SITE_CONFIG } from '@/lib/constants';

const FOOTER_LINKS = [
  { name: 'About Us', href: '/about' },
  { name: 'Leadership', href: '/about#leadership' },
  { name: 'Careers', href: '/careers' },
  { name: 'Investor Relations', href: '/investors' },
  { name: 'Press & Media', href: '/media' },
] as const;

const SERVICES = [
  { name: 'Fuel Trading', href: '/services' },
  { name: 'Retail Network', href: '/services' },
  { name: 'Industrial Supply', href: '/services' },
  { name: 'Logistics', href: '/services' },
  { name: 'Storage Terminals', href: '/services' },
] as const;

const SOCIAL_LINKS = [
  { icon: Linkedin, href: SITE_CONFIG.socials.linkedin, label: 'LinkedIn' },
  { icon: Twitter, href: SITE_CONFIG.socials.twitter, label: 'Twitter' },
  { icon: Facebook, href: SITE_CONFIG.socials.facebook, label: 'Facebook' },
] as const;

export default function Footer() {
  return (
    <footer className="bg-navy-950 border-t border-white/5 text-slate-400">

      {/* Main Footer Content */}
      <div className="container-custom py-20 lg:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">

          {/* Brand Column (Span 4) */}
          <div className="lg:col-span-4 pr-8">
            <Link href="/" className="inline-flex flex-col gap-1 mb-6 group">
              <span className="text-2xl font-display font-bold text-primary tracking-tight group-hover:text-teal-400 transition-colors">
                PAK Petroleum
              </span>
              <span className="text-xs font-mono tracking-widest text-teal-500 uppercase">
                Energy for Motion
              </span>
            </Link>

            <p className="text-sm leading-relaxed mb-8 max-w-xs text-slate-500">
              A leading integrated energy company powering Pakistan&apos;s future through
              reliable supply, strategic infrastructure, and sustainable growth.
            </p>

            <div className="flex items-center gap-4">
              {SOCIAL_LINKS.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="w-10 h-10 rounded flex items-center justify-center border border-white/10 hover:border-teal-500/50 hover:text-teal-400 transition-all duration-300"
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Links Column (Span 2) */}
          <div className="lg:col-span-2 lg:col-start-6">
            <h4 className="text-primary font-semibold mb-6 text-sm uppercase tracking-wider">Company</h4>
            <ul className="space-y-4">
              {FOOTER_LINKS.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-teal-400 transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Column (Span 2) */}
          <div className="lg:col-span-2">
            <h4 className="text-primary font-semibold mb-6 text-sm uppercase tracking-wider">Operations</h4>
            <ul className="space-y-4">
              {SERVICES.map((service) => (
                <li key={service.name}>
                  <Link
                    href={service.href}
                    className="text-sm hover:text-teal-400 transition-colors duration-300"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column (Span 3) */}
          <div className="lg:col-span-3">
            <h4 className="text-primary font-semibold mb-6 text-sm uppercase tracking-wider">Headquarters</h4>
            <ul className="space-y-5">
              <li className="flex gap-3 items-start">
                <MapPin className="w-5 h-5 text-teal-500 shrink-0 mt-0.5" />
                <span className="text-sm leading-relaxed">
                  {SITE_CONFIG.address} <br/>
                  Islamabad, Pakistan
                </span>
              </li>
              <li className="flex gap-3 items-center">
                <Phone className="w-4 h-4 text-teal-500 shrink-0" />
                <a
                  href={`tel:${SITE_CONFIG.phone.replace(/\s/g, '')}`}
                  className="text-sm hover:text-teal-400 transition-colors"
                >
                  {SITE_CONFIG.phone}
                </a>
              </li>
              <li className="flex gap-3 items-center">
                <Mail className="w-4 h-4 text-teal-500 shrink-0" />
                <a
                  href={`mailto:${SITE_CONFIG.email}`}
                  className="text-sm hover:text-teal-400 transition-colors"
                >
                  {SITE_CONFIG.email}
                </a>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/5 bg-black/20">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-600">
            <p>
              &copy; {new Date().getFullYear()} PAK Petroleum Ltd. All rights reserved.
            </p>
            <div className="flex gap-6">
               <Link href="/privacy" className="hover:text-slate-400">Privacy Policy</Link>
               <Link href="/terms" className="hover:text-slate-400">Terms of Service</Link>
               <Link href="/sitemap" className="hover:text-slate-400">Sitemap</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
