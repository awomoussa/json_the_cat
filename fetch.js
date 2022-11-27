const {fetchBreedDescription} = require('./breedFetcher');


const breedName = process.argv[2]; //breedName on command line

fetchBreedDescription(breedName, (error,description) => {
  if (error) {
    console.log('ERROR fetch details:', error);
  } else {
    console.log(description);
  }
});