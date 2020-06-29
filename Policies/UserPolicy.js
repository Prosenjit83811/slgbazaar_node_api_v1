const User = require('../Models/UserModel');
module.exports = function(request) {
    var mStatus = User.hasPermission(2, function(err, roles) {
        // if(request.user.role.role != "s_admin"){
        //     await User.findById(request.params.userId, function(err, record){
        //         if (err) return false;;
        //     });
        // }

        console.log("method", request.method);
        console.log("roles", roles);

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
        // for (let i = 0; i < roles.length; i++) {
        //     console.log("role", roles[0]);
        // }

        // for (let i = 0; i < roles.length; i++) {
        //     if (roles[0] == request.user.role.role) {
        //         return true;
        //     }
        // }
        return false;
    });
    // console.log(mStatus);
    return mStatus;
};