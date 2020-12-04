//breedFetcher const request = require("request");
const fetchBreedDescription = function(breedName, callback) {
  const url = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;
  request(url, (error, response, body) => {
    const data = JSON.parse(body);
    if (data.length === 0) {
      return callback("Breed not found", null);
    } else if (error !== null) {
      return callback("Looks like something went wrong....", null);
    } else {
      return callback(null, data[0].description);
    }
  });
};
module.exports = { fetchBreedDescription };