import React, { useState } from 'react';
import Zoom from './Zoom';
import './Projects.css';

const Projects = () => {
  const projects = [
    { id: 1, name: "$ Cheque-r", description: "A mobile app that helps users track debts and send payment reminders." },
    { id: 2, name: "🌱 Sanctuary", description: "A mobile app designed to empower and protect women through safer commuting tools." },
    { id: 3, name: "🎮 Wonky Kong", description: "A Donkey Kong–inspired game with custom art and playful levels." },
  ];

  const [flipped, setFlipped] = useState(Array(projects.length).fill(false));

  const toggleFlip = (index) => {
    setFlipped((prev) => {
      const newFlips = [...prev];
      newFlips[index] = !newFlips[index];
      return newFlips;
    });
  };

  return (
    <div className="content-frame">
      <h2 className="gallery-title fade-in">Featured Projects</h2>
      <div className="project-gallery">
        {projects.map((project, index) => (
          <Zoom key={project.id}>
            <div
              className="project-frame fade-in"
              style={{ '--fade-delay': `${0.1 + index * 0.1}s` }}
              onClick={() => toggleFlip(index)}
            >
              <div className={`flip-card ${flipped[index] ? 'flipped' : ''}`}>
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <h3>{project.name}</h3>
                  </div>
                  <div className="flip-card-back">
                    <p>{project.description}</p>
                  </div>
                </div>
              </div>
            </div>
          </Zoom>
        ))}
      </div>
    </div>
  );
}