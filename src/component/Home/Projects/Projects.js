import React from "react";
import "./Projects.css";
import project1 from "../../../images/project1.jpeg";
import project2 from "../../../images/project2.jpeg";
import project3 from "../../../images/project3.jpeg";
import { useNavigate } from "react-router-dom";

const Projects = () => {
  const navigate = useNavigate();
  function handleClick(id) {
    navigate(`project${id}`, { replace: true });
  }
  return (
    <div id="Projects">
      <div className="projects-top">
        <div>
          <h1 className="project-heading p-5 " id="projects">
            PROJECTS
          </h1>
          <h5 className="project-title">
            Here you will find some of the personal and clients projects <br />
            that I created with each project containing its own case study
          </h5>
        </div>
        {/* single project details  */}
        <div>
          <div className="single-project">
            <div className="projects-image single-project-left">
              <img src={project2} alt="" />
            </div>
            <div className="single-project-right">
              <h1>Yubter</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste
                explicabo est recusandae? Voluptas sunt accusamus aut odio dolor
                officia assumenda labore rerum quis sequi blanditiis sed eveniet
                exercitationem sapiente delectus eos nulla,
              </p>
              <button
                type="button"
                class="btn btn-warning font-weight-bold "
                onClick={() => handleClick(1)}
              >
                CASE STUDY
              </button>
            </div>
          </div>
          <div className="single-project">
            <div className="projects-image single-project-left">
              <img src={project3} alt="" />
            </div>
            <div className="single-project-right">
              <h1>Yubter</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste
                explicabo est recusandae? Voluptas sunt accusamus aut odio dolor
                officia assumenda labore rerum quis sequi blanditiis sed eveniet
                exercitationem sapiente delectus eos nulla,
              </p>
              <button
                type="button"
                class="btn btn-warning font-weight-bold"
                onClick={() => handleClick(2)}
              >
                CASE STUDY
              </button>
            </div>
          </div>
          <div className="single-project">
            <div className="projects-image single-project-left">
              <img src={project1} alt="" />
            </div>
            <div className="single-project-right">
              <h1>Yubter</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste
                explicabo est recusandae? Voluptas sunt accusamus aut odio dolor
                officia assumenda labore rerum quis sequi blanditiis sed eveniet
                exercitationem sapiente delectus eos nulla,
              </p>
              <button
                type="button"
                class="btn btn-warning font-weight-bold "
                onClick={() => handleClick(3)}
              >
                CASE STUDY
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
