import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import Header from "../../Components/PageHeaderContent/Header.jsx";
import { SiReaddotcv } from "react-icons/si";
import 'react-vertical-timeline-component/style.min.css'
import './Resume.scss';
import {MdWork} from 'react-icons/md';
import {} from 'react-icons/fa'
const Resume = () => {
  const data = {
    experience: [
      {
        title: "Technical Engineer - eCommerce Intern (Monty Pay)",
        subTitle: "Beirut , Hamra",
        description:
          "Strong understanding of woocommmerce , wordpress and development of customized plugins and themes using php and Payment gateways API's",
          date : "2024-present"
      },
      {
        title: "Training at Ogero (frontend developer using react.js)",
        subTitle: "Beirut , Hamra",
        description:
          ", state management, props,lifecycle methods and MUI components ,strong understanding of nested and dynamic routes ",
      date : "2024-present"
        },
      {
        title: "Customer Service Agent at Vfs Global",
        subTitle: "Beirut , Hamra",
        description:
          "Customer Relationship Management (CRM), Empathy and Patience, Conflict Resolution",
          date : "2023-2024"
        },
    
    ],
    education: [
      {
        title: "University",
        subTitle: "Conservatoire national des arts et métiers (CNAM)",
        description: "continuing my studies (Informatique | Cmputer Sciences)",
            date : "2022-present"
      },
      {
        title: "Higher Secondary",
        subTitle: "Riad Al Soloh Secondary",
        description: "Bac 2 SV with very good mention",
          date : "2019-2022"

      },
  
    ],
  };
  return (
    <section id="resume" className="resume">
      <Header header="My resume" icon={<SiReaddotcv size={40} />} />
      <div className="timeline">
        <div className="timeline__experience">
          <h3 className="timeline__experience__header-text">Experience</h3>
          <VerticalTimeline
            layout={"1-column"}
            lineColor="var(--yellow-theme-main-color)"
          >
            {data.experience.map((item, i) => (
              <VerticalTimelineElement
              contentStyle={{
                background:'none',
                color :'var( --yellow-theme-sub-text-color)',
                border :'1.5px solid var(--yellow-theme-main-color)'
              }}
              icon={<MdWork />}
              iconStyle={{
                background :'#181818',
                color :'var(--yellow-theme-main-color)'
              }}
                key={i}
                className="timeline__experience__vertical-timeline-element"

              >
                <div className="vertical-timeline-element-title-wrapper">
                  <h3>
                    {item.title}
                  </h3>
                  <h4>
                    {item.subTitle}
                  </h4>
                
                </div>
                <p className="vertical-timeline-element-title-wrapper-description">{item.description}</p>
                <h5 className="vertical-timeline-element-title-wrapper-date">{item.date}</h5>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
        <div className="timeline__education">
          <h3 className="timeline__experience__header-text">Education</h3>
          <VerticalTimeline
            layout={"1-column"}
            lineColor="var(--yellow-theme-main-color)"
          >
          {data.education.map((item, i) => (
              <VerticalTimelineElement
                key={i}
                className="timeline__experience__vertical-timeline-element"
                contentStyle={{
                  background:'none',
                  color :'var( --yellow-theme-sub-text-color)',
                  border :'1.5px solid var(--yellow-theme-main-color)'
                }}
                icon={<MdWork />}
                iconStyle={{
                  background :'#181818',
                  color :'var(--yellow-theme-main-color)'
                }}
              >
                <div className="vertical-timeline-element-title-wrapper">
                  <h3>
                    {item.title}
                  </h3>
                  <h4>
                    {item.subTitle}
                  </h4>
                
                </div>
                <p className="vertical-timeline-element-title-wrapper-description">{item.description}</p>
                <h5 className="vertical-timeline-element-title-wrapper-date">{item.date}</h5>
              </VerticalTimelineElement>
            ))}
            </VerticalTimeline>
        </div>
        
      </div>
    </section>
  );
};

export default Resume;
