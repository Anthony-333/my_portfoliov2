"use client";

import React from "react";
import UseAnimations from "react-useanimations";
import arrowDown from "react-useanimations/lib/arrowDown";

const rightSide = () => {
  return (
    <div className="w-[50px] fixed right-0 bg-blue-500 h-full flex items-center">
      <div className="h-full w-full flex items-start justify-center">
        <p>t</p>

        <div className="fixed bottom-0">
          <p className="rotate-90 mb-4 text-white">Scroll</p>
          <UseAnimations
            reverse={true}
            animation={arrowDown}
            size={50}
            strokeColor="#FE4ACC"
          />
        </div>
      </div>
    </div>
  );
};

export default rightSide;
