"use client";

import { useState } from "react";
import Link from "next/link";
import { X, ChevronDown, ChevronUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { NAV_ITEMS } from "@/lib/constants";
import { cn } from "@/lib/utils";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  currentPath: string;
}

export default function MobileMenu({ isOpen, onClose, currentPath }: MobileMenuProps) {
  const [expandedItems, setExpandedItems] = useState<string[]>([]);

  const toggleExpand = (name: string) => {
    setExpandedItems(prev =>
      prev.includes(name) ? prev.filter(item => item !== name) : [...prev, name]
    );
  };

  const isActive = (href: string) => {
    if (href === "/") return currentPath === "/";
    return currentPath.startsWith(href);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            className="fixed inset-0 z-40 bg-navy-950/80 backdrop-blur-sm lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          <motion.div
            className="fixed top-0 right-0 z-50 h-full w-[85%] max-w-sm flex flex-col lg:hidden border-l border-white/10 bg-navy-900"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 28, stiffness: 300 }}
          >
            <div className="flex items-center justify-between px-6 h-20 border-b border-white/5">
              <span className="text-lg font-bold text-primary">Menu</span>
              <button onClick={onClose} className="p-2 text-slate-400 hover:text-white transition-colors">
                <X className="w-6 h-6" />
              </button>
            </div>

            <nav className="flex-1 py-6 px-6 overflow-y-auto">
              <ul className="space-y-4">
                {NAV_ITEMS.map((item) => {
                   const hasSubItems = 'items' in item && Array.isArray(item.items) && item.items.length > 0;
                   const isExpanded = expandedItems.includes(item.name);

                   return (
                    <li key={item.name} className="border-b border-white/5 pb-4 last:border-0">
                      <div className="flex items-center justify-between">
                        <Link
                          href={item.href}
                          onClick={() => {
                             onClose();
                          }}
                          className={cn(
                            "text-lg font-medium transition-colors duration-300",
                            isActive(item.href) ? "text-teal-400" : "text-primary"
                          )}
                        >
                          {item.name}
                        </Link>
                        {hasSubItems && (
                          <button
                            onClick={(e) => {
                                e.stopPropagation();
                                e.preventDefault();
                                toggleExpand(item.name);
                            }}
                            className="p-2 text-slate-400 active:text-teal-400"
                          >
                             {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                          </button>
                        )}
                      </div>

                      <AnimatePresence>
                        {hasSubItems && isExpanded && (
                          <motion.ul
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="overflow-hidden pl-4 mt-2 space-y-2"
                          >
                            {item.items.map((subItem) => (
                              <li key={subItem.name}>
                                <Link
                                  href={subItem.href}
                                  onClick={onClose}
                                  className={cn(
                                    "block py-2 text-sm text-slate-400 hover:text-teal-400 transition-colors",
                                    isActive(subItem.href) ? "text-teal-400" : ""
                                  )}
                                >
                                  {subItem.name}
                                </Link>
                              </li>
                            ))}
                          </motion.ul>
                        )}
                      </AnimatePresence>
                    </li>
                   );
                })}
              </ul>
            </nav>

            <div className="p-6 border-t border-white/5 bg-navy-950">
              <Link
                href="/contact"
                onClick={onClose}
                className="block text-center py-3 rounded-md text-sm font-semibold text-navy-900 bg-teal-400 hover:bg-teal-300 transition-colors"
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
