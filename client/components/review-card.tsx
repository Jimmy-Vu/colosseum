import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../redux/rootState";
import EditReviewModal from "./edit-review-modal";

interface Props {
  reviewDetails: {
    gymId: number;
    userId: number;
    reviewId: number;
    username: string;
    rating: number;
    description: string;
  };
  gymName: string;
  handleSuccessfulSubmit: (operation: string) => void;
  setReviewAlreadyMade: (boolean: boolean) => void;
  setReviewsIsEmpty: (boolean: boolean) => void;
}
export default function ReviewCard(props: Props) {
  const currentUserId = parseInt(useSelector((state: RootState) => state.user.userId), 10);
  const { gymId, userId, reviewId, username, rating, description } = props.reviewDetails;
  const { handleSuccessfulSubmit, setReviewAlreadyMade, setReviewsIsEmpty, gymName } = props;
  const [editModalIsOpen, setEditModalIsOpen] = useState(false);
  const [reviewBelongsToUser, setReviewBelongsToUser] = useState(false);
  const starRating: JSX.Element[] = [];

  useEffect(() => {
    if (currentUserId === userId) {
      setReviewBelongsToUser(true);
      setReviewAlreadyMade(true);
    } else {
      setReviewBelongsToUser(false);
    }

    for (let i = 0; i < rating; i++) {
      starRating.push(<i key={`${userId}-${i}${rating}`} className="fa-solid fa-star"></i>);
    }
  }, []);



  function handleEditBtnClick() {
    setEditModalIsOpen(true);
  }
  return (
    <>
      {editModalIsOpen &&
        <EditReviewModal
          gymState={{  gymName }}
          reviewDetails={{ reviewId, rating, description }}
          setEditModalIsOpen={setEditModalIsOpen}
          editModalIsOpen={editModalIsOpen}
          setReviewAlreadyMade={setReviewAlreadyMade}
          setReviewsIsEmpty={setReviewsIsEmpty}
          handleSuccessfulSubmit={handleSuccessfulSubmit}
        />
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
