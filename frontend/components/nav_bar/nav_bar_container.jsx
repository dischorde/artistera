import { connect } from 'react-redux';
import { logout, signin } from '../../actions/session_actions';
import NavBar from './nav_bar.jsx';

const mapStateToProps = ({ session }) => ({
  currentUser: session.currentUser
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  signin: (user) => dispatch(signin(user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavBar);
