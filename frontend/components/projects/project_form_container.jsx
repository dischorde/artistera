import { connect } from 'react-redux';
import { createProject } from '../../actions/projects_actions';
import ProjectForm from './project_form';

const mapStateToProps = (state, ownProps) => ({
  assignmentId: ownProps.assignmentId,
  userId: state.session.currentUser.id
});

const mapDispatchToProps = dispatch => ({
	createProject: project => dispatch(createProject(project))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProjectForm);
