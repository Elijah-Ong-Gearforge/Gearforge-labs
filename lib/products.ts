export type ProductKey = "aurora" | "forgeview" | "forgelink" | "skyforge";

export interface Product {
  key: ProductKey;
  name: string;
  category: string;
  tagline: string;
  workflowStage: string;
  workflowLine: string;
  accentClass: string;
  accentHex: string;
  tags: string[];
}

export const PRODUCTS: Product[] = [
  {
    key: "aurora",
    name: "Aurora",
    category: "AI Photography Suite",
    tagline: "Processes a shoot the way you would, at the speed you can't.",
    workflowStage: "Process",
    workflowLine: "Sorts, grades, and culls while you're still packing up.",
    accentClass: "text-aurora-violet",
    accentHex: "#8C7FFF",
    tags: ["AI Culling", "Scene-Aware Grading", "Batch Export"],
  },
  {
    key: "forgeview",
    name: "ForgeView",
    category: "Camera Monitor System",
    tagline: "See exactly what the sensor sees, in the light you're actually in.",
    workflowStage: "Capture",
    workflowLine: "On the rig, reading the same light as the lens.",
    accentClass: "text-signal-amber",
    accentHex: "#E0A23D",
    tags: ["False Color", "3D LUT", "10-bit HDMI"],
  },
  {
    key: "forgelink",
    name: "ForgeLink",
    category: "Camera-to-Cloud Device",
    tagline: "Your card is full. The cloud isn't waiting.",
    workflowStage: "Connect",
    workflowLine: "Moves the card's contents before the card is even out.",
    accentClass: "text-cloud-cyan",
    accentHex: "#4FC3D9",
    tags: ["Sub-5s Transfer", "Dual-SIM", "Auto Backup"],
  },
  {
    key: "skyforge",
    name: "SkyForge",
    category: "Drone Systems",
    tagline: "Altitude with the same precision as a tripod.",
    workflowStage: "Capture",
    workflowLine: "In the air, holding the same line a tripod would.",
    accentClass: "text-altitude-blue",
    accentHex: "#4C7EFF",
    tags: ["45-min Flight", "6K RAW", "Obstacle Sensing"],
  },
];
