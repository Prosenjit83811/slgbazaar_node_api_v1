const User = require('../Models/UserModel');
module.exports = function(request) {
    var mStatus = User.hasRole(2, function(err, roles) {
        // if(request.user.role.role != "s_admin"){
        //     await User.findById(request.params.userId, function(err, record){
        //         if (err) return false;;
        //     });
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