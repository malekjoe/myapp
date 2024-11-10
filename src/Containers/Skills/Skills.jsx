
import Header from '../../Components/PageHeaderContent/Header.jsx';
import {BsInfoCircleFill} from 'react-icons/bs'
const Skills = () => {
  return (
    <section id='skills' className='skills'>
    <Header 
    header='My Skills'
    icon={<BsInfoCircleFill size={40}/>}
    />

  </section>
  );
}

export default Skills;
