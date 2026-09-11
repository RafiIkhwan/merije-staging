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

## 2026-09-11 — Showcase & Philosophy Section

### Added
* Created `src/components/sections/Showcase.tsx` to serve as the project portfolio and design philosophy block.
* Added a pale yellow intro card (`#F5EEDC`) with a bold manifesto ("Desain yang bermakna") and a custom pop-art style geometric floral graphic (`#FFD628`).
* Added a vibrant purple showcase card (`#A881F3`) to display the first demo invitation ("Rania & Dimas"). Includes floating tags, a playful button, and a stylized mock-up of a mobile phone rising from the bottom.
* Connected the `Showcase` component into `src/app/page.tsx` right below the Hero section.

### Fixed
* Added `"use client";` directive to `Showcase.tsx` to fix Next.js server-side rendering errors caused by using `framer-motion`.

### Design Decisions
* **Visual Continuity:** Maintained the strict `gap-6` and `rounded-[2rem]` card design to keep the layout feeling like a cohesive, modular editorial spread.
* **Abstract Graphics:** Instead of realistic phone mockups or generic "image placeholders," the section uses heavily stylized CSS shapes (a white container with pill-shaped "UI" elements) to represent a phone or web interface. This aligns with the pop-art aesthetic and avoids any generic startup templates.
* **Copywriting Tone:** Continued enforcing the non-AI, human-centric voice. Used words like "kejernihan, kenyamanan membaca, dan keindahan tata letak" instead of robotic jargon.

## 2026-09-11 — Problem & Solution Section

### Added
* Created `src/components/sections/ProblemSolution.tsx`.
* Built a 2x2 grid of "Pain Points" cards using a checkered pink (`#FF9EBA`) and orange (`#FFB057`) color scheme, matching the visual rhythm of the user's reference.
* Implemented a Tabbed interactive interface ("Desain & Tampilan" vs "Fitur & Fungsi") using React state and Framer Motion for smooth tab underlining.
* Created a 3x2 grid of features for each tab, complete with pop-art style colorful circular icons.
* Adapted the copywriting to reflect common wedding invitation pain points (e.g., ads, bad mobile layout, complex RSVP) and positioned Merijé as the solution using warm, empathetic Indonesian.

### Design Decisions
* **Interactive Modularity:** By using tabs for the features instead of listing all 12 items at once, the page remains clean and uncluttered, adhering to the "simplicity" brand guideline.
## 2026-09-11 — Proportion Adjustments

### Fixed
* Adjusted the proportions in the `ProblemSolution` section to closely match the reference:
  * Reduced the main title text size (`text-[36px] md:text-[48px]`) and changed the subheader to standard sentence case instead of uppercase for a cleaner look.
  * Decreased the text size inside the 2x2 grid cards (`text-[15px] md:text-[17px]`) and increased the grid's `max-w` to `1000px`. This makes the cards wider and less "boxy", allowing the text to fit naturally without wrapping excessively.
  * Condensed the transition text ("Merijé hadir untuk...") to be smaller and closer together, mirroring the reference layout.
  * Slimmed down the Tabs container to `max-w-[600px]` and the Features Grid to `max-w-4xl`, reducing the gap between items (`gap-x-8 gap-y-12`) for a more compact, neat presentation.
  * Replaced the abstract placeholder shapes with 12 distinct, high-quality SVG icons (Lucide-style, `strokeWidth=2.5`) matching each feature's meaning. The icons are colored in dark `text-foreground/80` to create a strong pop-art contrast against the bright pastel circular backgrounds.

## 2026-09-11 — About Merijé & CTA Section

### Added
* Created `src/components/sections/About.tsx`.
* Used the agent's image generation tool to create a warm, editorial, pop-art style portrait of a female designer in a modern studio. Saved this as `public/founder.jpg` to serve as the face of the brand.
* Built a beautiful 5-card Bento Box layout using CSS Grid spanning two rows:
  * **Founder Portrait:** A tall card (`lg:row-span-2`) showcasing the generated portrait.
  * **Brand Introduction:** A wide yellow card (`#FFD628`) introducing the studio ("Halo, dari Merijé").
  * **Philosophy Cards:** Two lime green (`#D4F636`) and pink (`#FF9EBA`) cards highlighting the brand's commitment to empathy, accessibility, and honest pricing.
* Below the Bento grid, added a 50/50 split section:
  * **Specialization Card:** A cream card emphasizing Merijé's minimal, whitespace-heavy design approach, decorated with abstract CSS stacking semi-circles.
  * **Consultation CTA Card:** A split-color interactive card (Cream top, Bright Yellow bottom) offering a free consultation, complete with a floating "Konsultasi Gratis" circular badge and a solid dark pill button for WhatsApp integration.

### Design Decisions
* **Humanizing the Brand:** Adding a friendly, high-quality "founder" portrait adds a face to the digital service, aligning with the "intimacy and warmth" copywriting rule.
* **Typographic Hierarchy:** Used italicized serif fonts (`Playfair Display` if available, or standard serif) for accent text ("Kawan perjalanan bahagiamu.") to break the monotony of the geometric sans-serif and add a touch of wedding elegance.

### Fixed
* Added `"use client";` directive to `About.tsx` to fix Next.js server-side rendering errors caused by using `framer-motion`.

## 2026-09-12 — Values & Promises Section (Adapted from Testimonials)

### Added
* Created `src/components/sections/Values.tsx`.
* Replicated the 2x2 grid layout from the user's "Happy Clients" screenshot but adapted it to display Merijé's Core Values ("Janji Kami") instead of fake testimonials to strictly comply with Rule 26 (Content Integrity).
* Designed 4 split-color cards:
  * The top half uses the standard pale cream (`#F5EEDC`) for the descriptive paragraph, highlighting key phrases with bold text.
  * The bottom half uses vibrant brand colors (Yellow, Pink, Purple, Lime) containing a clean SVG icon and the core value title (e.g., "100% Bersih & Elegan", "Super Cepat").
* Integrated `Values` into `src/app/page.tsx`.

### Design Decisions
* **Rule 26 Adherence:** The user's screenshot was a testimonial section. Since we cannot use fake social proof (fake reviews/names), the exact visual structure (a text box over a colored nameplate) was repurposed to highlight the brand's promises. The "avatar" circle was replaced with an icon, and the "name/role" text was replaced with the "Value Title / Subtitle". This satisfies the user's aesthetic request while maintaining 100% content integrity.

### Fixed
* Reduced the size and padding of the `Values` cards to match the slimmer proportions of the user's reference:
  * Grid `max-w` reduced to `4xl` (896px).
  * Padding reduced from `p-12/p-14` to `p-6/p-8`.
  * Text size reduced to `text-[14px]` and `text-[15px]` to prevent the text from stretching the cards vertically, making them look sleeker and more horizontally balanced.
* Removed the top padding (`pt-0`) from the `Values` section to fix a massive vertical gap caused by the stacking of section paddings.

## 2026-09-12 — FAQ & Footer Sections

### Added
* Created `src/components/sections/FAQ.tsx` featuring a 2-column layout (on desktop) of interactive accordion items.
  * Styled as rounded cream pills (`bg-[#F5EEDC]`) that expand fluidly using `framer-motion` to reveal the answers.
  * Added 6 relevant questions addressing common concerns about digital invitations (guest limits, editing data, RSVPs, gaptek guests).
* Created `src/components/sections/Footer.tsx` using a large bold orange block (`bg-[#FFB057]`).
  * **Interactive Badge:** Implemented a pure CSS/SVG rotating text badge ("MERIJÉ STUDIO • UNDANGAN DIGITAL •") orbiting the founder's portrait, exactly matching the reference's playful studio aesthetic.
  * **Link Pills:** Added bright yellow (`bg-[#FFD628]`) full-width pill buttons for Email, WhatsApp, Instagram, and a functional "Back to Top" button.
* Integrated both components into `src/app/page.tsx` to complete the homepage layout.

### Fixed
* Reduced overall scale, margins, and padding in both `FAQ.tsx` and `Footer.tsx` to precisely match the sleeker reference layout:
  * In FAQ: Changed the pill shape to `rounded-[1rem]`, tightened the gap between items (`gap-3/gap-4`), reduced text sizes, and brought the section title much closer to the content (`mb-6`).
  * In Footer: Tightened the internal gap of the orange container, changed the bottom buttons from `rounded-full` to `rounded-[1rem]`, drastically reduced the vertical spacing between the yellow buttons (`gap-2`), and slightly scaled down the rotating badge for a more compact, refined look.

## 2026-09-12 — Global Mobile Responsiveness Audit

### Fixed
* Audited all components for mobile viewport performance (`sm`, `md`, `lg` breakpoints).
* Reduced base padding on `Showcase` project cards and `ProblemSolution` problem cards from `p-8/p-10` to `p-6` on mobile screens to ensure the content doesn't feel cramped and the cards don't overflow on smaller devices (like iPhone SE).
* Verified that all CSS Grid layouts correctly collapse into single columns (`grid-cols-1`) on mobile, particularly the complex Bento Box in `About.tsx`.
* Ensured typography scales down gracefully (e.g., `text-[32px]` on mobile vs `text-[56px]` on desktop) across all section headers.
* Implemented a fully functional mobile dropdown menu in `Navbar.tsx` using `framer-motion` and React state, complete with a smooth slide-down animation and a toggling close icon.
* Upgraded `Navbar.tsx` to be a semi-fixed/auto-hiding header using `useScroll` and `useMotionValueEvent`. The navbar is now fixed at the top with a subtle blur effect (`backdrop-blur-md`), gracefully animates out of view when scrolling down, and glides back into view when scrolling up. Adjusted `Hero.tsx` padding to compensate for the fixed header layout.
* Slimmed down the `Navbar` height by reducing its vertical padding (`py-2.5 md:py-3.5`) and proportionately adjusted the `Hero` top padding (`pt-24 md:pt-28`) to create a tighter, more elegant header profile.
