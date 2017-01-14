import React from 'react';
import AttachmentList from '../../shared/attachment-list.jsx';

class Assignment extends React.Component {
  constructor(props) {
    super(props);
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

    if (assignment.materials !== null) {
      materialsHeader = <h4>Materials</h4>;
      materials = <p>{assignment.materials}</p>;
    }

    if (assignment.resources !== null) {
      resourcesHeader = <h4>Resources</h4>;
      resources = <p>{assignment.resources}</p>;
    }

    return (
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
    );
  }
}
//
export default Assignment;
