import React, { useEffect, useRef, useState } from 'react'
import { Card, CardActionArea, CardMedia, CardContent, Typography, Container, Grid} from '@material-ui/core'
// import NewsTab from '../NewsTab'
// import CardItem from './CardItem'
import Sidebar from './Sidebar'
import './HomePage.css'
// import FeaturedPost from './FeaturedPost'
// import MainFeaturedPost from './MainFeaturedPost'
import { Box, Divider, Link, Stack } from '@mui/material'
import { financialmodelingprep } from '../../config/api_keys'
import MainFeaturedPost from './MainFeaturedPost'

export default function HomePage() {

  // const ARTICLE_LENGTH = 200
  // const [featured, setFeatured] = useState()
  const [news, setNews] = useState([])
  // const [gainers, setGainers] = useState([])


  


  
  const [gainers, setGainers] = useState([])
  const [losers, setLosers] = useState([])
  const [active, setActive] = useState([])

  function testy(json) {
    if (isRendered) {
      setGainers(json.splice(0, 10))
    } 
  }

  function callSetLosers(json) {
    if (isRendered) {
      setLosers((json.splice(0, 10)))
    }
  }

  function callSetActive(json) {
    if (isRendered) {
      setActive((json.splice(0, 10)))
    }
  }

  function callSetNews(json) {
    if (isRendered) {
      setNews({
        main: json.shift(),
        other: json
      })
    }
  }





  let isRendered = useRef(false);
  
  


  
    // function apiGet(value) {
    //     fetch(url)
    //         .then((response) => response.json())
    //         .then((json) =>
    //             setNews(json)
    //             )
    // }







  useEffect(() => {
    // let isCancelled = false;
    const gainersUrl = `https://financialmodelingprep.com/api/v3/stock_market/gainers?apikey=${financialmodelingprep.api_key}`
    const losersUrl = `https://financialmodelingprep.com/api/v3/stock_market/losers?apikey=${financialmodelingprep.api_key}`
    const activeUrl = `https://financialmodelingprep.com/api/v3/stock_market/actives?apikey=${financialmodelingprep.api_key}`
    const url = `https://financialmodelingprep.com/api/v3/stock_news?limit=10&apikey=${financialmodelingprep.api_key}`
    function getGainers(value) {
      // isRendered = true
      fetch(gainersUrl)
          .then((response) => response.json())
          .then((json) => testy(json)
              )


      fetch(losersUrl)
          .then((response) => response.json())
          .then((json) => callSetLosers(json)
              )
      
      fetch(activeUrl)
          .then((response) => response.json())
          .then((json) => callSetActive(json)
              )

    
      
      fetch(url)
            .then((response) => response.json())
            .then((json) =>
                callSetNews(json)
                )

      return () => {
        // isRendered = false;
        setNews({});
      }
  }
    getGainers();
    // apiGet();

    return () => {
      // isCancelled = true
    }
}, [])



// const sections = [
//   { title: 'Technology', url: '#' },
//   { title: 'Design', url: '#' },
//   { title: 'Culture', url: '#' },
//   { title: 'Business', url: '#' },
//   { title: 'Politics', url: '#' },
//   { title: 'Opinion', url: '#' },
//   { title: 'Science', url: '#' },
//   { title: 'Health', url: '#' },
//   { title: 'Style', url: '#' },
//   { title: 'Travel', url: '#' },
// ];

// const mainFeaturedPost = {
//   title: 'Title of a longer featured blog post',
//   description:
//     "Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents.",
//   image: 'https://source.unsplash.com/random',
//   imageText: 'main image description',
//   linkText: 'Continue reading…',
// };

// const featuredPosts = [
//   {
//     title: 'Featured post',
//     date: 'Nov 12',
//     description:
//       'This is a wider card with supporting text below as a natural lead-in to additional content.',
//     image: 'https://source.unsplash.com/random',
//     imageLabel: 'Image Text',
//   },
//   {
//     title: 'Post title',
//     date: 'Nov 11',
//     description:
//       'This is a wider card with supporting text below as a natural lead-in to additional content.',
//     image: 'https://source.unsplash.com/random',
//     imageLabel: 'Image Text',
//   },
// ];

// // const posts = [post1, post2, post3];

// const sidebar = {
//   title: 'About',
//   description:
//     'Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.',
//   archives: [
//     { title: 'March 2020', url: '#' },
//     { title: 'February 2020', url: '#' },
//     { title: 'January 2020', url: '#' },
//     { title: 'November 1999', url: '#' },
//     { title: 'October 1999', url: '#' },
//     { title: 'September 1999', url: '#' },
//     { title: 'August 1999', url: '#' },
//     { title: 'July 1999', url: '#' },
//     { title: 'June 1999', url: '#' },
//     { title: 'May 1999', url: '#' },
//     { title: 'April 1999', url: '#' },
//   ]
// };




       

  return (


    <Container maxWidth="lg" sx={{backgroundColor : 'white'}}>

      <Link underline='none' href={news?.main?.url}>
        <MainFeaturedPost title={news?.main?.title} image={news?.main?.image} text={news?.main?.text}/>
      </Link>
        

  
      <Grid container spacing={4}>


      <Grid container spacing={5} sx={{ mt: 3 }} padding={1}>
      <Grid
      item
      xs={12}
      md={8}
      sx={{
        '& .markdown': {
          py: 3,
        },
      }}
    >
      <Typography fontFamily="Nirmala UI" variant="h4" gutterBottom>
        In the News
      </Typography>
      <Box paddingLeft={3}><Divider/></Box>
      
      {
        news?.other?.map((value) => (
          
          // <div className='cards'>
          //   <div className='cards-container'>
          //     <div className='cards-wrapper'>
          //       <ul className='cards__items'>
          //         <CardItem value={value}/>
          //       </ul>
          //     </div>
          //   </div>
          // </div>



          
            // <Card sx={{ maxWidth : 350 }}>
              
            // <CardActionArea>
            //   <CardMedia
            //     component="img"
            //     height="140"
            //     image={value.image}
            //     alt="green iguana"
            //   />
            //   <CardContent>
            //   <Link href={value.url}>
            //     <Typography gutterBottom variant="h5" component="div">
            //       {value.title}
            //     </Typography>
            //       </Link>
            //     <Typography variant="body2" color="text.secondary">
            //       {value.text.substring(0, ARTICLE_LENGTH)}
            //     </Typography>
            //   </CardContent>
            // </CardActionArea>
          
            // </Card>


            <Grid item xs={12} md={12} sx={{ m: 5 }}>
            <CardActionArea component="a" href="#">
              <Link href={value.url} underline="none">
                <Card sx={{ display: 'flex' }}>
                  <CardContent sx={{ flex: 1 }}>
                    <Typography component="h2" variant="h5">
                      {value.title}
                    </Typography>
                    <Typography variant="subtitle1" color="text.secondary">
                      {value.date}
                    </Typography>
                    <Typography variant="subtitle1" paragraph>
                      {value.text.substring(0, 150)}...
                    </Typography>
                    <Typography variant="subtitle1" color="primary">
                      Continue reading...
                    </Typography>
                  </CardContent>
                  <CardMedia
                    component="img"
                    sx={{ width: 160, display: { xs: 'none', sm: 'block' } }}
                    image={value.image}
                    alt={value.title}
                  />
                </Card>
              </Link>
            </CardActionArea>
          </Grid>
            
          
        )
        )
      }
      <Typography className="markdown" key={"hello fjerifejfjijscjdsijcsdjfkjwekf"}>
        </Typography>
    </Grid>
    <Grid item xs={12} md={4} paddingBottom={3} >
        <Stack>
            <Sidebar stockList={active} description={"Most Active"}/>
            <Sidebar stockList={gainers} description={"Top Gainers"}/>
            <Sidebar stockList={losers} description={"Top Losers"}/>
          </Stack>
    </Grid>
       </Grid>
    </Grid>
        

    </Container>
  )

//https://codepen.io/epsilon42/pen/BPZgjP/
}