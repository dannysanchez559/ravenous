// import react
import React from 'react';
//import css
import './SearchBar.css';

// sort object, using api documentation for values
const sortByOptions = {
    "Best Match" : "best_match",
    "Highest Rated" : "rating",
    "Most Reviewed" : "review_count"
};

// create component
class SearchBar extends React.Component {
    renderSortByOptions() {
        return Object.keys(sortByOptions).map(sortByOption => {
        let sortByOptionValue = sortByOptions[sortByOption];
        return <li key = {sortByOptionValue}>{sortByOption}</li>;
    });
    }
    
    render(){
        return (
          <div className="SearchBar">
  <div className="SearchBar-sort-options">
    <ul>
      {this.renderSortByOptions()}
    </ul>
  </div>
  <div className="SearchBar-fields">
    <input placeholder="Search Businesses" />
    <input placeholder="Where?" />
  </div>
  <div className="SearchBar-submit">
    <a>Let's Go</a>
  </div>
</div>
        );
    }
}

//export searchbar
export default SearchBar;