import React from "react";
import Map from "react-map-gl";

export default function MapDisplay(props) {
  const { longitude, latitude } = props.coordinates;
  return (<Map
    initialViewState={{
      longitude: longitude,
      latitude: latitude,
      zoom: 10
    }}
    style={{ width: '100%', maxHeight: 300 }}
    mapStyle="mapbox://styles/mapbox/streets-v9"
    mapboxAccessToken={process.env.MAPBOX_TOKEN}
  />);
}
