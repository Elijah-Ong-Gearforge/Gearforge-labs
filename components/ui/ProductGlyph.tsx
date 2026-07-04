import { ProductKey } from "@/lib/products";

const wrap = "h-full w-full";

function AuroraGlyph() {
  return (
    <svg viewBox="0 0 64 64" className={wrap} fill="none">
      <path d="M4,40 C 16,20 22,50 32,32 C 42,14 48,44 60,24" stroke="currentColor" strokeWidth="1.6" opacity="0.9" />
      <path d="M4,48 C 16,30 22,56 32,40 C 42,24 48,50 60,32" stroke="currentColor" strokeWidth="1.6" opacity="0.55" />
      <path d="M4,56 C 16,40 22,60 32,48 C 42,36 48,58 60,42" stroke="currentColor" strokeWidth="1.6" opacity="0.3" />
    </svg>
  );
}

function ForgeViewGlyph() {
  return (
    <svg viewBox="0 0 64 64" className={wrap} fill="none">
      <rect x="6" y="14" width="52" height="36" rx="3" stroke="currentColor" strokeWidth="1.6" opacity="0.9" />
      <g stroke="currentColor" strokeWidth="1.2" opacity="0.5">
        <path d="M12,50 L24,14" />
        <path d="M22,50 L34,14" />
        <path d="M32,50 L44,14" />
        <path d="M42,50 L54,14" />
      </g>
      <circle cx="32" cy="32" r="3" fill="currentColor" opacity="0.9" />
    </svg>
  );
}

function ForgeLinkGlyph() {
  return (
    <svg viewBox="0 0 64 64" className={wrap} fill="none">
      <path
        d="M18,40 a10,10 0 0 1 2,-19.8 a13,13 0 0 1 25,-2.6 a9,9 0 0 1 -1,17.9 z"
        stroke="currentColor"
        strokeWidth="1.6"
        opacity="0.55"
      />
      <path d="M32,30 L32,50" stroke="currentColor" strokeWidth="1.6" opacity="0.9" />
      <path d="M25,43 L32,50 L39,43" stroke="currentColor" strokeWidth="1.6" opacity="0.9" />
    </svg>
  );
}

function SkyForgeGlyph() {
  return (
    <svg viewBox="0 0 64 64" className={wrap} fill="none">
      <path d="M32,10 L32,54 M10,32 L54,32" stroke="currentColor" strokeWidth="1.2" opacity="0.5" />
      <circle cx="32" cy="32" r="10" stroke="currentColor" strokeWidth="1.6" opacity="0.9" />
      <circle cx="14" cy="14" r="5" stroke="currentColor" strokeWidth="1.6" opacity="0.8" />
      <circle cx="50" cy="14" r="5" stroke="currentColor" strokeWidth="1.6" opacity="0.8" />
      <circle cx="14" cy="50" r="5" stroke="currentColor" strokeWidth="1.6" opacity="0.8" />
      <circle cx="50" cy="50" r="5" stroke="currentColor" strokeWidth="1.6" opacity="0.8" />
    </svg>
  );
}

const GLYPHS: Record<ProductKey, () => JSX.Element> = {
  aurora: AuroraGlyph,
  forgeview: ForgeViewGlyph,
  forgelink: ForgeLinkGlyph,
  skyforge: SkyForgeGlyph,
};

export default function ProductGlyph({ product }: { product: ProductKey }) {
  const Glyph = GLYPHS[product];
  return <Glyph />;
}
