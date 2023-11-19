import {Grid} from '@mui/material';
import ButtonComponent from '../ButtonComponent/ButtonComponent';
import InputComponent from '../InputComponent/InputComponent';
import SearchIcon from '@mui/icons-material/Search';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import SelectComponent from '../SelectComponent/SelectComponent';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import ImportExportIcon from '@mui/icons-material/ImportExport';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {categories, cities, months, sorts} from '../../utils/index'
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import { Fragment, useState } from 'react';

const FormComponent = () => {
  const [show, setShow] = useState(false);
  const handleShow = ()=>{
    setShow(!show);
  }
  return (
    <Grid container spacing={1}  style={{ padding: '20px 20px 0' }}>
      <Grid item xs={3}>
        <InputComponent placeholder='Destination, city' icon={<SearchIcon/>} />
      </Grid>
      <Grid item xs={3}>
        <SelectComponent data={months} icon={CalendarMonthIcon} placeholder='Any Month'/>
      </Grid>
      <Grid item xs={3}>
        <SelectComponent data={sorts} icon={ImportExportIcon} placeholder='Sort By Date'/>
      </Grid>
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
              }}} 
              disableRipple
        >
          Search
        </ButtonComponent>
      </Grid>
      {show &&
      <Fragment>
        <Grid item xs={3}>
          <SelectComponent data={categories} icon={ExpandMoreIcon} placeholder='All Categories'/>
        </Grid>
        <Grid item xs={3}>
          <SelectComponent data={cities} icon={ExpandMoreIcon} placeholder='Any Destinations'/>
        </Grid>
        <Grid item xs={3}>
          <InputComponent placeholder='Max budget ex. 500' icon={<AttachMoneyIcon/>} />
        </Grid>
        <Grid item xs={3}></Grid>
      </Fragment>}
      <Grid item xs={3}>
        <ButtonComponent 
          variant='text'
          sx={
            { color: '#fff', 
              fontSize:'13px', 
              textTransform:'capitalize', 
             }}
             disableRipple 
             startIcon={show ?<ExpandLessIcon/>:<ExpandMoreIcon/>}
             onClick={handleShow}
            >Advanced Search</ButtonComponent>
      </Grid>
    </Grid>
  );
};

export default FormComponent;