const mongoose = require('mongoose');

var RBACSchema = mongoose.Schema({
    user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true
        },
    route: { type: String, required: true},
    action: { type: String, required: true},
    permission: { type: Boolean, required: true, 'default': false },
    // authPass: { type: Boolean, required: true, 'default': false },

}, {timestamps: true});

const RBAC = module.exports = mongoose.model("RBAC", RBACSchema);


module.exports.RBAC = function(query, callback){
    // console.log('query',query);
    return RBAC.findOne(query);
}
