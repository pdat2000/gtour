import {Card, CardMedia, CardContent, Grid, CardActions} from '@mui/material'
import {tips} from '../../utils/index'
import './style.scss'
import ButtonComponent from '../ButtonComponent/ButtonComponent';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const TipComponent = () => {
  return (
    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} style={{ marginTop:'50px' }}>
    {
      tips.map((tip)=>{
        return ( <Grid item xs={2} sm={4} md={4} sx={{ '&:hover': {
          transform: 'translateY(-2%)',
          transition: 'all 0.2s linear',
        } }}
          key={tip.id}
        >
          <a href='/' className='tip-parent'>
            <Card sx={{ maxWidth: 392 }}>
                <div className='tip'>
                  <CardMedia
                    component="img"
                    alt={tip.title}
                    height="260"
                    image={tip.image}
                  />
                </div>
                <CardContent>
                  <p className='tip-date'>{tip.date}</p>
                  <h4 className='tip-title'>{tip.title}</h4>
                  <p className='tip-description'>{tip.description}</p>
                </CardContent>
                <CardActions>
                    <ButtonComponent sx={{ color: '#ccc' }} endIcon={<ChevronRightIcon />}>Read More</ButtonComponent>
                </CardActions>
              </Card>
          </a>
        </Grid>)
      })
    }
  </Grid>
  );
};

export default TipComponent;