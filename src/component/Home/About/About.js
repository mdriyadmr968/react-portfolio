import React from "react";
import "./About.css";

const About = () => {
  return (
    <>
      <div className="about">
        <div>
          <h1 className="about-me p-5">ABOUT ME</h1>
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
              I also like sharing content related to the stuff that I have
              learned over the years in Web Development so it can help other
              people of the Dev Community. Feel free to Connect or Follow me on
              my <a rel="noreferrer" href="https://linkedin.com" target="_blank">Linkedin</a> where I post useful content related to Web Development
              and Programming
            </p>
            <p>
              I'm open to Job opportunities where I can contribute, learn and
              grow. If you have a good opportunity that matches my skills and
              experience then don't hesitate to contact me.
            </p>

            <button
              type="button"
              className="btn btn-warning font-weight-bold"
              id="contacts"
            >
              CONTACTS
            </button>
          </div>
          <div className="about-right">
            <h1 className="mb-4">MY SKILLS</h1>
            <div className="skills">
              <div className="skills__skill">HTML</div>
              <div className="skills__skill">CSS</div>
              <div className="skills__skill">JavaScript</div>
              <div className="skills__skill">React</div>
              <div className="skills__skill">SASS</div>
              <div className="skills__skill">GIT</div>
              <div className="skills__skill">Github</div>
              <div className="skills__skill">Responsive Design</div>
              <div className="skills__skill">SEO</div>
              <div className="skills__skill">Terminal</div>
              <div className="skills__skill">Express Basics</div>
              <div className="skills__skill">SQL Basics</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
