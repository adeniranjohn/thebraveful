var express = require('express');
var users = express.Router();

/* GET users listing. */
users.get('/', (req, res) => {
  res.status(200).json({
    "title": 'The Braveful',
    "page": "Users Page"
    });
});

module.exports = users;
