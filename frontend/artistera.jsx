import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store.js';
import { requestAllCourses, requestCourse, receiveAllCourses, receiveCourse } from './actions/courses_actions.js';
// import { fetchCourses, fetchCourse } from './util/courses_api_util.js';
import { selectAllCourses } from './reducers/selectors.js';
import Root from './components/root.jsx';

document.addEventListener('DOMContentLoaded', () => {
    const root = document.getElementById('root');
    let store;
    if (window.currentUser) {
      const preloadedState = { session: { currentUser: window.currentUser } };
      store = configureStore(preloadedState);
    } else {
      store = configureStore();
    }


    // TODO: remove testing
    window.requestCourse = requestCourse;
    window.requestAllCourses = requestAllCourses;
    // window.fetchCourse = fetchCourse;
    // window.fetchCourses = fetchCourses;
    window.receiveCourse = receiveCourse;
    window.receiveAllCourses = receiveAllCourses;
    window.selectAllCourses = selectAllCourses;
    window.store = store;
    window.selectAllCourses = selectAllCourses;

    ReactDOM.render(<Root store={ store }/>, root);
});
