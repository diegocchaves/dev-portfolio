import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";
import Photo from "../assets/images/dev-bckgrd.jpg"; // Ensure this path is correct

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
      className="w-full h-full py-16 bg-[#E9F2F4] dark:bg-black md:py-36 bg-opacity-95 dark:bg-opacity-40"
    >
      {/* Container */}
      <div className="flex md:justify-center md:items-center md:space-y-10">
        <div className="flex flex-col px-4 py-16 md:py-0 md:px-8 ">
          <h1 className=" text-7xl font-bold text-[#002230] dark:text-white md:text-[11rem]">
            Diego
          </h1>
          <h1 className=" text-7xl font-bold text-[#002230] dark:text-white md:text-[11rem] mb-2">
            Carvalho
          </h1>
          <span className="block py-4 text-sm text-[#002230] dark:text-white md:text-lg w-fit">
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
            <button className="flex items-center px-6 py-3 my-5 text-white bg-[#298E9E] border border-gray-600 rounded-md shadow-sm dark:text-[#002230] dark:bg-white dark:hover:bg-slate-200 group hover:bg-[#033347] hover:border-gray-50 hover: dark:border-gray-700 hover:text-white dark:shadow-none shadow-slate-400">
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
