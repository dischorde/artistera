import React from 'react';
import { Link } from 'react-router';
import AttachmentList from '../shared/attachment-list.jsx';
import ProjectFormContainer from './project_form_container.jsx';
import Modal from 'react-modal';

class ProjectDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalOpen: false,
      updated: false
    };
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.setUpdated = this.setUpdated.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  componentDidMount() {
    this.props.requestProject(parseInt(this.props.params.projectId));
  }

  componentWillReceiveProps(newProps) {
    if (newProps.params.projectId !== this.props.params.projectId) {
      this.props.requestProject(parseInt(newProps.params.projectId));
      this.props.clearErrors();
    }

    if (this.state.updated && newProps.projectErrors.length === 0) {
      this.closeModal();
      this.setState({updated: false});
    }
  }

  openModal(e) {
		this.setState({
			modalOpen: true,
		});
	}

	closeModal() {
		this.setState({modalOpen: false});
    this.props.clearErrors();
	}

  setUpdated() {
		this.setState({updated: true});
	}

  handleDelete(e) {
    this.props.destroyProject(this.props.params.projectId);
  }

  render () {
    let project = this.props.projectDetail;
    let deleteable = false;
    let attachments, editButton, deleteButton;

    if (project.user_id === this.props.userId) {
      editButton =
        <button className="edit-delete"
                onClick={this.openModal}>Edit</button>;
      deleteButton =  <button className="edit-delete"
                onClick={this.handleDelete}>Delete</button>;
      deleteable = true;
    }

    let errors;
    if (this.props.attachmentErrors.length > 0) {
      errors = this.props.attachmentErrors.map( (message, i) => <li key={i}>{message}</li>);
    }

    return (
      <div className="project-detail-wrapper">
        <div className="project-detail-header">
          <div className="project-h1">
            <h1>{project.title}</h1><br/>
            <h2>by {project.author_name}</h2>
          </div>
        </div>
        <ul className="errors">
          { errors }
        </ul>
        <section className="project-cover-attachment-wrapper">
          <section className="project-cover-img">
            <img src={project.cover_img_src} />
          </section>
          <AttachmentList attachments={project.attachments}
                          deleteable={deleteable}
                          deleteAttachment={this.props.deleteAttachment}/>
        </section>
        <section className="project-details">
          <div className="proj-edit-and-delete">
            <h3>Uploaded to <Link to={`/courses/${project.id}/about`}>{project.course_title}</Link></h3>
            {editButton}{deleteButton}
          </div>
          <h4>Updated {project.updated_at} ago</h4>
          <p>{project.description}</p>
        </section>

        <Modal
					contentLabel="Modal"
					isOpen={this.state.modalOpen}
					onRequestClose={this.closeModal}
					className="project-form-modal"
          style={{ content : {
            top                   : '50%',
            left                  : '50%',
            right                 : 'auto',
            bottom                : 'auto',
            transform             : 'translate(-50%, -50%)'
          } }}>
          <ProjectFormContainer assignmentId={project.assignment_id} projectId={project.id} formType={'update'} setUpdated={this.setUpdated} />
        </Modal>
      </div>
    );
  }
}

export default ProjectDetail;
