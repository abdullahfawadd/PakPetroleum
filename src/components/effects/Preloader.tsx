"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { gsap } from "gsap";

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true);
  const counterRef = useRef<HTMLSpanElement>(null);
  const brandRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!counterRef.current || !brandRef.current || !lineRef.current) return;

    const obj = { val: 0 };

    const tl = gsap.timeline({
      onComplete: () => setIsLoading(false),
    });

    // Brand name fade in
    tl.fromTo(
      brandRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" },
      0
    );

    // Counter 0 -> 100 with custom easing
    tl.to(
      obj,
      {
        val: 100,
        duration: 2.2,
        ease: "power2.inOut",
        onUpdate: () => {
          if (counterRef.current) {
            counterRef.current.textContent = Math.round(obj.val).toString();
          }
        },
      },
      0.3
    );

    // Progress line fills
    tl.fromTo(
      lineRef.current,
      { scaleX: 0 },
      { scaleX: 1, duration: 2.2, ease: "power2.inOut" },
      0.3
    );

    // Fade out content
    tl.to(
      [brandRef.current, counterRef.current.parentElement],
      {
        opacity: 0,
        y: -30,
        duration: 0.4,
        ease: "power2.in",
        stagger: 0.05,
      },
      "+=0.3"
    );

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <AnimatePresence mode="wait">
      {isLoading && (
        <motion.div
          key="preloader"
          initial={{ y: 0 }}
          exit={{ y: "-100%" }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-bg"
        >
          {/* Subtle dot grid bg */}
          <div className="absolute inset-0 opacity-[0.12] bg-[radial-gradient(circle,_rgba(11,42,66,0.35)_1px,_transparent_1px)] bg-[length:32px_32px]" />

          {/* Brand name */}
          <div ref={brandRef} className="relative mb-12 opacity-0">
            <span className="text-overline tracking-[0.3em] text-text-muted">
              PAK PETROLEUM
            </span>
          </div>

          {/* Counter */}
          <div className="relative flex items-baseline">
            <span
              ref={counterRef}
              className="text-[clamp(5rem,20vw,12rem)] font-extrabold leading-none tracking-tighter text-text-primary tabular-nums"
            >
              0
            </span>
            <span className="text-[clamp(1.5rem,4vw,3rem)] font-light text-text-muted ml-1 self-start mt-[0.15em]">
              %
            </span>
          </div>

          {/* Progress line */}
          <div className="relative mt-10 w-48 md:w-64 h-[1px] bg-primary-200/40 overflow-hidden">
            <div
              ref={lineRef}
              className="absolute inset-0 origin-left gradient-bar"
              style={{ transform: "scaleX(0)" }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
