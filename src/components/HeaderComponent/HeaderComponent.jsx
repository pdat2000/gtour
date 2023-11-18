import Logo1 from '../../assets/images/logo1.png'
import {Grid, Box, Link, Badge, List} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import ChevronRightOutlinedIcon from '@mui/icons-material/ChevronRightOutlined';
import './style.scss'


const HeaderComponent = () => {
  const menus =[
    {
      id: 1,
      name: 'Home',
      link:'/',
      items:[
        {
          id: 1,
          link:'/',
          name:'Home 1 – Background Image'
        },
        {
          id: 2,
          link:'/',
          name:'Home 2 – Youtube Video'
        },
        {
          id: 3,
          link:'/',
          name:'Home 3 – Google Inspired'
        },
        {
          id: 4,
          link:'/',
          name:'Home 4 – Travel Site'
        }
      ]
    },
    {
      id: 2,
      name: 'Tours',
      link: '/',
      items: [
        {
          id: 1,
          link: '/',
          name: 'Tour Classic Fullwidth',
          items: [
            {
              id: 1,
              name:'2 Columns',
              link:'/'
            },
            {
              id: 2,
              name:'3 Columns',
              link:'/'
            },
            {
              id: 3,
              name:'4 Columns',
              link:'/'
            },
          ]
        },
        {
          id: 2,
          link: '/',
          name: 'Tour Classic Sidebar',
          items: [
            {
              id: 1,
              name: 'Right Sidebar',
              link: '/'
            },
            {
              id: 2,
              name: 'Left Sidebar',
              link: '/'
            },
          ]
        },
        {
          id: 3,
          link: '/',
          name: 'Tour Grid Fullwidth',
          items: [
            {
              id: 1,
              name:'2 Columns',
              link:'/'
            },
            {
              id: 2,
              name:'3 Columns',
              link:'/'
            },
            {
              id: 3,
              name:'4 Columns',
              link:'/'
            },
          ]
        },
        {
          id: 4,
          link: '/',
          name: 'Tour Grid Sidebar',
          items: [
            {
              id: 1,
              name: 'Right Sidebar',
              link: '/'
            },
            {
              id: 2,
              name: 'Left Sidebar',
              link: '/'
            },
          ]
        },
        {
          id: 5,
          link: '/',
          name: 'Tour List Sidebar',
          items: [
            {
              id: 1,
              name: 'Right Sidebar',
              link: '/'
            },
            {
              id: 2,
              name: 'Left Sidebar',
              link: '/'
            },
          ]
        },
        {
          id: 6,
          link: '/',
          name: 'Tour Header Type',
          items: [
            {
              id: 1,
              name: 'Featured Image',
              link: '/'
            },
            {
              id: 2,
              name: 'Video',
              link: '/'
            },
          ]
        },
        {
          id: 7,
          link: '/',
          name: 'Tour Categories',
          items: [
            {
              id: 1,
              name: 'Rural',
              link: '/'
            },
            {
              id: 2,
              name: 'Snow & Ice',
              link: '/'
            },
          ]
        },
      ]
    },
  ]
  return (
    <Box sx={{ flexGrow: 1 }} className='header'>
      <Grid container spacing={2} style={{ padding: '26px 0' }}>
        <Grid item xs={6} md={4}>
          <Link href="/" className='header-logo'>
          <img src={Logo1} alt="gtour" />
          </Link>
        </Grid>
        <Grid item xs={6} md={8} style={{ display:'flex', justifyContent:'space-between', alignItems:'center' }}>
          <div className='header-menu'>
            {menus.map((menu)=>{
              return ( <div className='header-item' key={menu.id}>
              <div className='header-list'>
                 <Link href={menu.link}>{menu.name}</Link>
                 <KeyboardArrowDownOutlinedIcon fontSize='16px' color='#fff'/>
               </div>
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
                            )
                          })}
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
    </Box>
  );
};

export default HeaderComponent;