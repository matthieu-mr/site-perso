var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

//import des routes
var projetModel = require('../models/projets-md')
var expModel = require('../models/exp-md')

/* GET home page. */
router.get('/', function(req, res, next) {

  let info={
    "fruits": [
      { "kiwis": 3,
        "mangues": 4,
        "pommes": null
      },
      { "panier": true }
    ],
    "legumes": {
        "patates": "amandine",
        "poireaux": false
      },
      "viandes": ["poisson","poulet","boeuf"]
   }

  res.json( {info} );
});

router.get('/home', async function(req, res, next) {
let info = "hello"


let result = await expModel.find();

  res.json( {info} );
});


router.post('/sendcontact', function(req, res, next) {

  let info={
    "fruits": [
      { "kiwis": 3,
        "mangues": 4,
        "pommes": null
      },
      { "panier": true }
    ],
    "legumes": {
        "patates": "amandine",
        "poireaux": false
      },
      "viandes": ["poisson","poulet","boeuf"]
   }

  res.json( {info} );
});





module.exports = router;
