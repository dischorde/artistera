import { connect } from 'react-redux';
import { logout, signin } from '../../actions/session_actions';
import { searchCourses } from '../../actions/courses_actions.js';
import NavBar from './nav_bar.jsx';

const mapStateToProps = ({ session }) => ({
  currentUser: session.currentUser
});

const mapDispatchToProps = dispatch => ({
  searchCourses: (keyword) => dispatch(searchCourses(keyword)),
  logout: () => dispatch(logout()),
  signin: (user) => dispatch(signin(user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavBar);
