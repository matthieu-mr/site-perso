var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var request = require('sync-request');
var nodemailer = require ('nodemailer') ; 
var  bodyparser = require('body-parser');


//import des routes
var projetModel = require('../models/projets-md')
var expModel = require('../models/exp-md');
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
          return console.log("erreure transporter",error);
      }
      console.log('Message %s sent: %s', info.messageId, info.response);
  });

*/

  let result ="test"
       res.json( {result} );
    });
  
  




module.exports = router;

