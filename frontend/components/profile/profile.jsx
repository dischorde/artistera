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
    const { enrollments, projects } = this.props;
    return (
      <section className="profile-wrapper">
        <section className="user-edit-form">
          I'm a profile!
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
