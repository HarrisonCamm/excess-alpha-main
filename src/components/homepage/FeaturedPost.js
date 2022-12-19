import React from 'react'
import { Typography, Grid, CardActionArea, Card, CardMedia, CardContent } from '@mui/material';




function FeaturedPost(props) {
    // const { post } = props;
  
    return (
      <Grid item xs={12} md={8}>
        <CardActionArea component="a" href="#">
          <Card sx={{ display: 'flex' }}>
            <CardContent sx={{ flex: 1 }}>
              <Typography component="h2" variant="h5">
                {props.props.title}
              </Typography>
              <Typography variant="subtitle1" color="text.secondary">
                {props.props.publishedDate}
              </Typography>
              <Typography variant="subtitle1" paragraph>
                {props.props.text}
              </Typography>
              <Typography variant="subtitle1" color="primary">
                Continue reading...
              </Typography>
            </CardContent>
            <CardMedia
              component="img"
              sx={{ width: 160, display: { xs: 'none', sm: 'block' } }}
              image={props.props.image}
              alt={props.props.title}
            />
          </Card>
        </CardActionArea>
      </Grid>
    );
  }
  
//   FeaturedPost.propTypes = {
//     post: PropTypes.shape({
//       date: PropTypes.string.isRequired,
//       description: PropTypes.string.isRequired,
//       image: PropTypes.string.isRequired,
//       imageLabel: PropTypes.string.isRequired,
//       title: PropTypes.string.isRequired,
//     }).isRequired,
//   };
  
  export default FeaturedPost;

