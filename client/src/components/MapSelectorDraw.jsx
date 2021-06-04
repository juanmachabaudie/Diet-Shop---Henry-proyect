import React from "react";
import { GoogleMap, Marker, LoadScript } from "@react-google-maps/api";
const { GOOGLE_MAPS_API_KEY } = process.env;
const containerStyle = {
  width: "500px",
  height: "500px",
};

function MapSelectorDraw({ location }) {
  const { uuid, description, lat, lng } = location;

  let position = {
    //BsAs Centenary Park
    lat: -34.606421190164305,
    lng: -58.43554268436931,
  };
  let center = {
    //BsAs Centenary Park
    lat: -34.606421190164305,
    lng: -58.43554268436931,
  };
  if (lat && lng) {
    position = {
      //BsAs Centenary Park
      lat,
      lng,
    };
    center = {
      //BsAs Centenary Park
      lat,
      lng,
    };
  }
  return (
    <LoadScript googleMapsApiKey={GOOGLE_MAPS_API_KEY}>
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={18}>
        <Marker position={position} />
        {/* Child components, such as markers, info windows, etc. */}
        <></>
      </GoogleMap>
    </LoadScript>
  );
}

export default React.memo(MapSelectorDraw);
