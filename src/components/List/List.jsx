import  React, {useState} from 'react';
import {CircularProgress,Grid,Typography,InputLabel,MenuItem,FormControl,Select} from '@material-ui/core';
import useStyles from './styles';
import PlaceDetails from '../PlaceDetails/PlaceDetails';
const List = (props) => {
    const classes = useStyles();
    const [type,setType] = useState('restaurants');
    const [rating,setRating] = useState('');

    

    return ( <>
    <div className={classes.container}>
        <Typography  varient='h4'>
            restaurants and Hotels arround you
        </Typography>
        <FormControl className={classes.formControl}>
            <InputLabel>Type</InputLabel>
            <Select onChange={(e)=>{setType(e.target.value)}} value={type}>
                <MenuItem value={'restaurants'}>Restaurants</MenuItem>
                <MenuItem value={'hotels'}>Hotels</MenuItem>
                <MenuItem value={'attractions'}>Attractions</MenuItem>
            </Select>
        </FormControl>
        <FormControl className={classes.formControl}>
            <InputLabel>Rating</InputLabel>
            <Select onChange={(e)=>{setRating(e.target.value)}} value={rating}>
                <MenuItem value={0}>All</MenuItem>
                <MenuItem value={3}>Above 3.0</MenuItem>
                <MenuItem value={4}>Above 4.0</MenuItem>
                <MenuItem value={4.5}>Above 4.5</MenuItem>
            </Select>
        </FormControl>
        <Grid container className={classes.list} spacing={3}>
            {props.places?.map((place,index)=>(
                <Grid item key={index} xs={12}>
                    <PlaceDetails place={place}/>
                </Grid>
            ))}
        </Grid>
    </div>
    </> );
}
 
export default List;