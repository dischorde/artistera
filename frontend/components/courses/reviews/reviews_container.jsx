import { connect } from 'react-redux';
import { requestCourseReviews, createReview, updateReview, deleteReview, clearReviewErrors } from '../../../actions/reviews_actions.js';
import { selectAllReviews } from '../../../reducers/selectors.js';
import Reviews from './reviews.jsx';

const mapStateToProps = state => ({
  reviews: state.reviews.reviews,
  currentUser: state.session.currentUser
});

const mapDispatchToProps = (dispatch) => ({
  requestCourseReviews: (courseId) => dispatch(requestCourseReviews(courseId)),
  createReview: (review) => dispatch(createReview(review)),
  updateReview: (review) => dispatch(updateReview(review)),
  deleteReview: (id) => dispatch(deleteReview(id)),
  clearReviewErrors: () => dispatch(clearReviewErrors())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Reviews);
