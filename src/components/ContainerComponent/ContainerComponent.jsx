import {Container} from '@mui/material';
import Background from '../../assets/images/bg.mp4'
import VideoPlayer from "react-background-video-player"
import ContentComponent from '../ContentComponent/ContentComponent';
import FormComponent from '../FormComponent/FormComponent';
import PopularComponent from '../PopularComponent/PopularComponent';
import { populars } from '../../utils';
import {trips} from '../../utils/index'
import {images} from '../../utils/index'
import './style.scss'
import TripComponent from '../TripComponent/TripComponent';
import ChooseComponent from '../ChooseComponent/ChooseComponent';
import Bright from '../../assets/images/bright.jpg'
import TipComponent from '../TipComponent/TipComponent';
import FooterComponent from '../FooterComponent/FooterComponent';

const ContainerComponent = () => {
  return (
    <div className="container-content">
      <VideoPlayer
        className="video"
        src={Background}
        autoPlay={true}
        muted={true}
      />
      <Container maxWidth="1425">
        <div className='container'>
          <ContentComponent 
            title='Where do you want to go?' 
            description='Trips, experiences, and places. All in one service.' 
            color='#fff' 
            style={{ marginTop: '300px' }}
          >
            <FormComponent/>
          </ContentComponent>
          <ContentComponent 
            title='Popular Destinations' 
            description="'World's best tourist destinations"  
            style={{ marginTop: '400px' }}
          >
            <PopularComponent populars={populars}/>
          </ContentComponent>
          <ContentComponent 
            title='Best Value Trips' 
            description="Best offers trips from us"  
            style={{ marginTop: '100px'}}
          >
            <TripComponent trips={trips}/>
          </ContentComponent>
          <ContentComponent 
            title='Why Choose Us' 
            description="Here are reasons you should plan trip with us"  
            style={{ marginTop: '100px'}}
          >
            <ChooseComponent/>
          </ContentComponent>
        </div>
      </Container>
      <img className="container-bright" src={Bright} alt='bright'/>
      <Container maxWidth="1425">
        <div className='container'>
          <ContentComponent 
            title='Articles & Tips' 
            description="'Explore some of the best tips from around the world"  
            style={{ marginTop: '50px' }}
          >
           <TipComponent/>
          </ContentComponent>
        </div>
      </Container>
      <div className='container-footer'>
        <Container maxWidth="1425">
          <div className='container'>
            <FooterComponent images={images}/>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default ContainerComponent;