import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../redux/rootState";
import ListingCard from "../components/listing-card";

interface AccountItems {
  personalGyms: {
    gymId: number;
    gymName: string;
    address: string;
    type: string;
    imageURL: string;
  }[];
}

export default function AccountPage(props: {}) {
  const { userId: currentUserId, username: currentUsername } = useSelector((state: RootState) => state.user);
  const [accountItems, setAccountItems] = useState<AccountItems>({
    personalGyms: []
  });

  useEffect(() => {
    fetch(`/api/${currentUserId}/gyms`, {
      method: 'GET',
      headers: { 'access-token': `${window.localStorage.getItem('access-token')}` }
    })
      .then(res => res.json())
      .then(data => setAccountItems(prev => ({
          ...prev,
          personalGyms: data
        })
      ))
      .catch(err => console.error(err));
  }, [currentUserId]);

  return (
    <>
      <main className="account__main">
        <h1 className="account__title">Your Arenas</h1>
        <div className="account__cards-container">
          {
            accountItems.personalGyms.map(gym => (
              <ListingCard key={gym.gymId} gym={gym} />
            ))
          }
        </div>
      </main>
    </>
  );
}
