"use client";

import React from "react";
import "../styles/navbar.css";
import arrowDown from "react-useanimations/lib/arrowDown";
import UseAnimations from "react-useanimations";
import { FaTwitter, FaGithub, FaLinkedinIn, FaArrowDown } from "react-icons/fa";
import { GrFacebookOption } from "react-icons/gr";

function Navbar() {
  const [checked, setChecked] = React.useState<boolean>(false);
  const [scrollOffset, setScrollOffset] = React.useState<number>(0);

  React.useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setScrollOffset(scrollPosition);
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`z-50 fixed duration-300 ease-in-out  ${
        scrollOffset >= 70 ? "bg-black" : "bg-transparent"
      }  w-full 
   p-6`}
    >
      <div className="flex items-center justify-between">
        {/* brand logo */}
        <div className="bg-red flex items-center">
          <p className="Brand_logo text-3xl sm:text-2xl text-white">AO</p>
        </div>

        {/* pages */}
        <div className="hidden lg:block text-white font-medium   ">
          <div className="flex space-x-5">
            <p
              className="cursor-pointer hover:text-transparent 
            text-sm hover:bg-clip-text hover:bg-gradient-to-r hover:from-[#1991FF]
            hover:to-[#FE4ACC] tracking-[.08em]"
            >
              home
            </p>
            <p
              className="cursor-pointer hover:text-transparent 
            text-sm hover:bg-clip-text hover:bg-gradient-to-r hover:from-[#1991FF]
            hover:to-[#FE4ACC] tracking-[.08em]"
            >
              about
            </p>
            <p
              className="cursor-pointer hover:text-transparent 
            text-sm hover:bg-clip-text hover:bg-gradient-to-r hover:from-[#1991FF]
            hover:to-[#FE4ACC] tracking-[.08em]"
            >
              projects
            </p>
            <p
              className="cursor-pointer hover:text-transparent 
            text-sm hover:bg-clip-text hover:bg-gradient-to-r hover:from-[#1991FF]
            hover:to-[#FE4ACC] tracking-[.08em]"
            >
              services
            </p>
          </div>
        </div>

        {/* hamburger */}
        {/* <div className="block lg:hidden">
          <UseAnimations
            reverse={checked}
            onClick={() => {
              setChecked(!checked);
            }}
            animation={menu2}
            size={40}
            strokeColor="white"
          />
        </div> */}
        {/* Hire me button */}

        <div
          className="block bg-transparent hover:bg-gradient-to-r 
      hover:from-[#1991FF] hover:to-[#FE4ACC] rounded-full p-[3px] cursor-pointer
       hover:shadow-slate-600 hover:shadow-md "
        >
          <div
            className=" bg-white px-3 py-2  rounded-full 
      "
          >
            <div className="flex">
              <button
                className="font-extrabold text-transparent 
        text-md bg-clip-text bg-gradient-to-r from-[#1991FF]
        to-[#FE4ACC]"
              >
                Hire me
              </button>

              <UseAnimations
                reverse={true}
                animation={arrowDown}
                size={25}
                strokeColor="#FE4ACC"
                className="-rotate-90"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="flex lg:hidden justify-center space-x-10 text-2xl mt-5">
        <GrFacebookOption className="text-white hover:text-[#1991FF]" />
        <FaTwitter className="text-white hover:text-[#7077EC]" />
        <FaGithub className="text-white hover:text-[#C05EDA]" />
        <FaLinkedinIn className="text-white hover:text-[#FE4ACC]" />
      </div>
    </div>
  );
}

export default Navbar;
