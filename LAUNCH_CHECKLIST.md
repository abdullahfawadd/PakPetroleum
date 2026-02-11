# PAK Petroleum - Production Launch Checklist

This checklist is designed for enterprise deployment of the PAK Petroleum website. All items must be verified before the final production release.

## 1. Performance & Core Web Vitals
**Target:** Green (90+) on Lighthouse for all categories.

- [ ] **LCP (Largest Contentful Paint) < 2.5s**
    - [ ] Verify `Hero` section text is rendered immediately (font `swap` strategy).
    - [ ] Ensure the 3D Spline scene in the Hero is lazy-loaded or has a lightweight poster image while loading.
    - [ ] Preload critical assets (fonts: `Fraunces`, `Space Grotesk`) in `layout.tsx`.
- [ ] **CLS (Cumulative Layout Shift) < 0.1**
    - [ ] Confirm all `next/image` components have `width` and `height` or `fill` with aspect ratio to prevent layout shifts.
    - [ ] Verify custom fonts do not cause significant layout shifts on load (size-adjust in `next/font` config).
    - [ ] Check dynamic content (e.g., Trust Ticker) has a fixed height container.
- [ ] **INP (Interaction to Next Paint) < 200ms**
    - [ ] Audit GSAP animations to ensuring `scrollTrigger` logic doesn't block the main thread.
    - [ ] Debounce resize and scroll event listeners.
- [ ] **Bundle Size**
    - [ ] Analyze bundle with `@next/bundle-analyzer`.
    - [ ] Verify heavy dependencies (Three.js/Spline) are dynamically imported with `ssr: false` where appropriate.
    - [ ] Check `package.json` for unused dependencies.

## 2. SEO & Metadata Configuration
**Goal:** Maximum visibility for "petroleum trading Pakistan" and related keywords.

- [ ] **Metadata Verification**
    - [ ] Confirm `title` and `description` in `src/app/layout.tsx` match the final copy.
    - [ ] Verify `keywords` list is up-to-date with marketing strategy.
    - [ ] Ensure `metadataBase` is set to the production URL (`https://pakpetroleum.com`).
- [ ] **Robots & Sitemap**
    - [ ] Validate `src/app/robots.ts` allows indexing of main pages and disallows private routes.
    - [ ] Check `src/app/sitemap.ts` correctly generates URLs for all static and dynamic routes.
- [ ] **Open Graph / Social**
    - [ ] Verify `og:image` loads correctly on LinkedIn, Twitter/X, and Facebook (using `opengraph.xyz` or similar).
    - [ ] Ensure `og:type`, `og:site_name`, and `twitter:card` are correctly configured.
- [ ] **Structured Data**
    - [ ] Implement `Organization` schema in `layout.tsx` or main page.
    - [ ] (If applicable) Add `BreadcrumbList` schema for deeper navigation pages.
- [ ] **Canonical URLs**
    - [ ] Ensure self-referencing canonical tags are present on all pages (handled by Next.js metadata by default, but verify).

## 3. Accessibility (a11y) Compliance
**Standard:** WCAG 2.1 AA

- [ ] **Color Contrast**
    - [ ] Verify Teal text (`#64FFDA`) on Navy background (`#0a192f`) meets 4.5:1 contrast ratio for normal text.
    - [ ] Check muted text colors for legibility.
- [ ] **Keyboard Navigation**
    - [ ] Ensure a "Skip to Content" link is the first tab-able element.
    - [ ] Verify all interactive elements (buttons, links, form inputs) have visible focus states (e.g., `focus-visible:ring`).
    - [ ] Test the main navigation menu with keyboard only (Tab, Enter, Space, Esc).
- [ ] **Screen Readers & ARIA**
    - [ ] Provide `aria-label` or `alt` text for all images and icons.
    - [ ] Ensure the 3D canvas has `aria-label` describing the scene or is hidden with `aria-hidden="true"` if purely decorative.
    - [ ] Verify semantic HTML structure (`<header>`, `<main>`, `<footer>`, `<h1>`-`<h6>`).
- [ ] **Reduced Motion**
    - [ ] Implement `prefers-reduced-motion` media query in GSAP/Framer animations to disable or simplify motion for sensitive users.

## 4. 3D & Motion Optimization (Project Specific)
**Philosophy:** "Energy-Grade Minimalism" - No bouncy animations.

- [ ] **Animation Easing**
    - [ ] Verify all GSAP tweens use `power3.out` or `power4.out`.
    - [ ] Ensure no `elastic` or `back` easings are used.
- [ ] **Spline/Three.js Integration**
    - [ ] Confirm `Spline` components are wrapped in `next/dynamic` imports.
    - [ ] **Mobile Fallback:** Verify complex 3D scenes are replaced by static images or simplified versions on mobile devices (using `useMediaQuery`).
    - [ ] **Memory Leak Check:** Ensure WebGL contexts are disposed of when components unmount.

## 5. Security & Infrastructure

- [ ] **Content Security Policy (CSP)**
    - [ ] Configure strict CSP headers in `next.config.mjs` or middleware.
    - [ ] Whitelist allowed domains for scripts, images (Unsplash), and fonts.
- [ ] **Headers**
    - [ ] Enable `X-Content-Type-Options: nosniff`.
    - [ ] Enable `X-Frame-Options: DENY`.
    - [ ] Enable `Strict-Transport-Security` (HSTS).
- [ ] **Environment Variables**
    - [ ] Verify all `.env.local` secrets are added to the Vercel project settings.
    - [ ] Ensure no secrets are exposed to the client (prefix `NEXT_PUBLIC_` only where necessary).
- [ ] **Remote Patterns**
    - [ ] Configure `remotePatterns` in `next.config.mjs` to allow Unsplash images securely.

## 6. Code Quality & Build Verification

- [ ] **Linting & Types**
    - [ ] Run `npm run lint` and ensure 0 errors.
    - [ ] Run `npx tsc --noEmit` to verify type safety.
- [ ] **Build Check**
    - [ ] Run `npm run build` locally to catch any build-time errors.
    - [ ] Verify `output: 'standalone'` is configured if deploying to Docker/custom infrastructure.
- [ ] **Console Logs**
    - [ ] Remove all `console.log` statements from production code.
- [ ] **Error Boundaries**
    - [ ] Ensure a global `error.tsx` and `not-found.tsx` exist and are styled correctly.

## 7. Deployment Best Practices

- [ ] **Vercel / Hosting Config**
    - [ ] Verify the build command and output directory settings.
    - [ ] Check domain DNS settings (A records, CNAME).
- [ ] **Analytics**
    - [ ] Verify analytics script (Google Analytics / Vercel Analytics) is firing correctly in production mode only.
- [ ] **Legal Pages**
    - [ ] Confirm Privacy Policy and Terms of Service pages are accessible and content is approved by legal.
