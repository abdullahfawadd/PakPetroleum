"use client";

import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { gsap } from "gsap";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { NAV_ITEMS } from "@/lib/constants";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        navRef.current,
        { y: -100, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power3.out", delay: pathname === "/" ? 3.5 : 0.3 }
      );
    });
    return () => ctx.revert();
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isMobileOpen]);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <>
      <nav
        ref={navRef}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "backdrop-blur-2xl border-b"
            : "bg-transparent"
        }`}
        style={{
          opacity: 0,
          ...(isScrolled ? {
            background: 'rgba(19, 16, 28, 0.85)',
            borderColor: 'rgba(200, 111, 255, 0.08)',
          } : {}),
        }}
      >
        <div className="container-main flex items-center justify-between h-20">
          <Link
            href="/"
            className="flex items-center gap-1 group"
          >
            <span className="text-xl font-extrabold tracking-tight text-white transition-transform duration-300 group-hover:scale-105">
              PAK
            </span>
            <span className="text-xl font-medium tracking-tight text-white/50">
              Petroleum
            </span>
          </Link>

          <ul className="hidden lg:flex items-center gap-1">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`relative px-4 py-2 text-[13px] font-medium transition-colors duration-300 ${
                    isActive(item.href)
                      ? "text-white"
                      : "text-white/35 hover:text-white/65"
                  }`}
                >
                  {item.name}
                  {isActive(item.href) && (
                    <motion.span
                      layoutId="nav-indicator"
                      className="absolute -bottom-px left-2 right-2 h-[2px] gradient-bar rounded-full"
                      transition={{ type: "spring" as const, bounce: 0.15, duration: 0.5 }}
                    />
                  )}
                </Link>
              </li>
            ))}
          </ul>

          <Link
            href="/contact"
            className="hidden lg:inline-flex items-center px-5 py-2.5 rounded-full text-sm font-semibold text-white transition-all duration-300 hover:shadow-glow-sm hover:scale-[1.02]"
            style={{ background: 'linear-gradient(135deg, #AC24FF, #C86FFF)' }}
          >
            Contact
          </Link>

          <button
            className="lg:hidden p-2 text-white/50 hover:text-white transition-colors"
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            aria-label={isMobileOpen ? "Close menu" : "Open menu"}
          >
            {isMobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isMobileOpen && (
          <>
            <motion.div
              className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm lg:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileOpen(false)}
            />
            <motion.div
              className="fixed top-0 right-0 z-40 h-full w-[80%] max-w-sm flex flex-col lg:hidden"
              style={{ background: '#1A1726', borderLeft: '1px solid rgba(200, 111, 255, 0.1)' }}
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring" as const, damping: 28, stiffness: 300 }}
            >
              <div className="flex items-center justify-between px-6 h-20" style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.06)' }}>
                <span className="text-lg font-bold text-white">Menu</span>
                <button onClick={() => setIsMobileOpen(false)} className="p-2 text-white/40">
                  <X className="w-5 h-5" />
                </button>
              </div>
              <nav className="flex-1 py-8 px-6">
                <ul className="space-y-1">
                  {NAV_ITEMS.map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        onClick={() => setIsMobileOpen(false)}
                        className={`block py-3 px-4 rounded-xl text-base font-medium transition-all duration-300 ${
                          isActive(item.href)
                            ? "text-white bg-white/[0.06]"
                            : "text-white/35 hover:text-white/65"
                        }`}
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
              <div className="p-6" style={{ borderTop: '1px solid rgba(255, 255, 255, 0.06)' }}>
                <Link
                  href="/contact"
                  onClick={() => setIsMobileOpen(false)}
                  className="block text-center py-3 rounded-full text-sm font-semibold text-white"
                  style={{ background: 'linear-gradient(135deg, #AC24FF, #C86FFF)' }}
                >
                  Get in Touch
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
