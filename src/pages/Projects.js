import React, { useState } from 'react';
import './Projects.css';

const projects = [
  {
    id: 1,
    name: 'TryMe! Fitness Challenge',
    stack: ['React', 'Node.js', 'MongoDB', 'Express'],
    period: 'Oct. 2025 – present',
    github: 'https://github.com/parnika-c/try-me',
    notes: [
      'Week-long challenges, daily check-ins, and leaderboards that actually update live — plus avatars so it feels a bit more human.',
      'Built auth and filtering on the side; we used Git branches like grown-ups and threw Artillery at it before a crew of ~15 friends beta tested.',
    ],
  },
  {
    id: 2,
    name: 'Personal portfolio',
    stack: ['React', 'Three.js', 'Framer Motion'],
    period: 'Jan. 2025 – present',
    site: { href: 'https://deepikash4rma.vercel.app', label: 'Live site' },
    github: 'https://github.com/deepikash4rma/personalportfolio',
    notes: [
      'A 3D “room” you click through — walls, spotlight, smooth transitions between Home, About, Projects, Contact.',
      'Framer Motion for motion, hooks for the intro modal, and Vercel so deploys stay boring (in a good way).',
    ],
  },
  {
    id: 3,
    name: 'Travel Buddies',
    stack: ['React', 'Vite'],
    period: 'Collaborative',
    github: 'https://github.com/shruti-narayanan27/travelbuddies',
    notes: [
      'Trip-planning vibes with friends — split architecture between teammates; my lane was frontend polish and wiring flows together.',
      'Lightweight Vite + React setup so we could iterate fast.',
    ],
  },
  {
    id: 4,
    name: '🌱 Sanctuary',
    stack: ['Mobile'],
    github: 'https://github.com/deepikash4rma/Sanctuary',
    notes: [
      'Ideas around safer commuting and peace of mind on the way home — early UX and direction work.',
    ],
  },
  {
    id: 5,
    name: '🎮 Wonky Kong',
    stack: ['Game'],
    notes: [
      'Classic arcade vibes, custom art, levels that don’t take themselves too seriously.',
    ],
  },
];

const Projects = () => {
  const [openId, setOpenId] = useState(null);

  const toggle = (id) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <div className="projects-page">
      <header className="projects-header fade-in">
        <h2 className="gallery-title">Projects</h2>
        <p className="gallery-sub">
          Click a frame to read more — click again or pick another to collapse.
        </p>
      </header>

      <div className="project-gallery" role="list">
        {projects.map((project, index) => {
          const isOpen = openId === project.id;
          const hasLinks = Boolean(project.site || project.github);
          return (
            <article
              key={project.id}
              className={`project-tile fade-in ${isOpen ? 'project-tile--open' : ''}`}
              style={{ '--fade-delay': `${0.06 + index * 0.05}s` }}
              role="listitem"
            >
              <div className="project-tile__face">
                <button
                  type="button"
                  className="project-tile__trigger"
                  aria-expanded={isOpen}
                  aria-controls={`project-panel-${project.id}`}
                  id={`project-trigger-${project.id}`}
                  onClick={() => toggle(project.id)}
                >
                  <span className="project-tile__frame" aria-hidden />
                  <span className="project-tile__top">
                    <span className="project-tile__title">{project.name}</span>
                    <span className="project-tile__chev" aria-hidden>
                      {isOpen ? '−' : '+'}
                    </span>
                  </span>
                  <span className="project-tile__meta">
                    {project.stack.map((tag) => (
                      <span key={tag} className="project-tag">
                        {tag}
                      </span>
                    ))}
                    {project.period && (
                      <span className="project-tile__period">{project.period}</span>
                    )}
                  </span>
                </button>
                {hasLinks && (
                  <div className="project-tile__links">
                    {project.site && (
                      <a
                        className="project-tile__link project-tile__link--live"
                        href={project.site.href}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {project.site.label}
                      </a>
                    )}
                    {project.github && (
                      <a
                        className="project-tile__link project-tile__link--git"
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        GitHub
                      </a>
                    )}
                  </div>
                )}
              </div>

              <div
                className={`project-tile__panel ${isOpen ? 'project-tile__panel--open' : ''}`}
                id={`project-panel-${project.id}`}
                role="region"
                aria-labelledby={`project-trigger-${project.id}`}
                aria-hidden={!isOpen}
              >
                <div className="project-tile__panel-inner">
                  <div className="project-tile__notes">
                    {project.notes.map((para, i) => (
                      <p key={i}>{para}</p>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
