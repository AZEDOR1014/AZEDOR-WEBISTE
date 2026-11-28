import type { Config } from "tailwindcss";

/**
 * AZEDOR design system — single source of truth.
 *
 * Identity: black (#101211) / white / lime (#C3F75D). No other brand hue.
 * Per-stage / per-industry accents are kept as main + dark + tint trios:
 *   - `main`  = fills, dots and large shapes (never small text on light).
 *   - `dark`  = text, icons and numbers on light backgrounds (all pass AA).
 *   - `tint`  = soft chip / panel backgrounds.
 * Lime follows the same rule: `lime` is for fills and for text ONLY on
 * dark backgrounds; `limeDeep` (#3F6212, 7.08:1 on white) is lime text
 * on light backgrounds. `limeDark` is a hover fill, never body text.
 *
 * Type scale (Manrope, kept as-is):
 *   H1  text-4xl leading-tight sm:text-5xl   (home hero: sm:text-6xl lg:text-[72px] leading-[1.12])
 *   H2  text-3xl leading-snug sm:text-4xl lg:text-[44px]  (SectionHead)
 *   H3  text-2xl font-bold leading-snug     (sub-sections: text-xl is too small for an H2)
 *   Card title  text-xl font-bold   Body  text-base / text-lg leading-relaxed
 *   Eyebrow  text-xs font-bold uppercase tracking-eyebrow (0.2em)
 *   Muted body on light: text-muted (#626B65, 5.51:1 on white — passes).
 *   Muted body on dark:  text-mutedDark (#ADB7AD, 9.09:1 on ink — passes).
 *   Never use text-mutedDark on a light background (2.07:1) or
 *   text-lime / text-limeDark on a light background (1.25:1 / 1.57:1).
 *
 * Spacing: page sections py-20 (hero py-16 lg:py-20), container max-w-shell
 * (1280px) with px-4 sm:px-6. Card grid gap-4, section grid gap-10.
 * Radii: card 16px (rounded-card), button 10px (rounded-btn), pills full.
 * Shadows: cards shadow-sm, hover lift shadow-lg, dropdowns/menus shadow-xl.
 * Motion: CSS transitions 200ms ease (globals.css); image zoom 300ms;
 * bar/panel animation 500ms; scroll reveal 600ms ease-out (Animate.tsx).
 * Icon sizes (lucide `size`): 14 inline, 16 default, 18 nav/chevron,
 * 22 card tile, 36 hero/diagram only.
 *
 * Shared component classes live in app/globals.css (@layer components):
 * .btn / .btn-primary / .btn-secondary / .btn-secondary-light / .btn-sm /
 * .btn-lg, .card, .eyebrow, .input, .section, .section-hero.
 * New code uses those; page files still carry inline classes and are
 * migrated to them a few at a time, never in a bulk restyle.
 */
const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#101211",
        deep: "#191D1A",
        lime: "#C3F75D",
        limeDark: "#A8E03A",
        limeDeep: "#3F6212",
        limeMid: "#65A30D",
        brandAmber: "#F59E0B",
        amberDark: "#B45309",
        brandRose: "#FB7185",
        roseDark: "#BE123C",
        brandTeal: "#14B8A6",
        tealDark: "#0F766E",
        brandSky: "#0EA5E9",
        skyDark: "#0369A1",
        brandViolet: "#8B7CF6",
        violetDark: "#5B21B6",
        brandEmerald: "#10B981",
        emeraldDark: "#047857",
        tintLime: "#F4FBEA",
        tintAmber: "#FFF8E6",
        tintTeal: "#E6F7F4",
        tintRose: "#FFF0F3",
        tintSky: "#E8F4FD",
        tintViolet: "#EFEDFD",
        paper: "#F5F7F4",
        muted: "#626B65",
        mutedDark: "#ADB7AD",
        line: "#E1E6E0",
        lineDark: "#303831",
      },
      fontFamily: {
        sans: ["var(--font-manrope)", "Manrope", "system-ui", "sans-serif"],
      },
      letterSpacing: { eyebrow: "0.2em" },
      maxWidth: { shell: "1280px" },
      borderRadius: { card: "16px", btn: "10px" },
    },
  },
  plugins: [],
};
export default config;
