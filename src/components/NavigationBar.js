import React, { useEffect, useState } from 'react'

import { Button, MenuItem, Container, Menu, Typography, IconButton, Toolbar, Box,} from '@material-ui/core';

// import {Search} from '@mui/icons-material';




// import React from 'react'
// import { Nav, Navbar, NavDropdown } from 'react-bootstrap'
// import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
// import Data from './Data.json'
// import logo from './alpha-logo.png'
// import { data } from 'jquery';
import { default as logo } from './logo.svg';
import { AppBar, Link} from '@mui/material';
import { MenuOpen } from '@mui/icons-material';
// import { styled } from '@mui/system';
// import UserContext from '../context/UserContext';

import './NavigationBar.css'






// import SearchBar from '../components/SearchBar';
import { financialmodelingprep } from '../config/api_keys';
import { Offcanvas } from 'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.css'
// import EarningsCalander from './EarningsCalander';
// import EconomicCalander from './EconomicCalander'
// import OptionsTable from './EconomicCalander'

// export default function NavigationBar() {
//   return (
//     <Router>
//       <div className='app'>
//           <Navbar bg='dark' varient='dark' 
//           sticky='top'>
//             <Navbar.Brand style={{color: 'white'}}>
//                 <img src={logo} width='40px' height='40px'/>
//                 Excess Alpha
//             </Navbar.Brand>
            
            // <Nav>
            //   <Route path="/EarningsCalander" component={EarningsCalander}></Route> 
            //   <Route path="/EconomicCalander" component={EconomicCalander}></Route> 
            //   <Route path="/" exact component={Home}></Route> 
            //   <Route path="/OptionsTable" component={OptionsTable}></Route> 
            //   <Route path="/EconomicCalander" component={EconomicCalander}></Route>


            //     <Nav.Link href='home' style={{color: 'white'}}>Home</Nav.Link>
            //     <Nav.Link href='EarningsCalander' style={{color: 'white'}}>Earnings Calander</Nav.Link>
            //     <Nav.Link href='EconomicCalander' style={{color: 'white'}}>Economic Calander</Nav.Link>
            //     <Nav.Link href='OptionTable' style={{color: 'white'}}>Options Calculator</Nav.Link> 
            //     <Nav.Link href='About' style={{color: 'white'}}>About</Nav.Link> 
            //     <SearchBar placeholder={'Enter a Ticker'} data={Data}/>
            // </Nav>
//         </Navbar>
//       </div>
//     </Router>

//   )
// }




// {/* <div className="searchInputs">
//       </div>
//       <SearchBar placeholder={'Enter a Ticker'} data={
//         fetch(url)
//         .then(response => response.json())
//         .then(data => console.log(data.results))
//         }/>
//     </div> */}



// const drawerWidth = 240;

// const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
//   ({ theme, open }) => ({
//     flexGrow: 1,
//     padding: theme.spacing(3),
//     transition: theme.transitions.create('margin', {
//       easing: theme.transitions.easing.sharp,
//       duration: theme.transitions.duration.leavingScreen,
//     }),
//     marginLeft: `-${drawerWidth}px`,
//     ...(open && {
//       transition: theme.transitions.create('margin', {
//         easing: theme.transitions.easing.easeOut,
//         duration: theme.transitions.duration.enteringScreen,
//       }),
//       marginLeft: 0,
//     }),
//   }),
// );

// const AppBar = styled(MuiAppBar, {
//   shouldForwardProp: (prop) => prop !== 'open',
// })(({ theme, open }) => ({
//   transition: theme.transitions.create(['margin', 'width'], {
//     easing: theme.transitions.easing.sharp,
//     duration: theme.transitions.duration.leavingScreen,
//   }),
//   ...(open && {
//     width: `calc(100% - ${drawerWidth}px)`,
//     marginLeft: `${drawerWidth}px`,
//     transition: theme.transitions.create(['margin', 'width'], {
//       easing: theme.transitions.easing.easeOut,
//       duration: theme.transitions.duration.enteringScreen,
//     }),
//   }),
// }));

// const MuiAppBar = styled(AppBar, {
//   shouldForwardProp: (prop) => prop !== 'open',
// })(({ theme, open }) => ({
//   transition: theme.transitions.create(['margin', 'width'], {
//     easing: theme.transitions.easing.sharp,
//     duration: theme.transitions.duration.leavingScreen,
//   }),
//   ...(open && {
//     width: `calc(100% - ${drawerWidth}px)`,
//     marginLeft: `${drawerWidth}px`,
//     transition: theme.transitions.create(['margin', 'width'], {
//       easing: theme.transitions.easing.easeOut,
//       duration: theme.transitions.duration.enteringScreen,
//     }),
//   }),
// }));







// const DrawerHeader = styled('div')(({ theme }) => ({
//   display: 'flex',
//   alignItems: 'center',
//   padding: theme.spacing(0, 1),
//   // necessary for content to be below app bar
//   ...theme.mixins.toolbar,
//   justifyContent: 'flex-end',
// }));










    const pages = [
      {
        name: 'News',
        link: '/'
      },
      {
        name: 'Earnings Calander',
        link: '/EarningsCalander'
      },
      {
        name: 'Economic Calander',
        link: '/EconomicCalander',
      },
      {
        name: 'Insider Trading',
        link: '/InsiderTrading'
      },
      
      

    ]


    // const pages = ['Earnings Calander', 'Economic Calander', 'Options Calculator'];
    const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];
    
    const ResponsiveAppBar = () => {



      const [search, setSearch] = useState([])

      

    useEffect(() => {
        const url = `https://financialmodelingprep.com/api/v3/search?query=AA&limit=10&exchange=NASDAQ&exchange=NYSE&apikey=${financialmodelingprep.api_key}`
        function apiGet(value) {
            fetch(url)
                .then((response) => response.json())
                .then((json) =>
                    setSearch(json)
                    //console.log(json)
                    )
                
        }
        apiGet();
    }, [search])




      const [anchorElNav, setAnchorElNav] = React.useState(null);
      const [anchorElUser, setAnchorElUser] = React.useState(null);
      // const [open, setOpen] = React.useState(false);


    
      const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
      };
      // const handleOpenUserMenu = (event) => {
      //   setAnchorElUser(event.currentTarget);
      // };
    
      const handleCloseNavMenu = () => {
        setAnchorElNav(null);
      };
    
      const handleCloseUserMenu = () => {
        setAnchorElUser(null);
      };

      // const handleDrawerClose = () => {
      //   setOpen(false);
      // };


      const [show, setShow] = useState(false);

      const handleClose = () => setShow(false);
      const handleShow = () => setShow(true);
    



      // const SearchBar = styled('div')(({ theme }) => ({
      //   position: 'relative',
      //   borderRadius: theme.shape.borderRadius,
      //   backgroundColor: alpha(theme.palette.common.white, 0.15),
      //   '&:hover': {
      //     backgroundColor: alpha(theme.palette.common.white, 0.25),
      //   },
      //   marginLeft: 0,
      //   width: '100%',
      //   [theme.breakpoints.up('sm')]: {
      //     marginLeft: theme.spacing(1),
      //     width: 'auto',
      //   },
      // }));
      
      // const SearchIconWrapper = styled('div')(({ theme }) => ({
      //   padding: theme.spacing(0, 2),
      //   height: '100%',
      //   position: 'absolute',
      //   pointerEvents: 'none',
      //   display: 'flex',
      //   alignItems: 'center',
      //   justifyContent: 'center',
      // }));

      
      
      // const StyledAutocomplete = styled(Autocomplete)(({ theme }) => ({
      //   color: 'inherit',
      //   '& .MuiInputBase-input': {
      //     padding: theme.spacing(1, 1, 1, 0),
      //     // vertical padding + font size from searchIcon
      //     paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      //     transition: theme.transitions.create('width'),
      //     width: '100%',
      //     [theme.breakpoints.up('sm')]: {
      //       width: '12ch',
      //       '&:focus': {
      //         width: '20ch',
      //       },
      //     },
      //   },
      // }));

      return (
        <>
        <Box sx={{ display: 'flex' }}>
          <AppBar position="static">
            <Container maxWidth="xl">
              <Toolbar disableGutters>
                {/* <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} /> */}
                <IconButton
                  size="large"
                  edge="start"
                  color="inherit"
                  aria-label="open drawer"
                  sx={{
                    display: { xs: 'block', md: 'none' },
                  }}
                  onClick={handleShow}
                >
                  <MenuOpen></MenuOpen>
                </IconButton>
                <Link href='/'><img src={logo} alt='Excess Alpha Logo' width='40px' height='40px' /></Link>

                <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                  <IconButton
                    size="medium"
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    onClick={handleOpenNavMenu}
                    color="inherit"

                  >
                    {/* <MenuIcon /> */}
                  </IconButton>
                  <Menu
                    id="menu-appbar"
                    anchorEl={anchorElNav}
                    anchorOrigin={{
                      vertical: 'bottom',
                      horizontal: 'left',
                    }}
                    keepMounted
                    transformOrigin={{
                      vertical: 'top',
                      horizontal: 'left',
                    }}
                    open={Boolean(anchorElNav)}
                    onClose={handleCloseNavMenu}
                    sx={{
                      display: { xs: 'block', md: 'none' },
                    }}
                  >
                    {settings.map((page) => (
                      <MenuItem key={page} onClick={handleCloseNavMenu}>
                        <Typography textalign="center">{page}</Typography>
                      </MenuItem>
                    ))}
                  </Menu>
                </Box>
                {/* <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} /> */}

                <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                  {pages.map((page, index) => (
                    <Link href={page.link}>
                      <Button
                        key={page.name}
                        onClick={handleCloseNavMenu}
                        sx={{ my: 2, color: 'white', display: 'block' }}
                      >
                        {page.name}
                      </Button>
                    </Link>
                  ))}
                  </Box>

    <Box sx={{flexGrow: 0.5}}>
      {/* <SearchBar/> */}
      {/* <SearchBar> */}
      {/* <SearchIconWrapper>
        <Search />
      </SearchIconWrapper> */}
      {/* <StyledInputBase
        placeholder="Search…"
        inputProps={{ 'aria-label': 'search' }}
      /> */}
      {/* </SearchBar>  */}

                   {/* <StyledAutocomplete
            id="free-solo-demo"
            freeSolo
            options={Data.map((option) => option.title)}
            renderInput={(params) => <TextField {...params} label="freeSolo" />}
          /> */}

                </Box>



                <Box sx={{ flexGrow: 0 }}>
                  {/* <Tooltip title="Open settings">
                    <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                      <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                    </IconButton>
                  </Tooltip> */}
                  <Menu
                    sx={{ mt: '45px' }}
                    id="menu-appbar"
                    anchorEl={anchorElUser}
                    anchorOrigin={{
                      vertical: 'top',
                      horizontal: 'right',
                    }}
                    keepMounted
                    transformOrigin={{
                      vertical: 'top',
                      horizontal: 'right',
                    }}
                    open={Boolean(anchorElUser)}
                    onClose={handleCloseUserMenu}
                  >
                    {settings.map((setting) => (
                      <MenuItem key={setting} onClick={handleCloseUserMenu}>
                        <Typography textalign="center">{setting}</Typography>
                      </MenuItem>
                    ))}
                  </Menu>

                </Box>

              </Toolbar>

              

            </Container>

            
          </AppBar>
        
          </Box>

          <Offcanvas class="offcanvas" show={show} onHide={handleClose}>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title><Typography sx={{color: 'white'}}>Excess Alpha</Typography></Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
          {pages.map((page, index) => (
                    <Link href={page.link}>
                      <Button
                        key={page.name}
                        onClick={handleCloseNavMenu}
                        sx={{ my: 2, color: 'white', display: 'block' }}
                      > 
                        {page.name}
                      </Button>
                    </Link>
                  ))}
 
          </Offcanvas.Body>
          </Offcanvas>

        </>


      );
    };
    export default ResponsiveAppBar;









    