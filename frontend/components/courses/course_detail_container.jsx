import { connect } from 'react-redux';
import { requestCourse } from '../../actions/courses_actions.js';
import { receiveProjErrors } from '../../actions/projects_actions.js';
import CourseDetail from './course_detail.jsx';

const mapStateToProps = state => ({
  courseDetail: state.courseDetail
});

const mapDispatchToProps = (dispatch) => ({
  requestCourse: (id) => dispatch(requestCourse(id)),
  receiveProjErrors: (errors) => dispatch(receiveProjErrors(errors))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CourseDetail);
