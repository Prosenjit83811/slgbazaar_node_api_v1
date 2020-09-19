const User = require('../Models/UserModel');
const roles = {
    "post":['s_admin','admin']
}
module.exports = function(request,opts) {
    // var mStatus = User.hasPermission(2, function(err, roles) {
    //     console.log("method", request.method);
    //     console.log("roles", roles);

    //     for (let key in roles) {

    //         let value = roles[key];
    //         console.log("key", value);

    //         for (let i = 0; i <= value.length; i++) {
    //             console.log("value",value[[i]]);
    //             if (value[[i]] == request.user.role.role) {
    //                 return true;
    //             }
    //         }

    //       }
    //     return false;
    // });
    // return mStatus;

    console.log("action", opts);

    for (let key in roles) {

        let value = roles[key];
        console.log("key", value);

        for (let i = 0; i <= value.length; i++) {
            console.log("value",value[[i]]);
            if (value[[i]] == request.user.role.role) {
                return true;
            }
        }

      }
    return false;

};