const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');



var productSchema = mongoose.Schema({
    regularPrice: { type: String, required: true},
    salePrice: { type: String, required: true},
    salePriceDates: { type: String, required: false},
    sku: { type: String, required: false},
    stockQuantity: { type: String, required: false},
    stockStatus: { type: String, required: false},
    weight: { type: String, required: false},
    dimensions: { type: String, required: false},
    // dimensions: { type: String, required: false},
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