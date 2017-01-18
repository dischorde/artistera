import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import App from './app.jsx';
import SessionFormContainer from './session_form/session_form_container.jsx';
import CourseIndexContainer from './courses/course_index_container.jsx';
import ProjectIndexContainer from './projects/project_index_container.jsx';
import CourseDetailContainer from './courses/course_detail_container.jsx';
import ProjectDetailContainer from './projects/project_detail_container.jsx';
import AboutContainer from './courses/about/about_container.jsx';
import ProjectsContainer from './courses/projects/projects_container.jsx';
import AssignmentContainer from './courses/assignment/assignment_container.jsx';
import ReviewsContainer from './courses/reviews/reviews_container.jsx';
import SearchIndexContainer from './search/search_index_container.jsx';


const Root = ({ store }) => {
  const _redirectIfLoggedIn = (nextState, replace) => {
    if (store.getState().session.currentUser) {
      replace('/');
    }
  };

  const _ensureSignedIn = (nextState, replace) => {
    if (!store.getState().session.currentUser) {
      replace('/signup');
    }
  };

  return (
    <Provider store={ store }>
      <Router history={ hashHistory }>
        <Route path="/signin" component={ SessionFormContainer } onEnter={ _redirectIfLoggedIn } />
        <Route path="/signup" component={ SessionFormContainer } onEnter={ _redirectIfLoggedIn } />
        <Route path="/" component={ App } onEnter={ _ensureSignedIn } >
          <IndexRoute component={ CourseIndexContainer } />
          <Route path="/courses" component={ CourseIndexContainer } />
          <Route path="/projects" component={ ProjectIndexContainer } />
          <Route path="/courses/:courseId" component={ CourseDetailContainer } >
            <IndexRoute component={ AboutContainer } />
            <Route path="about" component={ AboutContainer } />
            <Route path="projects" component={ ProjectsContainer } />
            <Route path="assignment" component={ AssignmentContainer } />
            <Route path="reviews" component={ ReviewsContainer } />
          </Route>
          <Route path="/projects/:projectId" component={ ProjectDetailContainer } />
          <Route path="/search" component={ SearchIndexContainer } />
        </Route>
      </Router>
    </Provider>
  );
};

export default Root;
