import React, { useCallback, useState, useEffect } from "react";
import {
  ExpandMore,
  LightMode,
  Menu,
  Person,
  RemoveRedEye,
  Wallet,
} from "@mui/icons-material";
import { Popover } from "react-tiny-popover";
import { toast } from "react-toastify";
import { Link, NavLink, useNavigate, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isExpanded, setExpanded] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const navigate = useNavigate();
  const location = useLocation();

  const sections = ["home", "about", "experience", "skills", "projects"];

  const handleScroll = (section) => (event) => {
    event.preventDefault();

    // If the user is on the home page, just scroll to the section
    if (location.pathname === "/") {
      const element = document.getElementById(section);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
        setActiveSection(section);
      }
    } else {
      // Navigate to home first
      navigate("/");
      // After navigating, use setTimeout to allow the page to load
      // before scrolling to the section
      setTimeout(() => {
        const element = document.getElementById(section);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
          setActiveSection(section);
        }
      }, 100); // Adjust delay as necessary
    }
  };

  useEffect(() => {
    const handleScrollEvent = () => {
      const sectionElements = document.querySelectorAll(".section");
      let currentSection = "home";

      sectionElements.forEach((sectionEl) => {
        if (
          window.scrollY >=
          sectionEl.offsetTop - sectionEl.clientHeight / 9
        ) {
          currentSection = sectionEl.id;
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScrollEvent);
    return () => {
      window.removeEventListener("scroll", handleScrollEvent);
    };
  }, []);

  return (
    <div
      className={`${
        isExpanded ? "h-[500px]" : "h-[70px]"
      } fixed w-full bg-black text-white shadow-xl py-[5px] md:py-[50px] transition-all ease-out duration-300 overflow-y-hidden md:flex md:items-center z-50`}
    >
      <div className="flex flex-col md:flex-row justify-between w-[95%] md:max-xl:w-[90%] 2xl:w-[80%] mx-auto">
        <div className="flex justify-between gap-3 items-center ">
          <Link to="/" className="font-extrabold text-2xl no-underline">
            <img src="/images/logo.png" alt={"logo"} className="h-[55px]" />
          </Link>

          <button
            className="visible md:invisible"
            onClick={() => setExpanded(!isExpanded)}
          >
            <Menu fontSize="large" className="" />
          </button>
        </div>

        <div className="flex gap-16">
          <div
            className={`flex flex-col md:flex-row md:items-center gap-3 mt-[20%] md:mt-0 md:gap-5 transition-all ease-out duration-300`}
          >
            <ul className="nav-links flex flex-col md:flex-row md:items-center gap-3 mt-[20%] md:mt-0 md:gap-5 transition-all ease-out duration-300">
              {sections?.slice(0, sections.length - 1)?.map((section) => (
                <li key={section}>
                  <a
                    onClick={handleScroll(section)}
                    className={`nav-link no-underline text-base font-bold rounded-lg text-left md:text-center my-auto md:p-2 hover:opacity-70 transition-all ease-out duration-300 ${
                      activeSection === section ? "text-[#994ff5]" : ""
                    }`}
                  >
                    {section.charAt(0).toUpperCase() + section.slice(1)}
                  </a>
                </li>
              ))}
            </ul>
            <a
              href="/#projects"
              onClick={handleScroll("projects")}
              className={`nav-link inline-flex items-center justify-center px-4 py-2 my-5 md:my-0 text-base font-medium leading-6 whitespace-no-wrap ${
                activeSection === "projects"
                  ? "bg-[#994FF5] text-white"
                  : "bg-white text-black"
              }`}
            >
              Projects
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
