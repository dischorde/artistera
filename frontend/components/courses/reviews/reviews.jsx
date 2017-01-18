import React from 'react';
import ReviewListItem from './review_list_item.jsx';
import ReviewForm from './review_form.jsx';
import Modal from 'react-modal';

class Reviews extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalOpen: false,
      reviewId: null,
      reviewText: null
    };

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  componentDidMount() {
    this.props.requestCourseReviews(this.props.params.courseId);
  }

  openModal(id) {
    return e => {
      let reviewText = this.props.reviews[id].body;
      this.setState({
        modalOpen: true,
        reviewId: id,
        reviewText
      });
    };
  }

  closeModal() {
    this.setState({ modalOpen: false });
  }


  render() {
    let {reviews, currentUser} = this.props;
    reviews = Object.keys(reviews).map((id) => reviews[id]);

    let reviewList = reviews.map((review) =>
     <ReviewListItem key={review.id}
                      review={review}
                      deleteReview={this.props.deleteReview}
                      openModal={this.openModal}
                      currentUser={this.props.currentUser} />
   );

    return (
      <section className="reviews">
        <h3>Reviews</h3>
        <section className="reviews-list">
          {reviewList}
        </section>
        <ReviewForm
          userId={currentUser.id}
          courseId={this.props.params.courseId}
          formType="new"
          createReview={this.props.createReview}
          gravatarUrl={`https://www.gravatar.com/avatar/${currentUser.gravatar_hash}?d=blank`} />

      <Modal
        contentLabel="Modal"
        isOpen={this.state.modalOpen}
        onRequestClose={this.closeModal}
        className="review-form-modal"
        style={
          { overlay : {
              zIndex: '10'
            },
            content : {
            top                   : '50%',
            left                  : '50%',
            right                 : 'auto',
            bottom                : 'auto',
            transform             : 'translate(-50%, -50%)'
        } }}
        >
          <ReviewForm
            userId={currentUser.id}
            courseId={this.props.params.courseId}
            formType="update"
            updateReview={this.props.updateReview}
            closeModal={this.closeModal}
            reviewText={this.state.reviewText}
            reviewId={this.state.reviewId}
            gravatarUrl={`https://www.gravatar.com/avatar/${this.props.currentUser.gravatar_hash}?d=blank`} />
        </Modal>
    </section>

    );
  }

}

export default Reviews;

//
