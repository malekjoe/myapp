import React from "react";
import Header from "../../Components/PageHeaderContent/Header.jsx";
import { BsInfoCircleFill } from "react-icons/bs";
import { Animate } from "react-simple-animate";
import "./About.scss";
import { DiReact, DiJava, DiJavascript, DiMysql } from "react-icons/di";
import { FaDev, FaDatabase } from "react-icons/fa";
const personalDetails = [
  {
    label: "Name",
    value: "Malek Jokhadar",
  },
  {
    label: "Age",
    value: "20",
  },
  {
    label: "Address",
    value: "Lebanon ,Beirut",
  },
  {
    label: "Email ",
    value: (
      <a href="mailto:malekjokhadar17@gmail.com"
      style={{
        textDecoration:"none",
        color:"inherit"
  
      }}
      >malekjokhadar17@gmail.com</a>
    ),
  },
  {
    label: "Linkedin",
    value: (
      <a href="https://www.linkedin.com/in/malek-jokhadar-328a56188/"
      style={{
        textDecoration:"none",
        color:"inherit"
  
      }}
      >malek jokhadar</a>
    ),
  }
 
];

const JobSummary =
  "As a 3rd-year computer science student at Cnam University and an intern web developer at Ogero and intern technical engineer at Monty Pay, I balance both studying and working, developing my skills in web development using React.js and customizing payment gateways plugins.  My responsibilities include building user-friendly web applications, identifying and resolving bugs, and staying updated with the latest technologies. I’m known for my creativity, and I excel in teamwork, effectively communicating with colleagues at Ogero and university. My strong problem-solving abilities and time management skills help me meet deadlines. I am passionate about becoming an engineer in software development and look forward to contributing to the field.";

const About = () => {
  return (
    <section id="about" className="about">
      <Header header="About Me " icon={<BsInfoCircleFill size={40} />} />
      <div className="about__content">
        <div className="about__content__personalWrapper">
          <Animate
            play
            duration={1.0}
    
            start={{
              transform: "translateX(-1000px)",
              opacity:0
            }}
            end={{
              transform: "translateX(0px)",
              opacity:1
            }}
          >
            <h3>Full Stack Developer</h3>
            <p>{JobSummary}</p>
          </Animate>
          <Animate
            play
            duration={1.0}
          
            start={{
              transform: "translateX(600px)",
              opacity:0
            }}
            end={{
              transform: "translateX(0px)",
              opacity:1
            }}
          >
            <h3 className="personalInformationHeaderPage">
              Personal Inforamtion
            </h3>
            <ul>
              {personalDetails.map((item, i) => (
                <li key={i}>
                  <span className="title">{item.label}</span>
                  <span className="value">{item.value}</span>
                </li>
              ))}
            </ul>
          </Animate>
        </div>
        <div className="about__content__servicesWrapper">
        <Animate
            play
            duration={1.0}
            delay={0.5}
            start={{
              transform: "translateX(250px)",
              opacity:0
            }}
            end={{
              transform: "translateX(0px)",
              opacity:1
            }}
          >
          <div className="about__content__servicesWrapper__innerContent">
          <div>
            <FaDev size={60} color="var(--yellow-theme-main-color)" />
          </div>
          <div>
            <DiReact size={60} color="var(--yellow-theme-main-color)" />
          </div>
          <div>
            <DiJava size={60} color="var(--yellow-theme-main-color)" />
          </div>
          <div>
            <DiJavascript size={60} color="var(--yellow-theme-main-color)" />
          </div>
          <div>
            <FaDatabase size={60} color="var(--yellow-theme-main-color)" />
          </div>
          <div>
            <DiMysql size={60} color="var(--yellow-theme-main-color)" />
          </div>
        
        </div>
        </Animate>
        </div>
      
      </div>
    </section>
  );
};

export default About;
