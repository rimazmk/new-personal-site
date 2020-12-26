import React from "react";
import "../css/Projects.scss";

const ProjectsCard = ({ name, description, image, link }) => {
  return (
    <>
      <a href={link}>
        <div
          className="project-card"
          style={{ backgroundImage: "url(" + image + ")" }}
        >
          <h4>{name}</h4>
          <p style={{ color: "inherit" }}>{description}</p>
        </div>
      </a>
    </>
  );
};

export default ProjectsCard;
