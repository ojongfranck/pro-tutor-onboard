# Implementation Plan - FSL Education Hub Website

Build a premium, high-converting service-based sales funnel for FSL Education Hub using Next.js (Vite/React in this environment), GSAP, and Tailwind CSS. The site focuses on converting visitors into WhatsApp leads for tutoring setup services.

## Scope Summary
- **Goal:** Create a cinematic, premium landing page with high-end animations (GSAP/Lenis) and horizontal scrolling sections.
- **Key Features:** Sticky navbar, Hero with stats, Services grid, "Why Choose Us", Horizontal scrolling Results and Testimonials, Team section with modals, Pricing, FAQ, and WhatsApp-integrated CTAs.
- **Visuals:** Royal Magenta (#8A0F6B) and Gold (#FFD700) palette, white backgrounds, premium spacing, and soft shadows.
- **Tech Stack:** React (Vite), TypeScript, Tailwind CSS, GSAP + ScrollTrigger, Lenis (smooth scroll), Shadcn UI, Lucide Icons.

## Non-Goals
- Server-side database or user authentication (Supabase is out of scope per session constraints).
- Real-time chat (direct redirect to WhatsApp instead).
- Multi-page blog (single landing page focus).

## Assumptions & Open Questions
- **Assumption:** Since this is a Vite environment, "Next.js 16" requirements will be adapted to a high-performance React/Vite structure while maintaining the requested UI patterns.
- **Open Question:** Are there specific images for the Team/Results sections, or should placeholders be used with descriptive alt text? (Will use high-quality placeholders).

## Affected Areas
- **Frontend:** All components, layouts, and animation logic.
- **Styles:** `index.css` for theme variables and Tailwind configuration.
- **Public Assets:** Favicons and branding images.

## Ordered Phases

### Phase 1: Setup & Foundation
- Install dependencies: `gsap`, `lenis`, `lucide-react`, `clsx`, `tailwind-merge`.
- Configure `index.css` with the brand color palette and Shadcn variables.
- Initialize Lenis smooth scrolling in `main.tsx`.
- **Owner:** `frontend_engineer`

### Phase 2: Navigation & Hero
- Build the premium Sticky Navbar with mobile menu.
- Create the Hero section with animated magenta gradients, floating glows, and statistics counter.
- **Owner:** `frontend_engineer`

### Phase 3: Core Content Sections
- Implement Services Section (staggered GSAP reveal).
- Implement "Why Choose FSL" section with premium benefit cards.
- **Owner:** `frontend_engineer`

### Phase 4: Advanced Animations (Horizontal Scroll)
- Build the Results Section using GSAP ScrollTrigger for horizontal scrolling.
- Build the Testimonials Section using GSAP horizontal scrolling.
- **Owner:** `frontend_engineer`

### Phase 5: Team & Community
- Build the Team Section with 3 profile cards.
- Implement the premium Modal for team details (GSAP transitions).
- Build the Community Section.
- **Owner:** `frontend_engineer`

### Phase 6: Conversion & Finalization
- Build Pricing Section with premium cards.
- Build FAQ Section with animated accordions.
- Build Contact Section and Footer.
- Integrate WhatsApp pre-filled links for all CTA buttons.
- **Owner:** `frontend_engineer`

## Execution Handoff

**Plan status:** ready

**Dispatch order:**
1. frontend_engineer — Implementation of the entire premium landing page and animation system.

**Per-agent instructions:**

### 1. frontend_engineer
- **Phases:** 1-6
- **Scope:** Full implementation of the FSL Education Hub website based on the detailed requirements.
- **Files:**
  - `src/App.tsx`: Main layout and section assembly.
  - `src/index.css`: Color theme and global styles.
  - `src/components/`: New components for Hero, Navbar, Services, HorizontalScroll, Team, Modals, Pricing, etc.
  - `src/hooks/`: Any custom hooks for GSAP or Lenis initialization.
- **Depends on:** none
- **Acceptance criteria:**
  - Website matches the Royal Magenta/Gold branding.
  - GSAP horizontal scrolling works smoothly for Results and Testimonials.
  - Lenis smooth scrolling is active.
  - All CTAs correctly link to WhatsApp with pre-filled messages.
  - Responsiveness is maintained across mobile and desktop.
  - Modals for the Team section open/close with premium transitions.

**Do not dispatch:**
- supabase_engineer (Out of scope).
