"use client";

import { useEffect, useRef } from "react";

export default function ScrollProgress() {
  const containerRef = useRef<HTMLDivElement>(null);
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // ⚡ Bolt: Throttling scroll events using requestAnimationFrame
    // to prevent layout thrashing and main thread blocking.
    let ticking = false;
    let rafId: number | null = null;
    let isVisible = false;

    const updateProgress = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? scrollTop / docHeight : 0;

      if (barRef.current) {
        // ⚡ Bolt: Use GPU-accelerated transform instead of layout-triggering width
        barRef.current.style.transform = `scaleX(${progress})`;
      }

      // ⚡ Bolt: Direct DOM mutation bypasses React re-renders for high-frequency state
      const shouldBeVisible = scrollTop > 100;
      if (shouldBeVisible !== isVisible && containerRef.current) {
        containerRef.current.style.opacity = shouldBeVisible ? "1" : "0";
        isVisible = shouldBeVisible;
      }

      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        rafId = window.requestAnimationFrame(updateProgress);
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (rafId) {
        window.cancelAnimationFrame(rafId);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed top-0 left-0 right-0 z-[60] h-[2px] transition-opacity duration-300 opacity-0"
    >
      <div
        ref={barRef}
        className="h-full gradient-bar origin-left"
        style={{ transform: "scaleX(0)", transition: "transform 0.1s linear" }}
      />
    </div>
  );
}
