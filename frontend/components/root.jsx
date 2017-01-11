import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import App from './app.jsx';
import SessionFormContainer from './session_form/session_form_container.jsx';


const Root = ({ store }) => {
  const _redirectIfLoggedIn = (nextState, replace) => {
    if (store.getState().session.currentUser) {
      replace('/');
      }
    };

  return (
    <Provider store={ store }>
      <Router history={ hashHistory }>
        <Route path="/signin" component={ SessionFormContainer } onEnter={ _redirectIfLoggedIn } />
        <Route path="/signup" component={ SessionFormContainer } onEnter={ _redirectIfLoggedIn } />
        <Route path="/" component={ App }>
        </Route>
      </Router>
    </Provider>
  );
};

export default Root;