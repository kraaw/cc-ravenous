import React from 'react';
import './Busines.css';

/*
BUSINESS INFORMATION
*/


//Object: business (HARDCODE!)
const business = {
  imageSrc: 'https://s3.amazonaws.com/codecademy-content/programs/react/ravenous/pizza.jpg',
  name: 'MarginOtto Pizzeria',
  address: '1010 Paddington Way',
  city: 'Flavortown',
  state: 'NY',
  zipCode: '10101',
  category: 'Italian',
  rating: 4.5,
  reviewCount: 90
};


//Component: Business (HARDCODE!)
class Business extends React.Component {
  render() {
    return (
      <div className="Business">
        <div className="image-container">
          <img
            src='https://s3.amazonaws.com/codecademy-content/programs/react/ravenous/pizza.jpg'
            alt='pizza'/>
        </div>
        <h2>MarginOtto Pizzeria</h2>
        <div className="Business-information">
          <div className="Business-address">
            <p>{business.name}</p>
            <p>{business.city}</p>
            <p>{business.state + business.zipCode}</p>
          </div>
          <div className="Business-reviews">
            <h3>{business.category}</h3>
            <h3 className="rating">{business.rating}</h3>
            <p>{business.reviewCount} reviews</p>
          </div>
        </div>
      </div>
    );
  }
};

export default business;
