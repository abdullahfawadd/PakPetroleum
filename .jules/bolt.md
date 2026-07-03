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

## 2024-05-27 - Preventing Layout Thrashing with GPU-accelerated CSS
**Learning:** Animating layout properties (such as `width` or `height`) inside high-frequency event handlers (like scroll loops or `requestAnimationFrame`) causes layout thrashing by forcing browser recalculations on every frame, which severely degrades rendering performance on the main thread.
**Action:** Use GPU-accelerated CSS properties like `transform: scaleX(...)` to offload rendering to the compositor. When migrating from `width` to `scaleX`, ensure the target element is styled with a base width of 100% (e.g., `w-full` in Tailwind) and an appropriate transform origin (e.g., `origin-left`) to replicate the visual behavior perfectly.
