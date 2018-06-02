//API KEY
const apiKey = '_s2urjQyaMezYgIoALR3owIRAiTW2wu9D3ijUawtz51nqE2ioxb4wrkEDFdM3eUI92EaBsMxuL8TyOpC60Sx8T77RF0TpZ46pdz1EqxRFFGWEEV0obsBXGN53_gRW3Yx';

const Yelp = {
  search(term, location, sortBy) {
    const url = `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&Location=${location}&sort_by${sortBy}`;
    return fetch(url, {});
  }
};
