import './App.scss';
import { Routes, Route, useLocation } from 'react-router-dom';
import Home from './Containers/Home/home.jsx';
import About from './Containers/About/About.jsx';
import Resume from './Containers/Resume/Resume.jsx';
import Skills from './Containers/Skills/Skills.jsx';
import Portfolio from './Containers/Portfolio/Portfolio.jsx';
import Contact from './Containers/Contact/Contact.jsx';
import NavBar from './Components/NavBar/NavBar.jsx';
import ParticlesComponent from './Particles/Particles.js'





function App() {
  const location = useLocation ();
  console.log(location);

  const renderParticlesJsInHomePage = location.pathname==="/";


  return (
    <div className="App">

      {renderParticlesJsInHomePage &&
      <ParticlesComponent id="Particles"/>
      }
      
      
      <NavBar />
      
      <div className='App__Main-Page-cotent'>
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
