var express = require('express');
var index = express.Router();

/* GET home page. */
index.get('/', (req, res) => {
  res.status(200).json({
     "title": 'The Braveful',
     "page": "Home Page"
     });
});

module.exports = index;
