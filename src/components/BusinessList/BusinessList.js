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
            {
        // accessing businesses array, from prop defined in app.js

            this.props.businesses.map(business => {
                return <Business business = {business} />
            })
            }
            </div>
        );
    }
}

// export businessList
export default BusinessList;