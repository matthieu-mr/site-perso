var mongoose = require('mongoose');

var expSchema = mongoose.Schema({
    diplome : String,
    type:String,
    date:String,
    nom:String,
    lien:String,
});


var expModel = mongoose.model('experience', expSchema);

module.exports=expModel
;