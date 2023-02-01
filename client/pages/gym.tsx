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
    if (parseInt(currentUserId, 10) === gymState.userId) {
      setBelongsToUser(true);
    } else {
      setBelongsToUser(false);
    }
  }, [gymState])

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
        <main className="gym__main">
          <div className="gym__container">
            <a className="gym__image-container" href={`${gymState.imageURL}`}>
              <img className="gym-image" src={`${gymState.imageURL}`} alt="main gym image" />
            </a>
            <div className="gym__details">
              <div className="gym__details__map">
                <MapDisplay coordinates={{ longitude: gymState.geodata.longitude, latitude: gymState.geodata.latitude }} />
              </div>
              <div className="gym__about">
                <h3 className="gym__about__title">{gymState.gymName}</h3>
                <p className="gym__about__address">{gymState.address}</p>
                <p className="gym__about__type">{`Type: ${gymState.type}`}</p>
                <div className="gym-body">
                  <p className="gym__about__description">{gymState.description}</p>
                </div>
              </div>
            </div>
          </div>
          <Reviews gymState={gymState} belongsToUser={belongsToUser} />
          {belongsToUser &&
            <div className="gym__buttons">
              <a href={`#edit?gymId=${gymState.gymId}`} className="gym__buttons__edit-btn">Edit Arena</a>
              <button onClick={gymDelete} className="gym__buttons__delete-btn">Delete Arena</button>
            </div>
          }
        </main>
      </>
    );
  } else {
    return (
      <main className="gym__main">
        <a href={'#listings'} className="gym__back-btn"><i className="fa-solid fa-chevron-left"></i>Back to Arenas</a>
        <div className="gym__container">
          <a className="gym__image-container" href={`${gymState.imageURL}`}>
            <img className="gym-image" src={`${gymState.imageURL}`} alt="main gym image" />
          </a>
          <div className="gym__details">
            <div className="gym__details__inner-container">
              <div className="gym__details__map">
                <MapDisplay coordinates={{ longitude: gymState.geodata.longitude, latitude: gymState.geodata.latitude }} />
              </div>
              <div className="gym__about">
                <h3 className="gym__about__title">{gymState.gymName}</h3>
                <p className="gym__about__address">{gymState.address}</p>
                <p className="gym__about__type">{`Type: ${gymState.type}`}</p>
                <p className="gym__about__description">{gymState.description}</p>
              </div>
            </div>
            {belongsToUser &&
              <div className="gym__buttons">
                <a href={`#edit?gymId=${gymState.gymId}`} className="gym__buttons__edit-btn">Edit Arena</a>
                <button onClick={gymDelete} className="gym__buttons__delete-btn">Delete Arena</button>
              </div>
            }
          </div>

        </div>
        <Reviews gymState={gymState} belongsToUser={belongsToUser} />
      </main>
    );
  }
}
