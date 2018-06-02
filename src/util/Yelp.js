//API KEY
const apiKey = '_s2urjQyaMezYgIoALR3owIRAiTW2wu9D3ijUawtz51nqE2ioxb4wrkEDFdM3eUI92EaBsMxuL8TyOpC60Sx8T77RF0TpZ46pdz1EqxRFFGWEEV0obsBXGN53_gRW3Yx';

const Yelp = {
  search(term, location, sortBy) {
    const url = `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&Location=${location}&sort_by${sortBy}`;
    return fetch(url, {
      headers: {
        {Authorization: `Bearer ${apiKey}`}
      }
    }).then(response => {
      if (response.ok) {
        return response.json();
      }
      throw new Error('Request failed!');
    }, networkError => console.log(networkError.message)
  ).then(jsonResponse => {
    if (jsonResponse.businesses) {
      return jsonResponse.businesses.map(businesses => {
        id: business.id,
        imageSrc: business.image_url,
        name: business.name,
        address: business.location.address1,
        city: business.location.city,
        state: business.location.state,
        zipCode: busienss.location.zip_code,
        category: business.categories,
        rating: business.rating,
        reviewCount: business.review_count
      });
    }
  });
  }
};

export default Yelp;
