import React from "react";
import "./Projects.css";
import { PROJECTS } from "../../utils/data";

const Projects = () => {
  return (
    <section id="projects" className="projects-container">
      <h5>Projects</h5>
      <div className="projects-grid">
        {PROJECTS.map((project) => (
          <div key={project.title} className="project-card">
            <img src={project.image} alt={project.title} className="project-image" />
            <h6>{project.title}</h6>
            <p className="project-date">{project.date}</p>
            <p className="project-description">{project.description}</p>
            <div className="project-links">
              <a href={project.codeLink} target="_blank" rel="noopener noreferrer" className="project-link">
                Code
              </a>
              <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="project-link">
                Live
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
