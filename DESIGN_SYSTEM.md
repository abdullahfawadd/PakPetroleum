# PAK Petroleum Design System

## 1. Design Principles

Our visual identity is built on four core pillars that reflect our mission as a national energy leader.

### **Authority**
*We are the backbone.*
Our design language must convey stability, reliability, and the weight of our responsibility. We use bold typography, deep colors, and structured layouts to command respect and trust.

### **Innovation**
*We are the future.*
While rooted in tradition, we are forward-thinking. We use modern sans-serif typefaces, subtle gradients, and clean lines to signal technological advancement and efficiency.

### **Industrial Strength**
*We are built to last.*
Our aesthetic borrows from the physical world of energy infrastructure: pipelines, refineries, and grids. This translates to robust borders, mechanical precision, and a lack of frivolous decoration.

### **Environmental Responsibility**
*We are conscious.*
We balance our industrial nature with a commitment to sustainability. This is reflected in our use of Teal (representing clean energy and nature) as a primary accent against the dark, industrial Navy background.

---

## 2. Color System

We operate on a **Dark-Mode-First** philosophy. Our interfaces are designed to be low-light efficient, reducing eye strain and saving energy on OLED displays.

### **Primary Palette**

| Color Name | Token | Hex Value | Usage |
| :--- | :--- | :--- | :--- |
| **Deep Navy** | `bg-body` / `navy-950` | `#020c1b` | Main background (Page body). The deepest layer. |
| **Navy** | `bg-surface` / `navy-900` | `#0a192f` | Surface background (Cards, Sections). |
| **Light Navy** | `bg-elevated` / `navy-800` | `#112240` | Elevated elements (Dropdowns, Modals, Hover states). |
| **Teal** | `text-teal` / `teal-400` | `#64FFDA` | Primary accent. Links, active states, key data points. |
| **Slate** | `text-slate` / `slate-400` | `#8892b0` | Secondary text. Body copy, descriptions. |
| **White/Light** | `text-primary` / `slate-light` | `#ccd6f6` | Primary text. Headings, critical information. |
| **Amber** | `text-amber` / `amber-500` | `#f59e0b` | Warning, energy, fuel indicators. |

### **Strict Usage Rules**
1.  **Backgrounds:** MUST use the Navy scale (`#020c1b` -> `#0a192f` -> `#112240`). Pure black (`#000000`) is forbidden.
2.  **Text:** MUST use the Slate scale (`#ccd6f6` -> `#8892b0` -> `#495670`). Pure white (`#ffffff`) is discouraged except for specific high-contrast needs.
3.  **Accents:** MUST use Teal (`#64FFDA`) for interactive elements and primary highlights.
4.  **Semantic Colors:** Use Amber for warnings or energy metrics. Red is reserved for critical errors only.

---

## 3. Typography Hierarchy

We use a tri-font system to balance elegance, modernity, and data precision.

### **Display: Fraunces**
*   **Role:** Headings, Hero Statements.
*   **Characteristics:** Serif, variable weight, editorial feel.
*   **Usage:** `font-display`. Use for H1, H2, and major callouts.
*   **Why:** Adds a touch of "Authority" and "Heritage".

### **Body: Space Grotesk**
*   **Role:** UI Text, Navigation, Paragraphs.
*   **Characteristics:** Sans-serif, geometric, technical.
*   **Usage:** `font-sans`. The default typeface for the interface.
*   **Why:** Reflects "Innovation" and "Industrial Strength".

### **Data: Geist Mono**
*   **Role:** Tables, Metrics, Code, Technical Specifications.
*   **Characteristics:** Monospace, legible, precise.
*   **Usage:** `font-mono`. Use for numbers, financial data, and technical labels.
*   **Why:** Ensures readability and precision for "Industrial Data".

---

## 4. Spacing & Grid System

We adhere to a strict **8pt / 12-Column Grid** system to ensure rhythm and consistency.

### **Grid Logic**
*   **Columns:** 12 columns.
*   **Gutter:** 24px (1.5rem) on desktop, 16px (1rem) on mobile.
*   **Container:** Centered, max-width 1400px.

### **Spacing Scale (8pt Rule)**
All spacing (padding, margin, gap) must be a multiple of **4px** (0.25rem), with a strong preference for **8px** (0.5rem) increments to maintain the 8pt rhythm.

| Token | Rem | Px | Usage |
| :--- | :--- | :--- | :--- |
| `0.5` | 0.125rem | 2px | Micro adjustments. |
| `1` | 0.25rem | 4px | Tight spacing. |
| `2` | 0.5rem | 8px | **Base Unit.** |
| `3` | 0.75rem | 12px | Component internal spacing. |
| `4` | 1rem | 16px | Component padding. |
| `6` | 1.5rem | 24px | Section separation (small). |
| `8` | 2rem | 32px | Section separation (medium). |
| `12` | 3rem | 48px | Layout blocking. |
| `16` | 4rem | 64px | Major section gaps. |

**Rule:** Avoid arbitrary values like `10px`, `15px`, `7px`. Stick to the scale.

---

## 5. "Energy-Grade Minimalism"

**Definition:** A design philosophy that prioritizes high-function, low-noise interfaces suitable for mission-critical energy operations.

### **Core Tenets**
1.  **High Contrast:** Essential information must stand out instantly.
2.  **No Clutter:** Remove decorative elements that do not serve a function. "If it doesn't flow, cut the pipe."
3.  **Directness:** Interfaces should be self-explanatory and efficient.
4.  **Visual Weight:** Use negative space (dark navy void) to give content room to breathe, mimicking the vastness of energy fields.

---

## 6. 3D Guidance

3D elements are used to visualize complex energy concepts, not for decoration.

### **Style Guide**
*   **Symbolic:** Represent abstract concepts (flow, connection, potential) rather than literal depictions of machinery.
*   **Abstract:** Use geometric forms, particles, and lines.
*   **Industrial:** Materials should look like matte metal, glass, or light.
*   **No Gaming Feel:** Avoid cartoonish shaders, excessive bloom, or "sci-fi" tropes that look like a video game. It should feel like high-end engineering software.

### **Examples**
*   Flowing energy lines representing pipelines or grid connectivity.
*   Fuel molecule abstractions.
*   Silhouettes of infrastructure (rigs, terminals) in low-poly or point-cloud styles.

---

## 7. Visual Do's and Don'ts

### **Do**
*   ✅ Use the Navy gradient for backgrounds (`bg-gradient-energy`).
*   ✅ Use Teal for primary actions (buttons, links).
*   ✅ Use strict 8pt spacing for layouts.
*   ✅ Use `font-mono` for all numeric data.
*   ✅ Use subtle borders (`border-white/10`) to define areas.

### **Don't**
*   ❌ Do not use pure black (`#000000`).
*   ❌ Do not use bright red or green for decoration (reserve for status).
*   ❌ Do not use rounded corners larger than `rounded-lg` (keep it industrial).
*   ❌ Do not use drop shadows that are too heavy or opaque (use subtle glows).
*   ❌ Do not mix Serif and Sans-serif arbitrarily.

---

## 8. Component Library & Layout Patterns

### **Core Components**

#### **Section Containers**
*   **Concept:** Cinematic Spacing. Sections should feel expansive, not cramped.
*   **Rule:** Use generous top/bottom padding (`py-24` or `py-32`).
*   **Structure:** Sections should always be wrapped in a container that controls max-width and horizontal padding.

#### **KPI Data Blocks**
*   **Concept:** Data-First Visual Storytelling.
*   **Style:** Minimalist, high-contrast numbers. Use `font-mono` for values.
*   **Motion:** Subtle count-up animations on scroll. No bouncing or excessive easing.
*   **Border:** Use thin, semi-transparent borders or gradients to separate data points.

#### **Enterprise Cards**
*   **Concept:** Industrial Strength. Avoid "SaaS bubbles" (highly rounded, soft shadows).
*   **Style:** Sharp or slightly rounded corners (`rounded-lg` max). Dark backgrounds (`bg-navy-900` or `bg-navy-950`).
*   **Interactivity:** Subtle hover effects (border color change, slight lift).
*   **Content:** Focus on content hierarchy. Icon -> Title -> Description -> Action.

#### **Divider Systems**
*   **Concept:** Structured Separation.
*   **Style:** Use gradients (`from-transparent via-teal-500/20 to-transparent`) or light strokes (`border-white/10`).
*   **Usage:** Separate major sections or distinct content blocks within a section.

#### **Sticky Section Headers**
*   **Concept:** Contextual Awareness.
*   **Behavior:** Section titles should stick to the top of the viewport while scrolling through long content, providing context.
*   **Style:** `font-display`, large size, often paired with a smaller `font-mono` label.

### **Layout Patterns**

#### **Asymmetric Grids**
*   **Concept:** Controlled Chaos. Break the monotony of symmetric grids.
*   **Implementation:** Use CSS Grid with varying column spans (e.g., `col-span-4` next to `col-span-8`).
*   **Purpose:** To guide the eye through content in a deliberate path.

#### **Large Typography + Restrained Body**
*   **Concept:** Scale Contrast.
*   **Implementation:** Use massive headings (`text-display` or `text-hero`) paired with concise, constrained body text (`max-w-prose`).
*   **Effect:** Creates a sense of confidence and authority.

#### **Data-First Visual Storytelling**
*   **Concept:** Show, don't just tell.
*   **Implementation:** Lead with numbers and charts. Text supports the data, not the other way around.
