import React from "react";
import typeAdjust from "../lib/typeAdjust";

interface Props {
  gym: {
    gymId: number;
    gymName: string;
    address: string;
    imageURL: string;
    type: string;
  }
}

function ListingCard(props: Props) {
  const { gymId, gymName, address, imageURL } = props.gym;
  let { type } = props.gym;
  type = typeAdjust(type);

  return (
    <a className="card-anchor" href={`#gyms?gymId=${gymId}`}>
      <div className="card">
        <img className="card-image" src={imageURL} alt="Main gym picture" />
        <div className="card-body">
          <h5 className="card-title">{gymName}</h5>
          <p className="card-address">{address}</p>
          <p className="card-type">{`Type: ${type}`}</p>
        </div>
      </div>
    </a>
  );
}

export default ListingCard;
