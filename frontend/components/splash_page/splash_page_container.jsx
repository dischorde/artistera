import { connect } from 'react-redux';
import { requestAllProjects } from '../../actions/projects_actions.js';
import { requestAllCourses } from '../../actions/courses_actions.js';
import { selectEightCourses, selectFourProjects } from '../../reducers/selectors.js';
import SplashPage from './splash_page.jsx';

const mapStateToProps = state => ({
  projects: selectFourProjects(state),
  courses: selectEightCourses(state)
});

const mapDispatchToProps = (dispatch) => ({
  requestAllCourses: () => dispatch(requestAllCourses()),
  requestAllProjects: () => dispatch(requestAllProjects())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SplashPage);
