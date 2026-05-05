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
          <p className="club-full-name">Undergraduate Mathematics Student Association</p>
          <p className="role-title"><strong>Vice President</strong></p>
          <p className="role-dates">Feb 2025 – Present</p>
          <ul className="role-bullets">
            <li>
              Lead sponsor outreach and maintain partnerships with 2 external organizations, coordinating logistics for
              8–10 events per quarter with 100+ attendees per event.
            </li>
            <li>
              Direct 5 functional leads (marketing, communications, outreach, finance, mentorship), overseeing the
              execution of club initiatives and driving 30%+ growth in engagement.
            </li>
          </ul>
        </div>

        <div className="club-card fade-in" style={{ '--fade-delay': '0.4s' }}>
          <h4>
            👩‍💻 <a href="https://instagram.com/uclaacmw" target="_blank" rel="noopener noreferrer">ACM-W</a>
          </h4>
          <p className="club-full-name">Association for Computing Machinery – Women (ACM-W)</p>
          <p className="role-title"><strong>Co-President</strong></p>
          <p className="role-dates">Feb 2026 – Present</p>
          <ul className="role-bullets">
            <li>
              Oversee operations for a community of 50+ members, managing an $8K+ budget, coordinating logistics, and
              collaborating across ACM committees to execute 6–8 events per quarter.
            </li>
            <li>
              Lead the Technology Fellowship Program, mentoring 50–60 students through full-stack development and
              product management, with a 90%+ completion rate and 10+ projects delivered in teams.
            </li>
          </ul>
        </div>

        <div className="club-card fade-in" style={{ '--fade-delay': '0.5s' }}>
          <h4>
            💻 <a href="http://www.stat.ucla.edu/~guangcheng/" target="_blank" rel="noopener noreferrer">Trustworthy AI Lab</a>
          </h4>
          <p className="role-title"><strong>Software Engineering Intern</strong></p>
          <p className="role-dates">Mar 2026 – Present</p>
          <p>
            Built a conversational table-reasoning workflow with a Next.js/React frontend and a LangGraph/MultiTableAgent
            backend on AWS Lambda, including streaming responses, fallback handling, exportable table outputs, and
            persisted per-message thinking/tool status.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
