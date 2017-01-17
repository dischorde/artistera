import React from 'react';
import { Link, withRouter } from 'react-router';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.demoLogin = this.demoLogin.bind(this);
    this.navLoggedIn = this.navLoggedIn.bind(this);
    this.navLoggedOut = this.navLoggedOut.bind(this);
    this.goToSignIn = this.goToSignIn.bind(this);
    this.logoutAndRedirect = this.logoutAndRedirect.bind(this);
  }

  navLoggedIn() {
    let {currentUser} = this.props;
    return (
      <ul>
        <li><div className="gravatar"><span className="gravatar-letter">{currentUser.first_name[0]}</span>
          <img src={`https://www.gravatar.com/avatar/${currentUser.gravatar_hash}?d=blank`} /></div></li>
        <li>{currentUser.first_name}</li>
        <li><button onClick={this.logoutAndRedirect}>Log Out</button></li>
      </ul>
    );
  }

  logoutAndRedirect(e) {
      e.preventDefault();
      this.props.logout().then(() => this.props.router.push("/signin"));
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
    return (
      <header>
        <section className="nav-left">
          <span><Link to="/"><img id="logo" src="/assets/artistera-logo.svg"/></Link></span>
          <ul>
            <li><Link to="/courses">All Courses</Link></li>
            <li><Link to="/projects">All Projects</Link></li>
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
