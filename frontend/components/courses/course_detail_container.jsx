import { connect } from 'react-redux';
import { requestCourse } from '../../actions/courses_actions.js';
import { clearErrors } from '../../actions/projects_actions.js';
import { enroll, unenroll } from '../../actions/session_actions.js';
import CourseDetail from './course_detail.jsx';

const mapStateToProps = state => ({
  courseDetail: state.courseDetail,
  currentUser: state.session.currentUser
});

const mapDispatchToProps = (dispatch) => ({
  requestCourse: (id) => dispatch(requestCourse(id)),
  clearErrors: () => dispatch(clearErrors()),
  enroll: (courseId, userId) => dispatch(enroll(courseId, userId)),
  unenroll: (courseId, userId) => dispatch(unenroll(courseId, userId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CourseDetail);
