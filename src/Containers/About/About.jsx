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
    value: "Beirut ,Tarik Jdide",
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
    label: "Contact No",
    value: <a href="tel:+96181631347"
     style={{
      textDecoration:"none",
      color:"inherit"

    }}
    >+961 81631347</a>,
  },
];

const JobSummary =
      "As a 3rd-year computer science student at Cnam University and a freelance web developer, I balance academic learning with hands-on experience in building user-friendly web applications using React.js and modern development tools. I take pride in delivering functional, clean, and responsive designs while debugging efficiently and staying up to date with the latest technologies. I’m known for my creativity and strong communication skills, which support effective collaboration with clients and peers. My strengths in problem-solving and time management enable me to meet tight deadlines. I am passionate about software development and eager to grow into a professional engineer who makes a meaningful impact in the tech industry."

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
            <h3>Front end developer</h3>
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
