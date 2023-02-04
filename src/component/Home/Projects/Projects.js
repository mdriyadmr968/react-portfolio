import React from "react";
import "./Projects.css";
import carplanet_home from "../../../images/carplanet_home.png";
import dreamworld_home from "../../../images/dreamworld_homepage.png";
import happydoc_home from "../../../images/happydoc_homepage.png";
import { useNavigate } from "react-router-dom";

const Projects = () => {
  const navigate = useNavigate();
  // function handleClick(id) {
  //   navigate(`project${id}`, { replace: true });
  // }
  return (
    <div className="Projects">
      <div className="projects-top">
        <div>
          <h1 className="project-heading p-3 " id="projects">
            PROJECTS
          </h1>
          <h5 className="project-title">
            Here you will find some of the personal projects <br />
            that I created with each project containing its own case study
          </h5>
        </div>
        {/* single project details  */}
        <div>
          <div className="single-project">
            {/* <div className="projects-image single-project-left">
              <img src={project2} alt="" />
            </div> */}
            <div class="image-wrap scroll-image">
              <img src={carplanet_home} />
              <div class="hover-text">Hover</div>
            </div>

            <div className="single-project-right">
              <h1>CarPlanet</h1>
              <p className="project-description">
                ● A car purchasing website.
                <br />
                ● Users can purchase cars, give reviews. <br />● admin can
                manage, add or remove all car details.
                <br /> ● admin can approve users purchase.
                <br /> ● Technology used: REACT BOOTSTRAP FIREBASE MONGODB
                NODEJS Heroku
              </p>
              <a
                href="https://carplanet-905af.web.app/"
                target="_blank"
                className="mx-2"
              >
                <button type="button" class="btn btn-warning font-weight-bold ">
                  Live Site
                </button>
              </a>
              <a
                href="https://github.com/mdriyadmr968/Car-Planet-Client"
                target="_blank"
              >
                <button type="button" class="btn btn-warning font-weight-bold ">
                  Client Site
                </button>
              </a>
              <a
                href="https://github.com/mdriyadmr968/-mdriyadmr968-Car-Planet-Server"
                target="_blank"
                className="mx-2"
              >
                <button type="button" class="btn btn-warning font-weight-bold ">
                  Server Site
                </button>
              </a>
            </div>
          </div>
          <div className="single-project">
            {/* <div className="projects-image single-project-left">
              <img src={project2} alt="" />
            </div> */}
            <div class="image-wrap scroll-image">
              <img src={dreamworld_home} />
              <div class="hover-text">Hover</div>
            </div>
            <div className="single-project-right">
              <h1>CarPlanet</h1>
              <p className="project-description">
                ● A simple tour booking website.
                <br /> ● Users can book tours, see details about tourist spots.
                <br /> ● Admin can create, update or delete the tourist spot.{" "}
                <br />● Admin can approve the pending order of customers. <br />
                ● Technology used: Reactjs Nodejs Firebase Bootstrap
              </p>
              <a
                href="https://dream-world-892da.web.app/"
                target="_blank"
                className="mx-2"
              >
                <button type="button" class="btn btn-warning font-weight-bold ">
                  Live Site
                </button>
              </a>
              <a
                href="https://github.com/mdriyadmr968/Dream-world"
                target="_blank"
              >
                <button type="button" class="btn btn-warning font-weight-bold ">
                  Client Site
                </button>
              </a>
              <a
                href="https://github.com/mdriyadmr968/DreamWorld-server"
                target="_blank"
                className="mx-2"
              >
                <button type="button" class="btn btn-warning font-weight-bold ">
                  Server Site
                </button>
              </a>
            </div>
          </div>
          <div className="single-project">
            {/* <div className="projects-image single-project-left">
              <img src={project2} alt="" />
            </div> */}
            <div class="image-wrap scroll-image">
              <img src={happydoc_home} />
              <div class="hover-text">Hover</div>
            </div>
            <div className="single-project-right">
              <h1>CarPlanet</h1>
              <p className="project-description">
                ● A healthcare website.
                <br /> ● Users can choose a service according to their needs.
                <br /> ● Technology used: HTML, CSS, REACT, BOOTSTRAP, FIREBASE,
                MONGODB.
              </p>
              <a
                href="https://magenta-cassata-224eef.netlify.app/"
                target="_blank"
                className="mx-2"
              >
                <button type="button" class="btn btn-warning font-weight-bold ">
                  Live Site
                </button>
              </a>
              <a
                href="https://github.com/mdriyadmr968/HappyDocs"
                target="_blank"
              >
                <button type="button" class="btn btn-warning font-weight-bold ">
                  Client Site
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
