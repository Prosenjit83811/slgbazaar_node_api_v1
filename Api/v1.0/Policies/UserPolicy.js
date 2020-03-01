const User = require('../Models/UserModel');
module.exports = function(request) {
    var mStatus = User.hasRole(2, function(err, status) {
        //  return false;
        console.log(status);
        // if (err) {
        //     return false;
        // }
        if (status) {
            console.log(status);
            return  status;
        } else {
            return false;
            // or you could create a new account
        }
    });
    // console.log(mStatus);
    return mStatus;
};