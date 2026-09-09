# Merijé Change Log

## 2026-09-09 — Initial Project Setup

### Changed
* Initialized Next.js app with `create-next-app` (TypeScript, Tailwind CSS v4, App Router, ESLint).
* Updated `src/app/globals.css` with Merijé core color tokens and basic styles.
* Updated `src/app/layout.tsx` to set up Playfair Display and Inter fonts via `next/font/google`.
* Created `src/components/layout/Container.tsx` as a reusable max-width wrapper constraint.
* Created `src/components/layout/Navbar.tsx` for the site navigation header.
* Created `src/components/sections/Hero.tsx` for the main landing page hero section.
* Updated `src/app/page.tsx` to display the `Navbar` and `Hero` components.

### Design Decisions
* **Typography:** Used `Playfair Display` (serif) for headings to provide a sophisticated editorial feel. Used `Inter` (sans-serif) for body and UI elements to ensure clean readability.
* **Colors:** Chose an off-white/warm neutral background (`#FDFBF7`) and a charcoal text color (`#1C1917`) to establish an elegant, premium look that avoids harsh contrasts.
* **Layout:** Implemented a generous vertical rhythm and a clean container structure (`max-w-6xl`) to avoid cluttered aesthetics, leaving plenty of whitespace.
* **Shadows & Borders:** Kept UI elements simple and flat, using subtle borders and avoiding generic SaaS shadows. Border radius is minimal (sharp edges for buttons) to lean into the editorial/print aesthetic.

### Technical Decisions
* Replaced standard Next.js boilerplate.
* Kept dependencies strictly to what was provided by `create-next-app` plus the fonts; no third-party UI libraries like Radix or Framer Motion were added yet to adhere to the principle of not installing libraries unless explicitly needed.
* Designed modular folder structure (`components/layout`, `components/sections`).

### Verification
* Ensured no TypeScript errors inside standard components.
* Verified responsive classes (`md:`, `sm:`, `lg:`) on components to gracefully degrade down to mobile.
* Verified that the code cleanly replaces default Next.js boilerplate.

### Follow-up
* Provide actual visual assets or better placeholders for the hero invitation preview.
* Implement the interactive mobile navigation menu.

## 2026-09-09 — Hero Redesign & Interaction Update

### Changed
* Installed `framer-motion` for smooth reveal animations.
* Completely redesigned `Hero.tsx` to match user's colorful layout reference.
* Changed main hero layout to a two-column split structure with rounded cards (`min-h-[450px]`).
* Applied bright pink (`#F466E3`) and cream (`#EAE5D9`) color accents to the hero cards.
* Replaced standard text elements in hero with `motion.h1` and `motion.div` for a staggered fade-up entrance.
* Updated `Navbar.tsx` to use a centered pill-shape navigation structure (`rounded-full`, bg `#EAE5D9`) matching the reference.

### Design Decisions
* **Typography:** Switched the main "Merijé Studio" hero text to use a massive sans-serif font (`Inter`, `font-bold`, `tracking-tight`) to mirror the bold geometric look of the reference design, while preserving elegance.
* **Colors & Shape:** Shifted from purely minimal to a "colorful minimal" aesthetic using vibrant background fills with large border radiuses (`rounded-[2rem]`) on the cards, directly addressing the user's request for colorful cards while keeping the UI clean (no slop).
* **Decorations:** Added a custom SVG flower/scallop blob shape fading in from the bottom right of the left hero card for a fun, creative touch inspired by the reference.

### Technical Decisions
* Upgraded `Hero.tsx` to a client component (`"use client"`) to support framer-motion.
* Used `staggerChildren` in Framer Motion to sequence the text entrance.

### Verification
* Verified layout scales well to mobile (cards stack properly using `grid-cols-1 md:grid-cols-2`).
* Framer motion builds properly.

## 2026-09-09 — Container Width & Navbar Refinement Update

### Changed
* Updated `src/components/layout/Container.tsx` max-width from `max-w-6xl` to `max-w-[1400px]`.
* Updated `src/components/layout/Navbar.tsx` pill background color to a soft yellow (`#FFF0CB`).
* Reduced navbar vertical padding (`py-6 md:py-8` to `py-4 md:py-5`) and pill inner padding (`px-4 py-1.5`) with a smaller text size (`13px`).

### Design Decisions
* **Layout:** Increased the maximum container width to `1400px` to better accommodate the new, bolder, colorful two-column hero layout and give the UI a more expansive, immersive studio feel on large screens.
* **Navigation:** Refined the pill navigation to match the tighter spacing seen in the design reference. The pastel yellow accent color provides a beautiful warm contrast to the bright pink hero card without clashing.

## 2026-09-09 — Hero Proportions Tweaks

### Changed
* Reduced `Hero.tsx` card heights from `min-h-[450px]/[500px]` to `min-h-[360px]/[400px]`.
* Adjusted the left card's text to be smaller but bolder (`text-[24px]/[30px] font-semibold`) with tighter leading (`leading-[1.25]`).
* Scaled down the decorative SVG flower and adjusted its positioning to fit the new card height.

## 2026-09-09 — Font Update & Typography Precision

### Changed
* Swapped the primary sans-serif font from `Inter` to `Plus Jakarta Sans` in `layout.tsx` to match the geometric, rounded feel of the user's reference.
* Refactored the text inside the hero card to explicitly break into exactly 3 lines using `<br />` tags on desktop.
* Adjusted the hero card's flex layout from `justify-between` to `items-start` with `mb-auto` on the text wrapper, pulling the button up closer to the text to mimic the reference's grouped content padding.

### Design Decisions
* **Typography:** `Plus Jakarta Sans` adds a friendlier, modern, geometric polish that closely resembles the reference site's main typeface, separating it from the generic startup look of `Inter`.
* **Proportions:** By tightly coupling the text and CTA button at the top of the card and strictly controlling the text wrapping to 3 lines, the layout feels much more deliberate and editorial.

## 2026-09-09 — Font Weight Adjustments

### Changed
* Reduced `Hero.tsx` main title font weight from `font-bold` to `font-semibold`.
* Reduced left card text font weight from `font-bold` to `font-medium`.
* Reduced the button font weight from `font-bold` to `font-medium`.

### Design Decisions
* **Typography intensity:** Softened the typography weights across the hero section to prevent the text from looking overly heavy. This strikes a better balance between the bold reference style and the delicate, premium aesthetic expected for a wedding studio.

## 2026-09-09 — Flower Graphic & Scroll Animation

### Changed
* Swapped the jagged flower SVG for a perfect 10-petal rounded sun/flower graphic.
* Changed the flower color to a vibrant coral-red (`#FF5252`) to create a high-contrast, pop-art blend against the bright pink card, closely mirroring the reference screenshot.
* Implemented scroll-linked animation using `framer-motion` (`useScroll` and `useTransform`). The flower now rotates seamlessly as the user scrolls up and down the page.

## 2026-09-09 — Perfect Circle Flower Geometry

### Changed
* Redesigned the decorative flower SVG to use a mathematically perfect geometric arrangement of overlapping `<circle>` elements instead of an approximated `<path>`.

## 2026-09-09 — Flower Graphic Refinement

### Changed
* Reduced the size of the flower graphic in the Hero card from `w-[280px]/[320px]` to `w-[180px]/[220px]`.
* Changed the color of the flower from a bold coral-red (`#FF5252`) to a much softer, less saturated pastel pink/peach (`#FF9EBA`).
* Adjusted positioning slightly (`-bottom-10 -right-10`) to accommodate the smaller size.

## 2026-09-09 — Value Proposition / Features Section

### Added
* Created `src/components/sections/Features.tsx`.
* Implemented a bright lime-green horizontal bar (`#D4F636`) to highlight core values ("Fokus Kami"), visually replacing the concept of a "Trusted by" marquee (to strictly adhere to the "no fake social proof" rule) while retaining the structural design of the reference.
* Implemented a 3-column grid of bright yellow cards (`#FFD628`) displaying Merijé's value proposition (Studio Merijé, Desain & Tata Letak, Fitur Terintegrasi).
* Used minimalist geometric shapes and icons for the card graphics, matching the editorial aesthetic of the reference screenshot.
* Hooked up the new section in `src/app/page.tsx`.

### Design Decisions
* **Layout Structure:** The horizontal band serves as an excellent visual divider between the huge hero section and the detailed cards below. It creates rhythm and anchors the colorful cards beneath it.
## 2026-09-09 — Unified Grid Layout (Hero + Features)

### Changed
* Merged the contents of `Features.tsx` directly into `Hero.tsx`.
* Removed the `<Features />` import from `page.tsx`.
* Wrapped both the Hero's Two-Column cards and the Feature blocks (Horizontal Bar + 3 Cards) into a single unified `flex-col` wrapper with a strict `gap-6`.

### Design Decisions
* **Layout Unity:** The user noticed the disjointed spacing between the hero cards and the feature blocks. By merging them into a single continuous grid wrapper with identical `gap-6` spacing, the entire upper section of the website now feels like one massive, cohesive editorial block, perfectly matching the visual rhythm of the reference screenshot.

## 2026-09-09 — Copywriting Revisions

### Changed
* Rewrote the main Hero text from an AI-sounding template to a warmer, poetic structure: "Bukan sekadar tautan, tapi undangan digital yang terasa personal."
* Updated the horizontal bar from formal corporate values ("Fokus Kami: Desain Eksklusif...") to straightforward, user-centric benefits: "Tanpa Iklan • Desain Bersih • RSVP Mudah • Mobile Friendly".
* Replaced the standard AI buzzwords in the three feature cards ("kanvas digital", "diracik khusus", "pendekatan artistik") with simpler, more human-centric language ("Lebih Dekat", "Bersih & Nyaman", "Semua Terpusat").
* Refined Card 2 text to focus positively on readability rather than defensively on "tanpa berisik".

### Design Decisions
* **Voice & Tone:** Standard AI text tends to overuse lofty, dramatic words that sound overly corporate or fake. By switching to conversational, empathetic language ("tangan kalian sendiri", "fokus membaca kabar baik", "rapi tanpa elemen berlebihan"), the brand tone shifts back to being intimate, understated, and trustworthy—which is crucial for the wedding industry.
