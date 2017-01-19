import React from 'react';
import List from '../shared/list.jsx';
import { withRouter } from 'react-router';

class SplashPage extends React.Component {
  constructor(props) {
    super(props);
    this.goTo = this.goTo.bind(this);
  }

  componentDidMount() {
    this.props.requestAllProjects();
    this.props.requestAllCourses();
  }

  goTo(where) {
    return e => {
      e.preventDefault();
      this.props.router.push(where);
    };
  }

  render() {
    return (
      <div className="splash-page">
        <section className="hero-banner">
            <div className="overlay">
              <h1>Learn Art Online</h1>
              <h3>Bite-sized art classes available anywhere</h3>
              <button onClick={this.goTo("/signup")}>Create An Account</button>
            </div>
          </section>

        <section className="splash-classes">
          <div className="all-classes-projects-wrapper">
            <div className="all-classes-projects">
            <h2>Explore Classes</h2>
            <List listType="courses" elements={this.props.courses} />
            { this.props.children }
          </div>
        </div>
        </section>

        <section className="how-to-take-wrapper">
          <div className="how-to-take">
          <h2>How to Take an Artistera Course</h2>
          <section className="how-to-steps">
            <div className="how-to-item">
              <div id="videos-icon"></div>
              <span>Watch the Videos</span>
            </div>
            <div className="how-to-item">
              <div id="project-icon"></div>
              <span>Do the Project</span>
            </div>
            <div className="how-to-item">
              <div id="upload-icon"></div>
              <span>Upload Your Work</span>
            </div>
          </section>
          </div>
        </section>

        <section className="splash-projects">
          <section className="splash-projects-wrapper">
            <div className="all-classes-projects-wrapper">
              <div className="all-classes-projects">
                <List listType="projects" elements={this.props.projects} />
              </div>
            </div>
          </section>
          <section className="splash-projects-text">
            <h2>Student Projects</h2>
            <p>{"Every Artistera class has has a project that give students an opportunity to practice what they learned and hone their skills. Check out these exciting submissions from our community!"}</p>
            <button onClick={this.goTo("/projects")}>See Projects</button>
          </section>
        </section>
      </div>
    );
  }
}

export default withRouter(SplashPage);
