import React from 'react';
import AttachmentList from '../../shared/attachment-list.jsx';
import ProjectFormContainer from '../../projects/project_form_container.jsx';

class Assignment extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillUnmount() {
    this.props.clearProjErrors();
  }

  render () {
    let assignment = this.props.assignment;
    if (assignment === undefined) {
      return <div></div>;
    }

    let materials, materialsHeader, resources, resourcesHeader;

    if ( assignment.description !== undefined ) {
      assignment.description = assignment.description.replace(/\n/g, "<br /><br />");
    }

    if (assignment.materials) {
      materialsHeader = <h4>Materials</h4>;
      materials = <p dangerouslySetInnerHTML={{__html: assignment.materials}}></p>;
    }

    if (assignment.resources) {
      resourcesHeader = <h4>Resources</h4>;
      resources = <p dangerouslySetInnerHTML={{__html: assignment.resources}}></p>;
    }

    return (
      <div className="assignment-wrapper">
        <div className="assignment">
          <section className="assignment-details">
            <h3>{assignment.title}</h3>
            <p dangerouslySetInnerHTML={{__html: assignment.description}}></p>
            <h4>Assignment Deliverable</h4>
            <p>{assignment.deliverable}</p>
            {materialsHeader}
            {materials}
            {resourcesHeader}
            {resources}
          </section>
          <AttachmentList attachments={assignment.attachments} />
        </div>
        <section className="project-form-wrapper">
          <ProjectFormContainer assignmentId={assignment.id} formType={'new'} />
        </section>
      </div>
    );
  }
}
//
export default Assignment;
