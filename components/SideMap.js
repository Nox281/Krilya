import React, { useState } from "react";
import { Map, NavigationControl, Marker, Popup } from "react-map-gl";
import { getCenter } from "geolib";
import { Poppins } from "next/font/google";

const poppins600 = Poppins({
  subsets: ["latin"],
  weight: "500",
});

function SideMap({ searchResults }) {
  const coordinates = searchResults.map((result) => ({
    longitude: result.long,
    latitude: result.lat,
  }));

  const center = getCenter(coordinates);
  const [popupInfo, setPopupInfo] = useState(null);

  const handleMarkerClick = (result) => {
    setPopupInfo(result);
  };

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
            onClick={() => handleMarkerClick(result)}
          >
            <img
              src="./popUp.webp"
              className="cursor-pointer h-10 drop-shadow-md"
            ></img>
            <p
              className={`cursor-pointer absolute w-full text-center top-[7px] text-[16px] whitespace-nowrap ${poppins600.className}`}
            >
              {result.price}
            </p>
          </Marker>
          {popupInfo &&
            popupInfo.long === result.long &&
            popupInfo.lat === result.lat && (
              <Popup
                longitude={result.long}
                latitude={result.lat}
                closeButton={true}
                closeOnClick={false}
                onClose={() => setPopupInfo()}
              >
                <div className="popup-content">
                  <p className={`text-lg font-bold ${poppins600.className}`}>
                    {result.title}
                  </p>
                  <img src={result.img}></img>
                  <p className="text-md">{result.description}</p>
                  <p className={`text-lg font-bold ${poppins600.className}`}>
                    {result.price}
                  </p>
                </div>
              </Popup>
            )}
        </div>
      ))}
    </Map>
  );
}

export default SideMap;
