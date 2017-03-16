import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store.js';
import Root from './components/root.jsx';
import Modal from 'react-modal';

document.addEventListener('DOMContentLoaded', () => {
    Modal.setAppElement(document.body);
    const root = document.getElementById('root');
    let store;
    if (localStorage.currentUser) {
      const preloadedState = { session: { currentUser: JSON.parse(localStorage.currentUser) } };
      store = configureStore(preloadedState);
    } else {
      store = configureStore();
    }

    ReactDOM.render(<Root store={ store }/>, root);
});
