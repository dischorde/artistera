import { connect } from 'react-redux';
import Assignment from './assignment.jsx';

const mapStateToProps = state => ({
  assignment: state.courseDetail.assignment
});

const mapDispatchToProps = (dispatch) => ({
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Assignment);
