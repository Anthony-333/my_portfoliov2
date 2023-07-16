import React from "react";
import LeftSide from "./LeftSide";
import RightSide from "./RightSide";
import Introduction from "./Introduction";

const mainContent = () => {
  return (
    <div className="w-full flex justify-between relative">
      <LeftSide />

      {/* main content */}
      <div className="w-full px-8 lg:px-20">
          <Introduction />
      </div>

      <RightSide />
    </div>
  );
};

export default mainContent;
