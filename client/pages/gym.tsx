import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../redux/rootState";
import typeAdjust from "../lib/typeAdjust";
import Reviews from "../components/reviews";
import MapDisplay from "../components/map-display";
import Spinner from "../components/spinner";

interface GymState {
  userId: number;
  gymId: number;
  gymName: string;
  address: string;
  geodata: {
    longitude: number;
    latitude: number;
  },
  type: string;
  imageURL: string;
  description: string;
}

export default function Gym(props: { gymId: number }) {
  const currentUserId = useSelector((state: RootState) => state.user.userId);
  const [belongsToUser, setBelongsToUser] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const [gymState, setGymState] = useState<GymState>({
    userId: -5,
    gymId: props.gymId,
    gymName: '',
    address: '',
    geodata: {
      longitude: -5,
      latitude: -5,
    },
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
        console.log(data);
        setGymState({
          userId: data.userId,
          gymId: data.gymId,
          gymName: data.gymName,
          address: data.address,
          geodata: JSON.parse(data.geodata),
          type: typeAdjust(data.type),
          imageURL: data.imageURL,
          description: data.description
        });
        setIsLoading(false);
      })
      .catch(err => console.error(err));
  }, [])

  useEffect(() => {
    if (currentUserId === `${gymState.userId}`) {
      setBelongsToUser(true);
    } else {
      setBelongsToUser(false);
    }
  }, [gymState.gymId])

  function gymDelete(e: React.SyntheticEvent) {
    fetch(`/api/gyms/${gymState.gymId}`, {
      method: 'delete',
      headers: {
        'access-token': `${window.localStorage.getItem('access-token')}`
      }
    })
      .then(res => {
        if (res.status === 204) {
          window.location.hash = "#listings";
        }
      })
      .catch(err => console.error(err));
  }

  if (isLoading) {
    return (
      <>
        <Spinner isLoading={isLoading} />
        <main className="gym-main">
          <div className="gym-info-container">
            <a className="gym-image-container" href={`${gymState.imageURL}`}>
              <img className="gym-image" src={`${gymState.imageURL}`} alt="main gym image" />
            </a>
            <div className="gym-details-map-container">
              <div className="map-container">
                <MapDisplay coordinates={{ longitude: gymState.geodata.longitude, latitude: gymState.geodata.latitude }} />
              </div>
              <div className="gym-details">
                <h3 className="gym-title">{gymState.gymName}</h3>
                <p className="gym-address">{gymState.address}</p>
                <p className="gym-type">{`Type: ${gymState.type}`}</p>
                <div className="gym-body">
                  <p className="gym-description">{gymState.description}</p>
                </div>
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
      </>
    );
  } else {
    return (
      <main className="gym-main">
        <div className="gym-info-container">
          <a className="gym-image-container" href={`${gymState.imageURL}`}>
            <img className="gym-image" src={`${gymState.imageURL}`} alt="main gym image" />
          </a>
          <div className="gym-details-map-container">
            <div className="map-container">
              <MapDisplay coordinates={{ longitude: gymState.geodata.longitude, latitude: gymState.geodata.latitude }} />
            </div>
            <div className="gym-details">
              <h3 className="gym-title">{gymState.gymName}</h3>
              <p className="gym-address">{gymState.address}</p>
              <p className="gym-type">{`Type: ${gymState.type}`}</p>
              <div className="gym-body">
                <p className="gym-description">{gymState.description}</p>
              </div>
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
}
