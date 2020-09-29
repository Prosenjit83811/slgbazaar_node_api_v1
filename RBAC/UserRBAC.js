const isFunction = require('lodash/isFunction');
const User = require('../Models/UserModel');
const RBAC = require('../Models/RBACModel');
// const polices = {role:'s_admin',access:{'index':true,'show':true,'create':true,'update':true,'delete':true}}

module.exports = async function(request,action) {
    // console.log('params', request.params.userId);
    // for (let policy in polices.access) {
    //     if (policy === action && polices.access[policy] === true){
    //         if (polices.role === request.user.role.role) {
    //             return await User.findUserByID(request.params.userId).then(res => {
    //                 if (res) {
    //                     return true
    //                 }else{
    //                     return false
    //                 }
    //             });
    //         }
    //     }

    // }

   return await RBAC.RBAC({user:request.params.userId, route: 'user', action: action}).then(res => {
        console.log('res', res.permission);
        if(res.permission == true){
            if(request.params.userId != request.user.id){
               return false
            }
        }
        return res.permission;
    });
};