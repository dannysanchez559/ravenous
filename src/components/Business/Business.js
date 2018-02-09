import React from 'react';
import './Business.css';

class Business extends React.Component {
  render() {
    return (
      <div className="Business">
        <div className="image-container">
      { /* make image clickable, and open business website */}
          <a target="_blank" href={this.props.business.url}>
            <img src={this.props.business.imageSrc} alt=''/>
          </a>
        </div> 
        <h2>{this.props.business.name}</h2>
        <div className="Business-information">
        { /* make address clickable, and open new google maps tab */ }          
        <div className="Business-address">
            <a target="_blank" href={`https://www.google.com/maps/search/?api=1&query=${this.props.business.name}`}>
            <p>{this.props.business.address}</p>
            <p>{`${this.props.business.city}, ${this.props.business.state} ${this.props.business.zipCode}`}</p>
            <p>{(Math.round((this.props.business.distance / 1609.344)*10) / 10)  } Miles</p>
          </a>
          </div>
          <div className="Business-reviews">
            <h3>{this.props.business.category.toUpperCase()}</h3>
            <h3 className="rating">{`${this.props.business.rating} stars`}</h3>
            <p>{`${this.props.business.reviewCount} reviews`}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Business;