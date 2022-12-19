import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Box, Container, darken, lighten, Paper } from '@mui/material';
// import { useDemoData } from '@mui/x-data-grid-generator';
import { useState } from 'react';
import { useEffect } from 'react';
import { INSIDER_COLUMNS } from '../Columns';
import { Typography } from '@material-ui/core';
import { useContext } from 'react';
import { UserContext } from '../../context/UserContext';
import { financialmodelingprep } from '../../config/api_keys';



const getBackgroundColor = (color, mode) =>
  mode === 'dark' ? darken(color, 0.6) : lighten(color, 0.6);

const getHoverBackgroundColor = (color, mode) =>
  mode === 'dark' ? darken(color, 0.5) : lighten(color, 0.5);



export default function InsiderTrading() {

  const [data, setData] = useState([])

  function prepData(json) {
    json.forEach((o, i) =>{
      o.id = i + 1;
      o.value = o.price * o.securitiesTransacted;
    });
    setData(json)
  }

    



    const msg = useContext(UserContext)

    useEffect(() => {
      //const url = `${poly.base_url}/tickers?active=true&sort=ticker&order=asc&limit=10&apiKey=${poly.}`
      const url = `https://financialmodelingprep.com/api/v4/insider-trading?transactionType=P-Purchase,S-Sale&page=0&apikey=${financialmodelingprep.api_key}`
      const apiGet = () => {
          fetch(url)
          .then((response) => response.json())
          .then((json) => {
              // console.log(json)
              prepData(json);
          });
      };
      apiGet();
      
    }, [])




  // const { data } = useDemoData({
  //   dataSet: 'Commodity',
  //   rowLength: 100,
  //   maxColumns: 6,
  // });


  
  return (
    <Container maxWidth="xl">
      <Paper>
        <Box
        sx={{
          margin: 1,
          width: '100%',
          '& .super-app-theme--Open': {
            bgcolor: (theme) =>
              getBackgroundColor(theme.palette.info.main, theme.palette.mode),
            '&:hover': {
              bgcolor: (theme) =>
                getHoverBackgroundColor(theme.palette.info.main, theme.palette.mode),
            },
          },
          '& .super-app-theme--P-Purchase': {
            bgcolor: (theme) =>
              getBackgroundColor(theme.palette.success.main, theme.palette.mode),
            '&:hover': {
              bgcolor: (theme) =>
                getHoverBackgroundColor(
                  theme.palette.success.main,
                  theme.palette.mode,
                ),
            },
          },
          '& .super-app-theme--S-Sale': {
            bgcolor: (theme) =>
              getBackgroundColor(theme.palette.error.main, theme.palette.mode),
            '&:hover': {
              bgcolor: (theme) =>
                getHoverBackgroundColor(theme.palette.error.main, theme.palette.mode),
            },
          },
        }}
      >
        <Typography>{msg}</Typography>
        <DataGrid autoHeight rows={data} columns={INSIDER_COLUMNS} 
        getRowClassName={(params) => `super-app-theme--${params.row.transactionType}`} />
      </Box>
      </Paper>

      

      


    </Container>
  );
}





