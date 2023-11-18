import Logo2 from '../../assets/images/logo2.png'
import {Grid, Box, Link} from '@mui/material';
import './style.scss'

const HeaderComponent = () => {
  return (
    <Box sx={{ flexGrow: 1 }} className='header'>
      <Grid container spacing={2}>
        <Grid item>
          <a href="#" className='header-logo'>
            <img src={Logo2} alt="gtour" />
          </a>
        </Grid>
        <Grid item>
          <Link href="#">Link</Link>
          <Link href="#">Link</Link>
          <Link href="#">Link</Link>
          <Link href="#">Link</Link>
          <Link href="#">Link</Link>
          <Link href="#">Link</Link>
          <Link href="#">Link</Link>
        </Grid>
      </Grid>
    </Box>
  );
};

export default HeaderComponent;