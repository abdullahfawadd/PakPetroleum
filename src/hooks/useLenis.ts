"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import { gsap } from "gsap";

// ⚡ Bolt Optimization: Extract pure easing function to module level
// to prevent render-time function recreation and minimize allocations.
const lenisEasing = (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t));

export function useLenis() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: lenisEasing,
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
      infinite: false,
    });

    // ⚡ Bolt Optimization:
    // Sync Lenis scroll with GSAP's ticker to ensure ScrollTrigger animations
    // are perfectly synchronized with scroll position, preventing jitter.
    // GSAP ticker provides time in seconds, Lenis expects milliseconds.
    function update(time: number) {
      lenis.raf(time * 1000);
    }

    gsap.ticker.add(update);

    return () => {
      gsap.ticker.remove(update);
      lenis.destroy();
    };
  }, []);
}
