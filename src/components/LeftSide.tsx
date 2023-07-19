import React from "react";
import { FaTwitter, FaGithub, FaLinkedinIn } from "react-icons/fa";
import { GrFacebookOption } from "react-icons/gr";

const leftSide = () => {
  return (
    <div className="hidden w-[50px] fixed lg:inline-flex justify-center left-0 h-full ">
      <div className="text-2xl space-y-8 mt-40">
        <GrFacebookOption className="text-white hover:text-[#1991FF]" />
        <FaTwitter className="text-white hover:text-[#7077EC]" />
        <FaGithub className="text-white hover:text-[#C05EDA]" />
        <FaLinkedinIn className="text-white hover:text-[#FE4ACC]" />
      </div>
    </div>
  );
};

export default leftSide;
