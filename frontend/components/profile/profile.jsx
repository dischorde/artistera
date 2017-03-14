import React from 'react';

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
      <p>I'm a profile!</p>
    );
  }
}

export default Profile;
