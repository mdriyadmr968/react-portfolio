import React from "react";
import "../Project.css";
import project1 from "../../../images/project1.jpeg";

const Project1 = () => {
  function componentDidMount() {
    window.scrollTo(0, 0);
  }
  componentDidMount();
  return (
    <div className="project-container">
      <div className="project-top">
        <p className="project-name">CarPlanet</p>
        <p className="project-title">
          This page contains the case study of CarPlanet Web App which includes
          the Project Overview, Tools Used and Live Links to the official
          product.
        </p>
      </div>
      <div className="project-bottom">
        <img src={project1} alt="" className="project-bottom-image mb-5" />
        <p className="overview ">Project Overview</p>
        <p className="overview-details">
          CarPlanet is a  car selling website.
        </p>
        
        <p className="overview-details mb-5">
          Feel free to check out the Project by visiting the Live Link.
        </p>

        <p className="overview  mb-4">Tools Used</p>
        <div className="skills">
          <div className="single-skill">HTML</div>
          <div className="single-skill">CSS</div>
          <div className="single-skill">JavaScript</div>
          <div className="single-skill">React</div>
          <div className="single-skill">GIT</div>
          <div className="single-skill">Github</div>
          <div className="single-skill">Responsive Design</div>
        </div>
        <p className="seeLive mt-4">See Live</p>
        <a href="">
          <button type="button" className="btn btn-warning font-weight-bold">
            LIVE LINK
          </button>
        </a>
        <a href="/">
          <button
            type="button"
            className="btn btn-white border-warning font-weight-bold ms-5"
          >
            GO BACK
          </button>
        </a>
      </div>
    </div>
  );
};

export default Project1;
