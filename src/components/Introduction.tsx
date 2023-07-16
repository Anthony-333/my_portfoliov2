"use client";

import React from "react";
import "@/src/styles/otherStyles.css";
import self from "@/src/images/self.png";
import Image from "next/image";
import UseAnimations from "react-useanimations";
import arrowDown from "react-useanimations/lib/arrowDown";

const Introduction = () => {
  const text1 = "Full Stack Dev";
  const text2 = "3D Animator";
  return (
    <div className="flex  lg:justify-evenly items-center">
      <div>
        <div className="flex">
          <p className="animate-rubberBand text-white flex-wrap font-semibold text-2xl sm:text-5xl">
            Hi,
          </p>
        </div>
        <div>
          <p className="text-white font-semibold text-2xl sm:text-5xl">
            I&apos;m Anthony
          </p>
        </div>

        <div className="flex">
          {text1.split("").map((letter, index) => (
            <p
              key={index}
              className="animate-rubberBand  flex-wrap font-semibold text-2xl sm:text-5xl
            text-transparent  bg-clip-text bg-gradient-to-r from-[#1991FF] to-[#FE4ACC]"
            >
              {letter === " " ? "\u00A0" : letter}
            </p>
          ))}
        </div>

        <div className="flex items-center">
          <p className="text-white flex-wrap font-semibold text-2xl sm:text-5xl mr-4">
            And
          </p>

          <div className="flex">
            {text2.split("").map((letter, index) => (
              <p
                key={index}
                className="animate-rubberBand  flex-wrap font-semibold text-2xl sm:text-5xl
            text-transparent  bg-clip-text bg-gradient-to-r from-[#1991FF] to-[#FE4ACC]"
              >
                {letter === " " ? "\u00A0" : letter}
              </p>
            ))}
          </div>
        </div>

        <div className="flex mt-4">
          <div
            className="block bg-transparent hover:bg-gradient-to-r 
      hover:from-[#1991FF] hover:to-[#FE4ACC] rounded-full p-[2px] cursor-pointer
       hover:shadow-slate-600 hover:shadow-md "
          >
            <div
              className=" bg-white px-3 py-1  rounded-full 
      "
            >
              <div className="flex">
                <button
                  className="font-extrabold text-transparent 
        text-sm bg-clip-text bg-gradient-to-r from-[#1991FF]
        to-[#FE4ACC]"
                >
                  Resume
                </button>

                <UseAnimations
                  reverse={true}
                  animation={arrowDown}
                  size={25}
                  strokeColor="#FE4ACC"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="hidden lg:block">
        <Image alt="dev Image" src={self} width={600} />
      </div>
    </div>
  );
};

export default Introduction;
