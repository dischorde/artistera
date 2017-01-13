import React from 'react';
import { Link } from 'react-router';

class About extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    const course = this.props.courseDetail;
    return (
      <section className="about">
        <h3>About {course.title}</h3>
        <p>{course.description}</p>
        <h4>Assignment Summary</h4>
        <p>{course.assignment_summary}</p>
      </section>
    );
  }
}

export default About;
