"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Ensure ScrollTrigger is registered
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function useLenis() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
      infinite: false,
    });

    // Synchronize Lenis scroll with ScrollTrigger
    lenis.on("scroll", ScrollTrigger.update);

    // Add Lenis update to GSAP's ticker for synchronized animation frames
    // This prevents multiple rAF loops and ensures smooth scroll-triggered animations
    const update = () => {
      lenis.raf(gsap.ticker.time * 1000);
    };

    gsap.ticker.add(update);

    // Disable lag smoothing to prevent jumpy scrolling when the main thread is heavy
    // This is recommended when driving scroll with GSAP ticker
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(update);
      lenis.destroy();
    };
  }, []);
}
