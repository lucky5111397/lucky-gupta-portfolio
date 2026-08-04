# Lucky Gupta — Developer Portfolio

A premium, dark-mode developer portfolio built for a Java Backend & AI Full
Stack Developer. Built with React + Vite, Tailwind CSS, and Framer Motion.

## Signature design concept

The site's visual identity is grounded in the subject: a backend/AI
developer's world. The hero and section backgrounds feature an animated
**trace network** — a sparse graph of pulsing "service nodes" connected by
lines, evoking a distributed system trace rather than generic decorative
blobs. Section headers use HTTP-route-style eyebrows (`GET /skills`,
`GET /projects`) instead of generic numbering — these are literally the
section's anchor IDs, so the label encodes real information.

## Getting started

```bash
npm install
npm run dev       # start local dev server
npm run build      # production build to /dist
npm run preview    # preview the production build locally
```

## Before you deploy — personalize these

1. **Resume**: replace `public/resume/Lucky_Gupta_Resume.pdf` with your real resume (same filename, or update the path in `src/components/Navbar.jsx` and `src/sections/Hero.jsx`).
2. **Content**: all copy, skills, projects, experience, education, and certifications live in `src/data/portfolioData.js` — edit this one file to update most of the site.
3. **Social links**: update `socials` (GitHub, LinkedIn, email) at the bottom of `src/data/portfolioData.js`.
4. **Projects**: the `projects` array has 1 real project (INTELLIVORA) and 3 placeholders — replace the placeholder entries with your own projects, or delete them.
5. **Contact form**: the form in `src/sections/Contact.jsx` is EmailJS-ready — see the comment inside `handleSubmit` for where to plug in your EmailJS service ID, template ID, and public key.
6. **GitHub stats**: `src/sections/GitHubStats.jsx` currently renders a deterministic placeholder contribution graph and stat tiles. Swap in the real GitHub GraphQL/REST API (or a service like github-readme-stats) if you want live data.
7. **Favicon / OG image**: `public/favicon.svg` is a simple placeholder mark; `index.html` also references `/og-image.png` for social share previews — add that image to `public/`.

## Tech stack

- React 19 + Vite
- Tailwind CSS 3 (custom design tokens in `tailwind.config.js`)
- Framer Motion (scroll reveals, page-load sequence, hover micro-interactions)
- GSAP (installed, available for any additional hero-only effects)
- react-icons, react-scroll

## Project structure

```
src/
  components/   Reusable UI: Navbar, Footer, cards, cursor, scroll progress, trace network background
  sections/     One file per page section (Hero, About, Skills, Projects, ...)
  hooks/        useReducedMotion, useMousePosition, useActiveSection
  data/         portfolioData.js — single source of truth for content
```

## Accessibility & performance notes

- Respects `prefers-reduced-motion` (disables non-essential animation).
- Visible keyboard focus states on all interactive elements.
- Skip-to-content link for screen reader / keyboard users.
- Custom cursor auto-disables on touch devices and small screens.
- Single-file components, lazy-friendly structure for further code-splitting if needed.

