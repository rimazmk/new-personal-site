import React from "react";
import data from "../data.json";
import ProjectCard from "./ProjectCard";
import "../css/Projects.scss";

const Projects = () => {
  return (
    <>
      <h1 id="projects" id="projects">
        Projects 💻
      </h1>
      <div className="cards">
        {data.projects.map((project) => {
          return <ProjectCard key={project.name} {...project} />;
        })}
      </div>
    </>
  );
};

export default Projects;
