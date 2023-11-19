import {Card, CardMedia, CardContent, Grid} from '@mui/material';
import {chooses} from '../../utils/index'
import './style.scss'

const ChooseComponent = () => {
  return (
    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} style={{ marginTop:'50px' }}>
    {
      chooses.map((choose)=>{
        return ( <Grid item xs={2} sm={4} md={4}
          key={choose.id}
        >
          <a href='/' className='trips-parent'>
            <Card sx={{ maxWidth: 700 }} style={{ boxShadow:'none' }}>
                <div className='choose'>
                  <img src={choose.image} alt={choose.title} className='choose-image' />
                </div>
                <CardContent>
                  <h4 className='choose-title'>{choose.title}</h4>
                  <p className='choose-description'>{choose.description}</p>
                </CardContent>
              </Card>
          </a>
        </Grid>)
      })
    }
  </Grid>
  );
}
export default ChooseComponent;