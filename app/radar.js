"use client";

require('dotenv').config()

import React from 'react'
import { GoogleMap, useJsApiLoader, MarkerF, CircleF } from '@react-google-maps/api';



function Radar() {
    let map = null;
    const sdk = require('api')('@climacell-docs/v4.0.1#gtapp32lkgosu6j');

    sdk.auth('AK79SNkjUNv3vmdByZL3L2Wfvgoje1qC');
    sdk.getMapTile({
    zoom: '5',
    x: '38.5167915',
    y: '-77.2988706',
    field: 'precipitationIntensity',
    time: 'now',
    format: 'png',
    accept: 'text/plain'
    })
    .then(({ data }) => map = data)
    .catch(err => console.error(err));

  return isLoaded ? (
    <img src={map} />
  ) : <></>
}

export default React.memo(Radar)