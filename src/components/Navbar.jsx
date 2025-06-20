import React, { useEffect, useState } from "react";
import {
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedin,
  FaFileAlt,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdDarkMode, MdOutlineLightMode } from "react-icons/md";
import Logo from "../assets/images/Logo1.svg";
import BackLogo from "../assets/images/black-logo.svg";
import { Link } from "react-scroll";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      window.addEventListener("resize", handleResize);
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    };
  }, []);

  // If not mobile, show all links
  const links = [
    { label: "[", to: "" },
    { label: "Home", to: "home" },
    { label: "About", to: "about" },
    { label: "Skills", to: "skills" },
    { label: "Projects", to: "projects" },
    { label: "Contributions", to: "contributions" },
    { label: "Contact", to: "contact" },
    { label: "]", to: "" },
  ];

  // Filter out "[" and "]" on mobile
  const filteredLinks = isMobile
    ? links.filter((link) => link.label !== "[" && link.label !== "]")
    : links;

  const icons = [
    {
      icon: <FaLinkedin size={18} />,
      label: "Linkedin",
      href: "https://www.linkedin.com/in/diego-carve/",
    },
    {
      icon: <FaGithub size={18} />,
      label: "Github",
      href: "https://github.com/Diegocchaves",
    },
    {
      icon: <FaXTwitter size={18} />,
      label: "X",
      href: "https://twitter.com/diego_carve",
    },
    {
      icon: <FaFileAlt size={18} />,
      label: "Resume",
      href: "https://drive.google.com/file/d/1qfcAZMTdLYSH-7sobEz7jEOqdmkLLnMB/view?usp=drive_link",
    },
  ];

  // Manage dark and light theme
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  // Hide the social icons <nav> when the screen width is 1024px or less
  const [showIcons, setShowIcons] = useState(window.innerWidth > 1024);

  useEffect(() => {
    const handleResize = () => setShowIcons(window.innerWidth > 1024);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-6 bg-[#F5F9FA] dark:bg-black text-gray-30 z-10 ">
      <div className="flex items-center justify-start ">
        <Link
          to="home"
          smooth={true}
          duration={500}
          className="flex justify-start cursor-pointer"
        >
          <img
            src={theme === "dark" ? Logo : BackLogo}
            alt="logo"
            className="w-8 h-8"
          />
        </Link>
      </div>

      {/* menu */}
      <nav className="hidden gap-2 md:flex">
        {links.map((link, index) => (
          <div key={index}>
            <Link
              to={link.to}
              smooth={true}
              duration={500}
              className="cursor-pointer text-black dark:text-white text-sm transition hover:text-[#298E9E]"
              activeClass="active-link"
              spy={true}
            >
              {link.label}
            </Link>
          </div>
        ))}
        {/* Dark Mode Toggle */}
        <button
          onClick={() => {
            setTheme(theme === "dark" ? "light" : "dark");
          }}
          className="px-2 py-1 ml-4 text-black bg-gray-200 rounded dark:bg-slate-800 dark:text-white "
        >
          <span className="flex items-center gap-2">
            {theme === "dark" ? <MdOutlineLightMode /> : <MdDarkMode />}
          </span>
        </button>
      </nav>

      {/* hamburge */}
      <button
        onClick={() => {
          setTheme(theme === "dark" ? "light" : "dark");
        }}
        className="px-2 py-1 ml-4 text-[#298E9E] rounded dark:text-white md:hidden "
      >
        <span className="flex items-center gap-2">
          {theme === "dark" ? (
            <MdOutlineLightMode size={20} />
          ) : (
            <MdDarkMode size={20} />
          )}
        </span>
      </button>
      <div
        onClick={handleClick}
        className="z-10 text-[#298E9E] dark:text-white md:hidden"
      >
        {!nav ? <FaBars size={20} /> : <FaTimes size={20} />}
      </div>

      {/* mobile menu */}
      <nav
        className={
          !nav
            ? "hidden"
            : " absolute top-0 left-0 w-full h-screen bg-gray-50 dark:bg-black flex flex-col justify-center items-center gap-10"
        }
      >
        {filteredLinks.map((link, index) => (
          <Link
            key={index}
            to={link.to}
            smooth={true}
            duration={500}
            onClick={() => setNav(false)}
            className="items-center justify-center text-xl text-black dark:text-white"
          >
            <p>{link.label}</p>
          </Link>
        ))}
      </nav>

      {/* social icons */}
      {showIcons && (
        <nav className="hidden lg:flex fixed flex-col top-[35%] z-10 cursor-pointer">
          {icons.map((icon, index) => (
            <div
              key={index}
              className="w-[110px] h-[80px] flex items-center ml-[-98px] hover:ml-[-18px] duration-500 "
            >
              <a
                href={icon.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex justify-between w-full text-gray-800 hover:rounded-md dark:text-gray-300 dark:hover:text-gray-700 hover:bg-white hover:p-2 hover:w-full hover:items-center"
              >
                <p className="flex flex-col items-center justify-center">
                  {icon.label}
                </p>
                {icon.icon}
              </a>
            </div>
          ))}
        </nav>
      )}
    </div>
  );
};

export default Navbar;
