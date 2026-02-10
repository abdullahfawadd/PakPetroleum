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
    // Prevent scrolling while loading
    document.body.style.overflow = "hidden";

    const obj = { val: 0 };
    const tl = gsap.timeline({
      onComplete: () => {
        setIsLoading(false);
        document.body.style.overflow = "";
      },
    });

    if (brandRef.current) {
        tl.fromTo(
        brandRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" },
        0
        );
    }

    if (counterRef.current) {
        tl.to(
        obj,
        {
            val: 100,
            duration: 2.5,
            ease: "expo.inOut",
            onUpdate: () => {
            if (counterRef.current) {
                counterRef.current.textContent = Math.round(obj.val).toString();
            }
            },
        },
        0.2
        );
    }

    if (lineRef.current) {
        tl.fromTo(
        lineRef.current,
        { scaleX: 0 },
        { scaleX: 1, duration: 2.5, ease: "expo.inOut" },
        0.2
        );
    }

    return () => {
        tl.kill();
        document.body.style.overflow = "";
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
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#020c1b]"
        >
          {/* Background Grid */}
          <div className="absolute inset-0 bg-mesh opacity-10" />

          <div ref={brandRef} className="relative mb-8 opacity-0">
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-teal-400 font-semibold">
              PAK PETROLEUM
            </span>
          </div>

          <div className="relative flex items-baseline">
            <span
              ref={counterRef}
              className="text-[clamp(4rem,15vw,8rem)] font-bold leading-none tracking-tighter text-slate-light tabular-nums font-mono"
            >
              0
            </span>
            <span className="text-[clamp(1.5rem,4vw,3rem)] font-light text-slate-500 ml-2 self-start mt-[0.1em]">
              %
            </span>
          </div>

          <div className="relative mt-8 w-48 md:w-64 h-[2px] bg-[#112240] overflow-hidden rounded-full">
            <div
              ref={lineRef}
              className="absolute inset-0 origin-left bg-teal-400"
              style={{ transform: "scaleX(0)" }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
