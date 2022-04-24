import React from "react";
import "../Project.css";
import project1 from '../../../images/project1.jpeg'

const Project1 = () => {
  return (
    <div>
      <div className="project-top">
        <p className="project-name">YUBTER</p>
        <p className="project-title">
          This page contains the case study of Yubter Web App which includes the
          Project Overview, Tools Used and Live Links to the official product.
        </p>
        <button type="button" class="btn btn-warning live-link-button">
          LIVE LINK
        </button>
      </div>
      <div className="project-bottom">
        <img src={project1} alt="" className="project-bottom-image mb-5" />
        <p className="overview ">Project Overview</p>
        <p className="overview-details">
          Yubter is a platform for people to join the community of their
          favorite youtube channel. I had an idea and I thought it will be cool
          and helpful for Youtube users to have a place where they can chat with
          other like-minded people who follow the same Youtube channel as them
          and build a stronger community.
        </p>
        <p className="overview-details mb-3">
          I took inspiration from other similar platforms like Discord, Slack,
          etc. which are similar in terms of having a place for people of
          certain communities and providing them a space to communicate and meet
          like-minded people of the same community.
        </p>
        <p className="overview-details mb-5">
          Feel free to check out the Project by visiting the Live Link.
        </p>
      </div>
    </div>
  );
};

export default Project1;
