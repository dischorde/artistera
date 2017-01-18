import React from 'react';
import { Link } from 'react-router';

const ReviewListItem = ({review, deleteReview, currentUser}) => {
  const {id, body, author, gravatar_hash, author_id} = review;
  const handleDelete = e => {
    e.preventDefault();
    deleteReview(id);
  };

  let reviewButtons;

  if (author_id === currentUser.id) {
    reviewButtons = (
      <section className="review-buttons">
        <button>Edit</button>
        &nbsp;
        <button onClick={handleDelete}>Delete</button>
      </section>
    );
  }


  return (
    <section className="individual-review">
      <section className="review-header">
        <div className="rev-gravatar"><span className="rev-gravatar-letter">{author[0]}</span>
        <img src={`https://www.gravatar.com/avatar/${gravatar_hash}?d=blank`} /></div>
        <h4>
          {author}
        </h4>
        {reviewButtons}
      </section>

      <section className="review-body">
        <p>
          {body}
        </p>
      </section>
    </section>
  );
};

export default ReviewListItem;
