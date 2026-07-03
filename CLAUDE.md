@AGENTS.md

# Project conventions

## File structure

```
src/
  app/
    page.tsx          — assembly only: imports and renders section components
    layout.tsx        — fonts, metadata, body wrapper
    globals.css       — Tailwind base, custom keyframes, CSS utilities
  components/
    nav.tsx           — sticky navigation header
    footer.tsx        — footer
    sections/         — one file per page section
      hero.tsx
      about.tsx
      skills.tsx
      experience.tsx
      services.tsx
      contact.tsx
  lib/
    data.ts           — all static content (skills, experiences, services, etc.)
    utils.ts          — cn() and other pure utilities
```

## Component rules

- **Never put a full page in one file.** Split every page into section components under `src/components/sections/`.
- A file that exceeds ~80 lines or owns more than one visual concern must be split.
- `page.tsx` files must only import and render components — no JSX markup or data inline.
- All static content (copy, arrays, objects) lives in `src/lib/data.ts`, never inlined in components.

## Naming

- Section components: PascalCase named export, one per file (`export function Hero() {}`).
- Data exports: camelCase const (`export const experiences = [...]`).

## Styling

- Dark gray theme: base `#111111`, sections `#151515`, cards `#1a1a1a`.
- No purple or heavy color gradients — monochrome palette with white accents.
- Tailwind utility classes only; custom CSS goes in `globals.css` under `@layer utilities` or as a named class.
- Transparent sticky header: `backdrop-blur-md` with no background color.
