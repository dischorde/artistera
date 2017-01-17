import { connect } from 'react-redux';
import { requestAllProjects } from '../../actions/projects_actions.js';
import { selectAllProjects } from '../../reducers/selectors.js';
import ProjectIndex from './project_index.jsx';

const mapStateToProps = state => ({
  projects: selectAllProjects(state),
});

const mapDispatchToProps = (dispatch) => ({
  requestAllProjects: () => dispatch(requestAllProjects())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProjectIndex);
