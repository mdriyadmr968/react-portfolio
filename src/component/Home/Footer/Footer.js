import React from "react";
import { Image } from "react-bootstrap";
import "./Footer.css";
import fb from "../../../images/facebook-brands.svg";
import github from "../../../images/github-brands.svg";
import twitter from "../../../images/twitter-brands.svg";
import linkedin from "../../../images/linkedin-brands.svg";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-top">
        <div className="footer-top-left">
          <h3 className="mb-4 mt-3">Syied Bin Salim</h3>
          <p className="mb-5">
            A Frontend focused Web Developer building the Frontend of Websites
            and Web Applications that leads to the success of the overall
            product
          </p>
        </div>
        <div className="footer-top-right mt-3 mb-2">
          <div>
            <h1>SOCIAL</h1>
          </div>
          <div className="footer-social-container">
            <div>
              <a
                href="http://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image src={fb} alt="" className="footer-social" />
              </a>
            </div>
            <div>
              <a
                href="http://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image src={linkedin} alt="" className="footer-social" />
              </a>
            </div>
            <div>
              <a
                href="http://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image src={twitter} alt="" className="footer-social" />
              </a>
            </div>
            <div>
              <a
                href="http://github.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image src={github} alt="" className="footer-social" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom mt-5">
        <hr className="footer-hr mb-5" />
        <p className="pb-5">
          © Copyright 2022. Made by <span className="fw-bold u">Syied bin Salim</span>
        </p>
      </div>
    </div>
  );
};

export default Footer;
