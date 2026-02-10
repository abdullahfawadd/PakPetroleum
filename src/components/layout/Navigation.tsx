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
      { y: 0, opacity: 1, duration: 0.8, ease: "power3.out", delay: pathname === "/" ? 3.5 : 0.3 }
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
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b border-transparent",
          isScrolled
            ? "backdrop-blur-2xl bg-[#13101C]/85 border-[rgba(200,111,255,0.08)]"
            : "bg-transparent"
        )}
        style={{
          opacity: 0, // Initial state for GSAP
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
                  className={cn(
                    "relative px-4 py-2 text-[13px] font-medium transition-colors duration-300",
                    isActive(item.href)
                      ? "text-white"
                      : "text-white/35 hover:text-white/65"
                  )}
                >
                  {item.name}
                  {isActive(item.href) && (
                    <motion.span
                      layoutId="nav-indicator"
                      className="absolute -bottom-px left-2 right-2 h-[2px] rounded-full bg-gradient-to-r from-[#AC24FF] to-[#C86FFF]"
                      transition={{ type: "spring", bounce: 0.15, duration: 0.5 }}
                    />
                  )}
                </Link>
              </li>
            ))}
          </ul>

          <Link
            href="/contact"
            className="hidden lg:inline-flex items-center px-5 py-2.5 rounded-full text-sm font-semibold text-white transition-all duration-300 hover:shadow-glow-sm hover:scale-[1.02] bg-gradient-to-br from-[#AC24FF] to-[#C86FFF]"
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

      <MobileMenu
        isOpen={isMobileOpen}
        onClose={() => setIsMobileOpen(false)}
        currentPath={pathname}
      />
    </>
  );
}
