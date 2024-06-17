import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDiscord,
  faLinkedin,
  faSquareGithub,
  faSquareXTwitter,
  faSquareFacebook,
} from "@fortawesome/free-brands-svg-icons";

const About = () => {
  return (
    <div id="About" className="w-[90%] md:w-[80%] mx-auto">
      <section
        class="py-16 md:py-24 border-t-2 border-gray/[12%] dark:border-white/[12%]"
        id="about"
      >
        <div class="container aos-init aos-animate" data-aos="fade-up">
          <div class="grid grid-cols-1">
            <div>
              <div class="inline-block">
                <p class="bg-[#994FF5] text-white text-sm font-semibold py-3 px-5 uppercase rounded-full flex items-center gap-2.5">
                  <span>
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4.33454 9.58362C5.35965 9.83993 6.16007 10.6403 6.41638 11.6655L7.37875 15.5149C7.45002 15.8 7.70616 16 8 16C8.29384 16 8.54998 15.8 8.62125 15.5149L9.58362 11.6655C9.83993 10.6403 10.6403 9.83993 11.6655 9.58362L15.5149 8.62125C15.8 8.54998 16 8.29384 16 8C16 7.70616 15.8 7.45002 15.5149 7.37875L11.6655 6.41638C10.6403 6.16007 9.83993 5.35965 9.58362 4.33454L8.62125 0.485071C8.54998 0.199992 8.29384 0 8 0C7.70616 0 7.45002 0.199991 7.37875 0.485071L6.41638 4.33454C6.16007 5.35965 5.35965 6.16007 4.33454 6.41638L0.485071 7.37875C0.199992 7.45002 0 7.70616 0 8C0 8.29384 0.199991 8.54998 0.485071 8.62125L4.33454 9.58362Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </span>
                  About Me
                </p>
              </div>
              <div class="mt-7">
                <h2 class="font-semibold text-[26px]/normal">
                  Hi! I'm Mitchell Hancock
                </h2>
                <p class="mt-6 text-[#7780a1]">
                  I'm Passionate and results-driven UI/UX designer with seven
                  years of experience in crafting intuitive and visually
                  appealing user experiences. Skilled in user research,
                  wireframing, prototyping, and usability testing. Strong
                  collaborator and advocate for user-centered design. Seeking
                  new opportunities to create impactful digital products.
                </p>
              </div>
            </div>
          </div>
          <div class="grid grid-cols-1 mt-14">
            <div class="flex-wrap items-start sm:flex gap-7 space-y-7 sm:space-y-0">
              <div class="space-y-2.5 font-semibold flex-1">
                <p class="text-gray whitespace-nowrap">contact</p>
                <p class="whitespace-nowrap">mitchellhancock@gmail.com</p>
              </div>
              <div class="space-y-2.5 font-semibold flex-1">
                <p class="text-gray whitespace-nowrap">Phone</p>
                <p class="whitespace-nowrap">+1 (123) 456-7890</p>
              </div>

              <div class="space-y-2.5 font-semibold flex-1">
                <p class="text-gray whitespace-nowrap">Spoken Languages</p>
                <p class="whitespace-nowrap">English - Hindi - Bengali</p>
              </div>
              <div class="space-y-2.5 font-semibold flex-1">
                <p class="text-gray whitespace-nowrap">Interest</p>
                <p class="whitespace-nowrap">Music, Reading, Gaming</p>
              </div>
              <div class="space-y-2.5 font-semibold flex-1">
                <p class="text-gray whitespace-nowrap">Social Media</p>
                <ul class="flex flex-wrap items-center gap-5">
                  <li class="shrink-0">
                    <a href="/#" target="_blank">
                      <FontAwesomeIcon
                        icon={faLinkedin}
                        className="w-6 h-6 text-[#006699]"
                      />
                    </a>
                  </li>
                  <li class="shrink-0">
                    <a href="/#" target="_blank">
                      <FontAwesomeIcon
                        icon={faSquareGithub}
                        className="w-6 h-6 text-[#7C238B]"
                      />
                    </a>
                  </li>
                  <li class="shrink-0">
                    <a href="/#" target="_blank">
                      <FontAwesomeIcon
                        icon={faDiscord}
                        className="w-6 h-6 text-[#5865F2]"
                      />
                    </a>
                  </li>
                  <li class="shrink-0">
                    <a href="/#" target="_blank">
                      <FontAwesomeIcon
                        icon={faSquareXTwitter}
                        className="w-6 h-6 text-[#33CCFF]"
                      />
                    </a>
                  </li>
                  <li class="shrink-0">
                    <a href="/#" target="_blank">
                      <FontAwesomeIcon
                        icon={faSquareFacebook}
                        className="w-6 h-6 text-[#1773EA]"
                      />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
