"use client";

import { motion } from "framer-motion";
import ViewfinderGrid from "@/components/ui/ViewfinderGrid";
import { EASE, DURATION, staggerContainer, staggerChild, viewportOnce } from "@/lib/motion";

export default function ClosingSection() {
  return (
    <section className="relative flex min-h-[100svh] flex-col overflow-hidden bg-carbon-950 px-6 md:px-10">
      <ViewfinderGrid opacity={0.06} />

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        variants={staggerContainer(0.12)}
        className="flex flex-1 flex-col justify-end pb-28 pt-40 md:max-w-2xl md:pb-36 md:pl-[8%]"
      >
        <motion.h2
          variants={staggerChild}
          className="text-balance font-display text-display-h1 font-medium text-fog-100 md:text-display-h1-lg"
        >
          The gear disappears.
          <br /> What you made doesn&rsquo;t.
        </motion.h2>

        <motion.p
          variants={staggerChild}
          className="mt-6 max-w-md text-body-m leading-relaxed text-steel-200"
        >
          Four instruments, one standard — for the work that outlasts the day
          you made it.
        </motion.p>

        <motion.div variants={staggerChild} className="mt-9">
          <a
            href="#ecosystem"
            className="inline-block rounded-md border border-ember-500/50 px-5 py-2.5 font-mono text-caption uppercase tracking-widest2 text-ember-400 transition duration-fast ease-mechanical hover:border-ember-500 hover:bg-ember-900/40"
          >
            View the ecosystem
          </a>
        </motion.div>
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.45 }}
        viewport={viewportOnce}
        transition={{ duration: DURATION.slow, ease: EASE.mechanical, delay: 0.4 }}
        className="pb-10 text-center font-mono text-[11px] uppercase tracking-widest2 text-steel-400"
      >
        GearForgeLabs — 2026
      </motion.p>
    </section>
  );
}
