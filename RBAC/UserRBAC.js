const isFunction = require('lodash/isFunction');
const User = require('../Models/UserModel');
const polices = {role:'s_admin',access:{'index':true,'show':true,'create':true,'update':true,'delete':true}}

module.exports = async function(request,action) {
    console.log('params', request.params.userId);
    for (let policy in polices.access) {
        if (policy === action && polices.access[policy] === true){
            if (polices.role === request.user.role.role) {
                return await User.findUserByID(request.params.userId).then(res => {
                    if (res) {
                        return true
                    }else{
                        return false
                    }
                });
            }
            // return true;
        }

    }
    
    return false;
};