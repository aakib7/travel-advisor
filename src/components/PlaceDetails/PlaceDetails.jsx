import React from 'react';
import { Box, Typography, Button, Card, CardMedia, CardContent, CardActions, Chip } from '@material-ui/core';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import PhoneIcon from '@material-ui/icons/Phone';
import Rating from '@material-ui/lab/Rating';

import useStyles from './styles.js';

const PlaceDetails = (props) => {
  const classes = useStyles();

  return (
   <>
   <Card elevation={6}>
       <CardMedia 
       style={{height:"380px"}}
       image={props.place.photo ? props.place.photo.images.large.url : "https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg"}
       title={props.place.name}/>
       <CardContent >
           <Typography varient="h5" gutterBottom>
            {props.place.name}
           </Typography>
           <Box display="flex" justify-content="space-between">
               <Typography varient="subtitle1">Price</Typography>
               <Typography varient="subtitle1" gutterBottom>{props.place.price_level}</Typography>
           </Box>
           <Box display="flex" justify-content="space-between">
               <Typography varient="subtitle1">Rankig</Typography>
               <Typography varient="subtitle1" gutterBottom>{props.place.ranking}</Typography>
           </Box>
       </CardContent>
       
       
   </Card>
   </>
  );
};

export default PlaceDetails;