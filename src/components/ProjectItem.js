import React from "react";

function ProjectItem({ name, about, technologies }) {
  const technologiesList = technologies.map((tech) => (
    <span key={tech}>{tech}</span>
  ));
  return (
    <div className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
    
    <span className="technologies">{technologiesList} </span>
      
    </div>
      )
      }

export default ProjectItem;
