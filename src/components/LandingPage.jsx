import React from "react";
import "../css/LandingPage.scss";
import Particles from "react-particles-js";
import AboutCard from "./AboutCard";
import AboutMe from "./AboutMe";
import CustomNavbar from "./CustomNavbar";
import Education from "./Education";

const LandingPage = () => {
  return (
    <>
      <Particles className="landing-page-background" canvasClassName="canvas" />
      <CustomNavbar />
      <AboutCard />
      <div className="container-main">
        <AboutMe />
        <Education />
      </div>
    </>
  );
};

export default LandingPage;
