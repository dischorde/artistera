import React from 'react';
import { Link, withRouter } from 'react-router';

class ProjectForm extends React.Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = { title: "", description: "", assignment_id: this.props.assignmentId, user_id: this.props.userId };
  }

  redirect(where) {
    this.props.router.push(where);
  }

  handleSubmit(e) {
    e.preventDefault;
    const project = Object.assign({}, this.state);
    this.props.createProject(project).then((proj) => this.redirect(`projects/${proj.id}`));
  }

  handleChange(field) {
    return e => (
      this.setState({[field]: e.currentTarget.value})
    );
  }

  render() {
    return (
    <div className="project-form">
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="project-title">Project Title</label>
            <input type="text" onChange={this.handleChange('title')} value={this.state.title} />
          <label htmlFor="project-description">Project Description</label>
            <textarea onChange={this.handleChange('description')} value={this.state.description} />
          <input type="submit" value={"Create"} />
        </form>
      </div>
    );
  }

}

export default withRouter(ProjectForm);
