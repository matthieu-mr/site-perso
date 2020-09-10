var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var request = require('sync-request');
var nodemailer = require ('nodemailer') ; 
var  bodyparser = require('body-parser');
var uid2 = require("uid2");
var SHA256 = require("crypto-js/sha256");
var encBase64 = require("crypto-js/enc-base64");

//import des routes
var projetModel = require('../models/projets-md')
var expModel = require('../models/exp-md');
var userMailModel = require ('../models/userMail')
const app = require('../app');

// envoi mail 
var sslRootCAs = require('ssl-root-cas/latest')
sslRootCAs.inject()


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




router.post('/sendmail', async function(req, res, next) {

console.log("req.body", req.body)
let result =true 

let name = req.body.name
let mail = req.body.mail
let info = req.body.info


// recup mot de passe gogole

//var user = await User.findOne({ email: req.body.email });
// var hash = SHA256(req.body.password + user.salt).toString(encBase64);



/*
    let transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
          // should be replaced with real sender's account
          user: 'm.michon.rossel@gmail.com',
          pass: 'hbmxoxyvcrunsrxb'
      },
      tls: { 
        // do not fail on invalid certs 
        rejectUnauthorized: false 
       } 
  });
  let mailOptions = {
      // should be replaced with real recipient's account
      to: 'm.michon.rossel@gmail.com',
      subject: "test",
      text: "test"
  };
  transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
          result = false
          return console.log("erreure transporter",error);
      }
      console.log('Message %s sent: %s', info.messageId, info.response);
  });

*/


       res.json( {result} );
    });
  
  

    router.get('/saveCredential', async function(req, res, next) {  

        let crendential = "hbmxoxyvcrunsrxb"
        var salt = uid2(32);

        // SHA256(myPassword + salt).toString(encBase64);
        var newUser = new UserModel ({
          email: "m.michon.rossel@gmail.com",
          salt : salt,
          password: SHA256(req.body.password + salt).toString(encBase64),
          token: uid2(32)
        });


         res.json( {result} );
      });


module.exports = router;

