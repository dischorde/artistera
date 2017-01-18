import React from 'react';
import ReviewListItem from './review_list_item.jsx';

class Reviews extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.requestCourseReviews(this.props.params.courseId);
  }

  render() {
    const {reviews} = this.props;
    let reviewList = reviews.map((review) =>
     <ReviewListItem key={review.id} review={review} deleteReview={this.props.deleteReview} currentUser={this.props.currentUser} />
   );

    return (
      <section className="reviews">
        <h3>Reviews</h3>
        <section className="reviews-list">
          {reviewList}
        </section>
      </section>
    );
  }

}

export default Reviews;
