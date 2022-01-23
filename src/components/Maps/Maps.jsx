import React from 'react';
import GoogleMapReact from 'google-map-react';
import {Paper,Typography,useMediaQuery} from "@material-ui/core";
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import Rating from '@material-ui/lab';
import useStyles from './styles';
const Maps = (props) => {
    const classes = useStyles();
    const isMobile = useMediaQuery('min-widh:600px');
    return ( <>
        <div className={classes.mapContainer}>
            <GoogleMapReact 
                bootstrapURLKeys={{key:'***'}}
                defaultCenter={props.coords}
                center={props.coords}
                defaultZoom={14}
                margin={[50,50,50,50]}
                // option={""}
                onChange={(e) => {
                props.setCoords({ lat: e.center.lat, lng: e.center.lng });
                props.setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw });
        }}
                onchildClick={""}>
                    
                </GoogleMapReact>
        </div>
    </> );
}
 
export default Maps;