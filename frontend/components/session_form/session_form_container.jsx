import { connect } from 'react-redux';
import SessionForm from './session_form.jsx';
import { signup, signin } from '../../actions/session_actions.js';

const mapStateToProps = ({session}, {location}) => ({
  loggedIn: Boolean(session.currentUser),
  errors: session.errors,
  formType: location.pathname
});


const mapDispatchToProps = (dispatch, { location }) => {
  const processForm = (location.pathname === '/signin') ? signin : signup;

  return {
    processForm: user => dispatch(processForm(user))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);
