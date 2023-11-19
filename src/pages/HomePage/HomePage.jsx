import { useEffect, useState } from 'react';
import {Container} from '@mui/material';
import HeaderComponent from '../../components/HeaderComponent/HeaderComponent';
import './style.scss'
import ContainerComponent from '../../components/ContainerComponent/ContainerComponent';

const HomePage = () => {
  const [active, setActive] = useState(true)
  const[show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const controlNavbar = () => {
    if (window.scrollY > lastScrollY) { 
      setShow(false); 
    } else { 
      setShow(true);  
    }
    if(window.scrollY > 75){
      setActive(false)
    }else {
      setActive(true)
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
      <HeaderComponent show={show} active={active}/>
      <ContainerComponent/>
    </>
  );
};

export default HomePage;