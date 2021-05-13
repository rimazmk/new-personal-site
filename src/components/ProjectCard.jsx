import React from "react";
import "../css/Projects.scss";

const ProjectsCard = ({
  name,
  description,
  image,
  techStack,
  link,
  github,
}) => {
  return (
    <>
      <div className="project-card">
        <img className="header" src={image} />
        <div className="body">
          <h5>{name}</h5>
          <p className="desc">{description}</p>
          <p className="tech-stack">{techStack}</p>
        </div>
        <div className="bottom-row">
          {github && (
            <a href={github}>
              <i
                style={{ fontSize: "24px", margin: "0 3px", color: "#737373" }}
                className="fa"
              >
                &#xf09b;
              </i>
            </a>
          )}
          {link && (
            <a href={link}>
              <i
                style={{ fontSize: "24px", margin: "0 3px", color: "#737373" }}
                className="fa fa-link"
              ></i>
            </a>
          )}
        </div>
      </div>
    </>
  );
};

export default ProjectsCard;
