import { connect } from 'react-redux';
import { requestProject } from '../../actions/projects_actions.js';
import ProjectDetail from './project_detail.jsx';

const mapStateToProps = state => ({
  projectDetail: state.projectDetail,
  userId: state.session.currentUser.id
});

const mapDispatchToProps = (dispatch) => ({
  requestProject: (id) => dispatch(requestProject(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProjectDetail);
