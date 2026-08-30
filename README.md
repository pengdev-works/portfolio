# AETHER — Generative Constellation Portfolio for Peng ("pengzzz")

A single-page, scroll-driven, WebGL-native night-sky observatory portfolio designed for Peng (pengzzz), tailored for technical recruiters, hiring managers, and design-engineering leads at fintech and Web3 startups.

## 🚀 Run & Build Instructions

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Execute production build
npm run build

# Preview production build locally
npm run preview
```

## 📝 Customization & Swap Guide

- **Where to Swap Copy**:
  - Hero Star-Headline & Subtext: Edit [`src/components/Hero.jsx`](file:///c:/Users/abero/OneDrive/Documents/portfolio/src/components/Hero.jsx)
  - About Bio & Spectral Identity: Edit [`src/components/About.jsx`](file:///c:/Users/abero/OneDrive/Documents/portfolio/src/components/About.jsx)
  - Live Status ("Now"): Edit [`src/components/Now.jsx`](file:///c:/Users/abero/OneDrive/Documents/portfolio/src/components/Now.jsx)
  - Selected Constellations: Edit `secondaryConstellations` & `abraScreens` in [`src/components/Projects.jsx`](file:///c:/Users/abero/OneDrive/Documents/portfolio/src/components/Projects.jsx)

- **Where to Drop Project Thumbnails**:
  - Place 16:10 aspect ratio images (WebP/PNG) into `public/projects/`.
  - In `src/components/Projects.jsx`, replace `previewSvg` with `<img src="/projects/thumb.webp" alt="Title" className="constellation-svg-preview" />`.

- **How to Swap Starfield for a Static Hero Image**:
  - In `src/App.jsx`, replace `<AetherField />` with `<div className="static-hero-bg"><img src="/sky.jpg" alt="Night Sky" /></div>`.

- **Easter Egg**:
  - Type `p-e-n-g` anywhere on the page to spawn a cyan SVG penguin flying to the black-hole singularity with a dashed aurora-cyan trail.
