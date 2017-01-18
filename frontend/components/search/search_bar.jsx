import React from 'react';
import { withRouter } from 'react-router';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.handleSearch = this.handleSearch.bind(this);
    this.redirect = this.redirect.bind(this);
  }

  redirect() {
    if (this.props.location.pathname !== "/search") {
      this.props.router.push("/search");
    }
  }

  handleSearch (e) {
    this.props.searchCourses(e.currentTarget.value).then(
      this.redirect
    );
  }

  render() {
    return (
      <section className="nav-search">
        <input type="text" className="search-bar" onChange={this.handleSearch} placeholder="Search Courses By Keyword..." />
      </section>
    );
  }

}

export default withRouter(SearchBar);
