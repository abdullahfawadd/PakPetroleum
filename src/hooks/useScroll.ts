"use client";

import { useState, useEffect } from "react";

export function useScroll(threshold: number = 30) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    // ⚡ Bolt: Throttling scroll events using requestAnimationFrame
    // to prevent excessive state updates and main thread blocking.
    let ticking = false;
    let rafId: number | null = null;

    const updateScroll = () => {
      setIsScrolled(window.scrollY > threshold);
      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        rafId = window.requestAnimationFrame(updateScroll);
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    // Check initial scroll position
    updateScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (rafId) {
        window.cancelAnimationFrame(rafId);
      }
    };
  }, [threshold]);

  return isScrolled;
}
