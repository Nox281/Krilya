import React from 'react'
import { Map , NavigationControl } from 'react-map-gl';

function SideMap() {
  return (
    <Map
      initialViewState={{
        longitude: -5.385492,
        latitude: 35.569868,
        zoom: 14,
      }}
      style={{ width: 1200, height: "auto" }}
      mapStyle="mapbox://styles/nox499/clfsg5nge002801rp4857hz7j"
    >
      <NavigationControl />
    </Map>
  );
}

export default SideMap