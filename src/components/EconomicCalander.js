import React from 'react';
// import { iex, poly } from '../config/api_keys.js';
// import { restClient } from "@polygon.io/client-js";
// import moment from 'moment';
import './EarningsCalander.css'
import { Container } from '@material-ui/core';
// import { endOfWeek, isSameDay, isWithinInterval, startOfWeek } from 'date-fns';
// import { PickersDay } from '@mui/x-date-pickers';
// import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { Box, Typography } from '@mui/material';
// import { financialmodelingprep } from '../config/api_keys';



import { EconomicCalendar } from "react-ts-tradingview-widgets";





// const CustomPickersDay = styled(PickersDay, {
//     shouldForwardProp: (prop) =>
//       prop !== 'dayIsBetween' && prop !== 'isFirstDay' && prop !== 'isLastDay',
//   })(({ theme, dayIsBetween, isFirstDay, isLastDay }) => ({
//     ...(dayIsBetween && {
//       borderRadius: 0,
//       backgroundColor: theme.palette.primary.main,
//       color: theme.palette.common.white,
//       '&:hover, &:focus': {
//         backgroundColor: theme.palette.primary.dark,
//       },
//     }),
//     ...(isFirstDay && {
//       borderTopLeftRadius: '50%',
//       borderBottomLeftRadius: '50%',
//     }),
//     ...(isLastDay && {
//       borderTopRightRadius: '50%',
//       borderBottomRightRadius: '50%',
//     }),
//   }));



export default function EconomicCalander(ticker) {


    // const [value, setValue] = React.useState(new Date());
    // const MAX_COLUMN_ITEMS = 12;


    
      
    //   let thisWeekDates = getSelectedWeekDates(value);
    //   thisWeekDates.forEach(function(date){ console.log(date.format('YYYY-MM-DD'));});
    //   console.log(getStartandEndWeekDates());


    // let startDay = moment(value).weekday(1).format('YYYY-MM-DD')
    // let endDay = moment(value).weekday(6).format('YYYY-MM-DD')






    // const renderWeekPickerDay = (date, selectedDates, pickersDayProps) => {
    //     if (!value) {
    //     return <PickersDay {...pickersDayProps} />;
    //     }

        
    //     const start = startOfWeek(value);
    //     const end = endOfWeek(value);

    //     const dayIsBetween = isWithinInterval(date, { start, end });
    //     const isFirstDay = isSameDay(date, start);
    //     const isLastDay = isSameDay(date, end);

    //     return (
    //     <CustomPickersDay
    //         {...pickersDayProps}
    //         disableMargin
    //         dayIsBetween={dayIsBetween}
    //         isFirstDay={isFirstDay}
    //         isLastDay={isLastDay}
    //     />
    //     );
    // };








    // //Function Finds the start and end week dates
    // function getStartandEndWeekDates() {
    //     var start = moment().day(1).format('YYYY-MM-DD');
    //     var end = moment().day(7).format('YYYY-MM-DD');
    //     return `${start}&to=${end}`
    // }

    
      

    // const [data, setData] = useState([])
    // const [thisWeekDates, setThisWeekDates] = useState([])


    //const url = `${poly.base_url}/tickers?active=true&sort=ticker&order=asc&limit=10&apiKey=${poly.}`
    
    // console.log(url)
    // function apiGet = () => {
    //     fetch(url)
    //     .then((response) => response.json())
    //     .then((json) => {
    //         // console.log(json)
    //         setData(json);
    //     });
    // };

    


    // const apiGet = () => {
       
    // //   thisWeekDates.forEach(function(date){ console.log(date.format('YYYY-MM-DD'));});
    // //   console.log(getStartandEndWeekDates());

    // // //Function Finds the days of the working week in 
    // function getSelectedWeekDates(value) {
    //     let weekDates= [];
    //     let currentDay = moment(value)
    //     let monday = currentDay.weekday(0)
    //     // console.log(monday.format()) 
    //     for (var i = 0; i <= 4; i++) {
    //         monday = moment(monday).add(1, 'days');
    //         weekDates.push(monday)
    //     }
    //     return weekDates; 
    //   }



      




    // let startDay = moment(value).weekday(1).format('YYYY-MM-DD')
    // let endDay = moment(value).weekday(6).format('YYYY-MM-DD')

    // setThisWeekDates(getSelectedWeekDates(value));

    // const url = `https://financialmodelingprep.com/api/v3/economic_calendar?from=${startDay}&to=${endDay}&apikey=${financialmodelingprep.api_key}`



    //     fetch(url)
    //     .then((response) => response.json())
    //     .then((json) => {
    //         setData(json.filter((value) => {
    //             if (value.impact === 'High'){
    //                 console.log(value);
    //                 return value;
    //             }
    //         }));
    //     });
    // };





    // const url = `https://financialmodelingprep.com/api/v3/economic_calendar?from=2022-04-18&to=2022-04-22&apikey=`
    // const apiGet = () => {
    //     fetch(url)
    //     .then((response) => response.json())
    //     .then((json) => {
    //         setData(json.filter((value) => {
    //             if (value.impact == 'High'){
    //                 //console.log(value);
    //                 return value;
    //             }
    //         }));
    //     });
    // };
    


    // useEffect(() => {
    //     apiGet();
    //     // const script = document.createElement('script');
      
    //     // script.src = "https://s3.tradingview.com/external-embedding/embed-widget-tickers.js";
    //     // script.async = true;
      
    //     // document.body.appendChild(script);
      
    //     // return () => {
    //     //   document.body.removeChild(script);
    //     // }
    // }, [])




    // let testy =  data.filter(function(earnings){
    //     return earnings.when === "pre market"
    // })

    // function filterEarnings( value, date) {
    //     data.filter(function(earnings){
    //         return earnings.when == value &&
    //         earnings.date == date.format('YYYY-MM-DD')
    //     })
    // }


    // let thisWeekEvents = [] 
   
    // for(const day of thisWeekDates) {
    //     thisWeekEvents.push(
    //         {
    //             day: day,
    //             events: data.filter(
    //                 function(event){
    //                     console.log( moment(event.date, 'YYYY-MM-DD').format('YYYY-MM-DD'))
    //                     console.log(day.format('YYYY-MM-DD'))
    //                     if( moment(event.date, 'YYYY-MM-DD').format('YYYY-MM-DD') === day.format('YYYY-MM-DD')) {
    //                         return event
    //                     }
    //                 }
    //             )
    //         }
    //     )
        
    // }


    // console.log(thisWeekEvents)

    // function createData(name, calories, fat, carbs, protein) {
    //     return { name, calories, fat, carbs, protein };
    //   }
      
    //   const rows = [
    //     createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    //     createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    //     createData('Eclair', 262, 16.0, 24, 6.0),
    //     createData('Cupcake', 305, 3.7, 67, 4.3),
    //     createData('Gingerbread', 356, 16.0, 49, 3.9),
    //   ];







    return (
        <Container maxWidth="xxl">
            <Box sx={{backgroundColor:"white"}} padding={4}>
                {/* <div className='calander-sidebar'>
                    <LocalizationProvider  dateAdapter={AdapterDateFns}>
                        <StaticDatePicker 
                            displayStaticWrapperAs="desktop"
                            label="Week picker"
                            value={value}
                            onChange={(newValue) => {
                            setValue(newValue);
                            }}
                            renderDay={renderWeekPickerDay}
                            renderInput={(params) => <TextField {...params} />}
                            inputFormat="'Week of' MMM d"
                        />
                    </LocalizationProvider>
                    
                </div> */}
                <Box padding={6}>
                    <Typography variant='h3'>Economic Calander</Typography>
                </Box>

                <EconomicCalendar colorTheme="light" height={1000} width="100%"></EconomicCalendar>
            </Box>


            {/* <TableContainer component={Paper} sx={{m: 1}}>
            <Typography sx={{}}>This Weeks Economic Events</Typography>
            {
                            thisWeekEvents.map((item) => (
                                <>
                                <TableRow>
                                    <TableCell sx={{ fontWeight: 'bold' }} >{item.day.format("dddd MMM DD")}</TableCell>
                                </TableRow>

                                <TableRow>
                                    <TableCell>Time</TableCell>
                                    <TableCell align="right">Event</TableCell>
                                    <TableCell align="right">Estimate</TableCell>
                                    <TableCell align="right">Actual</TableCell>
                                    <TableCell align="right">Change</TableCell>
                                </TableRow>
                                
                                    {
                                        item.events.map((event) =>(
                                            <TableRow>
                                                <TableCell align="right">{moment(event.date, 'YYYY-MM-DD').format('h:mma')}</TableCell>
                                                <TableCell align="right">{event.event}</TableCell>
                                                <TableCell align="right">{event.estimate}</TableCell>
                                                <TableCell align="right">{event.actual}</TableCell>
                                                <TableCell align="right">{event.change}</TableCell>
                                            </TableRow>
                                        ))
                                    }
                                
                                </>
                            )
                            )
                        }
            </TableContainer> */}

{/* 
            <Typography>Next Weeks Economic Events</Typography>


            <Typography>Last Weeks Economic Events</Typography> */}







            {/* <TableContainer component={Paper}> */}
                {/* <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table"> */}
                    {/* <TableHead>
                        
                    <TableRow>
                        <TableCell>Time</TableCell>
                        <TableCell align="right">Event</TableCell>
                        <TableCell align="right">Estimate</TableCell>
                        <TableCell align="right">Actual</TableCell>
                        <TableCell align="right">Change</TableCell>
                    </TableRow>
                    </TableHead> */}


                    {/* <TableHead>
                        {
                            data.map((row) => (
                                <TableRow>
                                    <TableCell align="right">{row.date}</TableCell>
                                    <TableCell align="right">{row.event}</TableCell>
                                    <TableCell align="right">{row.estimate}</TableCell>
                                    <TableCell align="right">{row.actual}</TableCell>
                                    <TableCell align="right">{row.change}</TableCell>
                                </TableRow>
                            ))
                            
                        }
                    
                    </TableHead> */}



                    {/* <TableBody> */}

                        

                    {/* {rows.map((row) => (
                        <TableRow
                        key={row.name}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                        <TableCell component="th" scope="row">
                            {row.name}
                        </TableCell>
                        <TableCell align="right">{row.calories}</TableCell>
                        <TableCell align="right">{row.fat}</TableCell>
                        <TableCell align="right">{row.carbs}</TableCell>
                        <TableCell align="right">{row.protein}</TableCell>
                        </TableRow>
                    ))} */}

                    {/* </TableBody> */}
                {/* </Table> */}
            {/* </TableContainer> */}


            {/* <div class="ticker-container">
            <div class="ticker-canvas">
            <div class="tradingview-widget-container">
            <div class="tradingview-widget-container__widget"></div> */}
            {/* <script type="text/javascript" src="https://s3.tradingview.com/external-embedding/embed-widget-tickers.js">
            {
            "symbols": [
                {
                "title": "S&P 500",
                "proName": "INDEX:SPX"
                },
                {
                "title": "Nasdaq 100",
                "proName": "INDEX:IUXX"
                },
                {
                "title": "EUR/USD",
                "proName": "FX_IDC:EURUSD"
                },
                {
                "title": "BTC/USD",
                "proName": "BITFINEX:BTCUSD"
                },
                {
                "title": "ETH/USD",
                "proName": "BITFINEX:ETHUSD"
                },
                {
                "description": "Apple",
                "proName": "NASDAQ:AAPL"
                },
                {
                "description": "Berkshire",
                "proName": "NYSE:BRK.A"
                },
                {
                "description": "Microsoft",
                "proName": "NASDAQ:MSFT"
                },
                {
                "description": "Google",
                "proName": "NASDAQ:GOOG"
                },
                {
                "description": "Tesla",
                "proName": "NASDAQ:TSLA"
                },
                {
                "description": "Amazon",
                "proName": "NASDAQ:AMZN"
                },
                {
                "description": "AUD/USD",
                "proName": "OANDA:AUDUSD"
                },
                {
                "description": "Sony",
                "proName": "NYSE:SNE"
                },
                {
                "description": "BHP",
                "proName": "BHP"
                },
                {
                "description": "Telstra",
                "proName": "TLS"
                }
                
            ],
            "locale": "en"
            }
            </script> */}
            {/* </div>
            </div>
            </div>

            <div class="content">

            </div> */}

        </Container>
        
  )
}
