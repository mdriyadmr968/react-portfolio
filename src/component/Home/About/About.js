import React from "react";
import "./About.css";

const About = () => {
  return (
    <div id="About" className="about_wrapper">
      <div className="about-container">
        <div>
          <h1 className="about-me pt-5 ">ABOUT ME</h1>
        </div>
        <div className="about-top">
          <div className="about-left">
            <h3>Get to know me!</h3>
            <p className="about-description">
              "I am a Junior Web Developer with a passion for creating intuitive
              and visually appealing websites. <br />I have a strong foundation
              in JavaScript & ReactJS, and have experience working with both
              front-end and back-end technologies.
              <br />I I am always eager to learn and experiment with new
              technologies to deliver exceptional results.
              <br />
              II am eager to bring my skills and creativity to real world
              projects.
            </p>

            <a href="/#Contact">
              <button
                type="button"
                className="btn btn-warning font-weight-bold"
              >
                CONTACTS
              </button>
            </a>
          </div>
          <div className="about-right">
            <h1 className="mb-4">MY SKILLS</h1>
            <div className="skills">
              <div className="skills__skill">HTML</div>
              <div className="skills__skill">CSS</div>
              <div className="skills__skill">JavaScript</div>
              <div className="skills__skill">ReactJS</div>
              <div className="skills__skill">Bootstrap</div>
              <div className="skills__skill">Material UI</div>
              <div className="skills__skill">Node JS</div>
              <div className="skills__skill">Express js</div>
              <div className="skills__skill">Redux</div>
              <div className="skills__skill">Typescript</div>
              <div className="skills__skill">React Native</div>
              <div className="skills__skill">Mongodb</div>
              <div className="skills__skill">Firebase</div>
              <div className="skills__skill">GIT</div>
              <div className="skills__skill">Github</div>
              <div className="skills__skill">Responsive Design</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
