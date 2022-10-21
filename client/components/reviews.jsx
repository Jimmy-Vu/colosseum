import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import ReviewCard from "./review-card";
import AddReviewModal from "../components/add-review-modal";

export default function Reviews(props) {
  const { belongsToUser } = props;
  const { gymId, name } = props.gymState;
  const isLoggedIn = useSelector(state => state.app.isLoggedIn);
  const [addModalIsOpen, setAddModalIsOpen] = useState(false);
  const [userReviews, setUserReviews] = useState([]);

  useEffect(() => {
    fetch(`/api/reviews/${gymId}`, { method: 'GET' })
      .then(result => result.json())
      .then(data => setUserReviews(data))
      .catch(err => console.error(err));
  }, [])

  function handleSuccessfulSubmit() {
    fetch(`/api/reviews/${gymId}`, { method: 'GET' })
      .then(result => result.json())
      .then(data => setUserReviews(data))
      .catch(err => console.error(err));
  }
  function handleReviewBtnClick() {
    if (isLoggedIn) {
      setAddModalIsOpen(true);
    } else {
      window.location.hash = '#auth';
    }
  }

  return (
    <section className="reviews-container">
      {addModalIsOpen &&
        <AddReviewModal gymState={{ gymId, name }} setAddModalIsOpen={setAddModalIsOpen} handleSuccessfulSubmit={handleSuccessfulSubmit} />
      }
      <div className="reviews-container-header">
        <h3 className="reviews-title">Reviews</h3>
        {!belongsToUser &&
          <button onClick={handleReviewBtnClick} className="reviews-add-btn">Add a Review</button>
        }
      </div>
      {!userReviews &&
        null
      }
      {userReviews &&
        userReviews.map(review => (
          <ReviewCard key={review.reviewId} reviewDetails={review} />
        ))
      }
    </section>
  );
}
