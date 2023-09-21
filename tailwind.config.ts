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
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "primary-gradient": "var(--primary-gradient)",
      },
      colors: {
        "primary-bg": "var(--primary-bg)",
        "903aff": "#903aff",
        primary: "var(--primary)",
        border: "rgba(255, 255, 255, 0.18)",
        accent: "#fe34b9",
      },
      fontFamily: {
        inter: ["var(--font-inter)"],
        montserrat: ["var(--font-montserrat)"],
        "unica-one": ["var(--font-unica-one)"],
        "clash-display": ["var(--font-clash-display)"],
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
          primary: "var(--primary)",
          secondary: "var(--primary-bg)",
          accent: "var(--accent)",
        },
      },
    ],
  },
};
export default config;
