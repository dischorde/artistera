import { connect } from 'react-redux';
import { requestProfile } from '../../actions/user_actions.js';
import Profile from './profile.jsx';

const mapStateToProps = state => ({
  profile: state.profile,
  currentUser: state.session.currentUser
});

const mapDispatchToProps = (dispatch) => ({
  requestProfile: (id) => dispatch(requestProfile(id)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile);
