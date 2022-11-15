import React, { useEffect, useState } from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import ListingCard from "../components/listing-card";
import MapCluster from "../components/map-cluster";

export default function Listings(props) {
  const [gyms, setGyms] = useState([]);

  useEffect(() => {
    fetch('/api/gyms', { method: 'GET' })
      .then(result => result.json())
      .then(items => {
        for (let i of items) {
          setGyms(prev => [...prev, parseGyms(i)])
        }
      })
      .catch(err => console.error(err));
  }, []);

  // useEffect(() => {
  //   console.log('gyms:', gyms);
  // }, [gyms])


  return (
    <>
      <main className="listings-main">
        <MapCluster gymsJSON={JSON.stringify({ features: gyms })} />
        <a className="listings-add-btn" href="#create">Add an Arena</a>
        {
          gyms.map(gym => (
            <ListingCard key={gym.gymId} gym={gym} />
          ))
        }
      </main>
    </>
  );
}

function parseGyms(gym) {
  return {
    type: 'Feature',
    properties: {},
    userId: gym.userId,
    gymId: gym.gymId,
    name: gym.name,
    address: gym.address,
    geometry: JSON.parse(gym.geometry),
    typeOf: gym.typeOf,
    imageURL: gym.imageURL,
    description: gym.description
  }
}
