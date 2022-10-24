import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setAModalIsOpen, setAModalIsClosed } from "../redux/appSlice";

export default function AddReviewModal(props) {
  const currentUser = useSelector(state => state.user);
  const { addModalIsOpen, setAddModalIsOpen, setReviewAlreadyMade, handleSuccessfulSubmit } = props;
  const { gymId, name } = props.gymState;
  const [review, setReview] = useState({
    user: '',
    reviewValues: {
      rating: 0,
      description: ''
    }
  });

  useEffect(() => {
    setReview(prev => ({
      ...prev,
      user: currentUser
    }))
  }, [currentUser])

  function handleRating(e) {
    setReview(prev => ({
      ...prev,
      reviewValues: {
        ...prev.reviewValues,
        rating: e.target.value
      }
    }));
  }

  function handleTextChange(e) {
    setReview(prev => ({
      ...prev,
      reviewValues: {
        ...prev.reviewValues,
        description: e.target.value
      }
    }))
  }

  function handleSubmit(e) {
    e.preventDefault();

    fetch(`/api/reviews/${gymId}`, {
      method: 'POST',
      headers: {
        'access-token': window.localStorage.getItem('access-token'),
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(review)
    })
      .then(res => {
        if (res.status === 201) {
          handleSuccessfulSubmit();
          setAddModalIsOpen(false);
          setReviewAlreadyMade(true);
        }
      })
      .catch(err => console.error(err));
  }

  return (
    <>{addModalIsOpen &&
      <div onClick={() => setAddModalIsOpen(false)} className="modal-tint"></div>
    }
      <div className="review-add-modal">
        <h2 className="review-add-title">{`Review of ${name}`}</h2>
        <form onSubmit={handleSubmit} className="review-form">
          <div className="review-form-rating">
            <span className="star-rating">
              <input onClick={handleRating} type="radio" name="rating" id="one-star" value={1} />
              <label htmlFor="one-star">
                <i className="fa-solid fa-star"></i>
              </label>
            </span>
            <span className="star-rating">
              <input onClick={handleRating} type="radio" name="rating" id="two-star" value={2} />
              <label htmlFor="two-star">
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
              </label>
            </span>
            <span className="star-rating">
              <input onClick={handleRating} type="radio" name="rating" id="three-star" value={3} />
              <label htmlFor="three-star">
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
              </label>
            </span>
            <span className="star-rating">
              <input onClick={handleRating} type="radio" name="rating" id="four-star" value={4} />
              <label htmlFor="four-star">
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
              </label>
            </span>
            <span className="star-rating">
              <input onClick={handleRating} type="radio" name="rating" id="five-star" value={5} />
              <label htmlFor="five-star">
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
              </label>
            </span>
          </div>
          <textarea onChange={handleTextChange} className="review-form-description" name="review-form-description" id="" cols="30" rows="10" placeholder="Share details of your experience"></textarea>
          <button className="review-submit-btn" type="submit">Submit</button>
        </form>
      </div>
    </>
  );
}
