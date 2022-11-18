import React, { useEffect, useState } from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import ListingCard from "../components/listing-card";
import Filter from "../components/filter";

export default function Listings(props) {
  const [listings, setListings] = useState({ gyms: [], filteredGyms: [] });
  const [isFiltered, setIsFiltered] = useState(false);

  useEffect(() => {
    fetch('/api/gyms', { method: 'GET' })
      .then(result => result.json())
      .then(items => setListings(prev => ({ ...prev, gyms: items })))
      .catch(err => console.error(err));
  }, []);

  function handleFiltering(types) {
    const filteredTypesArray = [];
    for (const property in types) {
      if (types[property] === true) {
        filteredTypesArray.push(property);
      }
    }
    const filteredGymsArray = [];
    for (let i = 0; i < filteredTypesArray.length; i++) {
      listings.gyms.forEach(gym => {
        //check if the current gym includes the current type && check if the array doesn't already include the gym to avoid duplicate
        if (gym.type.includes(filteredTypesArray[i]) && !filteredGymsArray.includes(gym)) {
          filteredGymsArray.push(gym);
        }
      })
    }
    setListings(prev => ({
      ...prev,
      filteredGyms: filteredGymsArray
    }));
    setIsFiltered(true);
  }

  return (
    <>
      <main className="listings-main">
        <a className="listings-add-btn" href="#create">Add an Arena</a>
        <Filter setIsFiltered={setIsFiltered} handleFiltering={handleFiltering} />
        {(!isFiltered || listings.filteredGyms.length === 0) &&
          listings.gyms.map(gym => (
            <ListingCard key={gym.gymId} gym={gym} />
          ))
        }
        {isFiltered &&
          listings.filteredGyms.map(gym => (
            <ListingCard key={gym.gymId} gym={gym} />
          ))
        }
      </main>
    </>
  );
}
