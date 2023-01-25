import React from "react";

const ProjectCont = (props) => {
  return (
    <div className="projectContainer">
      <div className="projectImgCont">
        <a
          href={props.projectLink}
          className="project"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="projectImg"
            src={props.imgSource}
            alt={props.projectName}
          />
          <h3 className="title">{props.projectName}</h3>
        </a>
      </div>
    </div>
  );
};

export default ProjectCont;
