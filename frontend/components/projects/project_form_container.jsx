import { connect } from 'react-redux';
import { createNewProject, updateProject } from '../../actions/projects_actions';
import ProjectForm from './project_form';

const mapStateToProps = (state, ownProps) => ({
  assignmentId: ownProps.assignmentId,
  projectId: ownProps.projectId,
  userId: state.session.currentUser.id,
  formType: ownProps.formType,
  projectDetail: state.projectDetail,
  closeModal: ownProps.closeModal,
  setUpdated: ownProps.setUpdated,
});

const mapDispatchToProps = dispatch => ({
	createNewProject: (project, attachments) => dispatch(createNewProject(project, attachments)),
	updateProject: (project, attachments) => dispatch(updateProject(project, attachments)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProjectForm);
