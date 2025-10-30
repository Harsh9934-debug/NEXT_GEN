# NEXTGEN Company Portfolio

A modern React + Vite project for the NEXTGEN agency portfolio.

## Features

- ⚡️ **Vite** for fast development and builds
- ⚛️ **React** with HMR
- 🎨 **Tailwind CSS** for utility-first styling
- 🌀 **GSAP** for advanced scroll and animation effects
- 🏃 **Framer Motion** for smooth UI transitions
- 🧩 **shadcn/ui** for accessible, customizable UI components
- 📁 **Import alias**: use `@/` for `src/` imports (see `tsconfig.json` and `vite.config.js`)
- 📄 **ESLint** for code quality

## Getting Started

```bash
# Clone and run locally
git clone <YOUR REPO URL>
cd nextgen
npm install
npm run dev
```

## Project Structure

- `src/pages/` — Main pages (Home, Agence, Projects, etc.)
- `src/components/` — Reusable UI components
- `src/assets/` — Images and static files

## Alias Setup

- `@/` points to `src/` (configured in `tsconfig.json` and `vite.config.js`)

## Custom Animations

- GSAP and Framer Motion are used for scroll-based and interactive animations.
- See `src/pages/Agence.jsx` and `src/pages/Page3ofAgence.jsx` for examples.

## UI Components

- shadcn/ui components can be added via CLI (`npx shadcn add ...`)
- See [shadcn/ui docs](https://ui.shadcn.com/docs/installation/vite) for usage.

## Deployment

- Ready for Vercel or Netlify static hosting.


## Author

Harsh kumar Gupta

## Live Demo

[https://nextgenagent.vercel.app/](https://nextgenagent.vercel.app/)
