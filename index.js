//index.   const {fetchBreedDescription} = require('./breedFetcher');
const breedName = process.argv.slice(2)[0];
const callback = function(error, desc){
    if (error) {
      console.log('Error fetch details:', error);
    } else {
      console.log(desc);
    }
}
fetchBreedDescription(breedName, callback);
