const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

var userSchema = mongoose.Schema({
    number: { type: Number, required: true, unique: true},
    password: { type: String, required: true}
});


const User = module.exports = mongoose.model('User', userSchema);

module.exports.getUserByID = function(id, callback){
    User.findById(id, callback);
}
module.exports.findUserByNumber = function(number, callback){
    const query = {
        number: number
    };
    return User.findOne(query, callback);
}
module.exports.addUser = function(user, callback){
    bcrypt.genSalt(10, (error, salt)=>{
        bcrypt.hash(user.password, salt, (error, hash)=>{
            if (error) throw error;
            user.password = hash;
            user.save(callback);
        });
    });
}

module.exports.comparePassword = function(password, hash, callback){
    bcrypt.compare(password, hash, (error, isMatch)=>{
        if (error) throw error;
        callback(null, isMatch);
    })
}