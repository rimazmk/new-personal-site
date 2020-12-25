import React from "react";
import "../css/LandingPage.scss";
import Particles from "react-particles-js";
import AboutCard from "./AboutCard";
import AboutMe from "./AboutMe";
import CustomNavbar from "./CustomNavbar";

const LandingPage = () => {
  return (
    <>
      <Particles className="landing-page-background" canvasClassName="canvas" />
      <AboutCard />
      <AboutMe />
      <CustomNavbar />
    </>
  );
};

export default LandingPage;
