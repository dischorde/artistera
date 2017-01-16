import React from 'react';
import { Link } from 'react-router';
import AttachmentList from '../shared/attachment-list.jsx';
import ProjectFormContainer from './project_form_container.jsx';
import Modal from 'react-modal';

class ProjectDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalOpen: false
    };
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  componentDidMount() {
    this.props.requestProject(parseInt(this.props.params.projectId));
  }

  componentWillReceiveProps(newProps) {
    if (newProps.params.projectId !== this.props.params.projectId) {
      this.props.requestProject(parseInt(newProps.params.projectId));
    }
  }

  openModal(e) {
		this.setState({
			modalOpen: true,
		});
	}

	closeModal() {
		this.setState({modalOpen: false});
	}

  render () {
    let project = this.props.projectDetail;
    let attachments;
    if (project.attachments) {
      attachments = <AttachmentList attachments={project.attachments} />;
    }

    let editButton;
    if (project.user_id === this.props.userId) {
      editButton = <button id="edit-project" onClick={this.openModal}>Edit</button>;
    }

    return (
      <div className="project-detail-wrapper">
        <div className="project-detail-header">
          <div className="project-h1">
            <h1>{project.title}</h1><br/>
            <h2>by {project.author_name}</h2>
          </div>
          <div className="proj-edit-and-delete">
            {editButton}
          </div>
        </div>
        <section className="project-cover-attachment-wrapper">
          <section className="project-cover-img">
            <img src={project.cover_img_src} />
          </section>
          {attachments}
        </section>
        <section className="project-details">
          <h3>Uploaded to {project.course_title}</h3>
          <h4>Updated {project.updated_at} ago</h4>
          <p>{project.description}</p>
        </section>

        <Modal
					contentLabel="Modal"
					isOpen={this.state.modalOpen}
					onRequestClose={this.closeModal}
					className="project-form-modal">
          <ProjectFormContainer assignmentId={project.assignment_id} projectId={project.id} formType={'update'} />
        </Modal>
      </div>
    );
  }
}

export default ProjectDetail;
