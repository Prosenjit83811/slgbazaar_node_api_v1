const mongoose = require('mongoose');

var roleSchema = mongoose.Schema({
    role: { type: String, required: true},
    users: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Address",
        required: true
    }]
}, {timestamps: true});

const Role = module.exports = mongoose.model("Role", roleSchema);


// module.exports.findRoleById = function(number,roleId, callback){

//     const query = {
//             _id: {$ne: roleId}
//         };

//     return Role.findOne(query, callback);
  
    
// }


module.exports.findRoleById = function(roleId, callback){

    const query = {
        _id: roleId
    };
    return Role.findOne(query, callback);
}