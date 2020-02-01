var express = require('express');
var admin = express.Router();

/* GET home page. */
admin.get('/', (req, res) => {
  res.status(200).json({
     "title": 'The Braveful',
     "page": "Admin Page"
     });
});

module.exports = admin;
