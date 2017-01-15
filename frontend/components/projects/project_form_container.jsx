import { connect } from 'react-redux';
import { createNewProject } from '../../actions/projects_actions';
import ProjectForm from './project_form';

const mapStateToProps = (state, ownProps) => ({
  assignmentId: ownProps.assignmentId,
  userId: state.session.currentUser.id
});

const mapDispatchToProps = dispatch => ({
	createNewProject: (formData, assignmentId) => dispatch(createNewProject(formData, assignmentId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProjectForm);
