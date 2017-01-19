import React from 'react';
import ReviewListItem from './review_list_item.jsx';
import ReviewFormContainer from './review_form_container.jsx';
import Modal from 'react-modal';

class Reviews extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalOpen: false,
      reviewId: null,
    };

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  componentDidMount() {
    this.props.requestCourseReviews(this.props.params.courseId);
  }

  openModal(id) {
    return e => {
      this.setState({
        modalOpen: true,
        reviewId: id,
      });
    };
  }

  closeModal() {
    this.props.clearReviewErrors();
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
        <section className="review-form-wrapper">
          <ReviewFormContainer
            courseId={this.props.params.courseId}
            formType="new" />
        </section>

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
          <ReviewFormContainer
            courseId={this.props.params.courseId}
            formType="update"
            closeModal={this.closeModal}
            reviewId={this.state.reviewId} />
        </Modal>
    </section>

    );
  }

}

export default Reviews;

//
