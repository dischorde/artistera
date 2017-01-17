import { connect } from 'react-redux';
import { clearProjErrors } from '../../../actions/projects_actions.js';
import Assignment from './assignment.jsx';

const mapStateToProps = state => ({
  assignment: state.courseDetail.assignment
});

const mapDispatchToProps = (dispatch) => ({
  clearProjErrors: () => dispatch(clearProjErrors())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Assignment);
