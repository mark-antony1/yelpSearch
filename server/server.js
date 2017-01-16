var app = require('express')();

var request = require('request');
var path = require('path');
var bodyParser = require('body-parser');
// require('dotenv').config();

app.use(bodyParser.json());

var Yelp = require('yelp');

var yelp = new Yelp({
  consumer_key: process.env.consumerKey,
  consumer_secret: process.env.consumerSecret,
  token: process.env.token,
  token_secret: process.env.tokenSecret,
});


// For quick yelp api testing, uncomment the following code and re-run the server:

// See http://www.yelp.com/developers/documentation/v2/search_api
// yelp.search({ term: 'food', location: 'Montreal' })
// .then(function (data) {
//   console.log(data);
// })
// .catch(function (err) {
//   console.error(err);
// });


// this get request is expecting an object named search with the properties term and location
app.get('/yelpSearch', function(req, res) {
  var term = req.query.term;
  var location = req.query.location;

  yelp.search({ term: term, location: location })
  .then(function (data) {
    console.log(data);
    res.send(data);
  })
  .catch(function (err) {
    console.error(err);
    res.send(err)
  });
});

app.listen(3000, function() {
  console.log('listening on port 3000!')
});