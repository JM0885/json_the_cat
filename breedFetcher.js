const request = require('request');
const breedName = process.argv.slice(2);
const URL = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;

request(URL, (error, request, body) => {
  const data = JSON.parse(body);
  const breed = data[0];

  if (error) {
  console.log('error:', error); // Print the error if one occurred
  } else {
  if (breed) {
    console.log(breed.description);
  } else {
    console.log('Breed Not Found');
    };
  }
}); 