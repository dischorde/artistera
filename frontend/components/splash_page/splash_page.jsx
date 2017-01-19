import React from 'react';
import List from '../shared/list.jsx';


class SplashPage extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.requestAllProjects();
    this.props.requestAllCourses();
  }

  // <div className="video-bg">
  //   <video loop muted autoPlay poster="https://s3.amazonaws.com/artistera-dev/Orange-Ripple/Snapshots/Orange-Ripple.jpg" className="banner-bg-video">
  //     <source src="https://s3.amazonaws.com/artistera-dev/Orange-Ripple/WEBM/Orange-Ripple.webm" type="video/webm" />
  //     <source src="https://s3.amazonaws.com/artistera-dev/Orange-Ripple/MP4/Orange-Ripple.mp4" type="video/mp4" />
  //     <source src="https://s3.amazonaws.com/artistera-dev/Orange-Ripple/OGV/Orange-Ripple.ogv" type="video/ogg" />
  //   </video>
  render() {
    return (
      <div className="splash-page">
        <section className="hero-banner">
            <div className="overlay">
              <h1>Learn Art Online</h1>
              <h3>Bite-sized art classes available anywhere</h3>
              <button>Create An Account</button>
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
            <button>See Projects</button>
          </section>
        </section>
      </div>
    );
  }
}

export default SplashPage;
