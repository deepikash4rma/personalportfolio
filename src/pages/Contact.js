import React, { useState } from 'react';
import './Contact';
import './Contact.css';

function Contact() {
  const [copied, setCopied] = useState(false);
  const email = 'dpsharma@g.ucla.edu'; // replace with your real email

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="contact-container">
      <h2>Contact Me</h2>
      <p>Email: <span className="email">{email}</span></p>
      <button className="copy-button" onClick={handleCopy}>
        {copied ? 'Copied!' : 'Copy Email'}
      </button>

      <div className="social-links">
        <a href="https://github.com/yourusername" target="_blank" rel="noreferrer">GitHub</a>
        <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noreferrer">LinkedIn</a>
        {/* Add more if you want */}
      </div>
    </div>
  );
}

export default Contact;