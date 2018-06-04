import React from 'react';
import './SearchBar.css';

//Main Component: SearchBar
class SearchBar extends React.Component  {
  constructor(props) {
    super(props);

    this.state = {
      term: '',
      location: '',
      sortBy: 'best_match'
    };

    this.handleLTermChange = this.handleLTermChange.bind(this);
    this.handleLocationChange = this.handleLocationChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.handleSortByChange = this.handleSortByChange.bind(this);

    //Interacts with Yelp API
    this.sortByOptions = {
      'Best Match': 'best_match',
      'Highest Rated': 'rating',
      'Most Reviewed': 'review_count'
    };
  }
  //Provides user selection feedback
  getSortByClass(sortByOption) {
    return this.state.sortBy === sortByOption ? 'active' : '';
  }
  //Change this.state.sortBy using onClick
  handleSortByChange(sortByOption) {
    this.setState({sortBy: sortByOption});
  }
  handleLTermChange(e) {
    this.setState({term: e.target.value});
  }
  handleLocationChange(e) {
    this.setState({location: e.target.value});
  }
  handleSearch(e) {
    this.props.searchYelp(this.state.term, this.state.location, this.state.sortBy);
    e.preventDefault();
  }

  //Dynamically create list items using sortByOptions{}
  renderSortByOptions() {
    return Object.keys(this.sortByOptions).map(sortByOption => {
      let sortByOptionValue = this.sortByOptions[sortByOption];
      return (
        <li key={sortByOptionValue}
            className={this.getSortByClass(sortByOptionValue)}
            onClick={this.handleSortByChange} >
          {sortByOption}
        </li>);
    });
  }
  render() {
    return (
      <div className="SearchBar">
        <div className="SearchBar-sort-options">
          <ul>
            {this.renderSortByOptions()}
          </ul>
        </div>
        <div className="SearchBar-fields">
          <input placeholder="Search Businesses" onChange={this.handleLTermChange} />
          <input placeholder="Location" onChange={this.handleLocationChange} />
        </div>
        <div className="SearchBar-submit">
          <a onClick={this.handleSearch}>Let's Go</a>
        </div>
      </div>
    );
  };
};

export default SearchBar;
