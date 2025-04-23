import React, { useState } from 'react';
import './Contact.css';

function Contact() {
  const [copied, setCopied] = useState(false);
  const email = 'dpsharma@g.ucla.edu';

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="contact-container">
      <h2>Contact Me</h2>
      <p>Email: <span className="email">{email}</span></p>
      <button className="copy-button" onClick={handleCopy}>{copied ? 'Copied!' : 'Copy Email'}</button>

      <div className="social-links">
        <a href="https://github.com/deepikash4rma" target="_blank" rel="noreferrer">GitHub</a>
        <a href="https://linkedin.com/in/shar-deepika" target="_blank" rel="noreferrer">LinkedIn</a>
      </div>

      <textarea placeholder="Leave a note for me!" rows="3" className="note-box"></textarea>
    </div>
  );
}

export default Contact;