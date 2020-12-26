import React from "react";
import "../css/LandingPage.scss";
import Particles from "react-particles-js";
import AboutCard from "./AboutCard";
import AboutMe from "./AboutMe";
import CustomNavbar from "./CustomNavbar";
import Education from "./Education";
import Timeline from "./Timeline";
import Projects from "./Projects";

const LandingPage = () => {
  return (
    <>
      <Particles className="landing-page-background" canvasClassName="canvas" />
      <CustomNavbar />
      <AboutCard />
      <div className="container-main">
        <AboutMe />
        <Education />
        <Timeline />
        <Projects />
      </div>
    </>
  );
};

export default LandingPage;
