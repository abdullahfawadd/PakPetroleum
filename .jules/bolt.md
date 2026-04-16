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

## 2024-05-27 - AdaptiveDpr in R3F Scenes
**Learning:** For performance-critical React Three Fiber scenes (like `SplineScene`), relying on a static `dpr={[1, 2]}` clamp on the `<Canvas>` may still cause framerate drops on mid-tier devices when the scene has high complexity (e.g. many instances or particles).
**Action:** Use `<AdaptiveDpr pixelated />` from `@react-three/drei` inside the `<Canvas>`, wrapped by `<PerformanceMonitor>`. This automatically scales down the resolution when framerate drops, ensuring smoother rendering.
