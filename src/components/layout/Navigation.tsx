"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { gsap } from "gsap";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { NAV_ITEMS } from "@/lib/constants";
import { useScroll } from "@/hooks/useScroll";
import { useGSAP } from "@/hooks/useGSAP";
import MobileMenu from "./MobileMenu";
import { cn } from "@/lib/utils";

export default function Navigation() {
  const isScrolled = useScroll(30);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
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
            ? "bg-navy-900/95 shadow-lg backdrop-blur-sm py-4"
            : "bg-transparent py-6"
        )}
        style={{ opacity: 0 }}
      >
        <div className="container-main flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group z-50 relative">
            <div className="w-8 h-8 bg-teal-400 rounded-sm flex items-center justify-center">
               <span className="font-bold text-navy-900 text-lg">P</span>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold tracking-tight text-primary leading-none group-hover:text-teal-400 transition-colors">
                PAK
              </span>
              <span className="text-sm font-medium tracking-wide text-slate-400 leading-none">
                PETROLEUM
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden lg:flex items-center gap-8">
            {NAV_ITEMS.map((item) => {
              // Ensure we check if items exists and has length, satisfying TypeScript
              const hasSubItems = 'items' in item && Array.isArray(item.items) && item.items.length > 0;
              const isItemActive = isActive(item.href);

              return (
                <li
                  key={item.name}
                  className="relative group"
                  onMouseEnter={() => setHoveredItem(item.name)}
                  onMouseLeave={() => setHoveredItem(null)}
                >
                  <Link
                    href={item.href}
                    className={cn(
                      "flex items-center gap-1 py-2 text-sm font-medium transition-colors duration-300",
                      isItemActive ? "text-teal-400" : "text-primary group-hover:text-teal-400"
                    )}
                  >
                    {item.name}
                    {hasSubItems && (
                      <ChevronDown className={cn(
                        "w-4 h-4 transition-transform duration-300",
                        hoveredItem === item.name ? "rotate-180" : ""
                      )} />
                    )}
                    {isItemActive && !hasSubItems && (
                      <motion.span
                        layoutId="nav-indicator"
                        className="absolute bottom-0 left-0 right-0 h-[2px] bg-teal-400"
                        transition={{ type: "spring", bounce: 0.15, duration: 0.5 }}
                      />
                    )}
                  </Link>

                  {/* Mega Menu Dropdown */}
                  <AnimatePresence>
                    {hasSubItems && hoveredItem === item.name && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-1/2 -translate-x-1/2 pt-4 w-[600px] z-40"
                      >
                        <div className="bg-navy-800 rounded-xl shadow-2xl border border-white/5 overflow-hidden p-6 grid grid-cols-2 gap-6">
                           {item.items.map((subItem) => (
                             <Link
                               key={subItem.name}
                               href={subItem.href}
                               className="group/sub flex flex-col gap-1 p-3 rounded-lg hover:bg-white/5 transition-colors"
                             >
                               <span className="text-sm font-semibold text-primary group-hover/sub:text-teal-400 transition-colors">
                                 {subItem.name}
                               </span>
                               {subItem.description && (
                                 <span className="text-xs text-slate-400 line-clamp-2">
                                   {subItem.description}
                                 </span>
                               )}
                             </Link>
                           ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </li>
              );
            })}
          </ul>

          <div className="flex items-center gap-4 z-50 relative">
             <Link
              href="/contact"
              className="hidden lg:inline-flex items-center px-6 py-3 rounded text-sm font-semibold text-navy-900 transition-all duration-300 hover:-translate-y-1 bg-teal-400 hover:bg-teal-300"
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
