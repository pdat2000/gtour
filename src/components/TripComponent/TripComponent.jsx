import './style.scss'
import {Card, CardMedia, CardContent, Rating, CardActions, Grid} from '@mui/material';
import AccessTimeIcon from '@mui/icons-material/AccessTime';


const TripComponent = ({trips}) => {
  return (
    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} style={{ marginTop:'50px' }}>
      {
        trips.map((trip)=>{
          return ( <Grid item xs={4} sm={4} md={4} sx={{ '&:hover': {
            transform: 'translateY(-2%)',
            transition: 'all 0.2s linear',
          } }}
            key={trip.id}
          >
            <a href='/' className='trips-parent'>
              {trip.sale &&  <p className="trips-sale">Sale</p>}
              <p className="trips-price">
                {trip.priceOld &&  <span className='trips-old'>${trip.priceOld}</span> }
                ${trip.price}
              </p>
              <Card sx={{ maxWidth: 700 }}>
                  <div className='trips'>
                    <CardMedia
                      component="img"
                      alt={trip.title}
                      height="466"
                      image={trip.image}
                    />
                  </div>
                  <CardContent>
                    <h4 className='trips-title'>{trip.title}</h4>
                    <p className='trips-address'>{trip.address}</p>
                  </CardContent>
                  <CardActions style={{ display:'flex', alignItems:'center', justifyContent:'space-between' }}>
                    <div className='trips-rating'>
                      <Rating name="half-rating-read" defaultValue={4} precision={4} readOnly size='small' sx={{color:'#1ec6b6'}}/>
                      <span className='trips-review'>{trip.reviews} reviews</span>
                    </div>
                     <div className='trips-date'>
                      <AccessTimeIcon fontSize='12px'/>
                      <p className='trips-time'>{trip.date} days</p>
                    </div>
                  </CardActions>
                </Card>
            </a>
          </Grid>)
        })
      }
    </Grid>
  );
}
export default TripComponent;