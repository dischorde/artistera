import React from 'react';
import { Link } from 'react-router';

const CourseTabs = ({id}) => {
  return (
    <section className="course-tabs">
      <ul className="tab-items">
        <li><Link to={`/courses/${id}/about`}>About</Link></li>
        <li>Reviews</li>
        <li>Course Project</li>
        <li>All Projects</li>
      </ul>
    </section>
  );
};

export default CourseTabs;
