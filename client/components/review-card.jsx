import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import EditReviewModal from "./edit-review-modal";

export default function ReviewCard(props) {
  const currentUserId = useSelector(state => state.user.userId);
  const { gymId, userId, username, rating, description } = props.reviewDetails;
  const { handleSuccessfulSubmit, gymName } = props;
  const [editModalIsOpen, setEditModalIsOpen] = useState(false);
  let reviewBelongsToUser = false;
  const starRating = [];

  function handleEditBtnClick() {
    setEditModalIsOpen(true);
  }

  if (currentUserId === userId) {
    reviewBelongsToUser = true;
  } else {
    reviewBelongsToUser = false;
  }

  for (let i = 0; i < rating; i++) {
    starRating.push(<i key={`${userId}-${i}${rating}`} className="fa-solid fa-star"></i>);
  }

  return (
    <>
      {editModalIsOpen &&
        <EditReviewModal gymState={{ gymId, gymName }} reviewDetails={{ rating, description }} setEditModalIsOpen={setEditModalIsOpen} handleSuccessfulSubmit={handleSuccessfulSubmit} />
      }
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
              <button onClick={handleEditBtnClick} className="review-edit-btn">Edit Review</button>
            </div>
          }
        </div>
        <p className="review-description">{description}</p>
      </div>
    </>
  );
}
