var mongoose = require('mongoose');

var userSchema= mongoose.Schema({
    id:{
        type:String
    },
    name:{
        type:String
    },
    picture:{
        type:String
    },
    cover:{
        type:String
    },
    email:{
        type:String
    },
    date:{
        type:Date,
        default:Date.now
    }

})


var Users = module.exports= mongoose.model('users',userSchema);

module.exports.addUser=function(user,callback) {
    Users.create(user,callback);
}
module.exports.getUsers=function (callback,limit) {
    Users.find(callback).limit(limit);
}