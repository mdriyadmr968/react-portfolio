import {
  faDiscord,
  faLinkedin,
  faSquareFacebook,
  faSquareGithub,
  faSquareXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Footer = () => {
  return (
    <div
      className="w-full  text-white text-center py-10"
      style={{
        backgroundImage: "url('/images/footerbg.png')",
      }}
    >
      <div class="space-y-2.5 font-semibold flex-1  ">
        <ul class="flex justify-center  flex-wrap items-center gap-5 ">
          <li class="shrink-0">
            <a href="/#" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faLinkedin} className="w-6 h-6" />
            </a>
          </li>
          <li class="shrink-0">
            <a href="/#" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faSquareGithub} className="w-6 h-6 " />
            </a>
          </li>
          <li class="shrink-0">
            <a href="/#" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faDiscord} className="w-6 h-6 " />
            </a>
          </li>
          <li class="shrink-0">
            <a href="/#" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faSquareXTwitter} className="w-6 h-6 " />
            </a>
          </li>
          <li class="shrink-0">
            <a href="/#" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faSquareFacebook} className="w-6 h-6 " />
            </a>
          </li>
        </ul>
      </div>
      <p className="mt-3 text-xs">© Developed by Syied with love.</p>
    </div>
  );
};

export default Footer;
