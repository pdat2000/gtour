import {Container} from '@mui/material';
import HeaderComponent from '../../components/HeaderComponent/HeaderComponent';
import './style.scss'

const HomePage = () => {
  return (
    <Container maxWidth="1425">
      <div className='container'>
        <HeaderComponent/>
      </div>
    </Container>
  );
};

export default HomePage;