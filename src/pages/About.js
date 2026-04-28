import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="content-frame">
      <h2 className="about-title fade-in">About Me</h2>

      <div className="frame-mount fade-in" style={{ '--fade-delay': '0.1s' }}>
        <p>
          Hi, I’m Deepika, a Computer Science and Linguistics student at UCLA with minors in Mathematics and Data Science Engineering.
          I’m passionate about designing meaningful, user-centered technology, and I’m always excited to connect with others and explore new ways to create with code.
          I currently intern at UCLA's Trustworthy AI Lab and serve in leadership roles within various clubs,
          where I help organize tech-focused initiatives and community events on campus.
        </p>
        <p className="meta-label">Updated May 2026</p>
      </div>

      <h3 className="club-header fade-in" style={{ '--fade-delay': '0.2s' }}>Campus Involvements</h3>

      <div className="club-gallery">
        <div className="club-card fade-in" style={{ '--fade-delay': '0.3s' }}>
          <h4>
            📊 <a href="https://instagram.com/umsaatucla" target="_blank" rel="noopener noreferrer">UMSA</a>
          </h4>
          <p><strong>Vice President</strong></p>
          <p>Designed and managed promotional campaigns to increase engagement for academic and networking events.</p>
          <p className="meta-label">Feb 2025 - Present</p>
        </div>

        <div className="club-card fade-in" style={{ '--fade-delay': '0.4s' }}>
          <h4>
            👩‍💻 <a href="https://instagram.com/uclaacmw" target="_blank" rel="noopener noreferrer">ACM-W</a>
          </h4>
          <p><strong>Co-President</strong></p>
          <p>Lead ACM-W’s Technology Fellowship Program, mentoring students and organizing workshops to help peers explore full-stack development and product management.</p>
          <p className="meta-label">Feb 2026 - Present</p>
        </div>

        <div className="club-card fade-in" style={{ '--fade-delay': '0.6s' }}>
          <h4>
            💻 <a href="http://www.stat.ucla.edu/~guangcheng/" target="_blank" rel="noopener noreferrer">DevX</a>
          </h4>
          <p><strong>Software Engineering Intern</strong></p>
          <p>Built a conversational table-reasoning workflow with a Next.js/React frontend and a LangGraph/MultiTableAgent
            backend on AWS Lambda, including streaming responses, fallback handling, exportable table outputs, and
            persisted per-message thinking/tool status. </p>
          <p className="meta-label">Mar 2026 - Present</p>
        </div>
      </div>
    </div>
  );
};

export default About;