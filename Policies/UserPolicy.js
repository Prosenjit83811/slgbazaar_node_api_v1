const User = require('../Models/UserModel');
module.exports = function(request) {
    var mStatus = User.hasRole(2, function(err, roles) {
        //  return false;
        
        console.log("Role",request.user.role.role);
        // console.log("Request ",request);

        // if (err) {
        //     return false;
        // }
        // if (status) {
        //     console.log(status);
        //     return  status;
        // } else {
        //     return false;
        //     // or you could create a new account
        // }

        for (let i = 0; i < roles.length; i++) {
            if (roles[0] == request.user.role.role) {
                return true;
            }
        }
        return false;
    });
    // console.log(mStatus);
    return mStatus;
};