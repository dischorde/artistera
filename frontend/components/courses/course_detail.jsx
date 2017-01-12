import React from 'react';
import { Link } from 'react-router';
import EmbeddedPlaylist from './embedded_playlist.jsx';
import CourseTabs from './course_tabs.jsx';

class CourseDetail extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.requestCourse(parseInt(this.props.params.courseId));
  }

  componentWillReceiveProps(newProps) {
    if (newProps.params.courseId !== this.props.params.courseId) {
      this.props.requestCourse(parseInt(newProps.params.courseId));
    }
  }

  render () {
    const course = this.props.courseDetail;
    return (
      <div className="course-detail">
        <EmbeddedPlaylist title={course.title} playlistSrc={course.playlist_src} />
        <CourseTabs id={this.props.params.courseId} />
        {this.props.children}
      </div>

    );
  }
}

export default CourseDetail;
