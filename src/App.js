import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import NavBar from './pages/NavBar';
import Zoom from './pages/Zoom';
import IntroModal from './pages/IntroModal';
import './App.css';

function App() {
  const [activeWall, setActiveWall] = useState('home');
  const [hasSeenIntro, setHasSeenIntro] = useState(false);
{!hasSeenIntro && <IntroModal onClose={() => setHasSeenIntro(true)} />}

return (
  <div className="App">
    {!hasSeenIntro && <IntroModal onClose={() => setHasSeenIntro(true)} />}

    <div className="NavBar">
      <Link onClick={() => setActiveWall('home')}>Home</Link>
      <Link onClick={() => setActiveWall('about')}>About</Link>
      <Link onClick={() => setActiveWall('projects')}>Projects</Link>
      <Link onClick={() => setActiveWall('contact')}>Contact</Link>
    </div>

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