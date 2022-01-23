import React,{useState,useEffect} from 'react';
import {CssBaseline,Grid} from '@material-ui/core'
import Header from './components/Header/Header';
import List from './components/List/List';
import PlaceDetails from './components/PlaceDetails/PlaceDetails';
import Maps from './components/Maps/Maps';
import { getPlacesData } from './components/api/index';

function App() {
  const[palces,setPlaces] = useState([]);
  const[coordinates,setCoordinates] = useState({});
  const[bounds,setBounds] = useState({ne: {lat: "33.6567606718162", lng: "72.99163500024758"}, sw: {at: "33.639398244014274", lng: "72.91988054468118"}});

  // lunch app users default location 
  useEffect(() =>{
    //get user coordinates
    navigator.geolocation.getCurrentPosition(({coords:{latitude,longitude}})=>{
      //{coords:{latitude,longitude}} destracture the object
      setCoordinates({lat:latitude,lng:longitude});

    })

  },[]);
  useEffect(()=>{
    console.log(bounds);
    getPlacesData(bounds.sw,bounds.ne).then((data)=>{ // getPlacesData is async function so use then() which expects a call back function
      setPlaces(data);
    });
  },[coordinates,bounds]);
  return (
    <div>
      <CssBaseline />
     <Header />
     <Grid container spacing={3} style={{width: '100%'}}>
       <Grid item xs={12} md={4}>
         <List  places={palces}/>
       </Grid>
       <Grid item xs={12} md={8}>
        <Maps 
          setBounds={setBounds}
          setCoords={setCoordinates}
          coords={coordinates}
          // bounds={bounds}
        />
       </Grid>
     </Grid>

    </div>
  );
}

export default App;
