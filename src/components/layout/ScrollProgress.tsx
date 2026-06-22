"use client";

import { useEffect, useRef } from "react";

export default function ScrollProgress() {
  const barRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // ⚡ Bolt: Throttling scroll events using requestAnimationFrame
    // and using DOM refs with transform: scaleX to prevent layout thrashing
    // and completely bypass React render cycles.
    let ticking = false;
    let rafId: number | null = null;
    let isVisible = false;

    const updateProgress = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? scrollTop / docHeight : 0;

      if (barRef.current) {
        // GPU-accelerated property offloads rendering to the compositor
        barRef.current.style.transform = `scaleX(${progress})`;
      }

      const shouldBeVisible = scrollTop > 100;
      if (shouldBeVisible !== isVisible) {
        isVisible = shouldBeVisible;
        if (containerRef.current) {
          // Bypass React state for visibility updates
          containerRef.current.style.opacity = isVisible ? "1" : "0";
        }
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

    // Initial call to set correct visual state
    updateProgress();

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
