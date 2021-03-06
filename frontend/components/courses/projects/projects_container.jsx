import { connect } from 'react-redux';
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
