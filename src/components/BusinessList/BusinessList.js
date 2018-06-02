import React from 'react';
import './BusinessList.css';
import Business from '../Business/Business';

// <BusinessList /> simulates how the list would look like from the Yelp API


//component: BusinessList
class BusinessList extends React.Component {
  render() {
    return (
      <div className="BusinessList">
        {
          this.props.businesses.map(business => {
            return <Business business={business} key={business.id} />
          })
        }
      </div>
    );
  }
};

export default BusinessList;
