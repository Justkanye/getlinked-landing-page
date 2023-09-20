import { Montserrat } from "next/font/google";
import LocalFont from "next/font/local";

// Google fonts
export const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

// Local fonts
export const clashDisplay = LocalFont({
  src: "./ClashDisplay-Variable.ttf",
  variable: "--font-clash-display",
  display: "swap",
});
