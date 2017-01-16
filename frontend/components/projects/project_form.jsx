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
  }

  getInitialState() {
    return ({
      title: "",
      description: "",
      coverFile: null,
      coverUrl: null,
      assignmentId: this.props.assignmentId,
      user_id: this.props.userId,
      attachments: []
    });
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
    let formData = new FormData();
    formData.append("project[title]", this.state.title);
    formData.append("project[description]", this.state.description);
    formData.append("project[assignment_id]", this.state.assignmentId);
    formData.append("project[user_id]", this.state.user_id);

    if (this.state.coverFile) {
      formData.append("project[cover_img]", this.state.coverFile);
    }

    const attachments = this.readyAttachments();
    const project = {formData: formData, assignmentId:this.state.assignmentId};
    this.props.createNewProject(project, attachments).then((proj) => {
      this.redirect(`projects/${proj.id}`);
    });
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

  render() {
    let currentAttachments = [];
    currentAttachments = this.state.attachments.map((file, i) => (
      <li key={i}>{file.name}</li>
    ));


    return (
    <div className="project-form">
        <form >
          <section className="project-fields">
            <label htmlFor="project-title">Project Title</label>
            <input type="text" id="project-title" onChange={this.handleChange('title')} value={this.state.title} />
            <label htmlFor="project-description">Project Description</label>
            <textarea onChange={this.handleChange('description')} value={this.state.description} />
            <button onClick={this.handleSubmit}>{"Create"}</button>
          </section>
          <section className="project-attachments">
            <input type="file" onChange={this.updateFile} />
            <img className="preview" src={this.state.coverUrl} />
            <input type="file" onChange={this.updateAttachments} multiple />
              <ul>
                {currentAttachments}
              </ul>
          </section>
        </form>
      </div>
    );
  }

}

export default withRouter(ProjectForm);
