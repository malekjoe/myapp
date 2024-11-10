import Header from "../../Components/PageHeaderContent/Header.jsx";
import { useState } from "react";
import { GrProjects } from "react-icons/gr";

import Image1 from "../../Images/Image1.jpg";
import Image2 from "../../Images/Image2.jpg";
import Image3 from "../../Images/image3.jpg";
import './Portfolio.scss'
const Portfolio = () => {

  const Images = [
    {
      id: 3,
      name: "Auto Farhat",
      image: Image1,
      link : 'https://www.autofarhat.com/'
    },
    {
      id: 3,
      name: "This Portfolio",
      image: Image3,
      link : 'https://malekjoe.github.io/myapp'
    },
    {
      id: 2,
      name: "Front End Design",
      image: Image2,
      link : 'https://github.com/malekjoe/OgeroTraining.git'
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
  <img src={item.image} alt="Site_Image" />
</a>
                  </div>
                  <div className="overlay">
                    {
                      index===hoveredValue &&(
                        <div>
                          <p>{item.name}</p>
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
