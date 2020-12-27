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
          <i style={{ fontSize: "36px", margin: "10px" }} class="fa">
            &#xf09b;
          </i>
          <i style={{ fontSize: "36px", margin: "10px" }} class="fa">
            &#xf08c;
          </i>
        </div>
      </div>
    </>
  );
};

export default AboutCard;
