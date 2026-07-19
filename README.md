# KodaSoft — Company Website

A modern, animated marketing site for **KodaSoft**, built with a current best-practice front-end stack.

## Tech stack

- **Vite** — instant dev server & optimized production builds
- **React 18 + TypeScript** — typed, component-driven UI
- **Tailwind CSS v4** — CSS-first design system (see `src/index.css` `@theme`)
- **Framer Motion** — scroll reveals, parallax, 3D tilt, page micro-interactions
- Zero image assets for UI — visuals are drawn in SVG/CSS, so everything stays crisp and fast

## Highlights / visual effects

- Animated **aurora** gradient background + blueprint grid
- Cursor-trailing **glow** and top **scroll-progress** bar
- Hero with **typewriter code editor**, 3D pointer tilt, particle constellation, and staggered blur-in headline
- **Spotlight** service cards with a spinning conic glow border
- Scroll-drawn **process timeline**, count-up stats, auto-rotating testimonials
- CSS-only **product mockups** in the work showcase
- Fully **responsive** + honors `prefers-reduced-motion`

## Getting started

```bash
npm install      # install dependencies
npm run dev      # start dev server (http://localhost:5173)
npm run build    # type-check + production build to dist/
npm run preview  # preview the production build
```

## Project structure

```
src/
  components/    reusable primitives (Reveal, SpotlightCard, Magnetic, Logo, …)
  sections/      page sections (Hero, Services, About, Process, Work, …)
  App.tsx        page composition
  index.css      design tokens + global effect classes
public/
  logo.jpeg      original brand logo
  favicon.svg    vector brand mark
```

## Customizing

- **Brand colors / fonts:** `src/index.css` under `@theme`
- **Copy & content:** each file in `src/sections/`
- **Contact form:** `src/sections/Contact.tsx` currently does a front-end-only submit
  (`setSent(true)`). Wire `onSubmit` to your email service / API (e.g. Formspree,
  Resend, or your own endpoint) to receive real messages.
