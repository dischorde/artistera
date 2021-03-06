import React from 'react';
import { Link } from 'react-router';

class CourseTabs extends React.Component {
  constructor(props) {
    super(props);
    this.state = { about: "", reviews: "", assignment: "", projects: ""};
  }

  componentWillReceiveProps(newProps) {
    const tabs = ["about", "reviews", "assignment", "projects"];
    const clearState = { about: "", reviews: "", assignment: "", projects: ""};
    if (tabs.includes(newProps.active)) {
      clearState[newProps.active] = "active-tab";
    }
    else {
      clearState["about"] = "active-tab";
    }
    this.setState(clearState);
  }

  render () {
    const { id } = this.props;
    const { about, reviews, assignment, projects } = this.state;
    return (
      <section className="course-tabs">
        <ul className="tab-items">
          <Link to={`/courses/${id}/about`} className={about}><li>About</li></Link>
          <Link to={`/courses/${id}/reviews`}  className={reviews}><li>Reviews</li></Link>
          <Link to={`/courses/${id}/assignment`} className={assignment}><li >Course Project</li></Link>
          <Link to={`/courses/${id}/projects`} className={projects}><li>All Projects</li></Link>
        </ul>
      </section>
    );
  }
}

export default CourseTabs;
