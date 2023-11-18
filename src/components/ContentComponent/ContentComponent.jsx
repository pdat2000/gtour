import {Container} from '@mui/material';
import Background from '../../assets/images/bg.mp4'
import VideoPlayer from "react-background-video-player"
import './style.scss'

const ContentComponent = () => {
  return (
    <div className="content">
        <VideoPlayer
          className="content-video"
          src={Background}
          autoPlay={true}
          muted={true}
        />
      <Container maxWidth="1425">
        <div className='container'>
        </div>
      </Container>
    </div>
  );
};

export default ContentComponent;