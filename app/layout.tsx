import "./globals.css";

import type { Metadata } from "next";

import { cn } from "@/lib/core/utils";
import Navbar from "@/components/layouts/Navbar";
import {
  clashDisplay,
  inter,
  madeTommyMediumOutline,
  montserrat,
  unicaOne,
} from "@/lib/core/constants/fonts";
import { TailwindIndicator } from "@/components/layouts/tailwind-indicator";
import MotionProvider from "@/components/layouts/framer-motion/MotionProvider";

export const metadata: Metadata = {
  title: "GetLinked",
  description: "Where dreams meet opportunities.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      data-theme='dark'
      lang='en'
      className='dark bg-primary-bg scroll-smooth'
    >
      <body
        className={cn(
          clashDisplay.variable,
          madeTommyMediumOutline.variable,
          montserrat.variable,
          unicaOne.variable,
          inter.variable,
          montserrat.className,
          "text-white overflow-x-hidden"
        )}
      >
        <MotionProvider>
          <Navbar />
          {children}
          <TailwindIndicator />
        </MotionProvider>
      </body>
    </html>
  );
}
