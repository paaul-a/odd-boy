import { useState } from "react";
import "./App.css";
import { Link, Route, Routes, useNavigate } from "react-router-dom";


import Home from "./components/Home";
import About from "./components/About";
import Motion from "./components/Motion";

function App() {
  const [count, setCount] = useState(0);

  const navigate = useNavigate();

  const handleNav = () => {
    navigate(`/`);
  }

  return (
    <>
    <div className="App">
      <div className="nav">
        <div className="title">
          <p onClick={handleNav}>ODD / BOY</p>
        </div>

        <div className="nav-pages">
          <Link className="nav-link" to="/">
            <span>STILL</span>
          </Link>
          <Link className="nav-link" to="/motion">
            <span>MOTION</span>
          </Link>
          <Link className="nav-link" to="/about">
            <span>ABOUT</span>
          </Link>
        </div>

        <div className="job-des">
          <p>Photographer / Designer</p>
        </div>
      </div>

    </div>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/motion" element={<Motion/>}/>

    </Routes>
    </>
    
  );

}

export default App;
