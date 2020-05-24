const mongoose = require('mongoose');

var productVariationSchema = mongoose.Schema({
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

const ProductVariation = module.exports = mongoose.model('ProductVariation', productVariationSchema);