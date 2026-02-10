"use client";

import Link from "next/link";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { NAV_ITEMS } from "@/lib/constants";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  currentPath: string;
}

export default function MobileMenu({ isOpen, onClose, currentPath }: MobileMenuProps) {
  const isActive = (href: string) => {
    if (href === "/") return currentPath === "/";
    return currentPath.startsWith(href);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          <motion.div
            className="fixed top-0 right-0 z-40 h-full w-[80%] max-w-sm flex flex-col lg:hidden border-l border-white/10"
            style={{ background: '#1A1726' }}
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 28, stiffness: 300 }}
          >
            <div className="flex items-center justify-between px-6 h-20 border-b border-white/5">
              <span className="text-lg font-bold text-white">Menu</span>
              <button onClick={onClose} className="p-2 text-white/40 hover:text-white transition-colors">
                <X className="w-5 h-5" />
              </button>
            </div>
            <nav className="flex-1 py-8 px-6">
              <ul className="space-y-1">
                {NAV_ITEMS.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      onClick={onClose}
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
            <div className="p-6 border-t border-white/5">
              <Link
                href="/contact"
                onClick={onClose}
                className="block text-center py-3 rounded-full text-sm font-semibold text-white bg-gradient-to-br from-[#AC24FF] to-[#C86FFF] hover:shadow-lg transition-shadow"
              >
                Get in Touch
              </Link>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
