const mongoose = require('mongoose');

var productSchema = mongoose.Schema({
    product: { type: String, required: true},
    description: { type: String, required: true},
    isDeleted: { type: Boolean, 'default': false },
    categories: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Category"
    }]
}, {timestamps: true});

const Product = module.exports = mongoose.model('Product', productSchema);