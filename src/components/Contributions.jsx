import { subDays } from "date-fns"; // For generating dynamic dates
import { GrStatusGoodSmall } from "react-icons/gr";
import { FaCodePullRequest } from "react-icons/fa6";
import MicroActionsImage from "../assets/images/ma-mockup.svg";
import MicroActionsBlog from "../assets/images/ma-blog-mockup.svg";
import CalendarHeatmap from "react-calendar-heatmap";
import "react-calendar-heatmap/dist/styles.css";

const Contributions = () => {
  //Generate heatmap data for the last 100 days
  const today = new Date();
  const heatmapData = Array.from({ length: 300 }, (_, i) => {
    const date = subDays(today, i);
    return {
      date: date.toISOString().split("T")[0],
      count: Math.floor(Math.random() * 5),
    };
  });

  const contributions = [
    {
      label: "Dev Resources",
      href: "https://github.com/marcelscruz/dev-resources",
      url: "https://devresourc.es/",
      image: MicroActionsBlog,
      Date: "June 6 2025 ",
      value: "Completed",
      color: "text-green-500",
      commits: 3,
      stars: 1129,
    },
    {
      label: "Public APIs",
      href: "https://github.com/marcelscruz/public-apis",
      url: "https://publicapis.dev/",
      image: MicroActionsImage,
      Date: "June 8 2025 ",
      value: "In Progress",
      color: "text-yellow-500",
      commits: 0,
      stars: 4888,
    },
  ];

  return (
    <div
      name="contributions"
      className="py-16 text-gray-300 bg-black md:py-36 insert-0"
    >
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="flex flex-col items-center justify-center w-full p-4 text-center">
          <p className="inline text-lg font-bold md:text-xl">
            [ Contributions ]
          </p>
          <p className="py-5 text-[15px] md:text-lg">
            {"// Take a look on my recent contributions"}
          </p>
          <p className="text-sm text-gray-500 md:text-base">
            Contributions are open source projects that I have contributed to,
            including pull requests, issues, and discussions. They showcase my
            involvement in the developer community.
          </p>

          {/* HeatMap */}
          <div className="my-8 min-w-[900px] overflow-x-auto ">
            <div className="">
              <CalendarHeatmap
                startDate={subDays(today, 365)}
                endDate={today}
                values={heatmapData}
                classForValue={(value) => {
                  if (!value || !value.count) return "color-empty";
                  if (value.count >= 5) return "color-scale-5";
                  if (value.count >= 4) return "color-scale-4";
                  if (value.count >= 3) return "color-scale-3";
                  if (value.count >= 2) return "color-scale-2";
                  if (value.count >= 1) return "color-scale-1";
                  return "color-empty";
                }}
                tooltipDataAttrs={(value) => ({
                  "data-tip": `${value.date}: ${value.count} commits`,
                })}
                showWeekdayLabels={true}
              />
            </div>
          </div>
        </div>
        {/* Container */}
        <div className="flex flex-row items-center w-full gap-1 p-4 mb-2 md:mb-0">
          <p className="mr-2 whitespace-nowrap">June 2025</p>
          <div className="flex-1 h-[1px] bg-gray-700 rounded-sm"></div>
        </div>
        <nav className="flex flex-col items-center justify-center w-full h-full gap-4 md:grid md:grid-cols-2 md:gap-8">
          {contributions.map((contribution, index) => (
            <div
              key={index}
              className="flex items-center w-full h-full transition-colors duration-300 border border-gray-700 rounded-lg md:py-5 md:px-5"
            >
              <div className="flex flex-row w-full h-full gap-2 p-4">
                <div className="flex flex-row items-center p-2 w-fit h-fit">
                  <FaCodePullRequest
                    className="mr-2 text-green-500 whitespace-nowrap"
                    size={35}
                  />
                </div>
                <div className="flex flex-col items-start justify-start ">
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
                    <GrStatusGoodSmall
                      className={`${contribution.color}`}
                      size={10}
                    />
                    <p className="text-sm text-gray-500">
                      Status: {contribution.value}
                    </p>
                  </div>
                  <p className="text-sm text-gray-500">
                    Last updated: {contribution.Date}
                  </p>
                  <p className="text-sm text-gray-500">
                    Commits: {contribution.commits}
                  </p>
                  <p className="text-sm text-gray-500">
                    Stars: {contribution.stars}
                  </p>
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
