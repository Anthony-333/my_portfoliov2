import React from "react";
import LeftSide from "./LeftSide";
import RightSide from "./RightSide";
import Introduction from "./Introduction";
import Skillsets from "./Skillsets";
import Projects from "./Projects";

const mainContent = () => {
  return (
    <div className="w-full h-full flex justify-between relative pt-32">
      <LeftSide />

      {/* main content */}
      <div className="w-full px-8 lg:px-20">
        <Introduction />

        <Skillsets />

        <Projects />
      </div>

      <RightSide />
    </div>
  );
};

export default mainContent;
