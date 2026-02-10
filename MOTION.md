# Motion Guidelines

## Philosophy: Power, Stability, Precision

Our motion language is designed to reflect the core attributes of a national energy infrastructure provider. It must communicate:

-   **Power:** Motions should feel substantial and deliberate. Elements should arrive with weight.
-   **Stability:** Avoid erratic or overly springy movements. The interface should feel grounded.
-   **Precision:** Timing and easing should be mathematical and exact. Transitions must be clean and intentional.

## Core Rules

1.  **No Bouncing:** Avoid `back.out`, `elastic.out`, or any easing that overshoots its target.
2.  **No Playful Easing:** Do not use "bouncy" or "whimsical" curves.
3.  **Engineered Feel:** Motion is functional, not decorative. "If it moves, it has a purpose."
4.  **Permissible Easing:**
    -   **Power:** `power3.out`, `power4.out` (Standard entry/exit)
    -   **Expo:** `expo.out` (Snappy, high-tech reveals)
    -   **Precision:** `circ.out` (Mechanical, linear feel with slight ease)
    -   **Linear:** `none` (Continuous loops, marquee, parallax)

## When Motion is Allowed vs. Silent

| Context | Motion Status | Description |
| :--- | :--- | :--- |
| **User Interaction** | **Allowed** | Hover states, clicks, focus rings. Essential for feedback. |
| **Storytelling** | **Allowed** | Scroll-triggered reveals, data visualization updates. Guides the narrative. |
| **Navigation** | **Allowed** | Page transitions, menu opening/closing. Provides spatial context. |
| **Information Density** | **Silent** | Complex tables, dashboards, dense text blocks. Do not distract from reading. |
| **Utility** | **Silent** | Background processes, purely functional toggles (unless critical state change). |

## Animation Types per Section

### 1. Hero Section
-   **Entrance:** Staggered reveal of text and imagery. `power3.out`.
-   **Background:** Subtle parallax or slow continuous loop (`linear`).
-   **Goal:** Establish authority immediately.

### 2. About / Trust
-   **Scroll Reveal:** Elements fade up and settle (`y: 20 -> 0`).
-   **Text:** `SplitText` reveals for key headlines (optional, keep it readable).

### 3. Operations / Infrastructure
-   **Timelines:** Lines draw in sync with scroll (`scaleX` or `scaleY`).
-   **Maps:** Pins drop or fade in with precision. No bounce.

### 4. Metrics / KPI
-   **Data Count-up:** Numbers increment smoothly from 0 to value. Use `expo.out` for a settling effect.
-   **Charts:** Bars grow from bottom. Lines draw from left.

### 5. Footer / Navigation
-   **Hover:** Links gain a subtle underline or color shift.
-   **Page Transition:** Content fades out (`opacity: 0`) and slight lift (`y: -10`) while new content fades in.

## Framer Motion Implementation

### Button Hover States
-   **Scale:** `scale: 1.02` (Subtle lift)
-   **Glow:** `boxShadow: "0 0 20px rgba(100, 255, 218, 0.2)"`
-   **Transition:** `duration: 0.3`, `ease: "easeOut"`

### Navigation Transitions
-   **Menu:** Slide in from right or fade down. `type: "tween"`, `ease: "circOut"`.

### Page Transitions
-   **Exit:** `opacity: 0`, `y: -20`
-   **Enter:** `opacity: 1`, `y: 0`
-   **Transition:** `duration: 0.5`, `ease: "power3.out"`

## Performance Guidelines

1.  **Use `transform` and `opacity`:** Only animate properties that do not trigger layout thrashing. Avoid animating `width`, `height`, `top`, `left` unless absolutely necessary (use `scale` instead).
2.  **`will-change`:** Use sparingly for complex elements before animation starts.
3.  **Cleanup:** Always kill ScrollTriggers and Tweens on component unmount (`ctx.revert()`).
4.  **Reduced Motion:** Respect `prefers-reduced-motion`. Disable or simplify animations for users with this setting.
