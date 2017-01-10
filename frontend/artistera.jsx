import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store.js';
import { signup, signin, logout } from './actions/session_actions.js';
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
    window.signup = signup;
    window.signin = signin;
    window.logout = logout;
    window.store = store;

    ReactDOM.render(<Root store={ store }/>, root);
});
