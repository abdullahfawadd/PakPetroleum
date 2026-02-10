'use client';

import { useEffect, useRef, useState, useCallback } from 'react';
import { gsap } from 'gsap';

const INTERACTIVE_SELECTORS = 'a, button, [data-cursor="pointer"], input, textarea, select, [role="button"]';

export default function CustomCursor() {
  const outerRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(true);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  const quickToXOuter = useRef<ReturnType<typeof gsap.quickTo> | null>(null);
  const quickToYOuter = useRef<ReturnType<typeof gsap.quickTo> | null>(null);
  const quickToXInner = useRef<ReturnType<typeof gsap.quickTo> | null>(null);
  const quickToYInner = useRef<ReturnType<typeof gsap.quickTo> | null>(null);

  // Detect touch device and reduced motion on mount
  useEffect(() => {
    const touchQuery = window.matchMedia('(hover: hover) and (pointer: fine)');
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');

    setIsTouchDevice(!touchQuery.matches);
    setPrefersReducedMotion(motionQuery.matches);

    const handleTouchChange = (e: MediaQueryListEvent) => setIsTouchDevice(!e.matches);
    const handleMotionChange = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);

    touchQuery.addEventListener('change', handleTouchChange);
    motionQuery.addEventListener('change', handleMotionChange);

    return () => {
      touchQuery.removeEventListener('change', handleTouchChange);
      motionQuery.removeEventListener('change', handleMotionChange);
    };
  }, []);

  // Initialize GSAP quickTo functions
  useEffect(() => {
    if (isTouchDevice || prefersReducedMotion || !outerRef.current || !innerRef.current) return;

    // Outer circle follows with lag (slower, springy)
    quickToXOuter.current = gsap.quickTo(outerRef.current, 'x', {
      duration: 0.5,
      ease: 'power3.out',
    });
    quickToYOuter.current = gsap.quickTo(outerRef.current, 'y', {
      duration: 0.5,
      ease: 'power3.out',
    });

    // Inner dot follows quickly (snappy)
    quickToXInner.current = gsap.quickTo(innerRef.current, 'x', {
      duration: 0.15,
      ease: 'power2.out',
    });
    quickToYInner.current = gsap.quickTo(innerRef.current, 'y', {
      duration: 0.15,
      ease: 'power2.out',
    });
  }, [isTouchDevice, prefersReducedMotion]);

  // Handle hover state changes with GSAP animations
  useEffect(() => {
    if (isTouchDevice || prefersReducedMotion || !outerRef.current || !innerRef.current) return;

    if (isHovering) {
      gsap.to(outerRef.current, {
        scale: 1.8,
        borderColor: 'rgba(11, 42, 66, 0.65)',
        duration: 0.35,
        ease: 'power2.out',
      });
      gsap.to(innerRef.current, {
        scale: 0.5,
        backgroundColor: '#B46B3D',
        duration: 0.35,
        ease: 'power2.out',
      });
    } else {
      gsap.to(outerRef.current, {
        scale: 1,
        borderColor: 'rgba(11, 42, 66, 0.45)',
        duration: 0.35,
        ease: 'power2.out',
      });
      gsap.to(innerRef.current, {
        scale: 1,
        backgroundColor: '#0B2A42',
        duration: 0.35,
        ease: 'power2.out',
      });
    }
  }, [isHovering, isTouchDevice, prefersReducedMotion]);

  // Mouse move handler
  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (!quickToXOuter.current || !quickToYOuter.current) return;
    if (!quickToXInner.current || !quickToYInner.current) return;

    // Position relative to center of each element
    const outerOffset = 12; // half of 24px
    const innerOffset = 4; // half of 8px

    quickToXOuter.current(e.clientX - outerOffset);
    quickToYOuter.current(e.clientY - outerOffset);
    quickToXInner.current(e.clientX - innerOffset);
    quickToYInner.current(e.clientY - innerOffset);
  }, []);

  // Mouse enter/leave document handler
  const handleMouseEnter = useCallback(() => setIsVisible(true), []);
  const handleMouseLeave = useCallback(() => setIsVisible(false), []);

  // Hover detection on interactive elements
  const handleMouseOver = useCallback((e: MouseEvent) => {
    const target = e.target as HTMLElement;
    if (target.closest(INTERACTIVE_SELECTORS)) {
      setIsHovering(true);
    }
  }, []);

  const handleMouseOut = useCallback((e: MouseEvent) => {
    const target = e.target as HTMLElement;
    if (target.closest(INTERACTIVE_SELECTORS)) {
      setIsHovering(false);
    }
  }, []);

  // Attach/detach event listeners
  useEffect(() => {
    if (isTouchDevice || prefersReducedMotion) return;

    document.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseover', handleMouseOver, { passive: true });
    document.addEventListener('mouseout', handleMouseOut, { passive: true });

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseout', handleMouseOut);
    };
  }, [isTouchDevice, prefersReducedMotion, handleMouseMove, handleMouseEnter, handleMouseLeave, handleMouseOver, handleMouseOut]);

  // Do not render on touch devices or if reduced motion is preferred
  if (isTouchDevice || prefersReducedMotion) return null;

  return (
    <>
      {/* Outer circle - border only, follows with lag */}
      <div
        ref={outerRef}
        className="fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-difference"
        style={{
          width: 24,
          height: 24,
          borderRadius: '50%',
          border: '1.5px solid rgba(11, 42, 66, 0.45)',
          opacity: isVisible ? 1 : 0,
          transition: 'opacity 0.2s ease',
          willChange: 'transform',
        }}
        aria-hidden="true"
      />

      {/* Inner dot - filled, follows closely */}
      <div
        ref={innerRef}
        className="fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-difference"
        style={{
          width: 8,
          height: 8,
          borderRadius: '50%',
          backgroundColor: '#0B2A42',
          opacity: isVisible ? 1 : 0,
          transition: 'opacity 0.2s ease',
          willChange: 'transform',
        }}
        aria-hidden="true"
      />
    </>
  );
}
