import logo from './logo.svg';
import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";

function App() {
  return (
    <div className="App">
      <nav>
        <Link to="/Home">Home</Link> | <Link to="/About">About</Link>
      </nav>
      <Routes>
        <Route path = "/Home" element = {<Home/>}></Route>
        <Route path = "/About" element = {<About/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
