const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');



var productSchema = mongoose.Schema({
    name: { type: String, required: true},
    description: { type: String, required: true},
    shortDescription: { type: String, required: true},
    // quantity: { type: Number, required: true},
    slug: { type: String, required: true},
    isDeleted: { type: Boolean, 'default': false },
    deletedAt: {
        type: Date,
        default: null,
    },
    // isParent: { type: Boolean, required: true},
    // postParent: [{
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: "Product"
    // }],
    categories: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Category"
    }],
    // productVariations: [{
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: "ProductVariation"
    // }]
}, {timestamps: true});
productSchema.plugin(mongoosePaginate);
const Product = module.exports = mongoose.model('Product', productSchema);


module.exports.checkExists = function(query, callback){
    return Product.findOne(query, callback);
}

module.exports.findProductById = function(id, callback){
    const query = {
        _id: id,
        };
    return Product.findOne(query, callback);
}