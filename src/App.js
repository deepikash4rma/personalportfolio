import React, { useState } from 'react';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import IntroModal from './pages/IntroModal';
import './App.css';
import './pages/NavBar.css';

function App() {
  const [activeWall, setActiveWall] = useState('home');
  const [hasSeenIntro, setHasSeenIntro] = useState(false);

  return (
  <div className="App">
    {!hasSeenIntro && <IntroModal onClose={() => setHasSeenIntro(true)} />}

    <nav className="NavBar" aria-label="Main">
      <button
        type="button"
        className={activeWall === 'home' ? 'active' : ''}
        onClick={() => setActiveWall('home')}
      >
        Home
      </button>
      <button
        type="button"
        className={activeWall === 'about' ? 'active' : ''}
        onClick={() => setActiveWall('about')}
      >
        About
      </button>
      <button
        type="button"
        className={activeWall === 'projects' ? 'active' : ''}
        onClick={() => setActiveWall('projects')}
      >
        Projects
      </button>
      <button
        type="button"
        className={activeWall === 'contact' ? 'active' : ''}
        onClick={() => setActiveWall('contact')}
      >
        Contact
      </button>
    </nav>

    <div className="Room">
      <div className={`Wall back-wall ${activeWall === 'home' ? 'active' : ''}`}>
        <div className="content-frame"><Home /></div>
      </div>
      <div className={`Wall left-wall ${activeWall === 'about' ? 'active' : ''}`}>
        <div className="content-frame"><About /></div>
      </div>
      <div className={`Wall right-wall ${activeWall === 'projects' ? 'active' : ''}`}>
        <div className="content-frame"><Projects /></div>
      </div>
      <div className={`Wall front-wall ${activeWall === 'contact' ? 'active' : ''}`}>
        <div className="content-frame"><Contact /></div>
      </div>

      <div className="Floor" />
      <div className="Ceiling">
        <div className="spotlight"></div>
        <div className="spotlight"></div>
      </div>
    </div>
  </div>
);
}

export default App;