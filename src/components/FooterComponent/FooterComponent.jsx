import {Grid, ImageList, ImageListItem} from '@mui/material';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import './style.scss'
import LogoFooter from '../../assets/images/logo-footer.png'
import AccessAlarmsIcon from '@mui/icons-material/AccessAlarms';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';


const FooterComponent = ({images}) => {
  return (
    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} style={{ paddingTop:'50px', paddingBottom: '50px' }}>
      <Grid item xs={2} sm={4} md={4}>
          <h2 className="footer-title">Our Awards</h2>
          <p className="footer-description">London is a megalopolis of people, ideas and frenetic energy. The capital and largest city of the United Kingdom.</p>
          <img src={LogoFooter} alt="footer" className="footer-logo"/>
      </Grid>
      <Grid item xs={2} sm={4} md={4}>
          <h2 className="footer-title">Contact Info</h2>
          <div className="footer-description">
            <PhoneAndroidIcon style={{ height:'19px' }}/>
            <p className='contact-text'>1-567-124-44227</p>
          </div>
          <div className="footer-description">
            <LocationOnOutlinedIcon style={{ height:'19px' }}/>
            <p className='contact-text'>184 Main Street East Perl Habour 8007</p>
          </div>
          <div className="footer-description">
            <AccessAlarmsIcon style={{ height:'19px' }}/>
            <p className='contact-text'>Mon - Sat 8.00 - 18.00 Sunday CLOSED</p>
          </div>
          <div className="footer-social">
            <div className="footer-social-item">
              <FacebookOutlinedIcon style={{ color:'#2d5f9a', height:'40px', width:'40px' }}/>
            </div>
            <div className="footer-social-item">
              <TwitterIcon style={{ color:'#00c3f3', height:'40px', width:'40px' }}/>
            </div>
            <div className="footer-social-item">
              <YouTubeIcon style={{ color:'#cc181e', height:'40px', width:'40px' }}/>
            </div>
            <div className="footer-social-item">
              <LinkedInIcon style={{ color:'#bd081c', height:'40px', width:'40px' }}/>
            </div>
            <div className="footer-social-item">
              <InstagramIcon style={{ color:'#405de6', height:'40px', width:'40px' }}/>
            </div>
          </div>
      </Grid>
      <Grid item xs={2} sm={4} md={4}>
        <h2 className="footer-title">Recent Trips</h2>
        <ImageList sx={{ width: 405, height: 269 }} cols={3} rowHeight={126}>
          {images.map((image) => (
            <ImageListItem key={image.image}>
              <img
                srcSet={`${image.image}?w=126&h=126&fit=crop&auto=format&dpr=2 2x`}
                src={`${image.image}?w=126&h=126&fit=crop&auto=format`}
                alt={image.id}
                loading="lazy"
                style={{ cursor:'pointer' }}
              />
    </ImageListItem>
  ))}
</ImageList>
      </Grid>
    </Grid>)
}
export default FooterComponent;