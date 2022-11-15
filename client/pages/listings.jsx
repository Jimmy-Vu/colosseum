import React, { useEffect, useState } from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import ListingCard from "../components/listing-card";
import Filter from "../components/filter";

export default function Listings(props) {
  const [state, setState] = useState({ gyms: [] });

  useEffect(() => {
    fetch('/api/gyms', { method: 'GET' })
      .then(result => result.json())
      .then(items => setState({ gyms: items }))
      .catch(err => console.error(err));
  }, []);

  return (
    <>
      <main className="listings-main">
        <a className="listings-add-btn" href="#create">Add an Arena</a>
        <Filter />
        {
          state.gyms.map(gym => (
            <ListingCard key={gym.gymId} gym={gym} />
          ))
        }
      </main>
    </>
  );
}
