import React from "react";
import { projects } from "../helpers/Projects";
import ProjectCard from "./ProjectCard";

const Projects = ({ lanTheme, setProjectSelect }) => {
  const handleRedirect = (e) => {
    for (let i = 0; i < projects.length; i++) {
      if (projects[i].title === e.target.id) {
        setProjectSelect(projects[i]);
      }
    }
  };
  return (
    <>
      <div className="projects_container">
        {projects.map((project, i) => (
          <ProjectCard
            key={i}
            project={project}
            lanTheme={lanTheme}
            handleRedirect={handleRedirect}
          />
        ))}
      </div>
    </>
  );
};

export default Projects;
