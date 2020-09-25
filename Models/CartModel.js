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
        required: true,
    }],
}, {timestamps: true});
cartSchema.plugin(mongoosePaginate);
cartSchema.path('products').validate(function (value) {
    console.log(value.length)
    if (value.length > 25) {
        throw new Error("Cart has touched the max limit. Please delete existing cart items to add a new item.");
    }
});
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

module.exports.checkProductLimit = function(id, callback){
    const query = {
            user: id,
        };
    // return Cart.findOne(query, callback);
    return Cart.findOne(query).populate('product')

}