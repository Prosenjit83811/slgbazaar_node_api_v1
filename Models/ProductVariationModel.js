const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');

var ProductVariationSchema = mongoose.Schema({
    variation: { type: String, required: true},
    isDeleted: { type: Boolean, 'default': false },
    productAttributes: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "productAttribute"
    }],
    products: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "product"
    }]
}, {timestamps: true});
ProductVariationSchema.plugin(mongoosePaginate);
const ProductVariation = module.exports = mongoose.model('ProductVariation', ProductVariationSchema);