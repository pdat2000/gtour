import {Container} from '@mui/material';
import Background from '../../assets/images/bg.mp4'
import VideoPlayer from "react-background-video-player"
import ContentComponent from '../ContentComponent/ContentComponent';
import FormComponent from '../FormComponent/FormComponent';
import PopularComponent from '../PopularComponent/PopularComponent';
import { populars } from '../../utils';
import {trips} from '../../utils/index'
import './style.scss'
import TripComponent from '../TripComponent/TripComponent';

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
        </div>
      </Container>
    </div>
  );
};

export default ContainerComponent;