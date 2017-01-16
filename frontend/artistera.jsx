import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store.js';
import { requestAllCourses, requestCourse, receiveAllCourses, receiveCourse } from './actions/courses_actions.js';
import { requestAllProjects, requestProject, createNewProject, updateProject, destroyProject } from './actions/projects_actions.js';
import { selectAllCourses } from './reducers/selectors.js';
import Root from './components/root.jsx';
import Modal from 'react-modal';

document.addEventListener('DOMContentLoaded', () => {
    Modal.setAppElement(document.body);
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
    window.receiveCourse = receiveCourse;
    window.selectAllCourses = selectAllCourses;
    window.requestAllProjects = requestAllProjects;
    window.requestProject = requestProject;
    window.createNewProject = createNewProject;
    window.updateProject = updateProject;
    window.destroyProject = destroyProject;
    window.store = store;
    window.selectAllCourses = selectAllCourses;

    ReactDOM.render(<Root store={ store }/>, root);
});
