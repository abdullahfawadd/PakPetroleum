export const EASINGS = {
  POWER: "power3.out",
  POWER_IN: "power3.in",
  EXPO: "expo.out",
  EXPO_IN: "expo.in",
  CIRC: "circ.out",
  LINEAR: "none",
} as const;

// Framer Motion cubic-bezier approximations for GSAP eases
// power3.out approx: [0.215, 0.61, 0.355, 1]
// expo.out approx: [0.19, 1, 0.22, 1]
export const TRANSITION = {
  DEFAULT: { duration: 0.8, ease: [0.215, 0.61, 0.355, 1] },
  FAST: { duration: 0.4, ease: [0.215, 0.61, 0.355, 1] },
  SLOW: { duration: 1.5, ease: [0.215, 0.61, 0.355, 1] },
  EXPO: { duration: 1.2, ease: [0.19, 1, 0.22, 1] },
  PRECISION: { duration: 0.6, ease: [0.075, 0.82, 0.165, 1] }, // circ.out approx
} as const;

export const VARIANTS = {
  FADE_UP: {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: TRANSITION.DEFAULT
    },
  },
  FADE_IN: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: TRANSITION.DEFAULT
    },
  },
  SCALE_UP: {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: TRANSITION.DEFAULT
    },
  },
  STAGGER_CONTAINER: {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  },
} as const;

export const SCROLL_CONFIG = {
  defaults: {
    start: "top 85%",
    toggleActions: "play none none reverse",
    markers: false,
  },
  once: {
    start: "top 85%",
    toggleActions: "play none none none",
    markers: false,
  }
} as const;
