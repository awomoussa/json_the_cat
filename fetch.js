const {getBreed} = require('./breedFetcher');


const nameOfBreed = process.argv[2]; //nameOfBreed on command line

getBreed(nameOfBreed, (error,description) => {
  if (error) {
    console.log('ERROR fetch details:', error);
  } else {
    console.log(description);
  }
});