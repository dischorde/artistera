import React from 'react';
import List from '../shared/list.jsx';


class SearchIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="all-classes-projects-wrapper">
        <div className="all-classes-projects">
        <h1>Search Results</h1>
        <div className="thin-border"></div>
        <List listType="courses" elements={this.props.courses} />
        { this.props.children }
      </div>
    </div>
    );
  }
}

export default SearchIndex;
