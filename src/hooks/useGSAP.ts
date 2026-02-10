"use client";

import { useEffect, useLayoutEffect, useRef, DependencyList, RefObject } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const useIsomorphicLayoutEffect = typeof window !== "undefined" ? useLayoutEffect : useEffect;

export function useGSAP<T extends HTMLElement>(
  callback: (ctx: gsap.Context) => void,
  deps: DependencyList = []
) {
  const ref = useRef<T>(null);
  const savedCallback = useRef(callback);

  // Update saved callback if it changes
  useIsomorphicLayoutEffect(() => {
    savedCallback.current = callback;
  });

  useIsomorphicLayoutEffect(() => {
    if (!ref.current) return;

    const ctx = gsap.context((context) => {
      if (savedCallback.current) {
        savedCallback.current(context);
      }
    }, ref);

    return () => ctx.revert();
  }, deps); // Only re-run if deps change

  return ref;
}

export function useScrollReveal(
  ref: RefObject<HTMLElement | null>,
  options: gsap.TweenVars = {}
) {
  const savedOptions = useRef(options);

  useIsomorphicLayoutEffect(() => {
    savedOptions.current = options;
  });

  useIsomorphicLayoutEffect(() => {
    if (!ref.current) return;

    const ctx = gsap.context(() => {
      gsap.from(ref.current, {
        opacity: 0,
        y: 50,
        duration: 0.8,
        ease: "power3.out",
        ...savedOptions.current,
        scrollTrigger: {
          trigger: ref.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });
    });

    return () => ctx.revert();
  }, []);
}
