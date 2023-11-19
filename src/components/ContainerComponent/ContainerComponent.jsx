import {Container} from '@mui/material';
import Background from '../../assets/images/bg.mp4'
import VideoPlayer from "react-background-video-player"
import ContentComponent from '../ContentComponent/ContentComponent';
import FormComponent from '../FormComponent/FormComponent';
import './style.scss'

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
            style={{ marginTop: '300px' }}
          >
            <FormComponent/>
          </ContentComponent>
        </div>
      </Container>
    </div>
  );
};

export default ContainerComponent;