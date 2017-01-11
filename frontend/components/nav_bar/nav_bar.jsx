import React from 'react';
import { Link, withRouter } from 'react-router';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.demoLogin = this.demoLogin.bind(this);
    this.navLoggedIn = this.navLoggedIn.bind(this);
    this.navLoggedOut = this.navLoggedOut.bind(this);
    this.goToSignIn = this.goToSignIn.bind(this);
  }

  navLoggedIn() {
    let {currentUser, logout} = this.props;
    return (
      <ul>
        <li><img className="gravatar" src={`https://www.gravatar.com/avatar/${currentUser.gravatar_hash}?d=blank`} /></li>
        <li>{currentUser.first_name}</li>
        <li><button onClick={logout}>Log Out</button></li>
      </ul>
    );
  }

  demoLogin(e) {
    e.preventDefault();
    const user = { email: "demo@artistera.info", password: "logmein123" };
    this.props.signin(user).then(() => this.redirect());
  }

  redirect() {
    this.props.router.push("/");
  }

  goToSignIn(e) {
    e.preventDefault();
    this.props.router.push("/signin");
  }

  navLoggedOut() {
    let {currentUser, logout} = this.props;
    return (
      <ul>
        <li><button onClick={this.goToSignIn}>Sign In</button></li>
        <li><button onClick={this.demoLogin}>Demo</button></li>
      </ul>
    );
  }

  render() {
    let {currentUser, logout} = this.props;
    //TODO: change link to proper route for all courses and all projects
    return (
      <header>
        <section className="nav-left">
          <span><img id="logo" src="/assets/artistera-logo.svg"/></span>
          <ul>
            <li><Link to="/">All Courses</Link></li>
            <li><Link to="/">All Projects</Link></li>
          </ul>
        </section>
        <section className="nav-search">
          <input type="text" id="searchBar" placeholder="The Search Bar Will Go Here" />
        </section>
        <section className="nav-right">
          { currentUser ? this.navLoggedIn() : this.navLoggedOut()}
        </section>
      </header>
    );
  }
}



export default withRouter(NavBar);
