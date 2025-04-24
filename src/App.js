import './App.scss';
import { Routes, Route, Navigate } from 'react-router-dom';

import Home from './Containers/Home/home.jsx';
import About from './Containers/About/About.jsx';
import Resume from './Containers/Resume/Resume.jsx';
import Skills from './Containers/Skills/Skills.jsx';
import Portfolio from './Containers/Portfolio/Portfolio.jsx';
import Contact from './Containers/Contact/Contact.jsx';
import NavBar from './Components/NavBar/NavBar.jsx';
import ParticlesWrapper from './Particles/ParticlesWrapper.js';
import useMediaQuery from './useMediaQuery.js';  // Import your custom hook

import { useState } from 'react';

function App() {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const handleNavbarToggle = () => {
    setNavbarOpen(!navbarOpen);
  };
  const isMobile = useMediaQuery('(max-width: 768px)');

  return (
    <div className="App">
      <ParticlesWrapper />
      <NavBar handleNavbarToggle={handleNavbarToggle} navbarOpen={navbarOpen} />

      <div className={`App__Main-Page-content ${navbarOpen && isMobile ? 'navbar-open' : ''}`}>
      <Routes>
  <Route index path="/" element={<Home />} />
  <Route path="/about" element={<About />} />
  <Route path="/resume" element={<Resume />} />
  <Route path="/skills" element={<Skills />} />
  <Route path="/portfolio" element={<Portfolio />} />
  <Route path="/contact" element={<Contact />} />
  {/* Add a wildcard route that redirects to the base path */}
  <Route path="*" element={<Navigate to="/" />} />
</Routes>

      </div>
    </div>
  );
}

export default App;
