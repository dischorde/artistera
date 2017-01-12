import { connect } from 'react-redux';
import { requestAllCourses } from '../../actions/courses_actions.js';
import { selectAllCourses } from '../../reducers/selectors.js';
import CourseIndex from './course_index.jsx';

const mapStateToProps = state => ({
  courses: selectAllCourses(state)
});

const mapDispatchToProps = (dispatch) => ({
  requestAllCourses: () => dispatch(requestAllCourses())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CourseIndex);
