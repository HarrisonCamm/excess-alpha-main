import React, { useEffect, useState } from 'react'
import { financialmodelingprep, poly } from '../../config/api_keys.js';
// import { restClient } from "@polygon.io/client-js";
// import { createChart } from 'lightweight-charts';
// import { InsiderTableBoil } from '../InsiderTableBoil.js';
// import StockChart from './StockChart.js';


// import About from '../About.js';
import { useParams } from 'react-router';
import { Container } from 'react-bootstrap';
import { Grid, Typography } from '@mui/material';
import StockSideBar from './StockSideBar.js';
import { Box } from '@mui/system';
import { FundamentalData } from "react-ts-tradingview-widgets";



// import IncomeStatementSankey from '../IncomeStatementSankey.js';
import StockInsiderTrading from './StockInsiderTrading.js';
// import StockTargets from './StockTargets.js';
// import { TabPanel } from '@mui/lab';

import { SymbolOverview } from "react-ts-tradingview-widgets";



// function TabPanel(props) {
//     const { children, value, index, ...other } = props;
  
//     return (
//       <div
//         role="tabpanel"
//         hidden={value !== index}
//         id={`simple-tabpanel-${index}`}
//         aria-labelledby={`simple-tab-${index}`}
//         {...other}
//       >
//         {value === index && (
//           <Box sx={{ p: 3 }}>
//             <Typography>{children}</Typography>
//           </Box>
//         )}
//       </div>
//     );
//   }


  
  
//   TabPanel.propTypes = {
//     children: PropTypes.node,
//     index: PropTypes.number.isRequired,
//     value: PropTypes.number.isRequired,
//   };
  
//   function a11yProps(index) {
//     return {
//       id: `simple-tab-${index}`,
//       'aria-controls': `simple-tabpanel-${index}`,
//     };
//   }
  


export default function StockPage() {


    // const te = require('tradingeconomics');


    const [data, setStockData] = useState([]);
    const [insiderData, setinsiderData] = useState([]);
    const [targets, setTargets] = useState([])

    console.log(insiderData)
    console.log(targets)


    const params = useParams()
    const ticker = params.ticker


    // const stockData = [
    //     {
    //         name: 'Options Chain',
    //         toggle: true
    //     },
    //     {
    //         name: 'Income Statement',
    //         toggle: true
    //     },
    //     {
    //         name: 'Balance Sheet',
    //         toggle: true
    //     },
    //     {
    //         name: 'Cash Flow Statement',
    //         toggle: true
    //     },
    //     {
    //         name: 'Insider Activity',
    //         toggle: true
    //     },
    //     {
    //         name: 'Company News',
    //         toggle: true
    //     },
    //     {
    //         name: 'Financial Ratios',
    //         toggle: true
    //     },
    //     {
    //         name: 'Analysts Price Targets',
    //         toggle: true
    //     }
    // ]


    const [news, setNews] = useState([])
    const [stockInfo, setStockInfo] = useState([])

    // const [value, setValue] = React.useState(0);
    // const handleChange = (event, newValue) => {
    //     setValue(newValue);
    //     console.log(event);
    // };
    

    // let isRendered = useRef(false);///HERE






    useEffect(() => {
        const url = `https://financialmodelingprep.com/api/v3/stock_news?tickers=${ticker}&limit=6&apikey=${financialmodelingprep.api_key}`
        setTargets({});
        // setNews({});
        fetch(url)
            .then((response) => response.json())
            .then((json) =>
                setNews(json)
                )
        
        // fetch(targetsUrl)
        //     .then((response) => response.json())
        //     .then((json) =>
        //         setTargets(json)
        //         )
        
        
        return () => {
            // isRendered = false;
        }
    }, [ticker])





    //const url = `${poly.base_url}/tickers?active=true&sort=ticker&order=asc&limit=10&apiKey=${poly.}`


    //Function takes a url and a useState function and calls the useState function on the JSON data from fetching the url.
    //IEX and Poly have different JSON files. The results from Poly can be acsessed by using .results
    function polyApiGet(url, setData) {
        fetch(url)
            .then((response) => response.json())
            .then((json) => {
                console.log(json);
                setData(json.results);
            });
    }

    function iexApiGet(url, setData) {
        fetch(url)
            .then((response) => response.json())
            .then((json) => {
                // console.log(json);
                setData(json);
            });
    }


    function finModApiGet(url, setData) {
        fetch(url)
            .then((response) => response.json())
            .then((json) => {
                // console.log(json);
                setData(json[0]);
            });
    }

    


    //Function fetches all nessasary data from all of the APIs for rendering


    console.log(`https://api.polygon.io/v3/reference/tickers/${ticker}?apiKey=${poly.api_token}`)


    useEffect(() => {
        // console.log();
        polyApiGet(`https://api.polygon.io/v3/reference/tickers/${ticker}?apiKey=${poly.api_token}`, setStockData);
        // iexApiGet(`https://cloud.iexapis.com/stable/stock/${ticker.ticker}/insider-transactions?token=pk_32709008a280417589929978895c3530`, setinsiderData)
        iexApiGet(`https://cloud.iexapis.com/stable/stock/${ticker}/insider-transactions?token=pk_32709008a280417589929978895c3530`, setinsiderData);
        finModApiGet(`https://financialmodelingprep.com/api/v3/quote/${ticker}?apikey=${financialmodelingprep.api_key}`, setStockInfo);

    }, [ticker])


    // const chart = createChart(document.body, { width: 400, height: 300 });
    // const lineSeries = chart.addLineSeries();

  
    return (

    <Container maxWidth="lg" sx={{backgroundColor: 'white'}}>
        
        <Grid container spacing={5} sx={{ mt: 2, backgroundColor: 'white' }}>
            <Grid item xs={12} md={8} sx={{'& .markdown': {py: 3,},}}>
            <Box marginBottom={4}>

                    <div style={{height: '65vh'}}>
                            <SymbolOverview colorTheme="light" symbols={ticker} autosize chartType="area"
                                                downColor="#800080"
                                                borderDownColor="#800080"
                                                wickDownColor="#800080"
                                                />
                        </div>

                    </Box>
                <ul>
                    {/* <BalanceSheet ticker={ticker}/> */}
                    {/* <CashFlowStatement ticker={ticker}/> */}
                    

                    {/* <StockPriceChart/> */}


                    


                    {/* <div class="tradingview-widget-container">
                    <div id="tradingview_bbfe3"></div>
                    <div class="tradingview-widget-copyright"><a href="https://www.tradingview.com/symbols/NASDAQ-AAPL/" rel="noopener" target="_blank"><span class="blue-text">AAPL Chart</span></a> by TradingView</div>
                    <script type="text/javascript" src="https://s3.tradingview.com/tv.js"></script>
                    <script type="text/javascript">
                    new TradingView.widget(
                    {
                    "autosize": true,
                    "symbol": "NASDAQ:AAPL",
                    "interval": "D",
                    "timezone": "Etc/UTC",
                    "theme": "light",
                    "style": "1",
                    "locale": "en",
                    "toolbar_bg": "#f1f3f6",
                    "enable_publishing": false,
                    "allow_symbol_change": true,
                    "container_id": "tradingview_bbfe3"
                    }
                    );
                    </script>
                    </div> */}



                    {/* <IncomeStatementSankey ticker={`${ticker}`}/> */}
                    
                    <Box sx={{p : 4}} >
                    <p>{data?.description}</p>
                    </Box>


                    {/* <Box sx={{ width: '100%' }}>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                        <Tab label="Income Statement" {...a11yProps(0)} />
                        <Tab label="Balance Sheet" {...a11yProps(1)} />
                        <Tab label="Cash Flow" {...a11yProps(2)} />
                        </Tabs>
                    </Box>
                    <TabPanel value={value} index={0}>
                        {/* <IncomeStatement ticker={ticker}/> 
                    </TabPanel>
                    <TabPanel value={value} index={1}>
                        Item Two
                    </TabPanel>
                    <TabPanel value={value} index={2}>
                        Item Three
                    </TabPanel>
                    </Box> */}

                    

                    <FundamentalData symbol={ticker} colorTheme="light" height={800} width="100%"></FundamentalData>


                    

                    

                    


                    {/* <img src={data.branding.icon_url.concat('?apiKey=', poly.api_token)}/> */}
                    {/* <img src={data.branding.logo_url.concat('?apiKey=', poly.api_token)}/> */}

                    
                </ul>
            </Grid>
            {console.log(stockInfo)}
            <StockSideBar news={news} stockInfo={stockInfo}/>
            {/* <StockTargets targets={targets}/> */}

            <Box  style={{ width: "100%", height: "100%" }} padding={1}>
                <Typography variant="h6">Insider Transactions</Typography>
                <StockInsiderTrading ticker={`${ticker}`} />
            </Box>

            

        </Grid>

       

        

        {/* <StockChart ticker = 'TSLA'  name = {data.name}/> */}


        {/* {JSON.stringify(data, null, 2)} */}

        <div>
            
        </div>

    

    </Container>

  )
}

