/**
 * The Viewfinder Grid — the design system's signature structural device.
 * A rule-of-thirds overlay, the same grid a photographer composes through.
 * Used only in Hero and Closing so it reads as a framing device for the
 * whole film, not wallpaper repeated on every section.
 */
export default function ViewfinderGrid({ opacity = 0.05 }: { opacity?: number }) {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 overflow-hidden"
      style={{ opacity }}
    >
      <div className="absolute left-1/3 top-0 h-full w-px bg-fog-100" />
      <div className="absolute left-2/3 top-0 h-full w-px bg-fog-100" />
      <div className="absolute top-1/3 left-0 w-full h-px bg-fog-100" />
      <div className="absolute top-2/3 left-0 w-full h-px bg-fog-100" />
    </div>
  );
}
