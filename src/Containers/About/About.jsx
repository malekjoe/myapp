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
    label: "age",
    value: "19",
  },
  {
    label: "address",
    value: "Beirut ,Tarik Jdide",
  },
  {
    label: "Email ",
    value: "malekjokhadar17@gmail.com",
  },
  {
    label: "contact No",
    value: "+961 81631347",
  },
];

const JobSummary =
  "As a 3rd-year computer science student at Cnam University and an intern web developer at Ogero, I balance both studying and working, developing my skills in web development using React.js. My responsibilities include building user-friendly web applications, identifying and resolving bugs, and staying updated with the latest technologies. I’m known for my creativity, and I excel in teamwork, effectively communicating with colleagues at Ogero and university. My strong problem-solving abilities and time management skills help me meet deadlines. I am passionate about becoming an engineer in software development and look forward to contributing to the field.";

const About = () => {
  return (
    <section id="about" className="about">
      <Header header="About Me " icon={<BsInfoCircleFill size={40} />} />
      <div className="about__content">
        <div className="about__content__personalWrapper">
          <Animate
            play
            duration={1.5}
            delay={1}
            start={{
              transform: "translateX(-1000px)",
              opacity:0
            }}
            end={{
              transform: "translateX(0px)",
              opacity:1
            }}
          >
            <h3>Front end developer</h3>
            <p>{JobSummary}</p>
          </Animate>
          <Animate
            play
            duration={1.5}
            delay={1}
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
            duration={1.5}
            delay={1}
            start={{
              transform: "translateX(700px)",
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
