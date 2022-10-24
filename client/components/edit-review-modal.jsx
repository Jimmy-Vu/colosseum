import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export default function EditReviewModal(props) {
  const { editModalIsOpen, setEditModalIsOpen, setReviewAlreadyMade, handleSuccessfulSubmit } = props;
  const { gymName } = props.gymState;
  const { reviewId, rating, description } = props.reviewDetails
  const [review, setReview] = useState({
    rating: rating,
    description: description
  });

  function handleRating(e) {
    setReview(prev => ({
      ...prev,
      rating: e.target.value
    }));
  }

  function handleTextChange(e) {
    setReview(prev => ({
      ...prev,
      description: e.target.value
    }))
  }

  function handleSubmit(e) {
    e.preventDefault();

    fetch(`/api/reviews/${reviewId}`, {
      method: 'PATCH',
      headers: {
        'access-token': window.localStorage.getItem('access-token'),
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(review)
    })
      .then(res => {
        if (res.status === 200) {
          handleSuccessfulSubmit();
          setEditModalIsOpen(false);
        }
      })
      .catch(err => console.error(err));
  }

  function handleDeleteReview(e) {
    e.preventDefault();

    fetch(`/api/reviews/${reviewId}`, {
      method: 'DELETE',
      headers: {
        'access-token': window.localStorage.getItem('access-token')
      }
    })
      .then(res => {
        if (res.status === 204) {
          handleSuccessfulSubmit();
          setEditModalIsOpen(false);
          setReviewAlreadyMade(false);
        }
      })
      .catch(err => console.error(err));
  }

  return (
    <>{editModalIsOpen &&
      <div onClick={() => setEditModalIsOpen(false)} className="modal-tint"></div>
    }
      <div className="review-add-modal">
        <h2 className="review-add-title">{`Edit your review of ${gymName}`}</h2>
        <form onSubmit={handleSubmit} className="review-form">
          <div className="review-form-rating">
            <span className="star-rating">
              <input onClick={handleRating} type="radio" name="rating" id="one-star" value={1} defaultChecked={review.rating === 1} />
              <label htmlFor="one-star">
                <i className="fa-solid fa-star"></i>
              </label>
            </span>
            <span className="star-rating">
              <input onClick={handleRating} type="radio" name="rating" id="two-star" value={2} defaultChecked={review.rating === 2} />
              <label htmlFor="two-star">
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
              </label>
            </span>
            <span className="star-rating">
              <input onClick={handleRating} type="radio" name="rating" id="three-star" value={3} defaultChecked={review.rating === 3} />
              <label htmlFor="three-star">
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
              </label>
            </span>
            <span className="star-rating">
              <input onClick={handleRating} type="radio" name="rating" id="four-star" value={4} defaultChecked={review.rating === 4} />
              <label htmlFor="four-star">
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
              </label>
            </span>
            <span className="star-rating">
              <input onClick={handleRating} type="radio" name="rating" id="five-star" value={5} defaultChecked={review.rating === 5} />
              <label htmlFor="five-star">
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
              </label>
            </span>
          </div>
          <textarea onChange={handleTextChange} className="review-form-description" name="review-form-description" id="" cols="30" rows="10" value={review.description} placeholder="Share details of your experience"></textarea>
          <div>
            <button className="review-submit-btn" type="submit">Submit</button>
            <button onClick={handleDeleteReview} className="review-delete-btn" type="button">Delete Review</button>
          </div>
        </form>
      </div>
    </>
  );
}