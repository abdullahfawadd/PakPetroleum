## 2024-05-23 - Unstable Ref Callbacks in Loops
**Learning:** Using `ref={(el) => ...}` or `ref={getRef(index)}` (where `getRef` creates a closure) inside a loop causes React to detach/attach the ref on every render.
**Action:** Use `useMemo` to generate a stable array of callback functions for lists of refs.

## 2024-05-24 - Unoptimized 3D Primitive Loops
**Learning:** Rendering `mesh` primitives inside a map loop (e.g., for particles or nodes) creates individual draw calls and geometry/material instances, which can be expensive.
**Action:** Use `<Instances>` and `<Instance>` from `@react-three/drei` to automatically implement instanced rendering (reducing draw calls to 1) while keeping declarative code.

## 2024-05-26 - High-Frequency Scroll Event Throttling
**Learning:** Binding direct updates to `window.addEventListener('scroll')` without throttling causes performance degradation and main-thread blocking due to the high frequency of scroll events firing.
**Action:** Always throttle scroll event listeners using the `requestAnimationFrame` pattern with a `ticking` flag, and ensure `cancelAnimationFrame` is called in the cleanup function.
