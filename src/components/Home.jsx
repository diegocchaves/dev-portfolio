import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";
import Photo from "../assets/images/dev-bckgrd.svg"; // Ensure this path is correct

const Home = () => {
  return (
    <div
      style={{
        backgroundImage: `linear-gradient(rgba(10,25,47, -20.95), rgba(10,25,47, 20.05)), url(${Photo})`,
        backgroundBlendMode: "color-dodge",
        backgroundSize: "inherit",
        backgroundPosition: "inherit",
        backgroundRepeat: "no-repeat",
      }}
      name="home"
      className="w-full h-full py-16 bg-slate-100 dark:bg-black md:py-36 bg-opacity-95"
    >
      {/* Container */}
      <div className="flex md:justify-center md:items-center md:space-y-10">
        <div className="flex flex-col px-4 py-16 md:py-0 md:px-8 ">
          <h1 className=" text-7xl font-bold text-gray-800 dark:text-white md:text-[11rem]">
            Diego
          </h1>
          <h1 className=" text-7xl font-bold text-gray-800 dark:text-white md:text-[11rem] mb-2">
            Carvalho
          </h1>
          <span className="block py-4 text-sm text-gray-800 dark:text-white md:text-lg w-fit">
            I enjoy creating clean and efficient code that not only looks
            great,but functions flawlessly. <br />
            My goal is to collaborate with other like-minded individuals and
            businesses to create meaningful solutions <br />
            that make an impact in the world.
          </span>
          <Link
            to="projects"
            smooth={true}
            duration={500}
            className="cursor-pointer"
          >
            <button className="flex items-center px-6 py-3 my-5 text-black bg-blue-200 border border-gray-700 rounded-md shadow-md dark:text-white dark:bg-gray-900 group hover:bg-gray-900 hover:border-gray-50 hover: dark:border-gray-700 hover:text-white shadow-slate-400">
              View Work
              <span className="duration-300 group-hover:rotate-90">
                <HiArrowNarrowRight className="ml-3" />
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
