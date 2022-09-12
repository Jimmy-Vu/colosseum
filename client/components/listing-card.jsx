import React from "react";

function ListingCard(props) {
  const { gymId, name, address, type } = props.gym;
  return (
    <a href={`#gyms?gymId=${gymId}`}>
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-address">{address}</p>
      </div>
    </a>
  );
}

export default ListingCard;
