"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { gsap } from "gsap";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";
import { NAV_ITEMS } from "@/lib/constants";
import { useScroll } from "@/hooks/useScroll";
import { useGSAP } from "@/hooks/useGSAP";
import MobileMenu from "./MobileMenu";
import { cn } from "@/lib/utils";

export default function Navigation() {
  const isScrolled = useScroll(30);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const pathname = usePathname();

  const navRef = useGSAP<HTMLElement>(() => {
    gsap.fromTo(
      navRef.current,
      { y: -100, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: "power3.out", delay: pathname === "/" ? 1.5 : 0.3 }
    );
  }, [pathname]);

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
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          isScrolled
            ? "bg-[#0a192f]/95 shadow-lg backdrop-blur-sm py-4"
            : "bg-transparent py-6"
        )}
        style={{
          opacity: 0, // Initial state for GSAP
        }}
      >
        <div className="container-main flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-2 group"
          >
            {/* Logo Icon Placeholder */}
            <div className="w-8 h-8 bg-teal-400 rounded-sm flex items-center justify-center">
               <span className="font-bold text-navy-900 text-lg">P</span>
            </div>

            <div className="flex flex-col">
              <span className="text-xl font-bold tracking-tight text-white leading-none group-hover:text-teal-400 transition-colors">
                PAK
              </span>
              <span className="text-sm font-medium tracking-wide text-slate-400 leading-none">
                PETROLEUM
              </span>
            </div>
          </Link>

          <ul className="hidden lg:flex items-center gap-8">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={cn(
                    "relative py-1 text-sm font-medium transition-colors duration-300",
                    isActive(item.href)
                      ? "text-teal-400"
                      : "text-slate-light hover:text-teal-400"
                  )}
                >
                  {item.name}
                  {isActive(item.href) && (
                    <motion.span
                      layoutId="nav-indicator"
                      className="absolute -bottom-1 left-0 right-0 h-[2px] bg-teal-400"
                      transition={{ type: "spring", bounce: 0.15, duration: 0.5 }}
                    />
                  )}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-4">
             <Link
              href="/contact"
              className="hidden lg:inline-flex items-center px-6 py-2.5 rounded text-sm font-semibold text-[#0a192f] transition-all duration-300 hover:-translate-y-1 bg-teal-400 hover:bg-teal-300"
            >
              Contact Us
            </Link>

            <button
              className="lg:hidden p-2 text-teal-400 hover:text-white transition-colors"
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              aria-label={isMobileOpen ? "Close menu" : "Open menu"}
            >
              {isMobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      <MobileMenu
        isOpen={isMobileOpen}
        onClose={() => setIsMobileOpen(false)}
        currentPath={pathname}
      />
    </>
  );
}
