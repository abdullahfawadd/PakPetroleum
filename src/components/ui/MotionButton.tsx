"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface MotionButtonProps {
  children: ReactNode;
  onClick?: () => void;
  className?: string;
  variant?: "primary" | "outline";
  href?: string; // Add href support for link-like buttons
}

export function MotionButton({
  children,
  onClick,
  className,
  variant = "primary",
  href,
}: MotionButtonProps) {
  const isPrimary = variant === "primary";
  const baseClasses = cn(
    "inline-flex items-center justify-center gap-2 px-8 py-4 rounded text-sm font-semibold transition-colors",
    isPrimary
      ? "bg-teal text-[#0a192f] hover:bg-teal-dark"
      : "border border-teal text-teal-400 bg-transparent hover:bg-teal/10",
    className
  );

  const variants = {
    hover: {
      scale: 1.02,
      boxShadow: "0 0 20px rgba(100, 255, 218, 0.2)",
    },
    tap: { scale: 0.98 },
  };

  if (href) {
    return (
      <motion.a
        href={href}
        variants={variants}
        whileHover="hover"
        whileTap="tap"
        transition={{ duration: 0.3, ease: "easeOut" }} // Power/Stability
        className={baseClasses}
        onClick={onClick}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      variants={variants}
      whileHover="hover"
      whileTap="tap"
      transition={{ duration: 0.3, ease: "easeOut" }}
      className={baseClasses}
      onClick={onClick}
    >
      {children}
    </motion.button>
  );
}
