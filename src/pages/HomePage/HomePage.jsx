import {Container} from '@mui/material';
import HeaderComponent from '../../components/HeaderComponent/HeaderComponent';
import './style.scss'

const HomePage = () => {
  return (
    <Container maxWidth="sm">
      <HeaderComponent/>
    </Container>
  );
};

export default HomePage;