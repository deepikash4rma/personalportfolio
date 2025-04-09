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
      <div className = "Room">
      <div className="ceiling"></div>
        <div className="floor"></div>
        <div className="left-wall"></div>
        <div className="right-wall"></div>
      <nav className = "NavBar">
        <Link to="/Home"> Home </Link> | <Link to="/About"> About Me </Link> | <Link to="/Projects"> Project Experience </Link> | <Link to="/Contact"> Contact Me </Link>
      </nav>
      <div className="back-wall">
        <Routes>
          <Route path = "/Home" element = {<Home/>}></Route>
          <Route path = "/About" element = {<About/>}></Route>
          <Route path = "/Projects" element = {<Projects/>}></Route>
          <Route path = "/Contact" element = {<Contact/>}></Route>
        </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
