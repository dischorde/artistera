import { connect } from 'react-redux';
import { requestCourse } from '../../actions/courses_actions.js';
import Projects from './projects.jsx';

const mapStateToProps = state => ({
  projects: state.courseDetail.projects
});

const mapDispatchToProps = (dispatch) => ({
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Projects);
