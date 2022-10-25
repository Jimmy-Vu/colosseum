import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import ReviewCard from "./review-card";
import AddReviewModal from "../components/add-review-modal";

export default function Reviews(props) {
  const isLoggedIn = useSelector(state => state.app.isLoggedIn);
  const { belongsToUser } = props;
  const { gymId, name } = props.gymState;
  const [addModalIsOpen, setAddModalIsOpen] = useState(false);
  const [userReviews, setUserReviews] = useState([]);
  const [reviewsIsEmpty, setReviewsIsEmpty] = useState(true);
  const [reviewAlreadyMade, setReviewAlreadyMade] = useState(false);

  useEffect(() => {
    fetch(`/api/reviews/${gymId}`, { method: 'GET' })
      .then(result => result.json())
      .then(data => {
        if (!Object.keys(data).includes('error')) {
          setReviewsIsEmpty(false);
          setUserReviews(data);
        }
      })
      .catch(err => console.error(err));
  }, [])

  function handleSuccessfulSubmit(type) {
    fetch(`/api/reviews/${gymId}`, { method: 'GET' })
      .then(result => result.json())
      .then(data => {
        if (type !== 'delete') {
          setReviewsIsEmpty(false);
        }
        setUserReviews(data);
      })
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
        <AddReviewModal
          gymState={{ gymId, name }}
          setAddModalIsOpen={setAddModalIsOpen}
          addModalIsOpen={addModalIsOpen}
          setReviewAlreadyMade={setReviewAlreadyMade}
          handleSuccessfulSubmit={handleSuccessfulSubmit}
        />
      }
      <div className="reviews-container-header">
        <h3 className="reviews-title">Reviews</h3>
        {belongsToUser &&
          <span>You are the owner.</span>
        }
        {!belongsToUser && !reviewAlreadyMade &&
          <button onClick={handleReviewBtnClick} className="reviews-add-btn">Add a Review</button>
        }
        {!belongsToUser && reviewAlreadyMade &&
          <span>You have already made a review.</span>
        }
      </div>
      {reviewsIsEmpty &&
        <p>It seems that there isn't any reviews for this arena at the moment.</p>
      }
      {!reviewsIsEmpty &&
        userReviews.map(review => (
          <ReviewCard key={review.reviewId}
            reviewDetails={review}
            gymName={name}
            setReviewAlreadyMade={setReviewAlreadyMade}
            setReviewsIsEmpty={setReviewsIsEmpty}
            handleSuccessfulSubmit={handleSuccessfulSubmit}
          />
        ))
      }
    </section>
  );
}
