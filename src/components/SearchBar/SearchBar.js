import React from 'react';
import './SearchBar.css';

import FilterButton from '../FilterButton/FilterButton';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      term: '',
      location: '',
      sortBy: 'best_match'
    };

    this.handleTermChange = this.handleTermChange.bind(this);
    this.handleLocationChange = this.handleLocationChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.handleSortByChange = this.handleSortByChange.bind(this);

    this.sortByOptions = {
      'Best Match': 'best_match',
      'Highest Rated': 'rating',
      'Most Reviewed': 'review_count',
      'Nearest Matches': 'distance'
    };
  }

  getSortByClass(sortByOption) {
    if (this.state.sortBy === sortByOption) {
      return 'active';
    }
    return '';
  }

  handleSortByChange(sortByOption) {
    this.setState({sortBy: sortByOption});
  }

  handleTermChange(event) {
    this.setState({term: event.target.value});
  }

  handleLocationChange(event) {
    this.setState({location: event.target.value});
  }

  handleSearch() {
    this.props.searchYelp(this.state.term, this.state.location, this.state.sortBy);
  }

  handleSearchAndSort(sortByOptionValue) {
    this.handleSearch();
    this.handleSortByChange(sortByOptionValue);
  }

  renderSortByOptions() {
    return Object.keys(this.sortByOptions).map(sortByOption => {
      let sortByOptionValue = this.sortByOptions[sortByOption];
      let filterClass = this.getSortByClass(sortByOptionValue);

      return (
          <FilterButton labelValue={sortByOption}
                        key={sortByOptionValue}
                        handleSearchAndSort={this.handleSearchAndSort.bind(this, sortByOptionValue)}
                        getSortByClass={filterClass}
                        />
     /*     <li 
          className={this.getSortByClass(sortByOptionValue)}
          key={sortByOptionValue}
          onClick={function(event){this.handleSortByChange.bind(this, sortByOptionValue); this.handleSearch}}>
                {sortByOption}
          </li> 
          */

      );
    });
}



  render() {
    return (
      <div className="SearchBar">
        <div className="SearchBar-sort-options">
      {/* automatically quiery api when choosing sort options */}
           <a onClick = {this.handleSearch}>
            <ul>
              {this.renderSortByOptions()}
            </ul>
            </a>

        </div>
        <div className="SearchBar-fields">
          <input placeholder="Search Businesses" onChange={this.handleTermChange} />
          <input placeholder="Where?" onChange={this.handleLocationChange}/>
        </div>

        <div className="SearchBar-submit">
          <a onClick={this.handleSearch}>Let's Go</a>
        </div>
      </div>
    );
  }
}

export default SearchBar;