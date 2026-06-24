## 2024-05-23 - Unstable Ref Callbacks in Loops
**Learning:** Using `ref={(el) => ...}` or `ref={getRef(index)}` (where `getRef` creates a closure) inside a loop causes React to detach/attach the ref on every render.
**Action:** Use `useMemo` to generate a stable array of callback functions for lists of refs.

## 2024-05-24 - Unoptimized 3D Primitive Loops
**Learning:** Rendering `mesh` primitives inside a map loop (e.g., for particles or nodes) creates individual draw calls and geometry/material instances, which can be expensive.
**Action:** Use `<Instances>` and `<Instance>` from `@react-three/drei` to automatically implement instanced rendering (reducing draw calls to 1) while keeping declarative code.

## 2024-05-25 - Expensive Distance Checks in Loops
**Learning:** Using `distanceTo` (which computes square root) inside a nested loop for collision/proximity checks is unnecessary when comparing against a constant threshold.
**Action:** Use `distanceToSquared` and compare against the squared threshold to avoid `Math.sqrt` overhead.

## 2024-05-26 - Static Text Fragments in GSAP Animations
**Learning:** Defining character-split arrays (e.g., `text.split("").map(...)`) inside a component render function for GSAP targets causes React to recreate the entire array of span elements on every render cycle.
**Action:** Extract the string splitting logic and pre-calculate the element fragments as module-level static constants to eliminate render-time object allocations and VDOM overhead.
## 2024-06-24 - Layout Thrashing in Next.js Scroll Listeners
**Learning:** Found a common anti-pattern in `src/components/layout/ScrollProgress.tsx` where React `useState` was used inside a `requestAnimationFrame` loop attached to a scroll listener, and `style.width` was updated directly causing layout thrashing. Because scroll progress is an implicit high-frequency layout change, syncing it to React state forces the entire component fiber tree to reconcile, blocking the main thread during scrolling.
**Action:** Always replace `width`/`height` animations with `transform: scaleX`/`scaleY` on scroll bars to utilize GPU composition. Never use React state to track visual visibility during a scroll loop if a direct DOM mutation on a `ref` (e.g., `ref.current.style.opacity`) alongside a closure-scoped boolean variable can achieve the same result without triggering a render.
