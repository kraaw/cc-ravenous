//API KEY
const apiKey = '_s2urjQyaMezYgIoALR3owIRAiTW2wu9D3ijUawtz51nqE2ioxb4wrkEDFdM3eUI92EaBsMxuL8TyOpC60Sx8T77RF0TpZ46pdz1EqxRFFGWEEV0obsBXGN53_gRW3Yx';

const Yelp = {
  search(term, location, sortBy) {
    const url = `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&Location=${location}&sort_by${sortBy}`;
    return fetch(url, {
      headers: {
        Authorization: `Bearer ${apiKey}`
      }
    }).then(response => {
      return response.json();
  }).then(jsonResponse => {
    if (jsonResponse.businesses) {
      return jsonResponse.businesses.map(business => ({
        id: business.id,
        imageSrc: business.image_url,
        name: business.name,
        address: business.location.address1,
        city: business.location.city,
        state: business.location.state,
        zipCode: business.location.zip_code,
        category: business.categories[0].title,
        rating: business.rating,
        reviewCount: business.review_count
      }));
    }
  });
  }
};

export default Yelp;
