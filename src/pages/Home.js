// src/pages/Home.js
import React from 'react';
import { motion } from 'framer-motion';
import './Home';
import './Home.css';
import { FaCode, FaPaintBrush, FaRobot } from 'react-icons/fa';

function Home() {
  return (
    <motion.div
      className="home-container"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.8 }}
    >
      <h1 className="hero-title">Hi, I’m Deepika Sharma</h1>
      <p className="hero-subtitle">I build interactive, beautiful web experiences.</p>

      <div className="skills-section">
        <motion.div
          className="skill-card"
          whileHover={{ scale: 1.1, rotate: 2 }}
        >
          <FaCode size={40} />
          <p>Developer</p>
        </motion.div>
        <motion.div
          className="skill-card"
          whileHover={{ scale: 1.1, rotate: -2 }}
        >
          <FaPaintBrush size={40} />
          <p>Designer</p>
        </motion.div>
        <motion.div
          className="skill-card"
          whileHover={{ scale: 1.1, rotate: 2 }}
        >
          <FaRobot size={40} />
          <p>Creative Coder</p>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default Home;