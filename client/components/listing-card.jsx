import React from "react";
import typeAdjust from "../lib/typeAdjust";

function ListingCard(props) {
  const { gymId, name, address, imageURL } = props.gym;
  let { type } = props.gym;
  type = typeAdjust(type);

  return (
    <a className="card-anchor" href={`#gyms?gymId=${gymId}`}>
      <div className="card">
        <img className="card-image" src={imageURL} alt="Main gym picture" />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-address">{address}</p>
          <p className="card-type">{`Type: ${type}`}</p>
        </div>
      </div>
    </a>
  );
}

export default ListingCard;
