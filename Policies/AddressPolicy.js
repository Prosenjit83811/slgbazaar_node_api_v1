const User = require('../Models/UserModel');
module.exports = function(request) {
    var mStatus = User.hasRole(2, function(err, roles) {
        
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