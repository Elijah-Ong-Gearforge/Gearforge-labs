"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import { PRODUCTS, Product } from "@/lib/products";
import ProductGlyph from "@/components/ui/ProductGlyph";

type Range4 = [number, number, number, number];

const RANGES: { input: Range4; opacity: Range4; y: Range4 }[] = [
  { input: [0, 0.02, 0.22, 0.26], opacity: [1, 1, 1, 0], y: [0, 0, 0, -24] },
  { input: [0.2, 0.26, 0.46, 0.52], opacity: [0, 1, 1, 0], y: [24, 0, 0, -24] },
  { input: [0.46, 0.52, 0.72, 0.78], opacity: [0, 1, 1, 0], y: [24, 0, 0, -24] },
  { input: [0.72, 0.78, 0.98, 1], opacity: [0, 1, 1, 1], y: [24, 0, 0, 0] },
];

export default function ProductSpotlight() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  return (
    <section ref={ref} className="relative h-[400vh] bg-carbon-950">
      <div className="sticky top-0 h-[100svh] overflow-hidden">
        <div className="relative mx-auto h-full max-w-6xl px-6 md:px-10">
          {PRODUCTS.map((p, i) => (
            <SpotlightPanel key={p.key} product={p} range={RANGES[i]} scrollYProgress={scrollYProgress} />
          ))}

          <div className="absolute bottom-12 left-6 flex flex-col gap-3 md:left-10">
            {PRODUCTS.map((p, i) => (
              <ProgressTick key={p.key} product={p} range={RANGES[i]} scrollYProgress={scrollYProgress} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function SpotlightPanel({
  product,
  range,
  scrollYProgress,
}: {
  product: Product;
  range: { input: Range4; opacity: Range4; y: Range4 };
  scrollYProgress: MotionValue<number>;
}) {
  const opacity = useTransform(scrollYProgress, range.input, range.opacity);
  const y = useTransform(scrollYProgress, range.input, range.y);
  const pointerEvents = useTransform(opacity, (v) => (v > 0.6 ? "auto" : "none"));

  return (
    <motion.div
      style={{
        opacity,
        y,
        pointerEvents,
        ...({ "--tw-spotlight-color": `${product.accentHex}1a` } as Record<string, string>),
      }}
      className="bg-spotlight-fade absolute inset-0 flex flex-col items-start justify-center gap-10 md:flex-row md:items-center md:justify-between"
    >
      <div className="max-w-xl">
        <p className={`mb-4 font-mono text-overline uppercase tracking-widest2 ${product.accentClass}`}>
          {product.category}
        </p>
        <h3 className={`font-display text-display-h1 font-medium md:text-display-h1-lg ${product.accentClass}`}>
          {product.name}
        </h3>
        <p className="mt-5 max-w-md text-body-l leading-relaxed text-steel-200">{product.tagline}</p>
        <div className="mt-7 flex flex-wrap gap-2.5">
          {product.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-carbon-600 px-3 py-1.5 font-mono text-[11px] uppercase tracking-widest2 text-steel-200"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div className={`h-40 w-40 shrink-0 opacity-70 md:h-64 md:w-64 ${product.accentClass}`}>
        <ProductGlyph product={product.key} />
      </div>
    </motion.div>
  );
}

function ProgressTick({
  product,
  range,
  scrollYProgress,
}: {
  product: Product;
  range: { input: Range4; opacity: Range4; y: Range4 };
  scrollYProgress: MotionValue<number>;
}) {
  const amount = useTransform(scrollYProgress, range.input, range.opacity);
  const backgroundColor = useTransform(amount, [0, 1], ["#33363F", product.accentHex]);
  const width = useTransform(amount, [0, 1], [16, 32]);

  return (
    <div className="flex items-center gap-3">
      <motion.span style={{ backgroundColor, width }} className="h-[3px] rounded-full" />
      <motion.span style={{ opacity: amount }} className="font-mono text-caption text-steel-200">
        {product.name}
      </motion.span>
    </div>
  );
}
