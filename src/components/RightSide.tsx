"use client";

import React from "react";
import UseAnimations from "react-useanimations";
import arrowDown from "react-useanimations/lib/arrowDown";

const rightSide = () => {
  return (
    <div className="w-[30px] lg:w-[100px] fixed right-0  h-full flex items-center">
      <div className="h-full w-full flex items-start justify-center lg:justify-end">
        <p>t</p>

        <div className="fixed bottom-0 text-align">
          <p
            className="rotate-90 mb-4 font-extrabold text-transparent 
        text-md bg-clip-text bg-gradient-to-r from-[#1991FF]
        to-[#FE4ACC]"
          >
            Scroll
          </p>
          <UseAnimations
            reverse={true}
            animation={arrowDown}
            size={40}
            strokeColor="#FE4ACC"
            className="ml-1"
          />
        </div>
      </div>
    </div>
  );
};

export default rightSide;
