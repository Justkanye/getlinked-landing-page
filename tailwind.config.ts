import type { Config } from "tailwindcss";
import daisyui from "daisyui";
import daisyuiThemes from "daisyui/src/theming/themes";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": `
          radial-gradient(at 67% 67%, hsla(268,83%,25%,0.7) 0px, transparent 20%),
          radial-gradient(at 22% 26%, hsla(270,87%,28%,0.7) 0px, transparent 20%)
        `,
        "gradient-radial-single": `
          radial-gradient(at 67% 67%, hsla(268,83%,25%,0.7) 0px, transparent 20%)
        `,
        "gradient-radial-center": `
          radial-gradient(at 50% 50%, hsla(268,83%,25%,0.7) 0px, transparent 35%)
        `,
        "primary-gradient": "var(--primary-gradient)",
      },
      colors: {
        "primary-bg": "var(--primary-bg)",
        "903aff": "#903aff",
        primary: "var(--primary)",
        border: "rgba(255, 255, 255, 0.18)",
        "footer-bg": "#100B20",
      },
      fontFamily: {
        inter: ["var(--font-inter)"],
        montserrat: ["var(--font-montserrat)"],
        "unica-one": ["var(--font-unica-one)"],
        "clash-display": ["var(--font-clash-display)"],
        "made-tommy-medium-outline": ["var(--font-made-tommy-medium-outline)"],
      },
      boxShadow: {
        "custom-shadow": "0px 4px 4px 0px rgba(0,0,0,0.25)",
      },
      animation: {
        bg: "bg-animation 2s ease infinite;",
        "my-pulse": "my-pulse 650ms ease-in-out forwards;",
      },
      keyframes: {
        "bg-animation": {
          "0%,100%": {
            "background-position": "0% 50%",
          },
          "50%": {
            "background-position": "100% 50%",
          },
        },
        "my-pulse": {
          "0%,85%": {
            transform: "scale(0.985);",
          },
          "50%": {
            transform: "scale(1.025);",
          },
          "100%": {
            transform: "scale(1);",
          },
        },
      },
    },
  },
  plugins: [daisyui],
  darkMode: "class",
  daisyui: {
    themes: [
      {
        dark: {
          ...daisyuiThemes["[data-theme=dark]"],
          primary: "#d434fe",
          secondary: "var(--primary-bg)",
          accent: "#903aff",
        },
      },
    ],
  },
};
export default config;
