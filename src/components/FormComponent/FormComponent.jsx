import {Grid} from '@mui/material';
import ButtonComponent from '../ButtonComponent/ButtonComponent';

const FormComponent = () => {
  return (
    <Grid container spacing={1}  style={{ padding: '20px 20px 0' }}>
      <Grid item xs={3}>a</Grid>
      <Grid item xs={3}>a</Grid>
      <Grid item xs={3}>a</Grid>
      <Grid item xs={3}>
        <ButtonComponent
           variant='contained' 
           sx={
            { color: '#fff', 
              fontSize:'15px', 
              width: '283px', 
              textTransform:'capitalize', 
              background: '#FF4A52', 
              ':hover':{
                  background: '#1ec6b6'
              }}} disableRipple
        >
          Search
        </ButtonComponent>
      </Grid>
    </Grid>
  );
};

export default FormComponent;