import React from "react";
import "./About.css";

const About = () => {
  return (
    <div id="About" className="">
      <div className="about">
        <div>
          <h1 className="about-me p-5 ">ABOUT ME</h1>
          <h5 className="about-me-h5">
            Here you will find more information about me, what I do, and my
            current skills mostly in terms <br /> of programming and technology
          </h5>
        </div>
        <div className="about-top">
          <div className="about-left">
            <h3>Get to know me!</h3>
            <p>
              I'm a Frontend Web Developer building the Front-end of Websites
              and Web Applications that leads to the success of the overall
              product. Check out some of my work in the Projects section.
            </p>
            <p>
              I am also comportable with backend. I can build small to medium
              full stack project.
            </p>
            <p>
              I'm open to Job opportunities where I can contribute, learn and
              grow. If you have a good opportunity that matches my skills and
              experience then don't hesitate to contact me.
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
