"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Eyebrow from "@/components/ui/Eyebrow";

interface Stage {
  n: string;
  name: string;
  desc: string;
  tags: { label: string; className: string }[];
}

const STAGES: Stage[] = [
  {
    n: "01",
    name: "Capture",
    desc: "In the air, or on the rig — both reading the same light.",
    tags: [
      { label: "SkyForge", className: "text-altitude-blue border-altitude-blue/40" },
      { label: "ForgeView", className: "text-signal-amber border-signal-amber/40" },
    ],
  },
  {
    n: "02",
    name: "Connect",
    desc: "Moves the card's contents before the card is even out.",
    tags: [{ label: "ForgeLink", className: "text-cloud-cyan border-cloud-cyan/40" }],
  },
  {
    n: "03",
    name: "Process",
    desc: "Sorts, grades, and culls while you're still packing up.",
    tags: [{ label: "Aurora", className: "text-aurora-violet border-aurora-violet/40" }],
  },
  {
    n: "04",
    name: "Deliver",
    desc: "It's already there. You just have to open it.",
    tags: [],
  },
];

// Each stage's activation point along the pinned scroll range (0–1).
const THRESHOLDS = [0.28, 0.5, 0.72, 0.94];
const RAMP = 0.14;

export default function WorkflowAnimation() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const lineScale = useTransform(scrollYProgress, [0.12, 0.96], [0, 1]);

  return (
    <section ref={ref} className="relative h-[420vh] bg-carbon-900">
      <div className="sticky top-0 flex h-[100svh] flex-col justify-center overflow-hidden px-6 md:px-10">
        <div className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-14 md:grid-cols-[minmax(0,320px)_1fr] md:gap-20">
          {/* left: static intro, stays put for the whole pin */}
          <div>
            <Eyebrow>How It Moves</Eyebrow>
            <h2 className="text-balance mt-4 font-display text-display-h2 font-medium text-fog-100">
              Capture. Connect.
              <br /> Process. Deliver.
            </h2>
            <p className="mt-5 max-w-xs text-body-s leading-relaxed text-steel-200">
              One pipeline, four instruments — nothing waits on a cable or a
              copy job.
            </p>
          </div>

          {/* right: the timeline */}
          <div className="relative pl-10">
            <div className="absolute left-[3px] top-1 h-[calc(100%-8px)] w-px bg-carbon-600" />
            <motion.div
              style={{ scaleY: lineScale }}
              className="absolute left-[3px] top-1 h-[calc(100%-8px)] w-px origin-top bg-ember-500"
            />

            <div className="flex flex-col gap-14">
              {STAGES.map((stage, i) => (
                <StageRow key={stage.n} stage={stage} threshold={THRESHOLDS[i]} scrollYProgress={scrollYProgress} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function StageRow({
  stage,
  threshold,
  scrollYProgress,
}: {
  stage: Stage;
  threshold: number;
  scrollYProgress: ReturnType<typeof useScroll>["scrollYProgress"];
}) {
  const range: [number, number] = [threshold - RAMP, threshold];
  const textColor = useTransform(scrollYProgress, range, ["#8B8F98", "#EDEEF0"]);
  const numberColor = useTransform(scrollYProgress, range, ["#8B8F98", "#C97A4A"]);
  const dotScale = useTransform(scrollYProgress, range, [0.6, 1]);
  const dotColor = useTransform(scrollYProgress, range, ["#33363F", "#C97A4A"]);
  const opacity = useTransform(scrollYProgress, range, [0.45, 1]);

  return (
    <motion.div style={{ opacity }} className="relative">
      <motion.div
        style={{ backgroundColor: dotColor, scale: dotScale }}
        className="absolute -left-10 top-1.5 h-2 w-2 -translate-x-1/2 rounded-full"
      />
      <motion.span style={{ color: numberColor }} className="font-mono text-caption tabular">
        {stage.n}
      </motion.span>
      <motion.h3 style={{ color: textColor }} className="mt-1 font-display text-display-h3 font-medium">
        {stage.name}
      </motion.h3>
      <p className="mt-2 max-w-md text-body-s leading-relaxed text-steel-200">{stage.desc}</p>
      {stage.tags.length > 0 && (
        <div className="mt-3 flex gap-2">
          {stage.tags.map((t) => (
            <span
              key={t.label}
              className={`rounded-full border px-2.5 py-1 font-mono text-[11px] uppercase tracking-widest2 ${t.className}`}
            >
              {t.label}
            </span>
          ))}
        </div>
      )}
    </motion.div>
  );
}
