import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  console.log(projects);
  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">{projects.map(item => <ProjectItem key = {item.id} name ={item.name} about = {item.about} technologies = {item.technologies}/>)} </div>
    </div>
  
  )
}

export default ProjectList;

//  projects: [
  // {
  //   id: 1,
  //   name: "Reciplease",
  //   about: "A recipe tracking app",
  //   technologies: ["Rails", "Bootstrap CSS"],
  // },