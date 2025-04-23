import React from 'react';
import Zoom from './Zoom';
import './Projects.css';

const Projects = () => {
  const projects = [
    { id: 1, name: "Interactive Exhibit", description: "A dynamic display of multimedia experiences." },
    { id: 2, name: "Virtual Archive", description: "Digitized documents and ancient texts." },
    { id: 3, name: "Generative Art", description: "AI-assisted art created in real-time." },
    { id: 4, name: "Finance Dashboard", description: "Live metrics visualized for decision-making." },
    { id: 5, name: "Language Explorer", description: "Tools for analyzing linguistic patterns." }
  ];

  return (
    <div className="content-frame">
      <h2 className="gallery-title fade-in">🖼️ Featured Projects</h2>
      <div className="project-gallery">
        {projects.map((project, index) => (
          <Zoom key={project.id}>
            <div className="project-frame fade-in" style={{ '--fade-delay': `${0.1 + index * 0.1}s` }}>
              <div className="project-card">
                <h3>{project.name}</h3>
                <p>{project.description}</p>
              </div>
            </div>
          </Zoom>
        ))}
      </div>
    </div>
  );
};

export default Projects;