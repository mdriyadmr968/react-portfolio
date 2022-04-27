import React from "react";
import { Image } from "react-bootstrap";
import "./navigation.css";

const Navigation = () => {
  return (
    <div className="navbar-container ps-5 pe-5 sticky-top bg-white">
      <nav className="navbar">
        <div className="logo">
          <a href="/">
            <Image
              className="navbar-imae"
              src={require("../../../images/prof.jpg")}
            ></Image>
            <a href="/" className="nav-name" style={{ textDecoration: "none" }}>
              Syied Bin Salim
            </a>
          </a>
        </div>
        <div>
          <ul className="nav-links">
            <input type="checkbox" id="checkbox_toggle" />
            <label for="checkbox_toggle" className="hamburger">
              &#9776;
            </label>
            <div className="menu">
              <li>
                <a href="/#home" className="navitem">
                  HOME
                </a>
              </li>
              <li>
                <a href="/#About" className="navitem">
                  ABOUT
                </a>
              </li>
              <li className="project">
                <a href="/#Projects" className="navitem">
                  PROJECTS
                </a>
              </li>
              <li>
                <a href="/#Contact" className="navitem">
                  CONTACT
                </a>
              </li>
            </div>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navigation;
