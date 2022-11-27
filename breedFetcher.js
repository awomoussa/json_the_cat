const request = require('request');

const getBreed = function(nameOfBreed, callback) {

  request(`https://api.thecatapi.com/v1/breeds/search?q=${nameOfBreed}`, (error, response, body) => {
  
    if (error) {
      return callback(error,null);
    }

  
    const [data] = JSON.parse(body); // converts the string version of it into an object
    // console.log('this is a test',data)
    if (data) {
      callback(null,data.description);
    } else {
      callback(null, "breed not found")
    }

  });
};

// [] :destructuring assignment in javascript used to
// make sure there is something used in the array 
// json can also be an array 

module.exports = {getBreed};