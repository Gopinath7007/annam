var mongoose = require('mongoose');

var foodSchema= mongoose.Schema({
    email:{
        type:String
    },
    name:{
        type:String
    },
    picture:{
        type:String
    },  
    plates:{
        type:String
    },
    phone:{
        type:String
    },
    date:{
        type:Date,
        default:Date.now
    },
    country:{
        type:String
    },
    state:{
        type:String
    },
    city:{
        type:String
    },
    place:{
        type:String
    },
    landmark:{
        type:String
    }

})

var Foods = module.exports = mongoose.model('myfood',foodSchema);

module.exports.addFood=function(food,callback) {
    Foods.create(food,callback);
}
module.exports.getFood=function(callback,limit) {
    limit= parseInt(limit);
    Foods.find(callback).skip(limit).limit(5);
}


module.exports.searchByCity=function (term,callback) {
   
    var y = '/.*'+term+'.*/';
    console.log(y);
    Foods.find({"city":y},callback);
}
