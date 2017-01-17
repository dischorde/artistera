import { connect } from 'react-redux';
import { requestProject, deleteAttachment } from '../../actions/projects_actions.js';
import ProjectDetail from './project_detail.jsx';

const mapStateToProps = state => ({
  projectDetail: state.projectDetail,
  userId: state.session.currentUser.id
});

const mapDispatchToProps = (dispatch) => ({
  requestProject: (id) => dispatch(requestProject(id)),
  deleteAttachment: (id) => dispatch(deleteAttachment(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProjectDetail);