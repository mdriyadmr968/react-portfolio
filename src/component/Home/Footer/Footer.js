import React from "react";
import { Image } from "react-bootstrap";
import "./Footer.css";
import fb from "../../../images/facebook-f-brands.png";
import github from "../../../images/github2.png";
import twitter from "../../../images/twitter2.png";
import linkedin from "../../../images/linkedin2.png";

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
                href="https://www.facebook.com/md.riyad.9693001/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image src={fb} alt="" className="footer-social" />
              </a>
            </div>
            <div>
              <a
                href="https://www.linkedin.com/in/mohammad-syied-bin-salim-32136a227"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image src={linkedin} alt="" className="footer-social" />
              </a>
            </div>
            <div>
              <a
                href="https://twitter.com/RIYAD06342231"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image src={twitter} alt="" className="footer-social" />
              </a>
            </div>
            <div>
              <a
                href="https://github.com/mdriyadmr968"
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
          © Copyright 2022. Made by{" "}
          <span className="fw-bold u">Syied bin Salim</span>
        </p>
      </div>
    </div>
  );
};

export default Footer;
