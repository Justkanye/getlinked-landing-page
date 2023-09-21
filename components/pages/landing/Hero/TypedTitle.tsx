"use client";
import { useState } from "react";
import ReactTyped from "react-typed";

import InvertedCurvedUnderline from "@/components/icons/InvertedCurvedUnderline";

const TypedTitle = () => {
  const [showCursor, setShowCursor] = useState(true);

  return (
    <div className='flex justify-center md:justify-end'>
      <div className='flex flex-col items-end mr-12 mt-8'>
        <h2 className='font-clash-display font-bold text-2xl md:text-4xl italic'>
          Igniting{" "}
          <ReactTyped
            typeSpeed={40}
            showCursor={showCursor}
            // cursorChar={showCursor ? undefined : "@"}
            strings={["a Revolution in HR Innovation"]}
            onComplete={() => {
              setShowCursor(false);
            }}
          />
        </h2>
        <InvertedCurvedUnderline width={165} />
      </div>
    </div>
  );
};

export default TypedTitle;
