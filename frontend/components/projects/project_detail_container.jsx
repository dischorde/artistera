import { connect } from 'react-redux';
import { requestProject, deleteAttachment, destroyProject, clearErrors } from '../../actions/projects_actions.js';
import ProjectDetail from './project_detail.jsx';

const mapStateToProps = state => ({
  projectDetail: state.projectDetail,
  attachmentErrors: state.projectDetail.errors.attachments,
  projectErrors: state.projectDetail.errors.project,
  currentUser: state.session.currentUser
});

const mapDispatchToProps = (dispatch) => ({
  requestProject: (id) => dispatch(requestProject(id)),
  deleteAttachment: (id) => dispatch(deleteAttachment(id)),
  destroyProject: (id) => dispatch(destroyProject(id)),
  clearErrors: () => dispatch(clearErrors())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProjectDetail);
