
import Header from '../../Components/PageHeaderContent/Header.jsx';
import {BsInfoCircleFill} from 'react-icons/bs'
const Portfolio = () => {
  return (
    <section id='portfolio' className='portfolio'>
    <Header 
    header='My portfolio'
    icon={<BsInfoCircleFill size={40}/>}
    />

  </section>
  );
}

export default Portfolio;
