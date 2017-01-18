import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store.js';

import { requestCourseReviews, requestReview, createReview, updateReview, deleteReview } from './actions/reviews_actions.js';
// import { fetchReviews, fetchReview, createReview, updateReview, deleteReview} from './util/reviews_api_util.js';
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
    window.requestCourseReviews = requestCourseReviews;
    window.requestReview = requestReview;
    window.createReview = createReview;
    window.updateReview = updateReview;
    window.deleteReview = deleteReview;
    window.store = store;

    ReactDOM.render(<Root store={ store }/>, root);
});
