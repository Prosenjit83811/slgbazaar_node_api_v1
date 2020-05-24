const mongoose = require('mongoose');

var ProductSchema = mongoose.Schema({
    name: { type: String, required: true},
    description: { type: String, required: true},
    shortDescription: { type: String, required: true},
    quantity: { type: Number, required: true},
    slug: { type: String, required: true},
    isDeleted: { type: Boolean, 'default': false },
    isParent: { type: Boolean, required: true},
    postParent: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product"
    }],
    categories: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Category"
    }],
    productVariations: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "ProductVariation"
    }]
}, {timestamps: true});

const Product = module.exports = mongoose.model('Product', ProductSchema);