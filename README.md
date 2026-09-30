# ByteSpace Main

ByteSpace is a Next.js 14 App Router project built with React and TypeScript. It contains three pages:

- `/` — course discovery landing page
- `/login` — sign-in screen
- `/register` — account creation screen

Reusable page sections live in `src/components`; shared UI and authentication components are grouped under `src/components/ui` and `src/components/auth`. Static images and logos live in `public/`.

```bash
npm ci
npm run dev      # http://localhost:3000
npm run build && npm start
```

Fonts: Poppins (Google Fonts), Satoshi + Clash Display (Fontshare) load from the network in `src/app/layout.tsx`.
The visual design was converted from a Figma design at 1440px.
