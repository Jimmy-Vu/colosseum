import React, { useEffect } from "react";
import Map, { Marker, NavigationControl } from "react-map-gl";

interface Props {
  coordinates: {
    longitude: number;
    latitude: number;
  }
}

export default function MapDisplay(props: Props) {
  const { longitude, latitude } = props.coordinates;

  return (
    <Map
      initialViewState={{
        longitude: longitude,
        latitude: latitude,
        zoom: 10
      }}
      style={{ width: '100%', height: '100%', borderRadius: 10 }}
      mapStyle="mapbox://styles/mapbox/streets-v9"
      mapboxAccessToken={process.env.MAPBOX_TOKEN}>
      <Marker
        latitude={latitude}
        longitude={longitude}
        anchor="bottom">
        <Pin size={20}>
        </Pin>
      </Marker>
      <NavigationControl />
    </Map>
  );
}

const ICON = `M20.2,15.7L20.2,15.7c1.1-1.6,1.8-3.6,1.8-5.7c0-5.6-4.5-10-10-10S2,4.5,2,10c0,2,0.6,3.9,1.6,5.4c0,0.1,0.1,0.2,0.2,0.3
  c0,0,0.1,0.1,0.1,0.2c0.2,0.3,0.4,0.6,0.7,0.9c2.6,3.1,7.4,7.6,7.4,7.6s4.8-4.5,7.4-7.5c0.2-0.3,0.5-0.6,0.7-0.9
  C20.1,15.8,20.2,15.8,20.2,15.7z`;

const pinStyle = {
  fill: '#d00',
  stroke: 'none'
};

function Pin(props: { size: number; children: [] }) {
  const { size = 20 } = props;

  return (
    <svg height={size} viewBox="0 0 24 24" style={pinStyle}>
      <path d={ICON} />
    </svg>
  );
}
