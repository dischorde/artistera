import React from 'react';
import NavBarContainer from './nav_bar/nav_bar_container.jsx';

const App = ({ children }) => (
  <div>
    <NavBarContainer />
    { children }
  </div>
);

export default App;
