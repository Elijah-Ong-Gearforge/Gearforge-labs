"use client";

import { motion } from "framer-motion";
import { EASE, DURATION } from "@/lib/motion";

const corners = [
  { key: "tl", x: -1, y: -1, className: "left-1/2 top-1/2" },
  { key: "tr", x: 1, y: -1, className: "left-1/2 top-1/2" },
  { key: "bl", x: -1, y: 1, className: "left-1/2 top-1/2" },
  { key: "br", x: 1, y: 1, className: "left-1/2 top-1/2" },
];

/**
 * Four L-shaped brackets that start wide apart and slightly blurred, then
 * converge to frame the headline — a camera acquiring focus lock. This is
 * the one moment the page spends its full `cinematic` motion budget.
 */
export default function AutofocusBrackets({
  size = 420,
}: {
  size?: number;
}) {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
      style={{ width: size, height: size * 0.6 }}
    >
      {corners.map((c, i) => (
        <motion.svg
          key={c.key}
          width="28"
          height="28"
          viewBox="0 0 28 28"
          className={`absolute ${c.className}`}
          initial={{
            x: c.x * (size / 2 + 60) - 14,
            y: c.y * (size * 0.3 + 60) - 14,
            opacity: 0,
            filter: "blur(4px)",
          }}
          animate={{
            x: c.x * (size / 2) - 14,
            y: c.y * (size * 0.3) - 14,
            opacity: 1,
            filter: "blur(0px)",
          }}
          transition={{ duration: DURATION.cinematic, ease: EASE.settle, delay: 0.1 }}
        >
          <path
            d={
              c.x < 0 && c.y < 0
                ? "M28,2 L2,2 L2,28"
                : c.x > 0 && c.y < 0
                ? "M0,2 L26,2 L26,28"
                : c.x < 0 && c.y > 0
                ? "M28,26 L2,26 L2,0"
                : "M0,26 L26,26 L26,0"
            }
            fill="none"
            stroke="#C97A4A"
            strokeWidth="1.5"
          />
        </motion.svg>
      ))}
    </div>
  );
}
