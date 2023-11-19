import {Grid, Link} from '@mui/material';

import './style.scss'

const PopularComponent = ({populars}) => {
  return (
    <Grid container spacing={1} style={{ marginTop: '35px' }}>
      {populars.map((popular)=>{
        return ( <Grid item xs={3} key={popular.id}>
          <Link href='/'>
            <div className="popular-card">
              <img className='popular-image' src={popular.image} alt={popular.title} />
              <p className='popular-overlay'></p>
              <h2 className='popular-title'>{popular.title}</h2>
            </div>
          </Link>
        </Grid>);
      })}
    </Grid>
  );
};

export default PopularComponent;