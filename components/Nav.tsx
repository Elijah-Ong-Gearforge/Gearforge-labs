"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { PRODUCTS } from "@/lib/products";
import { EASE, DURATION } from "@/lib/motion";

const DOT_COLOR: Record<string, string> = {
  aurora: "bg-aurora-violet",
  forgeview: "bg-signal-amber",
  forgelink: "bg-cloud-cyan",
  skyforge: "bg-altitude-blue",
};

export default function Nav() {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 240], [0, 1]);
  const y = useTransform(scrollY, [0, 240], [-16, 0]);

  return (
    <motion.header
      style={{ opacity, y }}
      transition={{ duration: DURATION.fast, ease: EASE.mechanical }}
      className="fixed top-0 inset-x-0 z-40 border-b border-carbon-600 bg-carbon-950/85 backdrop-blur-md"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-10">
        <a href="#" className="font-display text-base font-medium tracking-tight text-fog-100">
          GearForgeLabs
        </a>

        <nav className="hidden items-center gap-6 md:flex">
          {PRODUCTS.map((p) => (
            <a
              key={p.key}
              href={`#${p.key}`}
              className="group flex items-center gap-2 font-mono text-caption text-steel-200 transition hover:text-fog-100"
            >
              <span className={`h-1.5 w-1.5 rounded-full ${DOT_COLOR[p.key]} opacity-70 transition group-hover:opacity-100`} />
              {p.name}
            </a>
          ))}
        </nav>

        <a
          href="#ecosystem"
          className="rounded-md border border-ember-500/40 px-4 py-1.5 font-mono text-caption text-ember-400 transition duration-fast ease-mechanical hover:border-ember-500 hover:bg-ember-900/40"
        >
          View the ecosystem
        </a>
      </div>
    </motion.header>
  );
}
