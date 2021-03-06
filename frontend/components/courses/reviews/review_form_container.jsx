import { connect } from 'react-redux';
import { createReview,
         updateReview,
         clearReviewErrors,
         receiveReviewErrors } from '../../../actions/reviews_actions';
import ReviewForm from './review_form';

const mapStateToProps = (state, ownProps) => ({
  courseId: ownProps.courseId,
  formType: ownProps.formType,
  gravatarUrl: `https://www.gravatar.com/avatar/${state.session.currentUser.gravatar_hash}?d=blank`,
  userId: state.session.currentUser.id,
  firstLetter: state.session.currentUser.first_name[0],
  reviews: state.reviews.reviews,
  reviewId: ownProps.reviewId,
  closeModal: ownProps.closeModal,
  allErrors: state.reviews.errors
});

const mapDispatchToProps = dispatch => ({
  createReview: (review) => dispatch(createReview(review)),
  updateReview: (review) => dispatch(updateReview(review)),
  receiveReviewErrors: (errors) => dispatch(receiveReviewErrors(errors)),
  clearReviewErrors: () => dispatch(clearReviewErrors())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReviewForm);
