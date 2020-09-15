var mongoose = require('mongoose');

var expProSchema = mongoose.Schema({
    name: String,
    startDate: String,
    endDate: String,
    position: String,
    summary: Array,
    logo: String,
   });


var expProModel = mongoose.model('exp_pros', expProSchema);

module.exports=expProModel;