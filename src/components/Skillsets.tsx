import Image from "next/image";
import React from "react";

const Skillsets = () => {
  const Data = [
    {
      id: 1,
      name: "Typescript",
      alt: "Ts Image",
      links:
        "https://res.cloudinary.com/dzhvw7vxn/image/upload/v1689703564/ts_d3g1ye.png",
    },
    {
      id: 2,
      name: "Next.js",
      alt: "Next js Image",
      links:
        "https://res.cloudinary.com/dzhvw7vxn/image/upload/v1689699176/nextjs_nnvusq.png",
    },
    {
      id: 3,
      name: "React.js",
      alt: "React js Image",
      links:
        "https://res.cloudinary.com/dzhvw7vxn/image/upload/v1689703564/react_c1pjnq.png",
    },
    {
      id: 4,
      name: "Html",
      alt: "Html Image",
      links:
        "https://res.cloudinary.com/dzhvw7vxn/image/upload/v1689703564/html_vjasl1.png",
    },
    {
      id: 5,
      name: "Sass",
      alt: "Sass Image",
      links:
        "https://res.cloudinary.com/dzhvw7vxn/image/upload/v1689703564/sass_dtuhlw.png",
    },
    {
      id: 6,
      name: "Tailwind",
      alt: "tw Image",
      links:
        "https://res.cloudinary.com/dzhvw7vxn/image/upload/v1689703564/tw_c1abru.png",
    },
    {
      id: 7,
      name: "Sustand",
      alt: "sustand Image",
      links:
        "https://res.cloudinary.com/dzhvw7vxn/image/upload/v1689704672/zustand_aw170h.png",
    },
    {
      id: 8,
      name: "MongoDb",
      alt: "Mongo Image",
      links:
        "https://res.cloudinary.com/dzhvw7vxn/image/upload/v1689703564/monggodb_th9r2l.png",
    },
    {
      id: 9,
      name: "Appwrite",
      alt: "Appwrite Image",
      links:
        "https://res.cloudinary.com/dzhvw7vxn/image/upload/v1689703563/appwrite_drql55.png",
    },
    {
      id: 10,
      name: "Express",
      alt: "Express Image",
      links:
        "https://res.cloudinary.com/dzhvw7vxn/image/upload/v1689703563/express_luvubu.png",
    },
    {
      id: 11,
      name: "Node.js",
      alt: "Node Image",
      links:
        "https://res.cloudinary.com/dzhvw7vxn/image/upload/v1689703563/node_mauxue.png",
    },
    {
      id: 12,
      name: "Git",
      alt: "Git Image",
      links:
        "https://res.cloudinary.com/dzhvw7vxn/image/upload/v1689703563/git_mopks9.png",
    },
  ];

  return (
    <div className="mt-10 ">
      <h1
        className="font-semibold text-2xl text-transparent bg-clip-text bg-gradient-to-r 
      from-[#1991FF] to-[#FE4ACC]"
      >
        Language & Stacks
      </h1>

      <div className="flex flex-wrap justify-center mt-5">
        {Data.map((item) => (
          <div key={item.id} className="w-1/3 lg:w-1/6 p-2">
            <div className="flex justify-center">
              <Image
                alt={item.alt}
                src={item.links}
                height={70}
                width={70}
                className="text-align"
              />
            </div>

            <p className="text-white text-center">{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skillsets;
