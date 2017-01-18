import { connect } from 'react-redux';
import { searchCourses } from '../../actions/courses_actions.js';
import { selectAllCourses } from '../../reducers/selectors.js';
import SearchIndex from './search_index.jsx';

const mapStateToProps = state => ({
  courses: selectAllCourses(state)
});

const mapDispatchToProps = (dispatch) => ({
  searchCourses: (keyword) => dispatch(searchCourses(keyword))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchIndex);
