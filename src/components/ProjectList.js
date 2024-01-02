import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  console.log(projects);
  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list"> {projects.map((project)=> (
          <ProjectItem 
          key= {project.id}
          name={project.name}
          about= {project.about}
          technologies={project.technologies}/>))/* render a <span> for each technology in the technologies array */}</div>
    </div>
  );
}

export default ProjectList;
