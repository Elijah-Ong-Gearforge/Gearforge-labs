"use client";

import { motion } from "framer-motion";
import { PRODUCTS } from "@/lib/products";
import ProductGlyph from "@/components/ui/ProductGlyph";
import Eyebrow from "@/components/ui/Eyebrow";
import { staggerContainer, staggerChild, viewportOnce } from "@/lib/motion";

const BORDER_COLOR: Record<string, string> = {
  aurora: "border-t-aurora-violet",
  forgeview: "border-t-signal-amber",
  forgelink: "border-t-cloud-cyan",
  skyforge: "border-t-altitude-blue",
};

export default function EcosystemReveal() {
  return (
    <section id="ecosystem" className="border-t border-carbon-600 bg-carbon-950 px-6 py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-16 max-w-xl text-center"
        >
          <Eyebrow>The Ecosystem</Eyebrow>
          <h2 className="text-balance mt-4 font-display text-display-h2 font-medium text-fog-100 md:text-display-h2-lg">
            Four instruments. One workshop.
          </h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer(0.1)}
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {PRODUCTS.map((p) => (
            <motion.div
              key={p.key}
              id={p.key}
              variants={staggerChild}
              className={`group flex flex-col rounded-xl border border-carbon-600 border-t-2 ${BORDER_COLOR[p.key]} bg-carbon-800 p-6 transition duration-base ease-mechanical hover:bg-carbon-700`}
            >
              <div className={`mb-8 h-9 w-9 ${p.accentClass}`}>
                <ProductGlyph product={p.key} />
              </div>
              <p className={`mb-2 font-mono text-overline uppercase tracking-widest2 ${p.accentClass}`}>
                {p.category}
              </p>
              <h3 className="mb-3 font-display text-heading-h4 font-medium text-fog-100">
                {p.name}
              </h3>
              <p className="text-body-s leading-relaxed text-steel-200">{p.tagline}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
