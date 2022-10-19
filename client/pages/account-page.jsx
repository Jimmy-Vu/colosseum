import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import ListingCard from "../components/listing-card";

export default function AccountPage(props) {
  const { userId: currentUserId, username: currentUsername } = useSelector(state => state.user);
  const [personalGyms, setPersonalGym] = useState([]);

  useEffect(() => {
    fetch(`/api/${currentUserId}/gyms`, {
      method: 'GET',
      headers: { 'access-token': window.localStorage.getItem('access-token') }
    })
      .then(res => res.json())
      .then(data => setPersonalGym(data))
      .catch(err => console.error(err));
  }, [currentUserId]);

  return (
    <>
      <main className="account-main">
        <h2 className="account-title">Your Arenas</h2>
        {
          personalGyms.map(gym => (
            <ListingCard key={gym.gymId} gym={gym} />
          ))
        }
      </main>
    </>
  );
}
