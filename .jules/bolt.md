## 2024-05-23 - Unstable Ref Callbacks in Loops
**Learning:** Using `ref={(el) => ...}` or `ref={getRef(index)}` (where `getRef` creates a closure) inside a loop causes React to detach/attach the ref on every render.
**Action:** Use `useMemo` to generate a stable array of callback functions for lists of refs.

## 2024-05-24 - Optimizing Lenis with GSAP Ticker
**Learning:** When using Lenis for smooth scrolling alongside GSAP ScrollTrigger, running separate `requestAnimationFrame` loops can cause desynchronization and jitter.
**Action:** Drive the Lenis instance using `gsap.ticker.add((time) => lenis.raf(time * 1000))` to consolidate animation frames and ensure perfect sync between scroll position and scroll-triggered animations.
