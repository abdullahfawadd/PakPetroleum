"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { EASINGS } from "@/lib/motion";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function animateFadeInUp(
  elements: gsap.TweenTarget,
  trigger?: Element | null,
  options?: gsap.TweenVars
) {
  return gsap.from(elements, {
    opacity: 0,
    y: 60,
    duration: 0.8,
    ease: EASINGS.POWER,
    stagger: 0.15,
    ...options,
    scrollTrigger: trigger
      ? {
          trigger,
          start: "top 85%",
          toggleActions: "play none none none",
        }
      : undefined,
  });
}

export function animateScaleIn(
  elements: gsap.TweenTarget,
  trigger?: Element | null,
  options?: gsap.TweenVars
) {
  return gsap.from(elements, {
    scale: 0.8,
    opacity: 0,
    duration: 0.6,
    ease: EASINGS.POWER, // Replaced back.out(1.7)
    stagger: 0.1,
    ...options,
    scrollTrigger: trigger
      ? {
          trigger,
          start: "top 80%",
          toggleActions: "play none none none",
        }
      : undefined,
  });
}

export function createParallax(element: Element, speed = 0.5) {
  return gsap.to(element, {
    y: () => (element as HTMLElement).offsetHeight * speed,
    ease: "none",
    scrollTrigger: {
      trigger: element,
      start: "top bottom",
      end: "bottom top",
      scrub: true,
      invalidateOnRefresh: true,
    },
  });
}

export function createMagneticEffect(button: HTMLElement, strength = 0.3) {
  const handleMove = (e: MouseEvent) => {
    const rect = button.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    gsap.to(button, {
      x: x * strength,
      y: y * strength,
      duration: 0.3,
      ease: "power2.out",
    });
  };

  const handleLeave = () => {
    gsap.to(button, {
      x: 0,
      y: 0,
      duration: 0.5,
      ease: EASINGS.POWER, // Replaced elastic.out
    });
  };

  button.addEventListener("mousemove", handleMove);
  button.addEventListener("mouseleave", handleLeave);

  return () => {
    button.removeEventListener("mousemove", handleMove);
    button.removeEventListener("mouseleave", handleLeave);
  };
}

export function animateCountUp(
  element: HTMLElement,
  endValue: number,
  duration: number = 2
) {
  const obj = { val: 0 };
  return gsap.to(obj, {
    val: endValue,
    duration: duration,
    ease: EASINGS.EXPO,
    scrollTrigger: {
      trigger: element,
      start: "top 85%",
      toggleActions: "play none none none",
    },
    onUpdate: function () {
      if (element) {
        element.textContent = Math.floor(obj.val).toLocaleString();
      }
    },
  });
}

export function animateTimelineLine(element: HTMLElement) {
  return gsap.fromTo(
    element,
    { scaleY: 0, transformOrigin: "top center" },
    {
      scaleY: 1,
      ease: "none",
      scrollTrigger: {
        trigger: element,
        start: "top center",
        end: "bottom center",
        scrub: true,
      },
    }
  );
}

export { gsap, ScrollTrigger };
