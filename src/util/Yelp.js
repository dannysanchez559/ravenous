const apiKey = "9lHXKeMe3c9jwVw9SvDVQZ4LgPGq7qNDJDvROdddCiboG34F8Uk4PxXlC2u47XME5wUWKI2S2dYPrMqYTs4r6ZhSbjZjOqRn8FAD7NlSONNNGHBUzY1yArBWphdgWnYx";


const Yelp = {
  search(term, location, sortBy) {
    return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, {
      headers: {
        Authorization: `Bearer ${apiKey}`
      }
    }).then(response => {
      return response.json();
    }).then(jsonResponse => {
      if (jsonResponse.businesses) {
        console.log(jsonResponse.businesses[0].name, jsonResponse.businesses[0].distance);
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
          reviewCount: business.review_count,
          url: business.url,
          distance: business.distance
        }));
      }
    });
  }
};

export default Yelp;
