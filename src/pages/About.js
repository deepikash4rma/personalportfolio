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
          <div className="role-notes">
            <p>
              I work with sponsors and two partner orgs — most events land somewhere past 100 people when the quarter
              gets busy.
            </p>
            <p>
              Five leads roll up through me (marketing, comms, outreach, finance, mentorship). Engagement’s climbed a
              lot since we started tightening how we run things.
            </p>
          </div>
        </div>

        <div className="club-card fade-in" style={{ '--fade-delay': '0.4s' }}>
          <h4>
            👩‍💻 <a href="https://instagram.com/uclaacmw" target="_blank" rel="noopener noreferrer">ACM-W</a>
          </h4>
          <p className="club-full-name">Association for Computing Machinery – Women (ACM-W)</p>
          <p className="role-title"><strong>Co-President</strong></p>
          <p className="role-dates">Feb 2026 – Present</p>
          <div className="role-notes">
            <p>
              Day-to-day for 50+ members — budget’s in the single-digit thousands, lots of cross-committee coordination,
              and we usually land around six to eight events a quarter.
            </p>
            <p>
              The Tech Fellowship is my favorite part: hands-on full-stack and PM mentoring for dozens of students,
              almost everyone finishes, and teams ship real projects by the end.
            </p>
          </div>
        </div>

        <div className="club-card fade-in" style={{ '--fade-delay': '0.5s' }}>
          <h4>
            💻 <a href="http://www.stat.ucla.edu/~guangcheng/" target="_blank" rel="noopener noreferrer">Trustworthy AI Lab</a>
          </h4>
          <p className="role-title"><strong>Software Engineering Intern</strong></p>
          <p className="role-dates">Mar 2026 – Present</p>
          <div className="role-notes">
            <p>
              I’m on a table-reasoning chat flow — Next/React up front, LangGraph and agents on Lambda in the back.
              Streaming replies, fallbacks when things wobble, exports people can actually use, and UI that shows what
              the model’s thinking as it works.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
