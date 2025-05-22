import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Skills from "./pages/Skills";
import ProjectGarage from "./pages/ProjectGarage";
import Background from "./components/background";
import Backend from "./pages/Backend";
import { Analytics } from '@vercel/analytics/react';



function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<ProjectGarage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/background" element={<Background />} />
          <Route path="/backend" element={<Backend />} />
        </Routes>
        <Analytics />
      </div>
    </Router>
  );
}

export default App;
