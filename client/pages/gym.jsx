import React, { useEffect, useState } from "react";
import typeAdjust from "../lib/typeAdjust";
import { useSelector } from "react-redux";

function Gym(props) {
  const isLoggedIn = useSelector(state => state.app.isLoggedIn);
  const currentUserId = useSelector(state => state.user.userInfo.userId);
  const [belongsToUser, setBelongsToUser] = useState(false);

  const [gymState, setGymState] = useState({
    userId: '',
    gymId: props.gymId,
    name: '',
    address: '',
    type: '',
    imageURL: '',
    description: null
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
    }
  }, [gymState.userId])

  function gymDelete(e) {
    fetch(`/api/gyms/${gymState.gymId}`, { method: 'delete' })
      .then(res => {
        if (res.status === 204) {
          window.location.hash = "#listings";
        }
      })
      .catch(err => console.error(err));
  }

  if (gymState.description) {
    return (
      <main className="gym-main">
        <div className="gym-info-container">
          <a className="gym-image" href={`${gymState.imageURL}`}>
            <img src={`${gymState.imageURL}`} alt="main gym image" />
          </a>
          <div className="gym-details">
            <h3 className="gym-title">{gymState.name}</h3>
            <p className="gym-address">{gymState.address}</p>
            <p className="gym-type">{`Type: ${gymState.type}`}</p>
            <div className="gym-body">
              <p className="gym-description">{gymState.description}</p>
            </div>
          </div>
        </div>
        {belongsToUser &&
          <div className="gym-buttons-container">
            <a href={`#edit?gymId=${gymState.gymId}`} className="gym-edit-btn">Edit Arena</a>
            <button onClick={gymDelete} className="gym-delete-btn">Delete Arena</button>
          </div>
        }
      </main>
    );
  } else if (gymState.description === null) {
    return null;
  } else {
    return (
      <main className="gym-main">
        <div className="gym-info-container">
          <a className="gym-image" href={`${gymState.imageURL}`}>
            <img src={`${gymState.imageURL}`} alt="main gym image" />
          </a>
          <div className="gym-details">
            <h3 className="gym-title">{gymState.name}</h3>
            <p className="gym-address">{gymState.address}</p>
            <p className="gym-type">{`Type: ${gymState.type}`}</p>
            <div className="gym-body">
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat in est neque cupiditate distinctio accusantium alias blanditiis sunt harum illo.</p>
              <br></br>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi perferendis maiores aliquid quos numquam cum, sit, labore suscipit est dolore impedit accusamus ipsam cumque laboriosam error molestias repellendus adipisci modi.</p>
              <br></br>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi perferendis maiores aliquid quos numquam cum, sit, labore suscipit est dolore impedit accusamus ipsam cumque laboriosam error molestias repellendus adipisci modi.</p>
            </div>
          </div>
        </div>
        <div className="gym-buttons-container">
          <a href={`#edit?gymId=${gymState.gymId}`} className="gym-edit-btn">Edit Arena</a>
          <button onClick={gymDelete} className="gym-delete-btn">Delete Arena</button>
        </div>
      </main>
    );
  }

}

export default Gym;
