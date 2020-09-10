var mongoose = require('mongoose');

var userMailSchema = mongoose.Schema({
    nom : String,
    description:String,
    type_projet:String,
    techno:String,
    objectifs:String,
    lien_git_front:String,
    lien_perso_back:String,
    lien_perso:String

});


var userMailModel = mongoose.model('userMail', userMailSchema);

module.exports=userMailModel
;