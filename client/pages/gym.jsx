import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import typeAdjust from "../lib/typeAdjust";
import Reviews from "../components/reviews";
import MapDisplay from "../components/map-display";


export default function Gym(props) {
  const isLoggedIn = useSelector(state => state.app.isLoggedIn);
  const currentUserId = useSelector(state => state.user.userId);
  const [belongsToUser, setBelongsToUser] = useState(false);

  const [gymState, setGymState] = useState({
    userId: null,
    gymId: props.gymId,
    name: '',
    address: '',
    geodata: '',
    type: '',
    imageURL: '',
    description: ''
  });

  useEffect(() => {
    fetch(`/api/gyms/${gymState.gymId}`, { method: 'GET' })
      .then(res => {
        if (res.status === 404) {
          window.location.hash = '#not-found';
        }
        return res.json();
      })
      .then(data => {
        setGymState({
          userId: data.userId,
          gymId: data.gymId,
          name: data.name,
          address: data.address,
          geodata: JSON.parse(data.geodata),
          type: typeAdjust(data.type),
          imageURL: data.imageURL,
          description: data.description
        });
      })
      .catch(err => console.error(err));
  }, [])

  useEffect(() => {
    if (currentUserId === gymState.userId) {
      setBelongsToUser(true);
    } else {
      setBelongsToUser(false);
    }
  }, [gymState.gymId])

  function gymDelete(e) {
    fetch(`/api/gyms/${gymState.gymId}`, {
      method: 'delete',
      headers: {
        'access-token': window.localStorage.getItem('access-token')
      }
    })
      .then(res => {
        if (res.status === 204) {
          window.location.hash = "#listings";
        }
      })
      .catch(err => console.error(err));
  }

  if (gymState.userId === null) {
    return null;
  }

  return (
    <main className="gym-main">
      <div className="gym-info-container">
        <a className="gym-image-container" href={`${gymState.imageURL}`}>
          <img className="gym-image" src={`${gymState.imageURL}`} alt="main gym image" />
        </a>
        <div className="gym-details-map-container">
          <div className="gym-details">
            <h3 className="gym-title">{gymState.name}</h3>
            <p className="gym-address">{gymState.address}</p>
            <p className="gym-type">{`Type: ${gymState.type}`}</p>
            <div className="gym-body">
              <p className="gym-description">{gymState.description}</p>
            </div>
          </div>
          <div className="map-container">
            <MapDisplay coordinates={{ longitude: `${gymState.geodata.longitude}`, latitude: `${gymState.geodata.latitude}` }} />
          </div>
        </div>
      </div>
      <Reviews gymState={gymState} belongsToUser={belongsToUser} />
      {belongsToUser &&
        <div className="gym-buttons-container">
          <a href={`#edit?gymId=${gymState.gymId}`} className="gym-edit-btn">Edit Arena</a>
          <button onClick={gymDelete} className="gym-delete-btn">Delete Arena</button>
        </div>
      }
    </main>
  );
}
