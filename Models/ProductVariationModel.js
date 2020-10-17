const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');

var productVariationSchema = mongoose.Schema({
    variation: { type: String, required: true},
    isDeleted: { type: Boolean, 'default': false },
    deletedAt: {
        type: Date,
        default: null,
    },
    productAttributes: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "ProductAttribute"
    }],
    products: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product"
    }]
}, {timestamps: true});
productVariationSchema.plugin(mongoosePaginate);
const ProductVariation = module.exports = mongoose.model('ProductVariation', productVariationSchema);