var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var request = require('sync-request');
var nodemailer = require ('nodemailer') ; 

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

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: "mail.matthieu-michon.fr",
    port: 26,
    secure: false, // true for 465, false for other ports
    auth: {
      user: "cv@matthieu-michon.fr", // generated ethereal user
      pass: "Uni94forCv", // generated ethereal password
    },
  });

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: '"Fred Foo 👻" <cv@matthieu-michon.fr>', // sender address
    to: "m.michon.rossel@gmail.com", // list of receivers
    subject: "Hello ✔", // Subject line
    text: "Hello world?", // plain text body
    html: "<b>Hello world?</b>", // html body
  }
  );

  console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  // Preview only available when sending through an Ethereal account
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...


    let result = "email send";


       res.json( {result} );
    });
  
  




module.exports = router;

