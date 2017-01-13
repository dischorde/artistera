import { connect } from 'react-redux';
import { requestCourse } from '../../actions/courses_actions.js';
import About from './about.jsx';

const mapStateToProps = state => ({
  courseDetail: state.courseDetail
});

const mapDispatchToProps = (dispatch) => ({
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(About);
