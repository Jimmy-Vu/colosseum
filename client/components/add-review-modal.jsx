import React from "react";

export default function AddReviewModal(props) {
  const {name} = props.gymState;

  return (
    <div className="add-review-modal">
      <h2>{`Review of ${name}`}</h2>
      <form action="">

      </form>
    </div>
  );
}
