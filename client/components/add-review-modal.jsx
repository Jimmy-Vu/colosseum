import React, { useEffect, useState } from "react";

export default function AddReviewModal(props) {
  const { setAddModalIsOpen } = props;
  const { gymId, name } = props.gymState;
  const [inputValues, setInputValues] = useState({
    rating: 0,
    description: ''
  });

  useEffect(() => {
    console.log(inputValues);
  }, [inputValues])

  function handleRating(e) {
    setInputValues(prev => ({
      ...prev,
      rating: e.target.value
    }));
  }


  function handleTextChange(e) {
    setInputValues(prev => ({
      ...prev,
      description: e.target.value
    }))
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log('submit');
    fetch(`/api/reviews/${gymId}`, {
      method: 'POST',
      headers: {
        'access-token': window.localStorage.getItem('access-token')
      },
      body: JSON.stringify(inputValues)
    })
      .then(res => res.json())
      .then(data => {
        // setAddModalIsOpen(false);
      })
      .catch(err => console.error(err));
  }

  return (
    <div className="add-review-modal">
      <h2 className="add-review-title">{`Review of ${name}`}</h2>
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
  );
}
