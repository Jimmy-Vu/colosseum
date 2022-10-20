import React, { useEffect, useState } from "react";
import ReviewCard from "./review-card";

export default function Reviews(props) {
  const { gymId } = props;
  const [userReviews, setUserReviews] = useState([]);

  useEffect(() => {
    fetch(`/api/reviews/${gymId}`, { method: 'GET' })
      .then(result => result.json())
      .then(data => setUserReviews(data))
      .catch(err => console.error(err));
  }, [])

  return (
    <section className="reviews-container">
      {!userReviews &&
        null
      }
      <h3 className="reviews-title">Reviews</h3>
      {userReviews &&
        userReviews.map(review => (
          <ReviewCard key={review.reviewId} reviewDetails={review} />
        ))
      }
    </section>
  );
}
