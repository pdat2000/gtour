import { useEffect, useState } from 'react';
import {Container} from '@mui/material';
import HeaderComponent from '../../components/HeaderComponent/HeaderComponent';
import './style.scss'
import ContainerComponent from '../../components/ContainerComponent/ContainerComponent';

const HomePage = () => {
  const[show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const controlNavbar = () => {
    if (window.scrollY > lastScrollY) { 
      setShow(false); 
    } else { 
      setShow(true);  
    }
    setLastScrollY(window.scrollY); 
  };

  useEffect(() => {
    window.addEventListener('scroll', controlNavbar);
    return () => {
       window.removeEventListener('scroll', controlNavbar);
    };
  }, [lastScrollY]);
  return (
    <>
      <HeaderComponent show={show}/>
      <ContainerComponent/>
      <Container maxWidth="1425">
        <div className='container'>
        </div>
      </Container>
    </>
  );
};

export default HomePage;