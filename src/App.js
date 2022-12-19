import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
// import { Container, Navbar } from 'react-bootstrap';
import NavigationBar from './components/NavigationBar';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom'
import EarningsCalander from './components/EarningsCalander';
import EconomicCalander from './components/EconomicCalander';
// import Signup from './components/Signup';
// import AuthProvider, { useAuth } from './context/AuthContext';
// import OptionsTable from './components/options-profit-calculator/OptionsTable';
import HomePage from './components/homepage/HomePage';
import FooterContainer from './components/FooterContainer'
//import Footer from './components/FooterContainer';
import {CssBaseline, ThemeProvider} from '@material-ui/core';
import SignUp from './components/sign-up/SignUp';
import Login from './components/login/Login';
import InsiderTrading from './components/insider-trading/InsiderTrading';
import { Helmet } from 'react-helmet';
import AuthProvider from './context/AuthContext';
import Dashboard from './components/dashboard/Dashboard';
import Page404 from './Page404';
import StockPage from './components/stock_page/StockPage';
import Heatmap from './components/heatmap/Heatmap';
import ContactUs from './components/contactus/ContactUs';
// import TickerScroller from './components/ticker-scroller/TickerScroller';

// import { TickerTape } from "react-ts-tradingview-widgets";
// import { makeStyles } from '@mui/styles';
import { Box, createTheme } from '@mui/material';
// import { Container } from '@mui/system';





// const darkTheme = createTheme({
//   palette: {
//     mode: 'dark',
//   },
// });


const theme = createTheme({
  typography: {
    fontFamily: "Nirmala UI"
  }
});




function App() {
  // const url = `${poly.base_url}/tickers?active=true&sort=ticker&order=asc&limit=10&apiKey=${poly.api_token}`;
  // fetch(url).then(responce => responce.json()).then(data => console.log(data.results));
  //const url = `${poly.base_url}/tickers?active=true&sort=ticker&order=asc&limit=10&apiKey=${poly.api_token}`;



  return (
    <Box>
    <ThemeProvider theme={theme}>
    <div className='App'>
      <CssBaseline />
      <Helmet>
        <title>Excess Alpha</title>
        <meta name="Leveling the playing field for the retail investor" content="Helmet application" />
      </Helmet>
        
          <NavigationBar/>
          

          {/* <TickerScroller/> */}

          {/* <About/> */}
          {/* <StockTicker/> */}
          {/* <Countdown/> */}
          {/* <HomePage/> */}
          {/* <IncomeStatement ticker='TSLA'/> */}
          {/* <StockPage ticker='TSLA'/> */}
          {/* <StockPage ticker='TSLA'/> */}
          {/* <EarningsCalander/> */}
          {/* <EconomicCalander/> */}
          {/* <OptionsTable/> */}

          {/* <OptionsProfitCalculator/> */}

          {/* <SignUp/> */}
  



    {/* <AuthProvider>
      <Container className='d-flex align-items-center
      justify-content-center'
      style={{minHeight: '100vh'}}
      >
        <div className='w-100' style={{maxWidth: '400px'}}>
        <Signup/>
        </div>
      </Container>
    </AuthProvider> */}


    <AuthProvider>
      <Router>
          <Routes>
            <Route path="/ContactUs" element={<ContactUs/>}></Route>
            <Route path="/Heatmap" element={<Heatmap/>}></Route>
            <Route path="/Dashboard" element={<Dashboard/>}></Route>
            <Route path="/EarningsCalander" element={<EarningsCalander/>}></Route> 
            <Route path="/EconomicCalander" element={<EconomicCalander/>}></Route> 
            <Route path="/" exact element={<HomePage/>}></Route> 
            {/* <Route path="/OptionsTable" element={<OptionsTable/>}></Route> */}
            <Route path="/EconomicCalander" element={<EconomicCalander/>}></Route>
            <Route path="/Login" element={<Login/>}></Route>
            <Route path="/SignUp" element={<SignUp/>}></Route>
            <Route path="/InsiderTrading" element={<InsiderTrading/>}></Route>
            <Route path="*" element={<Page404/>}></Route>
            <Route path="/Quote/:ticker" element={<StockPage/>}></Route>
          </Routes>
      </Router>
    </AuthProvider>



    <FooterContainer/>
    </div>
    </ThemeProvider>
    </Box>
   
  );
}

export default App;
