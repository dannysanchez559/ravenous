//import react library, and BusinessList.css
import React from 'react';
import './BusinessList.css'

// import Business component, that was previously exported from Business.js
import Business from '../Business/Business';

// create BusinessList component
class BusinessList extends React.Component {
    render() {
        return (
          <div class="BusinessList">
            <Business /> 
            <Business />
            <Business />
            <Business />
            <Business />
            <Business />
            </div>
        );
    }
}

// export businessList
export default BusinessList;