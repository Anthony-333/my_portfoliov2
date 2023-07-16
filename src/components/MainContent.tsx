import React from "react";
import LeftSide from "./LeftSide";
import RightSide from "./RightSide";

const mainContent = () => {
  return (
    <div className="w-full flex justify-between relative">
      <LeftSide />

      {/* main content */}
      <div className="bg-yellow-400 w-full">
        <p>test</p>
      </div>

      <RightSide />
    </div>
  );
};

export default mainContent;
