import { connect } from 'react-redux';
import { requestCourse } from '../../actions/courses_actions.js';
import CourseDetail from './course_detail.jsx';

const mapStateToProps = state => ({
  courseDetail: state.courseDetail
});

const mapDispatchToProps = (dispatch) => ({
  requestCourse: (id) => dispatch(requestCourse(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CourseDetail);
