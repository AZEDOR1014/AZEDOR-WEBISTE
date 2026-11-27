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
