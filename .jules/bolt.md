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

## 2024-06-20 - High-Frequency Layout Thrashing Optimization
**Learning:** Found a major performance bottleneck where high-frequency scroll events were tied directly to React state updates and inline `width` CSS properties on the progress bar. This forced continuous layout recalculations on every scroll tick.
**Action:** When components need to react visually to high-frequency events (like scrolling), bypass React's `useState` entirely. Use `useRef` to directly manipulate the DOM. Replace layout-triggering properties (like `width`) with GPU-accelerated ones (like `transform: scaleX`).
