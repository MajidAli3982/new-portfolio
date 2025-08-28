import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact' 
import Skills from './components/Skills'
import "./App.css";
import { Routes, Route } from "react-router-dom";


function App() { 
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/skills" element={<Skills />} />
      </Routes>
    </div>
  );
}

export default App;
