import React from 'react';
import List from '../shared/list.jsx';
import Modal from 'react-modal';

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalOpen: false
    };
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  componentDidMount() {
    if (this.props.currentUser) {
      this.props.requestProfile(this.props.currentUser.id);
    }
  }

  openModal(e) {
    this.setState({
      modalOpen: true,
    });
  }

  closeModal() {
    this.setState({modalOpen: false});
    // this.props.clearErrors();
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
                <button onClick={this.openModal}>Edit Account</button>
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


        <Modal
          contentLabel="Modal"
          isOpen={this.state.modalOpen}
          onRequestClose={this.closeModal}
          className="user-edit-modal"
          style={{ content : {
            top                   : '50%',
            left                  : '50%',
            right                 : 'auto',
            bottom                : 'auto',
            transform             : 'translate(-50%, -50%)'
          } }}>
          <section className="session-form-wrapper">
            <section className="session-box">
              <section className="session-header">
              <div className="prof-gravatar">
                <span className="prof-gravatar-letter">{currentUser.first_name[0]}</span>
                <img src={`https://www.gravatar.com/avatar/${currentUser.gravatar_hash}?d=blank`}/>
              </div>
            </section>
            <section className="session-form">
              <form>
                <ul className="errors"></ul>
                <span className="extraFields">
                  <input type="text" id="first-name" value="" placeholder={currentUser.first_name} />
                    <input type="text" id="last-name" value="" placeholder={currentUser.last_name} />
                      <br/>
                </span>
                <input type="text" value="" placeholder={currentUser.email} />
                <br/>
                <input type="password" value="" placeholder="Password" />
                <br/>
                <button>Update</button>
              </form>
            </section>
          </section>
        </section>
        </Modal>
      </section>
    );
  }
}

export default Profile;
