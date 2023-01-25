import React from "react";
import "../css/projects.css";
import projectData from "../allData/projectsData.js";
import ProjectCont from "./ProjectCont";
const Projects = () => {
  // mapping the data on projectContainer Component
  let allProjects = projectData.map((data, key) => {
    return (
      <ProjectCont
        key={key}
        imgSource={data.projectImg}
        projectLink={data.projectLink}
        projectName={data.projectName}
      />
    );
  });
  return (
    <section className="projectSection">
      <h2 className="projectHeading">Projects</h2>
      <div className="mainContainer">{allProjects}</div>
      <a
        href="https://github.com/Danishali7?tab=repositories"
        className="contactBtn btn"
        target="_blank"
        rel="noopener noreferrer"
      >
        View Code
      </a>
    </section>
  );
};

export default Projects;
