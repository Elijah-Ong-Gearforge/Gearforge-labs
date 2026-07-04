import type { Metadata } from "next";
import { Space_Grotesk, Manrope, JetBrains_Mono } from "next/font/google";
import "./globals.css";

/**
 * FONT NOTE — read before shipping
 * ---------------------------------
 * The GearForgeLabs design system specifies Neue Machina (display) and
 * General Sans (body), which are licensed fonts (Pangram Pangram / Fontshare)
 * and aren't distributed on Google Fonts, so they can't be wired up sight
 * unseen in a code sample.
 *
 * Stand-ins below are chosen to match each face's character so the layout,
 * spacing and rhythm you see here will hold once you swap in the real files:
 *   - Space Grotesk  → stands in for Neue Machina (geometric, mechanical grotesk)
 *   - Manrope        → stands in for General Sans (humanist, rounded-terminal grotesk)
 *   - JetBrains Mono → the real spec, no substitution needed
 *
 * To swap in the licensed fonts, drop the .woff2 files in /public/fonts and
 * replace this block with next/font/local, keeping the same three CSS
 * variable names so nothing downstream has to change.
 */

const display = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "700"],
  variable: "--font-display",
  display: "swap",
});

const body = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "GearForgeLabs — Instruments for what you build next",
  description:
    "Aurora, ForgeView, ForgeLink, and SkyForge — four instruments, one standard of precision, from GearForgeLabs.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable} ${mono.variable}`}>
      <body className="bg-carbon-950 font-body text-fog-100 antialiased">
        <div className="grain" />
        {children}
      </body>
    </html>
  );
}
