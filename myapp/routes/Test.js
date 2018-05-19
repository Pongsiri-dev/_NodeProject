const express = require('express');
const route = express.Router();

route.get('/', function(req, res, next) {
    res.render('layout', { title: 'Express Test' });
  });

module.exports = route;