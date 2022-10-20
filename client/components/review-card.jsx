import React, { useEffect } from "react";
import { useSelector } from "react-redux";

export default function ReviewCard(props) {
  const currentUserId = useSelector(state => state.user.userId);
  let reviewBelongsToUser = false;
  const { gymId, userId, username, rating, description } = props.reviewDetails;
  const starRating = [];

  if (currentUserId === userId) {
    reviewBelongsToUser = true;
  } else {
    reviewBelongsToUser = false;
  }

  for (let i = 0; i < rating; i++) {
    starRating.push(<i key={`${userId}-${i}${rating}`} className="fa-solid fa-star"></i>);
  }

  return (
    <div className="review-card">
      <div className="review-card-header">
        <div>
          <h3 className="review-username">{username}</h3>
          <h4 className="review-rating">
            <span>{`${rating}/5`}</span>
            <span className="rating-stars">{starRating}</span>
          </h4>
        </div>
        {reviewBelongsToUser &&
          <div>
            <button className="review-edit-btn">Edit Review</button>
          </div>
        }
      </div>
      <p className="review-description">{description}</p>
    </div>
  );
}
