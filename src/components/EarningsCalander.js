import React, { useEffect, useState } from 'react'
// import { iex, poly } from '../config/api_keys.js';
import moment from 'moment';
import './EarningsCalander.css'
import { Avatar, Box, Container, styled, TextField, Typography, Button } from '@material-ui/core';
import { endOfWeek, isSameDay, isWithinInterval, startOfWeek } from 'date-fns';
import { LocalizationProvider, PickersDay, StaticDatePicker } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
// import Moment from 'react-moment';
import { AvatarGroup, Divider, Grid, IconButton, Link, Paper, Skeleton, Stack } from '@mui/material';
// import { CalendarViewMonth } from '@mui/icons-material';
import { Modal } from 'react-bootstrap';
import { financialmodelingprep } from '../config/api_keys';




const CustomPickersDay = styled(PickersDay, {
    shouldForwardProp: (prop) =>
      prop !== 'dayIsBetween' && prop !== 'isFirstDay' && prop !== 'isLastDay',
  })(({ theme, dayIsBetween, isFirstDay, isLastDay }) => ({
    ...(dayIsBetween && {
      borderRadius: 0,
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.common.white,
      '&:hover, &:focus': {
        backgroundColor: theme.palette.primary.dark,
      },
    }),
    ...(isFirstDay && {
      borderTopLeftRadius: '50%',
      borderBottomLeftRadius: '50%',
    }),
    ...(isLastDay && {
      borderTopRightRadius: '50%',
      borderBottomRightRadius: '50%',
    }),
  }));



export default function EarningsCalander(ticker) {


    const [value, setValue] = React.useState(new Date());
    const MAX_COLUMN_ITEMS = 20;
    let currentDay = moment(value);

    


    // //Function Finds the days of the working week in 
    function getSelectedWeekDates(value) {
        let weekDates= [];
        let currentDay = moment(value)
        let monday = currentDay.weekday(0)
        // console.log(monday.format()) 
        for (var i = 0; i <= 4; i++) {
            monday = moment(monday).add(1, 'days');
            weekDates.push(monday)
        }
        return weekDates; 
      }
      
      let thisWeekDates = getSelectedWeekDates(value);
      thisWeekDates.forEach(function(date){ console.log(date.format('YYYY-MM-DD'));});
    //   console.log(getStartandEndWeekDates());


    




    const renderWeekPickerDay = (date, selectedDates, pickersDayProps) => {
        if (!value) {
        return <PickersDay {...pickersDayProps} />;
        }

        
        const start = startOfWeek(value);
        const end = endOfWeek(value);
        const dayIsBetween = isWithinInterval(date, { start, end });
        const isFirstDay = isSameDay(date, start);
        const isLastDay = isSameDay(date, end);

        return (
        <CustomPickersDay
            {...pickersDayProps}
            disableMargin
            dayIsBetween={dayIsBetween}
            isFirstDay={isFirstDay}
            isLastDay={isLastDay}
        />
        );
    };








    // //Function Finds the start and end week dates
    // function getStartandEndWeekDates() {
    //     var start = moment().day(1).format('YYYY-MM-DD');
    //     var end = moment().day(7).format('YYYY-MM-DD');
    //     return `${start}&to=${end}`
    // }

    
      

    const [data, setData] = useState([])

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);



    //const url = `${poly.base_url}/tickers?active=true&sort=ticker&order=asc&limit=10&apiKey=${poly.}`
    
    
// Stash API keys
    // let loaded = false   
    useEffect(() => {
        let startDay = moment(value).weekday(1).format('YYYY-MM-DD')
        let endDay = moment(value).weekday(6).format('YYYY-MM-DD')
        const url = `https://financialmodelingprep.com/api/v3/earning_calendar?from=${startDay}&to=${endDay}&apikey=${financialmodelingprep.api_key}`
        console.log(`https://financialmodelingprep.com/api/v3/earning_calendar?from=${startDay}&to=${endDay}&apikey=${financialmodelingprep.api_key}`)
        const apiGet = () => {
            fetch(url)
            .then((response) => response.json())
            .then((json) => {
                // console.log(json)
                setData(json.sort((a, b) => (a.revenueEstimated < b.revenueEstimated ? 1 : -1)));
            });
        };
        apiGet();
    }, [ticker.ticker, value])


    // function filterEarnings( value, date) {
    //     data.filter(function(earnings){
    //         return earnings.when == value &&
    //         earnings.date == date.format('YYYY-MM-DD')
    //     })
    // }


    




    console.log(thisWeekDates)

    return (
        <Container maxWidth="xl">
            
            <Paper sx={{bgcolor: 'white'}}>

            <Box p={2} style={{position: 'relative'}}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <Box padding={3} >
                            <Typography variant='h2'>Earnings Calander</Typography>
                        </Box>
                        <Divider/>
                    </Grid>
                    

                    <Grid item xs={8}>
                        <Box padding={4} position="absolute" left={2}>
                            <Typography variant='h3' >{currentDay.format("MMMM")}</Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={4}>
                        <Box padding={4}>
                            <Button onClick={handleShow} variant="contained">Select Date</Button>
                                {/* <ButtonGroup variant="contained" aria-label="outlined primary button group">
                                    <Button><CalendarViewMonth></CalendarViewMonth></Button>
                                    <Button sx={{color: 'primary'}}>Two</Button>
                                </ButtonGroup> */}
                        </Box>
                    </Grid>

                    
                </Grid>
                <Box position="absolute" top={0} right={0} padding={5}>

                    

                    
                </Box>
            </Box>

 

            
            
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
           
                <div class="grid-container" style={{overflowY: 'scroll'}}>
                {
                    thisWeekDates.map((value) =>(
                        
                        <div class="item1">
                            <Paper elevation={2}>
                                <div class="column-header">
                                    <Stack>
                                    <Typography variant='h6'>{value.format('dddd')}</Typography>
                                    {
                                        value.isSame(currentDay, 'day') ? <Box><IconButton variant="outlined">{value.format('D')}</IconButton></Box> : <Box><IconButton variant="outlined">{value.format('D')}</IconButton></Box>
                                    }
                                    {/* <IconButton>{value.format('D')}</IconButton> */}
                                    </Stack> 
                                    </div>
                                <div class="column-contents">
                                    <div class="pre-post-column">
                                        <Typography >Premarket</Typography>
                                            {
                                                
                                                data.filter(function(earnings){
                                                    return earnings.time === "bmo" &&
                                                    earnings.date === value.format('YYYY-MM-DD')
                                                }).map((value) =>(
                                                    <>
                                                        <Avatar className='avatar' alt={value.symbol} src={`https://financialmodelingprep.com/image-stock/${value.symbol}.png`} />
                                                        <Typography><Link underline='none' href={`/Quote/${value.symbol}`}>{value.symbol}</Link></Typography>
                                                    </> 
                                                ))
                                            }
                                    </div>
                                    <div class="pre-post-column">
                                        {
                                            // console.log(filterEarnings("pre market", value ))
                                        }

                                        <Typography >Postmarket</Typography>
                                        {
                                                
                                                data.filter(function(earnings){
                                                    return earnings.time ===  "amc" &&
                                                    earnings.date === value.format('YYYY-MM-DD')
                                                }).splice(0, MAX_COLUMN_ITEMS).map((value) =>(
                                                    <>
                                                        {
                                                            value? (
                                                                <Avatar className='avatar' alt={value.symbol} src={`https://financialmodelingprep.com/image-stock/${value.symbol}.png`} />
                                                            ) : (
                                                                <Skeleton variant="rectangular" width={40} height={40} />
                                                            )
                                                            
                                                        }
                                                        <Typography><Link underline='none' href={`/Quote/${value.symbol}`}>{value.symbol}</Link></Typography>
                                                        
                                                    </>
                                                ))

                                            }
                                            {

                                                data.filter(function(earnings){
                                                    return earnings.time === "amc" &&
                                                    earnings.date === value.format('YYYY-MM-DD')
                                                }).length >= MAX_COLUMN_ITEMS &&


                                                <AvatarGroup onClick={console.log('test')} total={data.filter(function(earnings){
                                                    return earnings.time === "amc" &&
                                                    earnings.date === value.format('YYYY-MM-DD')
                                                }).length} max={2} >

                                                <Avatar src={
                                                    `https://financialmodelingprep.com/image-stock/${data.filter(function(earnings){
                                                        return earnings.time === "amc" &&
                                                        earnings.date === value.format('YYYY-MM-DD')
                                                    })[MAX_COLUMN_ITEMS + 1]?.symbol}.png`
                                                
                                            } alt = {'B'}/>

                                                    

                                                </AvatarGroup>
                                            }
                                            
                                    </div>
                                </div>
                            </Paper>
                        </div>

                    )
                    )
                }
                </div>
        
                
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                <Modal.Title>Select Date</Modal.Title>
                </Modal.Header>
                <Modal.Body>
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

                </Modal.Body>

            </Modal>
            
            
            
            </Paper>
        </Container>
        
  )
}

