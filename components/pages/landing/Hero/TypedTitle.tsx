"use client";

import InvertedCurvedUnderline from "@/components/icons/InvertedCurvedUnderline";
import MotionContainer from "@/components/layouts/framer-motion/MotionContainer";
import Typewriter from "@/components/shared/Typewriter";
import { fadeIn } from "@/lib/core/helpers/motion";

const TypedTitle = () => {
  return (
    <div className='flex justify-center md:justify-end'>
      <div className='flex flex-col items-end md:mr-12 mt-8'>
        <h2 className='font-clash-display font-bold text-lg sm:text-2xl md:text-4xl italic'>
          Igniting <Typewriter strings={["a Revolution in HR Innovation"]} />
        </h2>
        <MotionContainer variants={fadeIn("left", "spring", 1.5, 1.5)}>
          <InvertedCurvedUnderline className='max-sm:w-28 max-md:w-40' />
        </MotionContainer>
      </div>
    </div>
  );
};

export default TypedTitle;
