//Routing
var express = require('express');
var router = express.Router();

var burger = require('../models/burger.js');

//express GET
router.get('/', function(req, res) {
  burger.selectAll(function(data) {
    var hbsObject = {
      burgers: data
    };
    console.log(hbsObject);
    res.render('index', hbsObject);
  });
});

//express POST
router.post('/burgers', function(req, res) {
  burger.insertOne([
    'burger_name'
  ], [
    req.body.burger_name
  ], function(data) {
    res.redirect('/');
  });
});

//express PUT (update)
router.put('/burgers/:id', function(req, res) {
  var condition = 'id = ' + req.params.id;

  burger.updateOne({
    devoured: true
  }, condition, function(data) {
    res.redirect('/');
  });
});

//Experts routes for server.js to use. 
module.exports = router;