# ByteSpace Main

ByteSpace is a Next.js 14 App Router project built with React and TypeScript. It contains three pages:

- `/` — course discovery landing page
- `/login` — sign-in screen
- `/register` — account creation screen

## Project structure

- `src/app` contains App Router routes and the root layout.
- `src/features/landing` contains the landing-page sections.
- `src/features/catalog` contains course discovery and category components.
- `src/features/auth` contains shared sign-in and registration components.
- `src/components` contains reusable UI primitives, icons, and course cards.
- `public` contains static images and logos.

Component styling uses Tailwind CSS. Shared colors and fonts are defined as CSS variables in `src/app/globals.css` and exposed as Tailwind theme tokens. The global stylesheet is kept for those tokens and the original design reset; Tailwind preflight is disabled to preserve the Figma rendering.

```bash
npm ci
npm run dev      # http://localhost:3000
npm run build && npm start
```

Fonts: Poppins (Google Fonts), Satoshi + Clash Display (Fontshare) load from the network in `src/app/layout.tsx`. The visual design preserves the original Figma layout measured at 1440px.
