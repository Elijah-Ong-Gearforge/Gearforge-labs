import { Variants } from "framer-motion";

/**
 * Motion tokens — implements design-system Section 4 exactly.
 * Import these instead of writing ad-hoc durations/easings in components,
 * so the whole site shares one physical "feel."
 */

export const EASE = {
  mechanical: [0.65, 0, 0.35, 1] as [number, number, number, number],
  settle: [0.16, 1, 0.3, 1] as [number, number, number, number],
  shutter: [0.83, 0, 0.17, 1] as [number, number, number, number],
};

export const DURATION = {
  instant: 0.1,
  fast: 0.2,
  base: 0.35,
  slow: 0.6,
  cinematic: 1.1,
};

// Reserved for literally physical/spatial interactions only — never chrome.
export const SPRING_GENTLE = {
  type: "spring" as const,
  stiffness: 220,
  damping: 26,
};

/** Standard single-direction reveal: content settles up into place. */
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: DURATION.slow, ease: EASE.settle },
  },
};

/** For staggered groups of children — 40–60ms apart, one direction. */
export const staggerContainer = (stagger = 0.06, delayChildren = 0): Variants => ({
  hidden: {},
  visible: {
    transition: { staggerChildren: stagger, delayChildren },
  },
});

export const staggerChild: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: DURATION.base, ease: EASE.settle },
  },
};

/** Coming into focus — the hero's signature motion, reused sparingly. */
export const focusIn: Variants = {
  hidden: { opacity: 0, filter: "blur(10px)" },
  visible: {
    opacity: 1,
    filter: "blur(0px)",
    transition: { duration: DURATION.cinematic, ease: EASE.settle },
  },
};

export const viewportOnce = { once: true, amount: 0.5 } as const;
