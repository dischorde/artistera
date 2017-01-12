import React from 'react';
import List from '../shared/list.jsx';


class CourseIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.requestAllCourses();
  }

  render() {
    return (
      <div className="all-classes-projects-wrapper">
        <div className="all-classes-projects">
        <h1>All Classes</h1>
        <div className="thin-border"></div>
        <List listType="courses" elements={this.props.courses} />
        { this.props.children }
      </div>
    </div>
    );
  }
}

export default CourseIndex;
