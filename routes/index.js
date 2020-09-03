var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var request = require('sync-request');


//import des routes
var projetModel = require('../models/projets-md')
var expModel = require('../models/exp-md')

/* GET home page. */
router.get('/', function(req, res, next) {
  let info ="Bienvenue sur mon back office ^^"
  res.json( {info} );
});

router.get('/experiences', async function(req, res, next) {
let result = await expModel.find();
  res.json( {result} );
});



router.get('/projets', async function(req, res, next) {  
  let result = await projetModel.find();
     res.json( {result} );
  });






module.exports = router;
