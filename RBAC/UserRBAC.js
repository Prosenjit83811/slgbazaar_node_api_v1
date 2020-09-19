const isFunction = require('lodash/isFunction');
const User = require('../Models/UserModel');
const polices = {role:'s_admin',access:{'index':true,'show':true,'create':true,'update':true,'delete':true}}

module.exports = function(request,action) {
    console.log('params', request.params.userId);
    for (let policy in polices.access) {
        if (policy === action){
            // if (polices.role === request.user.role.role) {
            //     var status = User.findUserByID(request.params.userId);

            //     console.log('status',status);
            //     return status;

            //     // const user = User.findById(request.params.userId);
            //     // if (!user) return false;
            //     // return true
            // }
            return true;
        }

    }
    
    return false;
};