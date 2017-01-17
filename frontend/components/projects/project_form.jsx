import React from 'react';
import { Link, withRouter } from 'react-router';

class ProjectForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = this.getInitialState();

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.getInitialState = this.getInitialState.bind(this);
    this.updateFile = this.updateFile.bind(this);
    this.readyAttachments = this.readyAttachments.bind(this);
    this.updateAttachments = this.updateAttachments.bind(this);
    this.disable = this.disable.bind(this);
  }

  getInitialState() {
    if (this.props.formType === 'new' && this.props.projectErrors.length == 0) {
      return ({
        title: "",
        description: "",
        coverFile: null,
        coverUrl: null,
        assignmentId: this.props.assignmentId,
        user_id: this.props.userId,
        disabled: false,
        loaderOn: "loader-off",
        attachments: []
      });
    }
    else {
      return ({
        title: this.props.projectDetail.title,
        description: this.props.projectDetail.description,
        coverFile: null,
        coverUrl: this.props.projectDetail.cover_img_src,
        assignmentId: this.props.assignmentId,
        user_id: this.props.userId,
        disabled: false,
        loaderOn: "loader-off",
        attachments: []
      });
    }
  }

  disable() {
    this.setState({
      disabled: true,
      loaderOn: 'loader-on'
    });
  }

  componentWillReceiveProps(newProps) {
    if (newProps.projectErrors.length > 0) {
      this.setState({
        disabled: false,
        loaderOn: 'loader-off'
      });
    }
  }

  redirect(where) {
    this.props.router.push(where);
  }

  readyAttachments() {
    return this.state.attachments.map((attachmentFile) => {
      let formData = new FormData();
      formData.append("attachment[document]", attachmentFile);
      formData.append("attachment[attachable_type]", "Project");
      return formData;
    });
  }

  handleSubmit(e) {
    e.preventDefault;
    this.disable();
    let formData = new FormData();
    formData.append("project[title]", this.state.title);
    formData.append("project[description]", this.state.description);
    formData.append("project[assignment_id]", this.state.assignmentId);
    formData.append("project[user_id]", this.state.user_id);

    if (this.state.coverFile) {
      formData.append("project[cover_img]", this.state.coverFile);
    }

    const attachments = this.readyAttachments();

    if (this.props.formType === 'new') {
      const project = {formData: formData, assignmentId: this.state.assignmentId};
      this.props.createNewProject(project, attachments);
    }
    else {
      const ids = {assignment_id: this.state.assignmentId, id: this.props.projectId};
      const project = {formData: formData, ids: ids};
      this.props.clearErrors();
      this.props.updateProject(project, attachments);
      this.props.setUpdated();
    }
  }

  handleChange(field) {
    return e => (
      this.setState({[field]: e.currentTarget.value})
    );
  }

  updateAttachments(e) {
    const allFiles = e.currentTarget.files;
    let updatedAttachments = [];
    for (let i = 0; i < allFiles.length; i++) {
      updatedAttachments.push(allFiles[i]);
    }
    this.setState({attachments: updatedAttachments});
  }

  updateFile(e) {
    const file = e.currentTarget.files[0];
    const fileReader = new FileReader();
    fileReader.onloadend = () => {
      this.setState({ coverFile: file, coverUrl: fileReader.result });
    };

    if (file) {
      fileReader.readAsDataURL(file);
    }
  }

  catLoader() {
    return (
      <div class="box">
        <div class="cat">
          <div class="cat__body"></div>
          <div class="cat__body"></div>
          <div class="cat__tail"></div>
          <div class="cat__head"></div>
        </div>
      </div>
    );
  }

  render() {
    let errors;
    let errorStatus = "hidden-errors";
    const allErrors = this.props.projectErrors.concat(this.props.attachmentErrors);
    if (allErrors.length > 0) {
      errors = allErrors.map( (message, i) => <li key={i}>{message}</li>);
      errorStatus = "errors";
    }

    let currentAttachments = [];
    currentAttachments = this.state.attachments.map((file, i) => (
      <li key={i}>{file.name}</li>
    ));

    let buttonText;
    if (this.props.formType === 'new') {
      buttonText = 'Create';
    }
    else {
      buttonText = 'Update';
    }

    return (
    <div className="project-form">
        <form>
          <section className="project-fields">
            <label htmlFor="project-title">Project Title</label>
            <input type="text" id="project-title" onChange={this.handleChange('title')} value={this.state.title} />
            <label htmlFor="project-description">Project Description</label>
            <textarea onChange={this.handleChange('description')} value={this.state.description} />
            <ul className={errorStatus}>
              {errors}
            </ul>
            <button onClick={this.handleSubmit} disabled={this.state.disabled}>{buttonText}</button>
          </section>
          <section className="project-attachments">
            <label htmlFor="cover-image">Cover Image</label><br />
            <div className="cover-image-button">
              <input className="file-button" type="file" onChange={this.updateFile} />
            </div>
            <img className="preview" src={this.state.coverUrl} />
            <label htmlFor="attachments-uploading">Attachments</label><br />
            <div className="attachments-button">
              <input className="file-button" type="file" onChange={this.updateAttachments} multiple />
            </div>
              <ul className="to-upload">
                {currentAttachments}
              </ul>
          </section>
        </form>
      </div>
    );
  }

}

export default withRouter(ProjectForm);
