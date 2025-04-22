import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

function App() {
  const [activeWall, setActiveWall] = useState('home'); // Track the current wall

  const handleNavigation = (wall) => {
    setActiveWall(wall); // Change the wall when a link is clicked
  };

  return (
    <div className="App">
      <div className="Room">
        {/* Walls */}
        <div className={`wall back-wall ${activeWall === 'home' ? 'active' : ''}`}>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
        <div className={`wall front-wall ${activeWall === 'contact' ? 'active' : ''}`}>
          <Routes>
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
        <div className={`wall left-wall ${activeWall === 'about' ? 'active' : ''}`}>
          <Routes>
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
        <div className={`wall right-wall ${activeWall === 'projects' ? 'active' : ''}`}>
          <Routes>
            <Route path="/projects" element={<Projects />} />
          </Routes>
        </div>

        {/* Navigation */}
        <nav className="NavBar">
          <Link to="/" onClick={() => handleNavigation('home')}>Home</Link>
          <Link to="/about" onClick={() => handleNavigation('about')}>About</Link>
          <Link to="/projects" onClick={() => handleNavigation('projects')}>Projects</Link>
          <Link to="/contact" onClick={() => handleNavigation('contact')}>Contact</Link>
        </nav>
      </div>
    </div>
  );
}

export default App;