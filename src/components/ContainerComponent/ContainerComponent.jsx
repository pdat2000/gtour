import {Container} from '@mui/material';
import Background from '../../assets/images/bg.mp4'
import VideoPlayer from "react-background-video-player"
import ContentComponent from '../ContentComponent/ContentComponent';
import './style.scss'

const ContainerComponent = () => {
  return (
    <div className="content">
      <VideoPlayer
        className="video"
        src={Background}
        autoPlay={true}
        muted={true}
      />
      <Container maxWidth="1425">
        <div className='container'>
          <ContentComponent></ContentComponent>
        </div>
      </Container>
    </div>
  );
};

export default ContainerComponent;