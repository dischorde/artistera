import React from 'react';
import List from '../shared/list.jsx';

class Profile extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    if (this.props.currentUser) {
      this.props.requestProfile(this.props.currentUser.id);
    }
  }

  render() {
    const { enrollments, projects, currentUser, joinDate } = this.props;
    return (
      <section className="profile-wrapper">
        <section className="user-edit-form">
          <div className="user-info-wrapper">
            <div className="prof-gravatar">
              <span className="prof-gravatar-letter">{currentUser.first_name[0]}</span>
              <img src={`https://www.gravatar.com/avatar/${currentUser.gravatar_hash}?d=blank`}/>
            </div>
            <div className="user-info">
              <h1>{`${currentUser.first_name} ${currentUser.last_name}`}</h1>
              <h3>{currentUser.email}</h3>
              <h4>Joined {joinDate}</h4>
            </div>
          </div>
          <div className="profile-buttons">
            <ul>
              <li>
                <button>Edit Account</button>
              </li>
              <li className="enrolled-count">
                <span className="bold-num">{enrollments.length}</span> Enrolled Courses
              </li>
              <li className="project-count">
                <span className="bold-num">{projects.length}</span> Projects
              </li>
            </ul>

          </div>
        </section>
        <section className="profile-courses">
          <h2>Enrolled Courses</h2>
          <div className="all-classes-projects">
            <List listType="courses" elements={enrollments} />
          </div>
        </section>
        <section className="profile-projects">
          <h2>Your Projects</h2>
          <div className="all-classes-projects">
            <List listType="projects" elements={projects} />
          </div>
        </section>
      </section>
    );
  }
}

export default Profile;
