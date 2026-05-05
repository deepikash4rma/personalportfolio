import React, { useState } from 'react';
import './Projects.css';

const projects = [
  {
    id: 1,
    name: 'TryMe! Fitness Challenge',
    stack: 'React, Node.js, MongoDB, Express',
    period: 'Oct. 2025 – Present',
    bullets: [
      'Developed a full-stack fitness tracking platform enabling users to join challenges, log daily check-ins over 7 days, and compete on real-time leaderboards with integrated avatar and profile picture functionality.',
      'Implemented challenge filtering, progress tracking UI, and user authentication; collaborated using Git feature branch workflows and stress-tested with Artillery for load performance with 15+ beta testers.',
    ],
  },
  {
    id: 2,
    name: 'Personal Portfolio Website',
    stack: 'React, Three.js, Framer Motion',
    period: 'Jan. 2025 – Present',
    link: { href: 'https://deepikash4rma.vercel.app', label: 'deepikash4rma.vercel.app' },
    bullets: [
      'Designed and developed an interactive 3D gallery-style portfolio with immersive room navigation, dynamic wall transitions, spotlight effects, and smooth animations for Home, About, Projects, and Contact.',
      'Implemented responsive navigation with Framer Motion, an intro modal with React hooks and state management, and deployed on Vercel for CI and hosting.',
    ],
  },
  {
    id: 3,
    name: '🌱 Sanctuary',
    description:
      'A mobile app designed to empower and protect women through safer commuting tools.',
  },
  {
    id: 4,
    name: '🎮 Wonky Kong',
    description:
      'A Donkey Kong–inspired game with custom art and playful levels.',
  },
];

const Projects = () => {
  const [flipped, setFlipped] = useState(() => Array(projects.length).fill(false));

  const toggleFlip = (index) => {
    setFlipped((prev) => {
      const next = [...prev];
      next[index] = !next[index];
      return next;
    });
  };

  return (
    <div className="projects-page">
      <h2 className="gallery-title fade-in">Featured Projects</h2>
      <p className="gallery-hint">Tap a card to see details</p>
      <div className="project-gallery">
        {projects.map((project, index) => (
          <div
            key={project.id}
            className="project-frame fade-in"
            style={{ '--fade-delay': `${0.1 + index * 0.08}s` }}
            role="button"
            tabIndex={0}
            aria-pressed={flipped[index]}
            aria-label={`${project.name}. ${flipped[index] ? 'Showing details' : 'Tap to show details'}`}
            onClick={() => toggleFlip(index)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                toggleFlip(index);
              }
            }}
          >
            <div className={`flip-card ${flipped[index] ? 'flipped' : ''}`}>
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <div className="flip-card-front-inner">
                    <h3>{project.name}</h3>
                    {project.stack && <p className="project-stack">{project.stack}</p>}
                    {project.period && <p className="project-period">{project.period}</p>}
                    {project.link && (
                      <a
                        className="project-link-front"
                        href={project.link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                      >
                        {project.link.label}
                      </a>
                    )}
                  </div>
                </div>
                <div className="flip-card-back">
                  <div className="flip-card-back-scroll">
                    {project.bullets ? (
                      <ul className="project-bullets">
                        {project.bullets.map((line, i) => (
                          <li key={i}>{line}</li>
                        ))}
                      </ul>
                    ) : (
                      <p className="project-description">{project.description}</p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
