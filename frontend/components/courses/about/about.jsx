import React from 'react';
import { Link } from 'react-router';

class About extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    let { description, title, assignment_summary} = this.props.courseDetail;
    if ( description !== undefined ) {
      description = description.replace(/\n/g, "<br /><br />");
    }
    return (
      <section className="about">
        <h3>About {title}</h3>
        <p dangerouslySetInnerHTML={{__html: description}}></p>
        <h4>Assignment Summary</h4>
        <p>{assignment_summary}</p>
      </section>
    );
  }
}

export default About;
