import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import fb from "../../../images/facebook-brands.svg";
import linkedin from "../../../images/linkedin-brands.svg";
import twitter from "../../../images/twitter-brands.svg";
import github from "../../../images/github-brands.svg";
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
                  href="http://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image src={fb} alt="" className="social-image" />
                </a>
              </div>
              <div>
                <a
                  href="http://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image src={linkedin} alt="" className="social-image" />
                </a>
              </div>
              <div>
                <a
                  href="http://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image src={twitter} alt="" className="social-image" />
                </a>
              </div>
              <div>
                <a
                  href="http://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image src={github} alt="" className="social-image" />
                </a>
              </div>
            </div>
          </Col>
          <Col xs={6} md={8}>
            <h1 className="name">HEY, I'M SYIED BIN SALIM</h1>
            <h5 className="description">
              A Frontend focused Web Developer building the Frontend of Websites
              and Web <br /> Applications that leads to the success of the
              overall product
            </h5>
            <button type="button" class="btn btn-warning font-weight-bold mb-5">
              Projects
            </button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Banners;
