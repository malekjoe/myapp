
import Header from '../../Components/PageHeaderContent/Header.jsx';
import {BsInfoCircleFill} from 'react-icons/bs'
const Resume = () => {
  return (
    <section id='resume' className='resume'>
    <Header 
    header='My resume'
    icon={<BsInfoCircleFill size={40}/>}
    />

  </section>
  );
}

export default Resume;
