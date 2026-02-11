# PAK Petroleum Homepage Redesign Blueprint

**Goal:** Establish immediate authority, scale, and operational trust.
**Reference:** Shell / BP level professionalism.
**Philosophy:** Energy-Grade Minimalism (Navy, Teal, Industrial Strength).

---

## 1. Hero Section: "The Energy Backbone"

### Purpose
To instantly communicate the scale and critical nature of PAK Petroleum's role in the national infrastructure. It must feel "heavy" and "essential".

### Content Hierarchy
1.  **Headline (H1):** "Powering the Nation's Pulse."
    -   *Typography:* Fraunces Display, huge scale (`clamp(3rem, 8vw, 6rem)`).
2.  **Subheadline:** "Pakistan's premier integrated energy infrastructure partner. fueling industry, transport, and daily life."
    -   *Typography:* Space Grotesk, legible (`text-slate-light`).
3.  **Primary CTA:** "Explore Our Operations" (Solid Teal Button).
4.  **Secondary CTA:** "View Market Report" (Outline Button).

### Layout Pattern
-   **Full-Screen Immersive:** The background is a high-quality, dark cinematic loop of a terminal at twilight or a tanker at sea.
-   **Overlay:** A deep Navy gradient (`from-navy-950 via-navy-950/80 to-transparent`) ensures text legibility.
-   **Alignment:** Center-aligned text for maximum authority, or bottom-left for a more modern, editorial feel.

### Motion Behavior
-   **Entrance:** Staggered text reveal using `SplitText`. Lines rise up (`y: 20 -> 0`) with `opacity: 0 -> 1`.
-   **Ease:** `power3.out` (Slow, deliberate).
-   **Scroll:** Parallax effect on the background video (`y: 20%` speed relative to scroll).

### Optional 3D Usage
-   **Concept:** A subtle, abstract particle field representing energy flow in the background, responding slightly to mouse movement.
-   **Tech:** `react-three-fiber` with low-poly particles.

---

## 2. The Trust Ticker (Metrics Band)

### Purpose
To provide immediate quantitative proof of reliability and scale before the user even scrolls deep.

### Content Hierarchy
-   **Metric 1:** "25+ Years of Service"
-   **Metric 2:** "12 Strategic Terminals"
-   **Metric 3:** "3.5M+ Tons Annual Volume"
-   **Metric 4:** "100% Safety Compliance"

### Layout Pattern
-   **Full-Width Strip:** A dedicated band with a slightly lighter Navy background (`bg-navy-900`).
-   **Grid:** 4 columns, centered content.
-   **Separators:** Vertical dividers (`border-r border-white/10`) between items.

### Motion Behavior
-   **Entrance:** Numbers count up from 0 to the final value using `expo.out` easing.
-   **Duration:** 2-3 seconds to feel "weighty".
-   **Interaction:** Subtle glow on hover.

### Optional 3D Usage
-   **None.** Keep this purely data-driven and legible.

---

## 3. Strategic Operations: "The Integrated Value Chain"

### Purpose
To showcase the depth and complexity of operations, proving that PAK Petroleum handles the entire lifecycle.

### Content Hierarchy
1.  **Section Header:** "Integrated Operations" (Fraunces).
2.  **Tabs/Navigation:** "Sourcing & Trading", "Storage & Terminals", "Logistics & Fleet", "Retail & Commercial".
3.  **Content Panel:** Changes based on selection. Includes a high-res image and a brief description.

### Layout Pattern
-   **Interactive Bento Grid or Split Screen:**
    -   **Left:** Vertical list of operation pillars (Tabs).
    -   **Right:** Large active area showing the details of the selected pillar.
-   **Visuals:** High-contrast industrial photography (black and white with Teal accents).

### Motion Behavior
-   **Transition:** Cross-fade between content panels (`opacity: 0 -> 1`).
-   **Tab Highlight:** An active line indicator slides to the selected tab (`layoutId` in Framer Motion).
-   **Ease:** `circ.out` for a mechanical feel.

### Optional 3D Usage
-   **Interactive Model:** A stylized 3D model of a storage tank or an oil tanker that rotates slowly. Clicking a tab highlights the relevant part of the model (e.g., "Storage" highlights the tank).

---

## 4. National Infrastructure: "The Grid"

### Purpose
To visualize the physical scale and reach of the company across Pakistan.

### Content Hierarchy
1.  **Headline:** "National Footprint."
2.  **Map Visual:** A stylized map of Pakistan highlighting terminals, depots, and retail networks.
3.  **Data Cards:** Hovering over a region shows specific stats (e.g., "Karachi Terminal: 50k MT Capacity").

### Layout Pattern
-   **Asymmetric Layout:**
    -   **Map:** Takes up 60-70% of the screen (perhaps on the right).
    -   **Context:** Text and list of key locations on the left.
-   **Style:** Dark mode map (Navy water, Slate land, Teal nodes).

### Motion Behavior
-   **Entrance:** Path tracing. Lines draw from the port (South) to the North, representing the flow of oil.
-   **Hover:** Nodes pulse (`scale: 1.2`) when hovered.
-   **Ease:** `linear` for the path drawing to simulate liquid flow.

### Optional 3D Usage
-   **WebGL Globe/Map:** A 3D map of Pakistan that tilts and pans as the user scrolls. This is a high-impact "Hero" moment for the mid-page.

---

## 5. Technology & Safety: "The Standard"

### Purpose
To reinforce trust through technology and rigorous safety standards.

### Content Hierarchy
1.  **Headline:** "Safety & Technology First."
2.  **Feature 1:** "Real-time Monitoring" (Icon + Text).
3.  **Feature 2:** "ISO Certified Processes" (Icon + Text).
4.  **Feature 3:** "Digital Supply Chain" (Icon + Text).

### Layout Pattern
-   **3-Column Cards:** Identical height cards with `bg-navy-800`.
-   **Icons:** Minimalist, thin-line icons in Teal.
-   **Borders:** `border border-white/5` with a glow effect on hover.

### Motion Behavior
-   **Hover:** Cards lift slightly (`y: -5px`) and the border glows Teal.
-   **Entrance:** Staggered fade-up of the three cards.

### Optional 3D Usage
-   **Tech Visualization:** An abstract animated loop of data streams or a "digital twin" representation of a pipe section.

---

## 6. Sustainability: "Responsible Energy"

### Purpose
To address environmental responsibility, a critical aspect for modern energy companies (BP/Shell transition).

### Content Hierarchy
1.  **Headline:** "Powering the Transition."
2.  **Copy:** "We are committed to reducing our carbon footprint and investing in cleaner energy solutions for Pakistan's future."
3.  **Visual:** Image of solar panels or green landscape, blended with industrial elements.

### Layout Pattern
-   **Text-Image Split:** Large typography on one side, evocative imagery on the other.
-   **Color Shift:** Introduce a subtle gradient of Teal/Green to soften the industrial Navy.

### Motion Behavior
-   **Parallax:** The image moves slower than the scroll.
-   **Text:** Simple fade-in.

### Optional 3D Usage
-   **None.** Keep it human and organic.

---

## 7. Leadership & Partners: "The People"

### Purpose
To humanize the corporation and build trust through leadership credibility.

### Content Hierarchy
1.  **Headline:** "Guided by Experience."
2.  **Leadership Carousel:** Photos and names of the Board/C-Suite.
3.  **Partner Logos:** Monochrome logos of key partners/clients below.

### Layout Pattern
-   **Carousel/Slider:** Horizontal scroll for leadership profiles.
-   **Grid:** Simple grid for partner logos (opacity 50% -> 100% on hover).

### Motion Behavior
-   **Drag:** Smooth inertia scrolling for the carousel.
-   **Hover:** Partner logos fade in to full color or full opacity.

### Optional 3D Usage
-   **None.**

---

## 8. Footer: "Global Contact"

### Purpose
Clear navigation and contact information.

### Content Hierarchy
1.  **Columns:** Operations, Company, Investors, Careers, Contact.
2.  **Socials:** LinkedIn, Twitter.
3.  **Legal:** Copyright, Privacy Policy.
4.  **Newsletter:** "Subscribe to Market Insights".

### Layout Pattern
-   **Mega Footer:** Multi-column layout with a large logo watermark.
-   **Background:** Deepest Navy (`bg-navy-950`).

### Motion Behavior
-   **Links:** Underline expands from left to right on hover (Teal).
