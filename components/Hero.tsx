"use client";

import { motion } from "framer-motion";
import ViewfinderGrid from "@/components/ui/ViewfinderGrid";
import AutofocusBrackets from "@/components/ui/AutofocusBrackets";
import Eyebrow from "@/components/ui/Eyebrow";
import { EASE, DURATION } from "@/lib/motion";

export default function Hero() {
  return (
    <section className="relative flex min-h-[100svh] flex-col items-center justify-center overflow-hidden bg-carbon-950 px-6">
      <ViewfinderGrid opacity={0.06} />
      <AutofocusBrackets />

      <motion.div
        initial={{ opacity: 0, filter: "blur(6px)" }}
        animate={{ opacity: 1, filter: "blur(0px)" }}
        transition={{ duration: DURATION.slow, ease: EASE.settle, delay: 0.15 }}
        className="mb-6"
      >
        <Eyebrow>GearForgeLabs</Eyebrow>
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, filter: "blur(10px)" }}
        animate={{ opacity: 1, filter: "blur(0px)" }}
        transition={{ duration: DURATION.cinematic, ease: EASE.settle, delay: 0.35 }}
        className="text-balance max-w-4xl text-center font-display text-display-hero font-medium text-fog-100 md:text-display-hero-lg"
      >
        Built for the shot
        <br /> you don&rsquo;t get twice.
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: DURATION.slow, ease: EASE.settle, delay: 0.7 }}
        className="mt-6 max-w-md text-balance text-center text-body-m text-steel-200"
      >
        Four instruments. One standard of precision.
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: DURATION.slow, delay: 1.4 }}
        className="absolute bottom-10 flex flex-col items-center gap-3"
      >
        <span className="font-mono text-overline uppercase tracking-widest2 text-steel-400">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="h-8 w-px bg-gradient-to-b from-steel-400 to-transparent"
        />
      </motion.div>
    </section>
  );
}

