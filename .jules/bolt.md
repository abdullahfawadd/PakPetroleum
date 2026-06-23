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

## 2024-05-24 - Layout Thrashing in Scroll Loop Optimization
**Learning:** Updating React state linked to `width` percentage animations inside a scroll event loop (`requestAnimationFrame`) severely blocks the main thread in Next.js/React applications due to layout thrashing. Bypassing state with a local `ref` boolean flag to toggle DOM styles directly (`opacity`), combined with switching `width` interpolation to `transform: scaleX`, eliminates render cycle overhead and shifts rendering to the GPU compositor entirely.
**Action:** When auditing high-frequency scroll event listeners, immediately flag any `useState` hooks. Refactor to mutate element refs directly (`element.style.transform`) and switch layout properties (`width`, `height`, `top`, `left`) to composite-friendly transforms (`scale`, `translate`).
