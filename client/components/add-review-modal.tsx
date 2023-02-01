import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../redux/rootState";

interface Props {
  addModalIsOpen: boolean;
  setAddModalIsOpen: (boolean: boolean) => void;
  setReviewAlreadyMade: (boolean: boolean) => void;
  handleSuccessfulSubmit: (operation: string) => void;
  gymState: { gymId: number; gymName: string };
}

export default function AddReviewModal(props: Props) {
  const currentUsername = useSelector((state: RootState) => state.user.username);
  const currentUserId = useSelector((state: RootState) => state.user.userId);
  const { addModalIsOpen, setAddModalIsOpen, setReviewAlreadyMade, handleSuccessfulSubmit } = props;
  const { gymId, gymName } = props.gymState;
  const [review, setReview] = useState({
    username: '',
    userId: '',
    reviewValues: {
      rating: '0',
      description: ''
    }
  });

  useEffect(() => {
    setReview(prev => ({
      ...prev,
      username: currentUsername,
      userId: currentUserId
    }))
  }, [currentUsername])

  function handleRating(e: React.BaseSyntheticEvent) {
    setReview(prev => ({
      ...prev,
      reviewValues: {
        ...prev.reviewValues,
        rating: e.target.value
      }
    }));
  }

  function handleTextChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
    setReview(prev => ({
      ...prev,
      reviewValues: {
        ...prev.reviewValues,
        description: e.target.value
      }
    }))
  }

  function handleSubmit(e: React.SyntheticEvent) {
    e.preventDefault();

    fetch(`/api/reviews/${gymId}`, {
      method: 'POST',
      headers: {
        'access-token': `${window.localStorage.getItem('access-token')}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(review)
    })
      .then(res => {
        if (res.status === 201) {
          handleSuccessfulSubmit('success');
          setAddModalIsOpen(false);
          setReviewAlreadyMade(true);
        }
      })
      .catch(err => console.error(err));
  }

  return (
    <>{addModalIsOpen &&
      <div onClick={() => setAddModalIsOpen(false)} className="review-modal__tint"></div>
    }
      <div className="review-modal">
        <div className="review-modal__container">
          <h2 className="review-modal__title">{`Review of ${gymName}`}</h2>
          <form onSubmit={handleSubmit} className="review-form">
            <div className="review-form__rating">
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
            <textarea onChange={handleTextChange} className="review-form__description" name="review-form-description" id="" cols={30} rows={10} placeholder="Share details of your experience"></textarea>
            <button className="review-form__submit-btn" type="submit">Submit</button>
          </form>
        </div>
      </div>
    </>
  );
}
