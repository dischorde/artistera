import React from 'react';
import List from '../shared/list.jsx';

class Projects extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <div className="projects">
        <div className="all-classes-projects">
          <List listType="projects" elements={this.props.projects} />
        </div>
      </div>
    );
  }
}

export default Projects;
