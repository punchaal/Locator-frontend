import React, { useState} from 'react';
import GoogleMapReact from 'google-map-react';
import Marker from './Marker';
import AddLocation from '../AddLocation/Location';

export default function Map(props){


    const [markerClicked,setState] = useState(false)
    const [center] = useState({lat: 43.6532, lng: -79.3832 });
    const [zoom] = useState(0);
    const [markers,setMarkers] = useState({})


    const handleMarkerClick = (e)=>{
        markerClicked? setState(false):setState(true)
    }

    const handleClick = ({lat,lng})=>{
        setMarkers({...setMarkers,longitude:lng,latitude:lat})
    }

    console.log({markers})
    return (
        <div style={{ height: '70vh', width: '100%' }}>
        <GoogleMapReact
          onClick = {handleClick}
          onChildClick = {handleMarkerClick}
          bootstrapURLKeys={{ key: 'AIzaSyByuy2unqTZC1ZKFB_5-_rOQgmjnuOjESE' }}
          defaultCenter={center}
          defaultZoom={zoom}
        >
          <Marker
            key = {markers.id}
            lat={markers.latitude}
            lng={markers.longitude}
            name={`${markers.longitude},${markers.latitude}`}
            color="blue"
          />
        </GoogleMapReact> 
        {markerClicked?
        <AddLocation 
            name={`${markers.longitude},${markers.latitude}`}
         />:null
        }
      </div>
    );
}
