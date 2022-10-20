import React, { useEffect } from "react";

export default function ReviewCard(props) {
  const { gymId, userId, username, rating, description } = props.reviewDetails;
  const starRating = [];

  for (let i = 0; i < rating; i++) {
    starRating.push(<i key={`${userId}-${i}${rating}`} className="fa-solid fa-star"></i>);
  }

  return (
    <div className="review-card">
      <h3 className="review-username">{username}</h3>
      <h4 className="review-rating">
        <span>{`${rating}/5`}</span>
        <span className="rating-stars">{starRating}</span>
      </h4>
      <p className="review-description">{description}</p>
    </div>
  );
}
