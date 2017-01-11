import React from 'react';
import { Link, withRouter } from 'react-router';


class SessionForm extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
          email: "",
          first_name: "",
          last_name: "",
          password: ""
      };
      this.updateState = this.updateState.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.makeLink = this.makeLink.bind(this);
      this.demoLogin = this.demoLogin.bind(this);
  }

  componentDidUpdate() {
		this.redirectIfLoggedIn();
	}

	redirectIfLoggedIn() {
		if (this.props.loggedIn) {
			this.props.router.push("/");
		}
	}

  redirect() {
    this.props.router.push("/");
  }

  updateState(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  demoLogin(e) {
    e.preventDefault();
    const user = { email: "demo@artistera.info", password: "logmein123" };
    this.props.signin(user).then(() => this.redirect());
  }


  makeLink() {
    if (this.props.formType === '/signin') {
      return (
        <span className="switch-form">
          {"Not a member?"}
          <br />
          <Link className="session-switch" to="/signup">Sign Up</Link>
          <Link to="/" onClick={this.demoLogin}>Demo</Link>
        </span>
      );
    }
    else {
      return (
        <span className="switch-form">
          {"Already a member?"}
          <br />
          <Link className="session-switch" to="/signin">Sign In</Link>
          <Link onClick={this.demoLogin}>Demo</Link>
        </span>
      );
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user).then(() => this.redirect());
  }

  render () {
    let errors;
    if (this.props.errors.length > 0) {
      errors = this.props.errors.map( (message, i) => <li key={i}>{message}</li>);
    }

    let headerText, extraFields, headerBlurb, submitText;
    if (this.props.formType === '/signup') {
      headerText = "Join Artistera";
      headerBlurb = "Sign up for hours of online art and crafting education!";
      submitText = "Sign Up";
      extraFields =  (
        <span className="extraFields">
          <input id="first-name" type="text" value={this.state.first_name} onChange={this.updateState("first_name")} placeholder="First Name" />
          <input id="last-name" type="text" value={this.state.last_name} onChange={this.updateState("last_name")} placeholder="Last Name"/>
          <br />
        </span>
      );
    }
    else {
      headerText = "Welcome Back to Artistera";
      headerBlurb = "Sign in to continue to your account";
      submitText = "Sign In";
    }

    return (
      <div className="background">
        <section className="session-form-wrapper">
          <section className="session-box">
            <section className="session-header">
              <span><h2>{ headerText }</h2></span>
              <div className="small-border"></div>
              <br />
              <span>{ headerBlurb }</span>
            </section>
            <section className="session-form">
              <form onSubmit={this.handleSubmit}>
                <ul className="errors">
                  { errors }
                </ul>
                { extraFields }
                <input type="text" value={this.state.email} onChange={this.updateState("email")} placeholder="Email" />
                <br />
                <input type="password" value={this.state.password} onChange={this.updateState("password")} placeholder="Password"/>
                <br />
                <button>{submitText}</button>
                <br />
                {this.makeLink()}
              </form>
            </section>
          </section>
        </section>
      </div>
    );
  }
}

export default withRouter(SessionForm);
