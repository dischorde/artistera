import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store.js';
import Root from './components/root.jsx';
import Modal from 'react-modal';
// import { deleteEnrollment, createEnrollment } from './util/enrollments_api_util.js';
import { enroll, unenroll } from './actions/session_actions.js';

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
    window.store = store;
    // window.deleteEnrollment = deleteEnrollment;
    // window.createEnrollment = createEnrollment;
    window.enroll = enroll;
    window.unenroll = unenroll;

    ReactDOM.render(<Root store={ store }/>, root);
});
