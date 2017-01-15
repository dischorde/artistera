import React from 'react';
import List from '../shared/list.jsx';


class ProjectIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.requestAllProjects();
  }

  render() {
    return (
      <div className="all-classes-projects-wrapper">
        <div className="all-classes-projects">
        <h1>All Projects</h1>
        <div className="thin-border"></div>
        <List listType="projects" elements={this.props.projects} />
        { this.props.children }
      </div>
    </div>
    );
  }
}

export default ProjectIndex;
