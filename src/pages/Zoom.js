import React, { useState } from 'react';
import './Zoom.css';

const Zoom = ({ children }) => {
  const [zoomed, setZoomed] = useState(false);

  return (
    <>
      <div className={`zoom-overlay ${zoomed ? 'active' : ''}`} onClick={() => setZoomed(false)} />
      <div className={`zoom-container ${zoomed ? 'zoomed' : ''}`} onClick={() => setZoomed(true)}>
        {children}
      </div>
    </>
  );
};

export default Zoom;