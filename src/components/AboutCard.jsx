import React from "react";
import "../css/AboutCard.scss";

const AboutCard = () => {
  return (
    <>
      <div className="about-card">
        <h1>Rimaz Khan</h1>
        <p>CS junior @ UMich</p>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <a href="https://github.com/rimazk123">
            <i style={{ fontSize: "36px", margin: "10px" }} className="fa">
              &#xf09b;
            </i>
          </a>
          <a href="https://www.linkedin.com/in/rimazk/">
            <i style={{ fontSize: "36px", margin: "10px" }} className="fa">
              &#xf08c;
            </i>
          </a>
        </div>
      </div>
    </>
  );
};

export default AboutCard;
