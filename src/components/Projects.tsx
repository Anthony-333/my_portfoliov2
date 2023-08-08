"use client";

import Image from "next/image";
import React from "react";

const Projects = () => {
  const Data = [
    {
      id: 1,
      image:
        "https://res.cloudinary.com/dzhvw7vxn/image/upload/v1689344886/taskkify_logo_rfamfn.png",
      alt: "Taskkify Logo",
      title: "Taskkify",
      description: "A todo task webapp built to boost a user productivity.",
      Link: "https://taskkify.vercel.app/",
      githubLinks: "https://github.com/Anthony-333/taskkify.git",
      platform: "Browser",
      techUsed: "React Native, axios, Recoil, Context API, Coingecko API",
    },
    {
      id: 2,
      image:
        "https://res.cloudinary.com/dzhvw7vxn/image/upload/v1691482060/cryptchart_tcclcv.png",
      alt: "Cryptchart Logo",
      title: "Cryptchart",
      description:
        "A cryptocurrency price monitoring app help a user to check the realtime price of a digital coin from coingecko.",
      Link: "https://play.google.com/store/apps/details?id=com.tuneng333.Cryptchart&hl=en&gl=US",
      githubLinks: "https://github.com/Anthony-333/Cryptchart_android",
      platform: "Android",
      techUsed: "Next.js, Tailwindcss, zustand, Appwrite, openAI",
    },
  ];

  const scrollContainerRef = React.useRef<HTMLDivElement | null>(null);

  React.useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (scrollContainerRef.current) {
        e.preventDefault(); // prevent vertical scroll
        scrollContainerRef.current.scrollLeft += e.deltaY; // modify horizontal scroll
      }
    };

    const el = scrollContainerRef.current;
    if (el) {
      // Check if el is not null
      el.addEventListener("wheel", handleWheel);

      // Cleanup listener on component unmount
      return () => {
        el.removeEventListener("wheel", handleWheel);
      };
    }
  }, []);

  return (
    <div className="mt-10 ">
      <h1
        className="font-semibold text-2xl text-transparent bg-clip-text bg-gradient-to-r 
      from-[#1991FF] to-[#FE4ACC]"
      >
        My Projects
      </h1>

      <div
        className="flex overflow-x-scroll mt-5 space-x-10 "
        ref={scrollContainerRef}
      >
        {Data.map((item) => (
          <div
            key={item.id}
            className="w-80 bg-gray-200 rounded-lg space-y-2 p-5"
          >
            <div className="flex justify-center">
              <Image
                alt={item.alt}
                src={item.image}
                height={250}
                width={250}
                className="text-align"
              />
            </div>

            <p
              className="font-extrabold text-center text-transparent 
        text-md bg-clip-text bg-gradient-to-r from-[#1991FF]
        to-[#FE4ACC]"
            >
              {item.title}
            </p>

            <div>
              <p
                className="font-extrabold text-transparent 
        text-md bg-clip-text bg-gradient-to-r from-[#1991FF]
        to-[#FE4ACC]"
              >
                Description
              </p>

              <p className="text-left text-slate-600">{item.description}</p>
            </div>

            <div>
              <p
                className="font-extrabold text-transparent 
        text-md bg-clip-text bg-gradient-to-r from-[#1991FF]
        to-[#FE4ACC]"
              >
                View Demo
              </p>

              <a
                href={item.Link}
                target="_blank"
                className="text-left text-blue-400 cursor-pointer flex-wrap"
              >
                <span className="block truncate w-56">{item.Link}</span>
              </a>
            </div>

            <div>
              <p
                className="font-extrabold text-transparent 
        text-md bg-clip-text bg-gradient-to-r from-[#1991FF]
        to-[#FE4ACC]"
              >
                Github Repo
              </p>

              <a
                href={item.githubLinks}
                target="_blank"
                className="text-left text-blue-400 cursor-pointer"
              >
                {item.githubLinks}
              </a>
            </div>

            <div>
              <p
                className="font-extrabold text-transparent 
        text-md bg-clip-text bg-gradient-to-r from-[#1991FF]
        to-[#FE4ACC]"
              >
                Platform
              </p>

              <p className="text-left text-slate-600">{item.platform}</p>
            </div>

            <div>
              <p
                className="font-extrabold text-transparent 
        text-md bg-clip-text bg-gradient-to-r from-[#1991FF]
        to-[#FE4ACC]"
              >
                Tech Stack
              </p>

              <p className="text-left text-slate-600">{item.techUsed}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
