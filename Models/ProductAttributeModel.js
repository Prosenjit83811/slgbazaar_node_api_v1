const mongoose = require('mongoose');

var ProductAttributeSchema = mongoose.Schema({
    attribute: { type: String, required: true},
    value: { type: Array, required: true},
    isDeleted: { type: Boolean, 'default': false },
    productVariation: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "productVariation"
    },
    products: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "product"
    }]
}, {timestamps: true});

const ProductAttribute = module.exports = mongoose.model('ProductAttribute', ProductAttributeSchema);