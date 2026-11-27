import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#101211",
        deep: "#191D1A",
        lime: "#C3F75D",
        limeDark: "#A8E03A",
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
        warm: "#FAF7F2",
        paper: "#F5F7F4",
        muted: "#626B65",
        mutedDark: "#ADB7AD",
        line: "#E1E6E0",
        lineDark: "#303831",
      },
      fontFamily: {
        sans: ["var(--font-manrope)", "Manrope", "system-ui", "sans-serif"],
      },
      maxWidth: { shell: "1280px" },
      borderRadius: { card: "16px", btn: "10px" },
    },
  },
  plugins: [],
};
export default config;
