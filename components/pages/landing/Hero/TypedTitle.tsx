"use client";
import { useState } from "react";
import ReactTyped from "react-typed";

import InvertedCurvedUnderline from "@/components/icons/InvertedCurvedUnderline";

const TypedTitle = () => {
  const [showCursor, setShowCursor] = useState(false);

  return (
    <div className='flex justify-center md:justify-end'>
      <div className='flex flex-col items-end md:mr-12 mt-8'>
        <h2 className='font-clash-display font-bold text-lg sm:text-2xl md:text-4xl italic'>
          Igniting{" "}
          <ReactTyped
            typeSpeed={40}
            showCursor={showCursor}
            // cursorChar={showCursor ? undefined : "@"}
            strings={["a Revolution in HR Innovation"]}
            onComplete={() => setShowCursor(false)}
            onStart={() => setShowCursor(true)}
          />
        </h2>
        <InvertedCurvedUnderline className='max-sm:w-28 max-md:w-40' />
      </div>
    </div>
  );
};

export default TypedTitle;
