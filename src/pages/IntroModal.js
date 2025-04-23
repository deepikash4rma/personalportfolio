import React, { useState, useEffect } from 'react';
import './IntroModal.css';

const IntroModal = ({ onClose }) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => setVisible(false), 6000);
    return () => clearTimeout(timeout);
  }, []);

  if (!visible) return null;

  return (
    <div className="intro-modal" onClick={() => { setVisible(false); onClose(); }}>
      <div className="intro-content">
      <h1>
         Welcome to  <br />
         Deepika’s Digital Gallery
    </h1>
        <p>Explore the space by clicking around.</p>
        <button onClick={() => { setVisible(false); onClose(); }}>Enter</button>
      </div>
    </div>
  );
};

export default IntroModal;