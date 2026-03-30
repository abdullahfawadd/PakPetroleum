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

## 2024-05-27 - Hardcoded AdaptiveDpr Resolution
**Learning:** Using `<PerformanceMonitor>` alongside hardcoded `dpr={[1, 2]}` without fully mapping the regression/recovery flow causes conflicts. Replacing React Three Fiber's default DPR array `dpr={[1, 2]}` with a hardcoded `useState(2)` inside a canvas causes massive performance penalties on 1x monitors by forcing them to render 4x the pixels.
**Action:** When implementing `@react-three/drei`'s `AdaptiveDpr`, rely on it implicitly reading from `useThree().performance` or use it as a standalone drop-in with `dpr={[1, 2]}` to let R3F safely manage the upper and lower pixel ratio bounds without overriding the user's native device resolution.
