<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# Merijé — Project Context & Brand Guidelines

## 1. Project Overview
**Brand name:** Merijé
**Product:** Digital wedding invitation service/platform
**Primary market:** Indonesia
**Target Users:** Couples preparing for weddings who want elegant, modern, personalized digital invitations without generic templates.

## 2. Design & Aesthetic Rules (STRICT)
*   **Vibe:** Emotional warmth, sophistication, intimacy, craftsmanship, simplicity, modern editorial.
*   **Aesthetic Style:** Neo-brutalist / Pop-art editorial. Use highly vibrant contrast colors like lime green (`#D4F636`), bright yellow (`#FFD628`), bright pink (`#F466E3`), and soft coral/peach (`#FF9EBA`).
*   **NO AI SLOP:** Never use generic AI gradients, glowing blobs, random glassmorphism without purpose, or generic startup UI layouts. The site must feel like an independent, premium design studio.
*   **Typography:** 
    *   Primary Sans-serif: `Plus Jakarta Sans` (used for bold, geometric, modern feel).
    *   Primary Serif: `Playfair Display` (used sparingly for elegant accents).
*   **Layout Proportions:** Cards should be deliberately proportioned (wider, less boxy). Content should be tightly grouped with deliberate negative space.

## 3. Copywriting Rules (STRICT)
*   **Language:** Bahasa Indonesia (Indonesian).
*   **Tone:** Human, warm, understated, and confident. 
*   **Anti-AI Copy:** DO NOT use robotic, overly dramatic, or corporate jargon (e.g., "pendekatan artistik", "kanvas digital", "diracik khusus", "mengoptimalkan"). 
*   **Simplicity:** Use natural, empathetic language (e.g., "Lebih Dekat", "Tanpa Iklan", "Bersih & Nyaman"). Speak directly to the couple.

## 4. Content Integrity (Rule 26)
*   **NO FAKE SOCIAL PROOF:** Do not fabricate customer logos, fake testimonials, or fake statistics (e.g., "Trusted by 10,000+ users"). If a section requires placeholder content, use feature highlights or value propositions instead of fake clients.

## 5. Technology Stack
*   Next.js (App Router)
*   Tailwind CSS (v4)
*   Framer Motion (for micro-interactions, scroll animations)
*   TypeScript
