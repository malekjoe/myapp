import Header from "../../Components/PageHeaderContent/Header.jsx";
import './Skills.scss';
import { GiSkills } from "react-icons/gi";

import { Animate, AnimateKeyframes } from "react-simple-animate";
import { Line } from "rc-progress";
const Skills = () => {
  const SkillsData = [
    {
      label: "Front End",
      data: [
        {
          skillName: "HTML",
          percentage: "100",
        },
        {
          skillName: "CSS",
          percentage: "90",
        },
        {
          skillName: "Javascript",
          percentage: "90",
        },
        {
          skillName: "React.js",
          percentage: "80",
        },
      ],
    },
    {
      label: "Back ENd",
      data: [
        {
          skillName: "JAVA",
          percentage: "70",
        },

        {
          skillName: "PHP",
          percentage: "60",
        },
        {
          skillName: "Laravel",
          percentage: "60",
        },
        {
          skillName: "PL/SQL",
          percentage: "70",
        },
      
        {
          skillName : "Node.js",
          percentage : "60"
        }

      
      ],
    },
    {
      label: "DATABASES",
      data: [
        {
          skillName: "ORACLE",
          percentage: "70",
        },

        {
          skillName: "MONGODB",
          percentage: "60",
        },
        {
          skillName: "MYSQL",
          percentage: "40",
        },
        {
          skillName: "POSTGRESQL",
          percentage: "40",
        }
      ],
    },
    {
      label: "Wordpress",
      data: [
        {
          skillName: "WooCommerce",
          percentage: "80",
        },
        {
          skillName: "Elementor Plugin",
          percentage: "90",
        },

        
        {
          skillName: "Theme Customization and integration",
          percentage: "70",
        },
        {
          skillName: "plugins customization",
          percentage: "70",
        }
      ],
    }
  ];

  return (
    <section id="skills" className="Skills">
      <Header header="My Skills" icon={<GiSkills size={40} />} />

      <div className="Skills__content-wrapper">
        {SkillsData.map((item, i) => (
          <div className="Skills__content-wrapper__innerContent" key={i}>
            <Animate
              play
              duration={1}
              delay={0.3}
              start={{
                transform: "translateX(-200px)",
              }}
              end={{
                transform: "translateX(0px)",
              }}
            >
              <h3 className="Skills__content-wrapper__innerContent__Category-text">
                {item.label}
              </h3>
              <div className="Skills__content-wrapper__innerContent__progressbar-container">
                {item.data.map((skillItem, j) => (
                  <AnimateKeyframes
                    play
                    duration={1}
                    keyframes={["opacity:1", "opacity:0"]}
                    iterationCount="1"
                  >
                    <div className="progressBar-wrapper" key={j}>
                      <p>{skillItem.skillName}</p>
                      <Line
                        percent={skillItem.percentage}
                        strokeWidth="2"
                        strokeColor="var(--yellow-theme-main-color)"
                        trailWidth={"3"}
                        strokeLinecap="square"
                      />
                    </div>
                  </AnimateKeyframes>
                ))}
              </div>
            </Animate>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
