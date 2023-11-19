import Logo1 from '../../assets/images/logo1.png'
import Logo2 from '../../assets/images/logo2.png'
import {Grid, Box, Link, Badge} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import ChevronRightOutlinedIcon from '@mui/icons-material/ChevronRightOutlined';
import {menus} from '../../utils'
import './style.scss'

const HeaderComponent = ({show, active}) => {
  return (
    <div>
      {show && <Box sx={{ flexGrow: 1 }} className={`header ${ active ? '' : 'active'}`}>
        <Grid container spacing={2} style={{ padding: '18px 0 26px' }}>
          <Grid item xs={6} md={4}>
            <Link href="/" className='header-logo'>
            <img src={active ? Logo1: Logo2} alt="gtour" />
            </Link>
          </Grid>
          <Grid item xs={6} md={8} style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-start' }}>
            <div className='header-menu'>
              {menus.map((menu)=>{
                return ( <div className='header-item' key={menu.id}>
                <div className='header-list'>
                   <Link href={menu.link}>{menu.name}</Link>
                   <KeyboardArrowDownOutlinedIcon fontSize='16px' color='#fff'/>
                </div>
                <p className='header-line'></p>
                <ul className='header-menu2'>
                    {menu.items.map((item2)=>{
                      return (<li className='header-item2' key={item2.id}>
                        <div className='header-item2-list'>
                          <a href={item2.link}>{item2.name}</a>
                          {Array.isArray(item2.items) && item2.items.length > 0 &&
                          <ChevronRightOutlinedIcon fontSize='16px'/>}
                        </div>
                        {Array.isArray(item2.items) && item2.items.length > 0 &&
                          <ul className='header-menu3'>
                            {item2.items.map((item3)=>{
                              return (
                                <li className='header-item3' key={item3.id}>
                                  <a href={item3.link}>{item3.name}</a>
                                </li>
                              )})}
                        </ul>}
                    </li>)
                    })}
                 </ul>
               </div>)
              })}
            </div>
            <div className='header-menu-right'>
              <Link href="/">
                <MenuIcon style={{ color: '#fff', fontSize: '17px' }}/>
              </Link>
                <Badge badgeContent={1} color="error">
                  <Link href="/">
                      <ShoppingCartOutlinedIcon style={{ color: '#fff', fontSize: '17px' }} />
                  </Link>
                </Badge>
            </div>
          </Grid>
        </Grid>
      </Box>}
    </div>
  );
};

export default HeaderComponent;