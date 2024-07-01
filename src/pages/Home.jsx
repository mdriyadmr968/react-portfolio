import React from "react";
import Navbar from "../component/Navbar";
import Banner from "../component/Banner";
import About from "../component/About";
import EducationAndExperience from "../component/EducationAndExperience";
import Skills from "../component/Skills";
import Projects from "../component/Projects";
import Footer from "../component/Footer";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <About />
      <Skills />
      <Projects />
      <EducationAndExperience />
      <Footer />
    </div>
  );
};

export default Home;
