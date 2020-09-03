var mongoose = require('mongoose');

var expSchema = mongoose.Schema({
    diplôme : String,
    type:String,
    date:String,
    nom:String,
    lien:String,
});


var expModel = mongoose.model('experiences', expSchema);

module.exports=expModel
;