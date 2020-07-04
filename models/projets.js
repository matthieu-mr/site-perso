var mongoose = require('mongoose');

var projetSchema = mongoose.Schema({
    nom : String,
    description:String,
    type_projet:String,
    techno:String,
    objectifs:String,
    lien_git:String,
    lien_perso:String,

});


var projetModel = mongoose.model('projets', projetSchema);

module.exports=projetModel
;