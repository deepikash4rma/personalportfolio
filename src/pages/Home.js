import React from 'react';
import './Home.css';
import portrait from '../assets/headshot.jpg'; // Update this path if needed

const Home = () => {
  return (
    <div className="home-wall">
      <div className="spotlight-beam" />

      <div className="gallery-frame">
        <img src={portrait} alt="Deepika Sharma" className="portrait" />
        <h1 className="plaque-title">Deepika Sharma</h1>
        <h2 className="plaque-subtitle">
          UCLA student, software developer, and flautist.
        </h2>
        <p className="plaque-signature">— Designed & developed by me!</p>
      </div>
    </div>
  );
};

export default Home;