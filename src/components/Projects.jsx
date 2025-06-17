import React from "react";
import { GrStatusGoodSmall } from "react-icons/gr";
import BeachSpaceImage from "../assets/images/bs-mockup.svg";
import CuidandoDoMoneyImage from "../assets/images/cm-mockup.svg";
import MicroActionsImage from "../assets/images/ma-mockup.svg";
import MicroActionsBlog from "../assets/images/ma-blog-mockup.svg";
import Portfolio from "../assets/images/dc-portfolio-mockup.svg";

const Projects = () => {
  const works = [
    {
      label: "Diego Carvalho - Portfolio",
      url: "https://dev-portfolio-1rt8.vercel.app/",
      href: "https://github.com/diegocchaves/dev-portfolio",
      image: Portfolio,
      Date: "Wed Jun 11 2025 ",
      value: "Completed",
      color: "text-green-300",
    },
    {
      label: "Micro Actions Blog",
      url: "https://www.microactions.blog",
      href: "https://github.com/diegocchaves/micro-actions-blog",
      image: MicroActionsBlog,
      Date: "Mon May 8 2023 ",
      value: "In Progress",
      color: "text-yellow-500",
    },
    {
      label: "Micro Actions",
      url: "https://www.microactions.co",
      href: "https://github.com/diegocchaves/micro-actions",
      image: MicroActionsImage,
      Date: "Mon May 8 2023 ",
      value: "In Progress",
      color: "text-yellow-500",
    },
    {
      label: "Cuidando do Money",
      url: "https://cuidandodomoney.vercel.app",
      href: "https://github.com/diegocchaves/cuidando-do-money",
      image: CuidandoDoMoneyImage,
      Date: "Mon May 8 2023 ",
      value: "Completed",
      color: "text-green-300",
    },
    {
      label: "Beach Space",
      url: "https://beach-space.vercel.app/login",
      href: "https://github.com/diegocchaves/beach-space",
      image: BeachSpaceImage,
      Date: "Mon May 8 2023 ",
      value: "Completed",
      color: "text-green-300",
    },
  ];

  const [visibleCount, setVisibleCount] = React.useState(3);

  const handleLoadMore = () => {
    setVisibleCount(works.length);
  };

  return (
    <div
      name="projects"
      className="z-0 py-16 text-[#002230] bg-[#F5F9FA] dark:text-white dark:bg-black md:py-36"
    >
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="flex flex-col items-center pb-8 ">
          <p className="inline text-lg font-bold md:text-xl">[ Projects ]</p>
          <p className="py-4">// Check out some of my recent projects </p>
        </div>
        {/* Container */}
        <nav className="grid w-full h-full grid-cols-1 gap-4 md:p-4 md:flex md:flex-col">
          {works.slice(0, visibleCount).map((work, index) => (
            <div
              key={index}
              className="relative flex items-center justify-start w-full h-full py-6 bg-white border border-gray-700 rounded-md dark:bg-transparent md:py-3 md:px-3 "
            >
              <div className="absolute items-center justify-center w-full h-full p-2 bg-white border border-gray-700 rounded-md dark:bg-transparent dark:bg-gray-900 md:relative md:p-0 insert-0 md:flex md:w-80 md:h-80">
                {/* Background Image */}
                <img
                  src={work.image}
                  alt={work.label}
                  className="items-center justify-center w-full h-full transition duration-300 ease-in-out rounded opacity-3 md:opacity-100 md:p-2 md:m-2 md:flex grayscale hover:grayscale-0"
                  style={{ objectFit: "cover" }}
                  loading="lazy"
                  onError={(e) => {
                    e.target.onerror = null; // Prevents infinite loop
                    e.target.src = "https://via.placeholder.com/150"; // Fallback image
                  }}
                />
              </div>
              <div className="z-0 flex flex-col mx-10 md:grid md:grid-cols-1 md:gap-4 md:items-center md:justify-center bg-opacity-20">
                <div className="flex flex-col justify-start gap-5 ">
                  <p className="text-lg font-bold md:text-xl">{work.label}</p>
                  <div className="flex flex-col">
                    <span className="mt-4 text-sm font-medium text-gray-500 md:text-base ">
                      Visit
                    </span>
                    <a
                      href={work.url}
                      className="md:text-base text-sm font-medium text-black dark:text-white transition md:hover:text-[#298E9E] dark:hover:text-green-300 hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {work.url.replace(/https?:\/\//, "")}
                    </a>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm font-medium text-gray-500 md:text-base ">
                      Source
                    </span>
                    <a
                      href={work.href}
                      className="md:text-base text-sm font-medium text-black dark:text-white transition md:hover:text-[#298E9E] dark:hover:text-green-300 hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {" "}
                      {work.href.replace(/https?:\/\//, "")}
                    </a>
                  </div>
                  <div className="flex flex-row items-center justify-start gap-14 ">
                    <div className="flex flex-col gap-1 text-black dark:text-white">
                      <span className="text-sm font-medium text-gray-500 md:text-base ">
                        Status:
                      </span>
                      <div className="flex flex-row items-center gap-2">
                        <span className={`flex items-center ${work.color}`}>
                          <GrStatusGoodSmall size={10} />
                        </span>
                        <span className="text-sm md:text-base">
                          {work.value}
                        </span>
                      </div>
                    </div>
                    <div className="flex flex-col gap-1 text-black dark:text-white">
                      <span className="text-sm font-medium text-gray-500 md:text-base ">
                        Created:
                      </span>
                      <span className="text-sm md:text-base">{work.Date}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </nav>
        {visibleCount < works.length ? (
          <div className="flex items-center justify-center mt-4">
            <button
              onClick={handleLoadMore}
              className="px-4 py-2 text-sm text-black underline transition-colors duration-300 dark:text-white underline-offset-4 md:hover:text-[#298E9E] dark:hover:text-green-300"
            >
              Load More
            </button>
          </div>
        ) : (
          <div className="flex items-center justify-center mt-4">
            <button
              onClick={() => setVisibleCount(3)}
              className="px-4 py-2 text-sm text-black underline transition-colors duration-300 dark:text-white underline-offset-4 hover:text-[#298E9E] dark:hover:text-green-300"
            >
              Show Less
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Projects;
