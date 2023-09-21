import { Inter, Montserrat, Unica_One } from "next/font/google";
import LocalFont from "next/font/local";

// Google fonts
export const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});
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
export const madeTommyMediumOutline = LocalFont({
  src: "./MADE TOMMY Medium Outline_PERSONAL USE.otf",
  variable: "--font-made-tommy-medium-outline",
  display: "swap",
});
