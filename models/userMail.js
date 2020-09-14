var mongoose = require('mongoose');

var userMailSchema = mongoose.Schema({
    email : String,
    salt:String,
    password:String,
    token:String

});

var userMailModel = mongoose.model('usermails', userMailSchema);

module.exports=userMailModel
;