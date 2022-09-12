import React, { useState } from "react";

function Gym(props) {
  const [gymState, setGymState] = useState({
    gymId: props.gymId,
    name: '',
    address: '',
    type: '',
    imageURL: ''
  });


  fetch(`/api/gyms/${gymState.gymId}`, { method: 'GET' })
    .then(res => res.json())
    .then(data => {
      setGymState({
        gymId: data.gymId,
        name: data.name,
        address: data.address,
        type: data.type,
        imageURL: data.imageURL
      });
    })
    .catch(err => console.error(err));


  return (
    <main className="gym-main">
      <img className="gym-image" src={`${gymState.imageURL}`} alt="" />
      <div className="gym-details">
        <h3 className="gym-title">{gymState.name}</h3>
        <p className="gym-address">{gymState.address}</p>
        <div className="gym-body">
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat in est neque cupiditate distinctio accusantium alias blanditiis sunt harum illo.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi perferendis maiores aliquid quos numquam cum, sit, labore suscipit est dolore impedit accusamus ipsam cumque laboriosam error molestias repellendus adipisci modi.</p>
        </div>
      </div>
    </main>
  );
}

export default Gym;
