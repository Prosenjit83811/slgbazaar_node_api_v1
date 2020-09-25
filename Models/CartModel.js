const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');

var cartSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
        unique: true
    },
    products: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
        required: true
    }],
    isDeleted: { type: Boolean, 'default': false },
}, {timestamps: true});
cartSchema.plugin(mongoosePaginate);
const Cart = module.exports = mongoose.model("Cart", cartSchema);

// module.exports.findRoleById = function(roleId, callback){

//     const query = {
//         _id: roleId
//     };
//     return Role.findOne(query, callback);
// }

module.exports.findCartByUserId = function(id, callback){
    const query = {
            user: id,
        };
    return Cart.findOne(query, callback);
}