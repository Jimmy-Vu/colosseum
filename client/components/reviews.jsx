import React, { useEffect, useState } from "react";
import ReviewCard from "./review-card";

export default function Reviews(props) {
  const { gymId, belongsToUser, setAddModalIsOpen } = props;
  const [userReviews, setUserReviews] = useState([]);

  useEffect(() => {
    fetch(`/api/reviews/${gymId}`, { method: 'GET' })
      .then(result => result.json())
      .then(data => setUserReviews(data))
      .catch(err => console.error(err));
  }, [])

  return (
    <section className="reviews-container">
      <div className="reviews-top-container">
        <h3 className="reviews-title">Reviews</h3>
        {!belongsToUser &&
          <button onClick={() => setAddModalIsOpen(true)} className="reviews-add-btn">Add a Review</button>
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
