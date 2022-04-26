import React from "react";
import { Col, Container, Image, Nav, Row } from "react-bootstrap";
import "../../Home/Home/Home.css";
import "./navigation.css";
const Navigation = () => {
  // should try this for scroll in specific id
  // function onLinkClick() {
  //   document.getElementsByTagName("h2")[3].scrollIntoView();
  //   // will scroll to 4th h3 element
  // }

  return (
    <>
      <Container fluid className="sticky-top bg-white">
        <Row className="mt-2 ">
          <Col sm={1}>
            <Nav className=" p-3 ms-5">
              <a href="/">
                <Image
                  className="navbar-imae"
                  src={require("../../../images/prof.jpg")}
                ></Image>
              </a>
            </Nav>
          </Col>
          <Col sm={6}>
            <Nav className="me-auto p-3">
              <Nav.Link href="/" className="navlink">
                Syied Bin Salim
              </Nav.Link>
            </Nav>
          </Col>
          <Col sm={5}>
            <Nav className="me-auto p-3 ">
              <Nav.Link href="./#home" className="navlink">
                Home
              </Nav.Link>
              <Nav.Link href="./#About" className="navlink">
                About
              </Nav.Link>
              <Nav.Link href="./#Projects" className="navlink">
                Projects
              </Nav.Link>
              <Nav.Link href="./#Contact" className="navlink">
                Contact
              </Nav.Link>
            </Nav>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Navigation;
