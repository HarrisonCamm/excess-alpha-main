import { Card, CardActionArea, CardContent, CardMedia, Link, Grid, Paper, Typography, Table, TableHead, TableCell, TableRow, TableBody, Box } from '@mui/material';
import React from 'react'




function StockSideBar(props) {
    // const { archives, description, social, title } = props;

    const ARTICLE_LENGTH = 25


    function abbrNum(number, decPlaces) {
      // 2 decimal places => 100, 3 => 1000, etc
      decPlaces = Math.pow(10,decPlaces);
  
      // Enumerate number abbreviations
      var abbrev = [ "K", "M", "B", "T" ];
  
      // Go through the array backwards, so we do the largest first
      for (var i=abbrev.length-1; i>=0; i--) {
  
          // Convert array index to "1000", "1000000", etc
          var size = Math.pow(10,(i+1)*3);
  
          // If the number is bigger or equal do the abbreviation
          if(size <= number) {
               // Here, we multiply by decPlaces, round, and then divide by decPlaces.
               // This gives us nice rounding to a particular decimal place.
               number = Math.round(number*decPlaces/size)/decPlaces;
  
               // Handle special case where we round up to the next abbreviation
               if((number === 1000) && (i < abbrev.length - 1)) {
                   number = 1;
                   i++;
               }
  
               // Add the letter for the abbreviation
               number += abbrev[i];
  
               // We are done... stop
               break;
          }
      }
  
      return number;
  }


    return (
      <Grid item xs={12} md={4}>
        <Paper elevation={0} sx={{ p: 2, bgcolor: 'grey.200', m:1}}>
        
        <Box paddingBottom={5} backgroundColor={'white'}>
          <Typography padding={2} variant="h6">Key Information</Typography>
          <Table sx={{ bgcolor: 'white'}}>
            <TableHead>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell><Typography fontWeight="bold">Previous Close</Typography></TableCell>
                <TableCell>{props.stockInfo?.previousClose}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell><Typography fontWeight="bold">Day Range</Typography></TableCell>
                <TableCell>${props.stockInfo?.dayLow} - {props.stockInfo?.dayHigh}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell><Typography fontWeight="bold">Year Range</Typography></TableCell>
                <TableCell>${props.stockInfo?.yearLow} - {props.stockInfo?.yearHigh}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell><Typography fontWeight="bold">Market Cap</Typography></TableCell>
                <TableCell>{abbrNum(props.stockInfo?.marketCap, 2)}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell><Typography fontWeight="bold">P/E Ratio</Typography></TableCell>
                <TableCell>{props.stockInfo?.pe}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell><Typography fontWeight="bold">EPS</Typography></TableCell>
                <TableCell>{props.stockInfo?.eps}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell><Typography fontWeight="bold">EPS</Typography></TableCell>
                <TableCell>{props.stockInfo?.eps}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell><Typography fontWeight="bold">Main Exchange</Typography></TableCell>
                <TableCell>{props.stockInfo?.exchange}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </Box>


        <Box sx={{backgroundColor : 'white', padding : 1}}>
          <Typography variant="h6" gutterBottom>
            In The News
          </Typography>
          {
            props.news.map((value)=>

                <Card sx={{marginBottom : 2, maxWidth : 350}}>
                  <Link underline="none" href={value.url}>
            <CardActionArea>
              
              <CardMedia
                component="img"
                height="140"
                
                image={value.image}
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom component="div">
                  {value.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {value.text.substring(0, ARTICLE_LENGTH)}
                </Typography>
              </CardContent>
            </CardActionArea>
            </Link>
            </Card>

            )
          }
          </Box>
        </Paper>
        
       
      </Grid>
    );
  }
  
//   Sidebar.propTypes = {
//     archives: PropTypes.arrayOf(
//       PropTypes.shape({
//         title: PropTypes.string.isRequired,
//         url: PropTypes.string.isRequired,
//       }),
//     ).isRequired,
//     description: PropTypes.string.isRequired,
//     social: PropTypes.arrayOf(
//       PropTypes.shape({
//         icon: PropTypes.elementType.isRequired,
//         name: PropTypes.string.isRequired,
//       }),
//     ).isRequired,
//     title: PropTypes.string.isRequired,
//   };
  
  export default StockSideBar;