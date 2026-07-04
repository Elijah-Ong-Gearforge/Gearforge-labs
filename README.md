# GearForgeLabs — Homepage

The cinematic scroll experience for GearForgeLabs: brand hero → ecosystem
reveal → workflow film → product spotlights → closing statement. Built with
Next.js (App Router), Tailwind CSS, and Framer Motion, implementing the
GearForgeLabs design system doc directly — `tailwind.config.ts` and
`lib/motion.ts` are that doc translated into tokens; nothing in the
components uses a raw hex, px, or easing curve that isn't defined there.

## Run it

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Read this before shipping — fonts

The design system specifies **Neue Machina** (display) and **General Sans**
(body). Both are licensed fonts (Pangram Pangram / Fontshare) that aren't on
Google Fonts, so they can't be wired up in a code sample without your
license files. `app/layout.tsx` uses close stand-ins so the type rhythm you
see is representative:

| Design system spec | Stand-in used here | Why |
|---|---|---|
| Neue Machina | Space Grotesk | Same geometric, mechanical grotesk character |
| General Sans | Manrope | Same humanist, rounded-terminal warmth |
| JetBrains Mono | JetBrains Mono | Exact match, no substitution |

To swap in the real files: drop the `.woff2`s in `public/fonts`, replace the
`next/font/google` calls in `app/layout.tsx` with `next/font/local`, and keep
the same three CSS variable names (`--font-display`, `--font-body`,
`--font-mono`) — nothing downstream has to change.

## The five sections

| Section | File | What it does |
|---|---|---|
| Hero | `components/Hero.tsx` | Brand statement only. Autofocus corner brackets converge and the headline resolves out of a blur — a camera acquiring focus lock. This is the page's one `cinematic`-budget moment. |
| Ecosystem reveal | `components/sections/EcosystemReveal.tsx` | Aurora / ForgeView / ForgeLink / SkyForge as a staggered 4-up grid, each card top-bordered in its product accent per the design system's card rule. |
| Workflow animation | `components/sections/WorkflowAnimation.tsx` | Pinned scroll timeline: Capture → Connect → Process → Deliver. A single ember line fills as you scroll; each stage brightens from steel to fog as the line reaches it. Product tags (not colors) identify which instrument powers each stage, so only one accent — ember — ever animates at once. |
| Product spotlight | `components/sections/ProductSpotlight.tsx` | Pinned, Apple-style crossfade through all four products at full scale, each in its own accent, with a soft radial tint and a side progress rail. |
| Closing | `components/sections/ClosingSection.tsx` | Echoes the Hero's Viewfinder Grid to bookend the film, but sits off-center (bottom-left third) rather than centered, and drops the blur-focus treatment — deliberately quieter than the open. |

## Structure

```
app/
  layout.tsx        fonts, metadata
  page.tsx           assembles all sections
  globals.css        base styles, grain, reduced-motion, focus rings
lib/
  motion.ts          EASE / DURATION tokens = design doc Section 4, verbatim
  products.ts         single source of truth for product copy + accents
components/
  Nav.tsx
  Footer.tsx
  ui/
    ViewfinderGrid.tsx      the rule-of-thirds signature motif (Hero + Closing only)
    AutofocusBrackets.tsx   the hero's focus-lock signature motion
    Eyebrow.tsx
    ProductGlyph.tsx        abstract per-product SVG marks
  sections/
    Hero.tsx
    EcosystemReveal.tsx
    WorkflowAnimation.tsx
    ProductSpotlight.tsx
    ClosingSection.tsx
```

## Notes

- Every color, type size, and motion curve traces back to a named token in
  `tailwind.config.ts` / `lib/motion.ts` — if the design system doc changes,
  update the token, not the component.
- Only one accent color is ever active on screen at a time, per the design
  system's wayfinding rule: ember at the brand level (Nav, Hero, Workflow,
  Closing), a single product accent inside that product's own moment
  (Ecosystem cards, Spotlight panels).
- Reduced motion is respected globally (`globals.css`); everything above
  degrades to a simple crossfade.
- Verified with a real `next build` (clean) and `tsc --noEmit` (clean).
  Google Fonts aren't reachable from the sandbox this was built in, so the
  build was also smoke-tested with fonts stubbed out — swap back in locally
  and it'll fetch normally.
