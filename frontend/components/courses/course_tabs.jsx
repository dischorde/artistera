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
    const { id, currentUser, enroll, unenroll } = this.props;
    const { about, reviews, assignment, projects } = this.state;
    let enrollmentButton;

    if (currentUser.enrollments.includes(parseInt(id))) {
      enrollmentButton =
      <button onClick={() => unenroll(id, currentUser.id)}
                                 className="enrolled">Unenroll</button>;
    }
    else {
      enrollmentButton =
      <button onClick={() => enroll(id, currentUser.id)}
              className="unenrolled">Enroll</button>;
    }

    return (
      <section className="course-tabs">
        <section className="tabs-wrapper">
          <ul className="tab-items">
            <Link to={`/courses/${id}/about`} className={about}><li>About</li></Link>
            <Link to={`/courses/${id}/reviews`}  className={reviews}><li>Reviews</li></Link>
            <Link to={`/courses/${id}/assignment`} className={assignment}><li>Course Project</li></Link>
            <Link to={`/courses/${id}/projects`} className={projects}><li>All Projects</li></Link>
          </ul>
          {enrollmentButton}
        </section>
      </section>
    );
  }
}

export default CourseTabs;
