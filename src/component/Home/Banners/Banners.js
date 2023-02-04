import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import fb from "../../../images/facebook-brands.svg";
import linkedin from "../../../images/linkedin-brands.svg";
import twitter from "../../../images/twitter-brands.svg";
import github from "../../../images/github-brands.svg";
import { Typewriter } from "react-simple-typewriter";
import "./Banner.css";

const Banners = () => {
  return (
    <div className="banners-top" id="home">
      <Container fluid>
        <Row>
          <Col xs={4} md={2} lg={2}>
            <div className="social-image-container">
              <div>
                <a
                  href="https://www.facebook.com/md.riyad.9693001/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image src={fb} alt="" className="social-image" />
                </a>
              </div>
              <div>
                <a
                  href="https://www.linkedin.com/in/mohammad-syied-bin-salim-32136a227"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image src={linkedin} alt="" className="social-image" />
                </a>
              </div>
              <div>
                <a
                  href="https://twitter.com/RIYAD06342231"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image src={twitter} alt="" className="social-image" />
                </a>
              </div>
              <div>
                <a
                  href="https://github.com/mdriyadmr968"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image src={github} alt="" className="social-image" />
                </a>
              </div>
            </div>
          </Col>
          <Col xs={6} md={8}>
            <h1 className="name">
              Hi, I'M <br />
              <span style={{ color: "", fontWeight: "" }}>
                <Typewriter
                  words={["SYIED BIN SALIM"]}
                  loop={1}
                  cursor
                  cursorStyle="|"
                  typeSpeed={150}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              </span>
            </h1>
            <h5 className="description">
              "A junior Web Developer who can learn quickly and adapt to new
              technologies, tools, and frameworks to stay ahead of the curve in
              a rapidly evolving field."
            </h5>

            <a
              href="https://drive.google.com/file/d/1VIsniefY9GdmXrwSJSPpWHLwSHBii2dQ/view?usp=share_link"
              target="_blank"
            >
              <button
                type="button"
                class="resume-button  btn-warning font-weight-bold mb-5"
              >
                DOWNLOAD RESUME
              </button>
            </a>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Banners;
