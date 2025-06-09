import { GrStatusGoodSmall } from "react-icons/gr";
import { FaCodePullRequest } from "react-icons/fa6";
import MicroActionsImage from "../assets/images/ma-mockup.svg";
import MicroActionsBlog from "../assets/images/ma-blog-mockup.svg";

const Contributions = () => {
  const contributions = [
    {
      label: "Dev Resources",
      href: "https://github.com/marcelscruz/dev-resources",
      url: "https://devresourc.es/",
      image: MicroActionsBlog,
      Date: "Mon May 8 2023 ",
      value: "In Progress",
      color: "text-yellow-500",
    },
    {
      label: "Public APIs",
      href: "https://github.com/marcelscruz/public-apis",
      url: "https://publicapis.dev/",
      image: MicroActionsImage,
      Date: "Mon May 8 2023 ",
      value: "In Progress",
      color: "text-yellow-500",
    },
  ];

  return (
    <div
      name="projects"
      className="pt-20 text-gray-300 bg-black md:pt-40 insert-0"
    >
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="flex flex-col items-center ">
          <p className="inline text-lg font-bold md:text-xl">
            [ Contributions ]
          </p>
          <p className="py-4">// Take a look on my recent contributions </p>
        </div>
        {/* Container */}
        <div className="flex flex-col items-start justify-start w-full h-full gap-4 p-4 mb-8 md:mb-0">
          <p className="text-sm text-gray-500">
            Contributions are open source projects that I have contributed to,
            including pull requests, issues, and discussions. They showcase my
            involvement in the developer community.
          </p>
        </div>
        <div className="flex flex-row items-center w-full gap-1 p-4 mb-8 md:mb-0">
          <p className="mr-2 whitespace-nowrap">June 2025</p>
          <div className="flex-1 h-[1px] bg-gray-700 rounded-sm"></div>
        </div>
        <nav className="grid w-full h-full grid-cols-2 md:flex md:flex-row">
          {contributions.map((contribution, index) => (
            <div
              key={index}
              className="flex items-center justify-start md:py-3 md:px-6 "
            >
              <div className="flex flex-row items-start justify-start p-4 transition-shadow bg-gray-900 rounded-lg shadow-md ">
                <div className="flex flex-row items-center w-full h-full p-4 mb-8 md:mb-0">
                  <div className="flex-1 h-[2px] bg-gray-700 rounded-sm rotate-90"></div>
                  <FaCodePullRequest
                    className="mr-2 text-green-500 whitespace-nowrap"
                    size={35}
                  />
                </div>
                <div className="flex flex-col items-start justify-start w-full h-full gap-3 p-4 mb-8 md:mb-0">
                  <a
                    href={contribution.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg font-bold text-blue-500 hover:underline"
                  >
                    {contribution.label}
                  </a>
                  <a
                    href={contribution.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-gray-500 hover:underline"
                  >
                    {contribution.url}
                  </a>

                  <div className="flex items-center gap-2 mt-2">
                    <GrStatusGoodSmall className="text-green-500" size={20} />
                    <p className="text-sm text-gray-500">
                      Status: {contribution.value}
                    </p>
                  </div>
                  <p className="text-sm text-gray-500">
                    Last updated: {contribution.Date}
                  </p>
                  <p className="text-sm text-gray-500">Contributions: 5</p>
                  <p className="text-sm text-gray-500">Stars: 120</p>

                  {/* <p className="text-xl font-bold">2 repositories</p>
                  <div className="flex flex-col">
                    <p className="text-xl font-bold">{contribution.label}</p>
                    <p className="text-sm text-gray-500">{contribution.Date}</p>
                    <p className={`text-sm ${contribution.color}`}>
                      {contribution.value}
                    </p>
                  </div> */}
                </div>
              </div>
            </div>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default Contributions;
