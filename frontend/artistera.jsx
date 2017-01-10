import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store.js';
import { signup, login, logout } from './util/session_api_util.js';

document.addEventListener('DOMContentLoaded', () => {
    const root = document.getElementById('root');
    const store = configureStore();

    // TODO: remove testing
    window.signup = signup;
    window.login = login;
    window.logout = logout;
    window.store = store;

    ReactDOM.render(<h1>Welcome to Artistera</h1>, root);
});
