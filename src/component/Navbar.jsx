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
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isExpanded, setExpanded] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const navigate = useNavigate();

  const sections = ["home", "About", "Projects", "Contact"];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.6 }
    );

    sections.forEach((section) => {
      const element = document.getElementById(section);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, [sections]);

  const handleScroll = (section) => (event) => {
    event.preventDefault();
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      setActiveSection(section);
    }
  };

  return (
    <div
      className={`${
        isExpanded ? "h-[500px]" : "h-[70px]"
      } fixed   w-screen  bg-black text-white  shadow-xl   py-[5px] md:py-[50px] transition-all ease-out duration-300 overflow-y-hidden md:flex md:items-center z-50`}
    >
      <div className="flex flex-col md:flex-row justify-between w-[90%] md:w-[80%] mx-auto">
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
            className={`flex flex-col md:flex-row md:items-center gap-3 mt-[20%] md:mt-0 md:gap-5 transition-all ease-out duration-300 `}
          >
            <ul className="nav-links flex flex-col md:flex-row md:items-center gap-3 mt-[20%] md:mt-0 md:gap-5 transition-all ease-out duration-300 ">
              {sections.map((section) => (
                <li key={section}>
                  <a
                    // href={`/#${section}`}
                    onClick={handleScroll(section)}
                    className={`no-underline text-base font-bold rounded-lg text-left md:text-center my-auto md:p-2 hover:opacity-70 transition-all ease-out duration-300 ${
                      activeSection === section ? "text-[#994ff5]" : ""
                    }`}
                  >
                    {section.charAt(0).toUpperCase() + section.slice(1)}
                  </a>
                </li>
              ))}
            </ul>
            <a
              href="/#Contact"
              onClick={handleScroll("Contact")}
              className="inline-flex items-center justify-center px-4 py-2 my-5 md:my-0 text-base font-medium leading-6 whitespace-no-wrap bg-white text-black border border-blue-700 rounded-md shadow-sm"
            >
              Lets chat
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
