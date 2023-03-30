import React from 'react'
import { Map , NavigationControl , Marker } from 'react-map-gl';
import { getCenter } from 'geolib';

function SideMap({ searchResults }) {

const coordinates = searchResults.map((result) => ({
  longitude: result.long,
  latitude: result.lat,
}))

const center = getCenter(coordinates);

console.log(center)

  return (
    <Map
      initialViewState={{
        longitude: center.longitude,
        latitude: center.latitude,
        zoom: 11,
      }}
      style={{ width: 1200, height: "auto" }}
      mapStyle="mapbox://styles/nox499/clfu5o2ya005e01rp7yer86k8"
    >
      <NavigationControl />
      {searchResults.map((result) => (
        <div key={result.long}>
          <Marker
            longitude={result.long}
            latitude={result.lat}
            className={"hover:scale-50 cursor-pointer"}
            anchor="bottom"
          >
            <img src='./popUp.webp' className='h-10 drop-shadow-md hover:drop-shadow-lg hover:scale-105 transform transition'></img>
            <p>{result.price}</p>
          </Marker>
        </div>
      ))}
    </Map>
  );
}

export default SideMap