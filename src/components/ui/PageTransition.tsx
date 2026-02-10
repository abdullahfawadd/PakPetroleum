"use client";

import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";
import { VARIANTS } from "@/lib/motion";

export default function PageTransition({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        initial="hidden"
        animate="visible"
        exit="hidden"
        variants={VARIANTS.FADE_UP}
        className="w-full"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
