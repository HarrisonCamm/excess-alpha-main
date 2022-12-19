import React from 'react'
import { ListItem, ListItemAvatar, Avatar, List, ListItemText, ListItemButton, Link, Typography, Grid, Paper,} from '@mui/material'



export default function Sidebar(props) {

  

//   const [gainers, setGainers] = useState([])

//   let isRendered = useRef(false);
//   const gainersUrl = `https://financialmodelingprep.com/api/v3/stock_market/gainers?apikey=`
//     function getGainers(value) {
//       isRendered = true
//       fetch(gainersUrl)
//           .then((response) => response.json())
//           .then((json) => {
//             if (isRendered) {
//               setGainers(json.splice(0, 10))
//             } 
//           }
//               )
//       return () => {
//         isRendered = false;
//       }

//   }

//   useEffect(() => {
//     let isCancelled = false;
//     getGainers().then(() => {

//     })

//     return () => {
//       isCancelled = true
//     }
// }, [])


// sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}



  return (
    <Grid item xs={12} md={4}>
      <Paper elevation={0} sx={{ p: 2, bgcolor: 'grey.200' }}>

      
        
    <List
      sx={{
        width: '100%',
        bgcolor: 'background.paper',
      }}
    >


      <Typography sx={{}} variant="h6">{props.description}</Typography>
      { 
        props.stockList.map((stock) => (
          <Link href={`/Quote/${stock.symbol}`} underline="none" color="inherit">
            <ListItemButton dense >
            <ListItem disablePadding secondaryAction={
              stock.changesPercentage > 0 ?
                <ListItemText edge='end' primary={stock.price.toFixed(2)}  secondary={<div style={{color: '#22AB94'}}>+{stock.changesPercentage.toFixed(2)}%</div>}/> :
                <ListItemText edge='end' primary={stock.price.toFixed(2)}  secondary={<div style={{color: '#F23645'}}>{stock.changesPercentage.toFixed(2)}%</div>} />
            }>
              
                <ListItemAvatar>
                  <Avatar className='avatar' alt={'AAPL'} src={`https://financialmodelingprep.com/image-stock/${stock.symbol}.png`} />
                </ListItemAvatar>

                {
                  stock.name.length >= 23 ?
                    <ListItemText primary={stock.symbol} secondary={`${stock.name.substring(0,25)}...`} /> :
                    <ListItemText primary={stock.symbol} secondary={stock.name} />  
                }

                
                {/* <Divider component="li" /> */}
              
            </ListItem>
            </ListItemButton>
          </Link>
        )
        )
      }
      
      
    </List>
    </Paper>
    </Grid>
  )
}
