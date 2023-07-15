"use client";

import React from "react";
import "../styles/navbar.css";
import menu2 from "react-useanimations/lib/menu2";
import arrowDown from "react-useanimations/lib/arrowDown";
import UseAnimations from "react-useanimations";

function Navbar() {
  const [checked, setChecked] = React.useState(false);
  return (
    <div className="bg-transparent w-full flex items-center justify-between p-6">
      {/* brand logo */}
      <div className="bg-red">
        <p className="Brand_logo text-2xl">AO</p>
      </div>

      {/* pages */}
      <div className="hidden lg:block text-white font-semibold text-lg  ">
        <div className="flex space-x-5">
          <p
            className="cursor-pointer hover:text-transparent 
            text-lg hover:bg-clip-text hover:bg-gradient-to-r hover:from-[#1991FF]
            hover:to-[#FE4ACC] tracking-[.08em]"
          >
            home
          </p>
          <p
            className="cursor-pointer hover:text-transparent 
            text-lg hover:bg-clip-text hover:bg-gradient-to-r hover:from-[#1991FF]
            hover:to-[#FE4ACC] tracking-[.08em]"
          >
            about
          </p>
          <p
            className="cursor-pointer hover:text-transparent 
            text-lg hover:bg-clip-text hover:bg-gradient-to-r hover:from-[#1991FF]
            hover:to-[#FE4ACC] tracking-[.08em]"
          >
            projects
          </p>
          <p
            className="cursor-pointer hover:text-transparent 
            text-lg hover:bg-clip-text hover:bg-gradient-to-r hover:from-[#1991FF]
            hover:to-[#FE4ACC] tracking-[.08em]"
          >
            services
          </p>
        </div>
      </div>

      {/* hamburger */}
      <div className="block lg:hidden">
        <UseAnimations
          reverse={checked}
          onClick={() => {
            setChecked(!checked);
          }}
          animation={menu2}
          size={40}
          strokeColor="white"
        />
      </div>
      {/* Hire me button */}

      <div
        className="hidden lg:block bg-transparent hover:bg-gradient-to-r 
      hover:from-[#1991FF] hover:to-[#FE4ACC] rounded-full p-1 cursor-pointer
       hover:shadow-slate-600 hover:shadow-md "
      >
        <div
          className=" bg-white px-3 py-2 rounded-full 
      "
        >
          <div className="flex">
            <button
              className="font-extrabold text-transparent 
        text-lg bg-clip-text bg-gradient-to-r from-[#1991FF]
        to-[#FE4ACC]"
            >
              Hire me
            </button>

            <UseAnimations
              reverse={true}
              animation={arrowDown}
              size={30}
              strokeColor="#FE4ACC"
              className="-rotate-90"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
