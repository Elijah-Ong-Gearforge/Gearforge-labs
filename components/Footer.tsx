import { PRODUCTS } from "@/lib/products";

export default function Footer() {
  return (
    <footer className="border-t border-carbon-600 bg-carbon-950 px-6 py-10 md:px-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 text-center md:flex-row md:text-left">
        <span className="font-display text-base font-medium text-fog-100">
          GearForgeLabs
        </span>

        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 font-mono text-caption text-steel-400">
          {PRODUCTS.map((p) => (
            <a key={p.key} href={`#${p.key}`} className="transition hover:text-steel-200">
              {p.name}
            </a>
          ))}
        </div>

        <p className="font-mono text-[11px] uppercase tracking-widest2 text-steel-400">
          © {new Date().getFullYear()} GearForgeLabs
        </p>
      </div>
    </footer>
  );
}
