import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../redux/rootState";
import ReviewCard from "./review-card";
import AddReviewModal from "./add-review-modal";

interface Props {
  belongsToUser: boolean;
  gymState: {
    gymId: number;
    gymName: string;
  }
}

export default function Reviews(props: Props) {
  const isLoggedIn = useSelector((state: RootState) => state.app.isLoggedIn);
  const { belongsToUser } = props;
  const { gymId, gymName } = props.gymState;
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

  function handleSuccessfulSubmit(operation: string) {
    fetch(`/api/reviews/${gymId}`, { method: 'GET' })
      .then(result => result.json())
      .then(data => {
        if (operation !== 'delete') {
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
          gymState={{ gymId, gymName }}
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
          <ReviewCard key={review['reviewId']}
            reviewDetails={review}
            gymName={gymName}
            setReviewAlreadyMade={setReviewAlreadyMade}
            setReviewsIsEmpty={setReviewsIsEmpty}
            handleSuccessfulSubmit={handleSuccessfulSubmit}
          />
        ))
      }
    </section>
  );
}
