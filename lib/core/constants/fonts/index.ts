import { Montserrat, Unica_One } from "next/font/google";
import LocalFont from "next/font/local";

// Google fonts
export const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});
export const unicaOne = Unica_One({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-unica-one",
});

// Local fonts
export const clashDisplay = LocalFont({
  src: "./ClashDisplay-Variable.ttf",
  variable: "--font-clash-display",
  display: "swap",
});
