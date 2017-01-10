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
    this.props.processForm(user).then(() => this.redirect());
  }


  makeLink() {
    if (this.props.formType === '/signin') {
      return (
        <span>
          {"Not a member?"}
          <br />
          <Link to="/signup">Sign Up.</Link>
          {" "}<Link to="/" onClick={this.demoLogin}>Demo</Link>
        </span>
      );
    }
    else {
      return (
        <span>
          {"Already a member?"}
          <br />
          <Link to="/signin">Sign In.</Link>
          {" "}<Link onClick={this.demoLogin}>Demo</Link>
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
    if (this.state.errors !== [] && this.state.errors !== undefined) {
      errors = this.state.errors.map( (message, i) => <li key={i}>{message}</li>);
    }

    let headerText, extraFields, headerBlurb, submitText;
    if (this.props.formType === '/signup') {
      headerText = "Join Artistera";
      headerBlurb = "Sign up for hours of online art and crafting education!";
      submitText = "Sign Up";
      extraFields =  (
        <span>
          <input type="text" value={this.state.first_name} onChange={this.updateState("first_name")} placeholder="First Name" />
          {'   '}
          <input type="text" value={this.state.last_name} onChange={this.updateState("last_name")} placeholder="Last Name"/>
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
      <div>
        <section>
          <h2>{ headerText }</h2>
          <br />
          <span>{ headerBlurb }</span>
        </section>
        <form onSubmit={this.handleSubmit}>
          <ul>
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
      </div>
    );
  }
}

export default withRouter(SessionForm);
