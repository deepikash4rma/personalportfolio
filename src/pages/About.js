import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="content-frame">
      <h2 className="about-title fade-in">👋 About Me</h2>

      <div className="frame-mount fade-in" style={{ '--fade-delay': '0.1s' }}>
        <p>
          Hi, I’m Deepika — a Computer Science and Linguistics student at UCLA with a minor in Mathematics.
          I’m passionate about designing meaningful, user-centered technology, and I’m always excited to connect with others and explore new ways to create with code.
          I currently serve in leadership roles within various clubs at UCLA,
          where I help organize tech-focused initiatives and community events on campus.
        </p>
        <p className="meta-label">Updated April 2025</p>
      </div>

      <h3 className="club-header fade-in" style={{ '--fade-delay': '0.2s' }}>Campus Involvements</h3>

      <div className="club-gallery">
        <div className="club-card fade-in" style={{ '--fade-delay': '0.3s' }}>
          <h4>
            📊 <a href="https://instagram.com/umsaatucla" target="_blank" rel="noopener noreferrer">UMSA</a>
          </h4>
          <p><strong>Director of Marketing</strong></p>
          <p>Promoting events and designing visuals for the Undergraduate Mathematics Student Association.</p>
          <p className="meta-label">Mar 2025 - Present</p>
        </div>

        <div className="club-card fade-in" style={{ '--fade-delay': '0.4s' }}>
          <h4>
            👩‍💻 <a href="https://instagram.com/uclaacmw" target="_blank" rel="noopener noreferrer">ACM-W</a>
          </h4>
          <p><strong>Projects Officer</strong></p>
          <p>Organizing and supporting technical project teams for women in computing.</p>
          <p className="meta-label">Nov 2024 - Present</p>
        </div>

        <div className="club-card fade-in" style={{ '--fade-delay': '0.5s' }}>
          <h4>
            🎨 <a href="https://instagram.com/creativelabsucla" target="_blank" rel="noopener noreferrer">Creative Labs</a>
          </h4>
          <p><strong>Frontend Developer</strong></p>
          <p>Building user interfaces and collaborating with cross-functional creative teams.</p>
          <p className="meta-label">Jan 2025 - Mar 2025</p>
        </div>

        <div className="club-card fade-in" style={{ '--fade-delay': '0.6s' }}>
          <h4>
            💻 <a href="https://instagram.com/ucladevx" target="_blank" rel="noopener noreferrer">DevX</a>
          </h4>
          <p><strong>Software Development Intern</strong></p>
          <p>Contributing to student-led products through code, feedback, and iteration.</p>
          <p className="meta-label">Feb 2025 - Present</p>
        </div>
      </div>
    </div>
  );
};

export default About;