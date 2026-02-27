"use client";

import { useEffect, useRef, useState } from "react";

export default function ScrollProgress() {
  const barRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // ⚡ Bolt: Throttling scroll events using requestAnimationFrame
    // to prevent layout thrashing and main thread blocking.
    let ticking = false;
    let rafId: number | null = null;

    const updateProgress = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;

      if (barRef.current) {
        barRef.current.style.width = `${progress}%`;
      }
      setVisible(scrollTop > 100);
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
      className={`fixed top-0 left-0 right-0 z-[60] h-[2px] transition-opacity duration-300 ${
        visible ? "opacity-100" : "opacity-0"
      }`}
    >
      <div
        ref={barRef}
        className="h-full gradient-bar"
        style={{ width: "0%", transition: "width 0.1s linear" }}
      />
    </div>
  );
}
