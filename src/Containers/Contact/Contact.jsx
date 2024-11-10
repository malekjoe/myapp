
import Header from '../../Components/PageHeaderContent/Header.jsx';
import {BsInfoCircleFill} from 'react-icons/bs'
const Contact = () => {
  return (
    <section id='contact' className='contact'>
    <Header 
    header='My contact'
    icon={<BsInfoCircleFill size={40}/>}
    />

  </section>
  );
}

export default Contact;
