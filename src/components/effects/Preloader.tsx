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

    tl.fromTo(
      brandRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" },
      0
    );

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

    tl.fromTo(
      lineRef.current,
      { scaleX: 0 },
      { scaleX: 1, duration: 2.2, ease: "power2.inOut" },
      0.3
    );

    tl.to(
      [brandRef.current, counterRef.current.parentElement],
      {
        opacity: 0, y: -30, duration: 0.4, ease: "power2.in", stagger: 0.05,
      },
      "+=0.3"
    );

    return () => { tl.kill(); };
  }, []);

  return (
    <AnimatePresence mode="wait">
      {isLoading && (
        <motion.div
          key="preloader"
          initial={{ y: 0 }}
          exit={{ y: "-100%" }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center"
          style={{ background: '#13101C' }}
          aria-hidden="true"
        >
          <div className="sr-only" role="status">Loading application...</div>
          <div
            className="absolute inset-0 opacity-[0.06]"
            style={{ background: 'radial-gradient(circle, rgba(200,111,255,0.4) 1px, transparent 1px)', backgroundSize: '32px 32px' }}
          />

          <div
            aria-hidden="true"
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
            style={{ background: 'radial-gradient(circle, rgba(200,111,255,0.1) 0%, transparent 60%)', filter: 'blur(60px)' }}
          />

          <div ref={brandRef} className="relative mb-12 opacity-0">
            <span className="text-overline tracking-[0.3em]" style={{ color: 'rgba(200, 111, 255, 0.6)' }}>
              PAK PETROLEUM
            </span>
          </div>

          <div className="relative flex items-baseline">
            <span
              ref={counterRef}
              className="text-[clamp(5rem,20vw,12rem)] font-extrabold leading-none tracking-tighter text-white tabular-nums"
            >
              0
            </span>
            <span className="text-[clamp(1.5rem,4vw,3rem)] font-light text-white/20 ml-1 self-start mt-[0.15em]">
              %
            </span>
          </div>

          <div className="relative mt-10 w-48 md:w-64 h-[2px] overflow-hidden" style={{ background: 'rgba(255, 255, 255, 0.06)' }}>
            <div
              ref={lineRef}
              className="absolute inset-0 origin-left"
              style={{ transform: "scaleX(0)", background: 'linear-gradient(90deg, #1B4DFE, #AC24FF, #C86FFF)' }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
