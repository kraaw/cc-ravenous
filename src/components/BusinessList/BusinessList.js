import React from 'react';
import './BusinessList.css';
import Business from '../Business/Business';

// <BusinessList /> simulates how the list would look like from the Yelp API


//component: BusinessList
class BusinessList extends React.Component {
  render() {
    return (
      <div className="BusinessList">
        <Business />
        <Business />
        <Business />
        <Business />
        <Business />
        <Business />
      </div>
    );
  }
};

export default BusinessList;
