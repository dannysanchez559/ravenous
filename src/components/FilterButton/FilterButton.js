import React from 'react';
//import './FilterButton.css';

class FilterButton extends React.Component {
	render () {
    	return (
      		<li 
      			className={this.props.getSortByClass}
                key={this.props.sortByOptionValue}
              	onClick={this.props.handleSearchAndSort}> {this.props.labelValue} </li>
     	);
    }
}

export default FilterButton;