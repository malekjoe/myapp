import { useLocation } from 'react-router-dom';
import ParticlesComponent from './Particles.js';

function ParticlesWrapper() {
  const location = useLocation();
  const renderParticlesJsInHomePage = location.pathname === "/";
  return renderParticlesJsInHomePage ? <ParticlesComponent id="Particles" /> : null;
}

export default ParticlesWrapper;
