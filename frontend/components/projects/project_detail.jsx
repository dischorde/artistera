import React from 'react';
import { Link } from 'react-router';
import AttachmentList from '../shared/attachment-list.jsx';

class ProjectDetail extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.requestProject(parseInt(this.props.params.projectId));
  }

  componentWillReceiveProps(newProps) {
    if (newProps.params.projectId !== this.props.params.projectId) {
      this.props.requestCourse(parseInt(newProps.params.projectId));
    }
  }

  render () {
    let project = this.props.projectDetail;
    let attachments;
    if (project.attachments) {
      attachments = <AttachmentList attachments={project.attachments} />;
    }

    return (
      <div className="project-detail-wrapper">
        <h1>{project.title} by {project.author_name}</h1>
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
      </div>
    );
  }
}

export default ProjectDetail;
