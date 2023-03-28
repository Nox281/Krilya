import { React, useState } from "react";
import Map from "react-map-gl";

function map() {
  const [viewport, setViewport] = useState({
    width: "100%",
    height: "100%",
    latitude: 37.7577,
    longitude: -122.4376,
    zoom: 11,
  });

  return (
    <Map
      mapStyle="mapbox://styles/nox499/clfr26f7h000a01pdp7vabdw4"
      mapboxAccessToken={process.env.mapbox_key}
      {...viewport}
    ></Map>
  );
}

export default Map;
