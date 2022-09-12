import React, { useEffect, useState } from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import ListingCard from "../components/listing-card";

function Listings(props) {
  const [state, setState] = useState({ gyms: [] });

  useEffect(() => {
    fetch('/api/gyms', { method: 'get' })
      .then(result => result.json())
      .then(gyms => setState({ gyms: gyms }))
      .catch(err => console.error(err));
  }, [])
  return (
    <div className="listings-container">
      <Header></Header>
      <h1 className="listings-title">Listings</h1>
      <main className="listings-main">
        {
          state.gyms.map(gym => (
            <div key={gym.gymId}>
              <ListingCard gym={gym} />
            </div>
          ))
        }
      </main>
      <Footer></Footer>
    </div>
  );
}


export default Listings;
