"use client";

require('dotenv').config()

import React from 'react'
import { GoogleMap, useJsApiLoader, MarkerF, CircleF } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '90%'
};

const center = {
  lat: 38.5167915,
  lng: -77.2988706
};

function Map() {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyBvUM2DmQzq8ymcSQVu3babQMw5YeHNphs"
  })
  //process.env.GOOGLE_MAPS_API


  const [map, setMap] = React.useState(null)

  const onLoad = React.useCallback(function callback(map) {
    // This is just an example of getting and using the map instance!!! don't just blindly copy!
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);

    setMap(map)
  }, [])

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])

  return isLoaded ? (
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
        { /* Child components, such as markers, info windows, etc. */ 
        
        <>
        <MarkerF position={center} onLoad={() => console.log('Marker Loaded')} />
        

        <CircleF
                key={1}
                center={center}
                radius='1000'
                options={{
                  fillColor: 'red',
                  strokeColor: 'green',
                  strokeOpacity: 0.8,
                }}
              />
        </>
 
        }
        
        <></>
      </GoogleMap>
  ) : <></>
}

export default React.memo(Map)