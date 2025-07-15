import Header from "../../Components/PageHeaderContent/Header.jsx";
import { useState } from "react";
import { GrProjects } from "react-icons/gr";

import './Portfolio.scss'
const Portfolio = () => {

  const Images = [
    {
      id: 3,
      name: "Stock Management System",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      link: 'https://youtu.be/XeQt4KEFys8',
      description: "A comprehensive stock management system with real-time tracking, inventory control, and analytics dashboard."
    },
    {
      id: 3,
      name: "Clinic Management System",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", // coding themed image
      link: 'https://youtu.be/FoMt5utWpFs',
      description: "A modern clinic management system for appointments, patient records, billing, and staff coordination."
    },
    {
      id: 3,
      name: "Auto Farhat",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      link: 'https://www.autofarhat.com/',
      description: "Informative website for moving company."
    },
    {
      id: 2,
      name: "Front End Design",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2015&q=80",
      link: 'https://github.com/malekjoe/OgeroTraining.git',
      description: "Modern responsive web design with interactive components and animations."
    },
  ];
  const filterData = [
    {
      filterId: 1,
      label: "All",
    },
    {
      filterId: 2,
      label: "Design",
    },
    {
      filterId: 3,
      label: "Development",
    },
  ];

  const [filteredvalue,setFilteredvalue]=useState(1);
  const [hoveredValue,setHoveredvalue] =useState(null)
  function handleFilter (currentId){
    setFilteredvalue(currentId)

  };
  const filterdItem = filteredvalue ===1 ? Images :
  Images.filter(item=>item.id===filteredvalue);

  function handleHover(index){
    setHoveredvalue(index)
  }

  return (
    <section id="portfolio" className="portfolio">
      <Header header="My portfolio" icon={<GrProjects size={40} />} />
      <div className="portfolio__content">
        <ul className="portfolio__content__filter">
          {filterData.map((item, index) => (
            <li className={item.filterId === filteredvalue ? 'active' :''} onClick={()=>handleFilter(item.filterId)} key={item.filterId}>{item.label}</li>
          ))}
        </ul>
        <div className="portfolio__content__cards">
          {
            filterdItem.map((item,index)=>(
            <div key={`cardsItem${item.name.trim()}`} className="portfolio__content__cards__item" 
            onMouseEnter={()=>handleHover(index)}
            onMouseLeave={()=>handleHover(null)}>
              
                  <div className="portfolio__content__cards__item__image-wrapper">
                  <a href={item.link} target="_blank" rel="noopener noreferrer">
  <img src={item.image} alt={item.name} />
</a>
                  </div>
                  <div className="overlay">
                    {
                      index===hoveredValue &&(
                        <div>
                          <p>{item.name}</p>
                          <p className="description">{item.description}</p>
                          <button onClick={() => window.open(item.link, '_blank')}>Visit</button>
                        </div>
                      )
                    }
                  </div>
            </div>  
            ))
          }

        </div>
      </div>
    </section>
  );
};

export default Portfolio;
