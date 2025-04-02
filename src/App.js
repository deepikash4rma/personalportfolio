import logo from './logo.svg';
import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

function App() {
  return (
    <div className="App">
      <nav>
        <Link to="/Home">Home</Link> | <Link to="/About">About Me</Link> | <Link to="/Projects">Project Experience</Link> | <Link to="/Contact">Contact Me</Link>
      </nav>
      <Routes>
        <Route path = "/Home" element = {<Home/>}></Route>
        <Route path = "/About" element = {<About/>}></Route>
        <Route path = "/Projects" element = {<Projects/>}></Route>
        <Route path = "/Contact" element = {<Contact/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
