import React from "react";
import { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
import HTMLImg from "../assets/images/html.png";
import CSSImg from "../assets/images/css.png";
import JavaScriptImg from "../assets/images/javascript.png";
import ReactImg from "../assets/images/react.png";
import NodeImg from "../assets/images/node.png";
import GitHubImg from "../assets/images/github.png";
import TailwinImg from "../assets/images/tailwind.png";
import MongoImg from "../assets/images/mongo.png";
import TypeScriptImg from "../assets/images/typescript.svg";
import NextImg from "../assets/images/nextjs.png";

const Skills = () => {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize(); // Set initial state
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const skills = [
    { src: HTMLImg, alt: "HTML" },
    { src: CSSImg, alt: "CSS" },
    { src: JavaScriptImg, alt: "JavaScript" },
    { src: ReactImg, alt: "React" },
    { src: NodeImg, alt: "Node.js" },
    { src: MongoImg, alt: "MongoDB" },
    { src: TailwinImg, alt: "Tailwind CSS" },
    { src: GitHubImg, alt: "GitHub" },
    { src: TypeScriptImg, alt: "TypeScript" },
    { src: NextImg, alt: "Next.js" },
  ];
  return (
    <div
      name="skills"
      className="flex items-center justify-center py-16 text-[#002230] bg-[#E9F2F4] dark:text-gray-300 dark:bg-black md:py-36"
    >
      {/* Contanier */}
      <div className="max-w-[1000px] mx-auto px-4 flex flex-col justify-center w-full h-full">
        <div className="flex flex-col items-center ">
          <p className="inline text-lg font-bold md:text-xl">[ Skills ]</p>
          <p className="py-4 text-[15px] md:text-lg">
            // These are the technologies I've working with
          </p>
        </div>
        {isMobile ? (
          <div className="grid grid-cols-3 gap-8 mt-6 text-center">
            {skills.map((skill, index) => (
              <div key={index}>
                <img
                  className={`w-16 mx-auto ${skill.className} || ""}`}
                  src={skill.src}
                  alt={skill.alt}
                />
              </div>
            ))}
          </div>
        ) : (
          <Marquee
            className="w-full h-full mt-20"
            play={true}
            speed={50}
            gradient={false}
          >
            <div className="flex flex-row w-full space-x-8 text-center ">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className={`p-4 bg-[#033347] rounded-lg dark:bg-transparent${
                    index === 0
                      ? " ml-8"
                      : index === skills.length - 1
                      ? " mr-8"
                      : ""
                  }`}
                >
                  <img
                    className={`w-28 md:w-40 mx-8 my-4 ${
                      skill.className || ""
                    }`}
                    src={skill.src}
                    alt={skill.alt}
                  />
                  <p className="text-gray-300">{skill.alt}</p>
                </div>
              ))}
            </div>
          </Marquee>
        )}
      </div>
    </div>
  );
};

export default Skills;
