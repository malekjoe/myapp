import "./home.scss";
import { useNavigate } from "react-router-dom";
import {Animate} from 'react-simple-animate'
const Home = () => {
  const navigate=useNavigate();
  const handleNavigate =()=>{
   navigate('/contact')

  }
  return (
    <section id="home" className="home">
      <div className="home_text_wrapper">
        <h1>
          Hello , I'm Malek
          <br />
          Front end Developer
        </h1>
      </div>
      <Animate
      play
      duration={0.5}
      delay={0.8}
      start={{
        transform : 'translateY(550px)'
      }}
      end={{
        transform : 'translateY(0px)'
      }}
      >
      <div className="home__contact-me">
        <button onClick={handleNavigate}>Hire Me</button>
      </div>
      </Animate>
      
    </section>
  );
};

export default Home;
