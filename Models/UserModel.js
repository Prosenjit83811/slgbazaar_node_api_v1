const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const mongoosePaginate = require('mongoose-paginate-v2');


var userSchema = mongoose.Schema({
    firstname: { type: String, required: true},
    lastname: { type: String, required: true},
    email: { type: String, required: false, unique: true},
    mobileNumber: { type: Number, required: true, unique: true},
    password: { type: String, required: true},
    isDeleted: { type: Boolean, 'default': false },
    deletedAt: {
        type: Date,
        default: null,
    },
    role: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Role",
        required: true
    },
    // roles: [{
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: "Role",
    //     required: true
    // }],
    addresses: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Address",
        required: true
    }]
}, {timestamps: true});

userSchema.plugin(mongoosePaginate);
const User = module.exports = mongoose.model("User", userSchema);

module.exports.getUserByID = function(id, callback){
    User.findById(id, callback).populate("role");
}
module.exports.findUserByID =  function(userId, callback){
    const query = {
        _id: userId,
    };
    return User.findOne(query)

}
module.exports.findUserByMobileNumber = function(mobileNumber,userId, callback){
    const query = {
            mobileNumber: mobileNumber,
            _id: {$ne: userId}
        };
    return User.findOne(query, callback);
}

module.exports.findUserByEmail = function(email,userId, callback){
    const query = {
        email: email,
        _id: {$ne: userId}
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

module.exports.hasPermission = (role, callback)=>{
    // return callback(false,['s_admin','admin']);
    return callback(false,{
        "post":['s_admin','admin']
    });
}