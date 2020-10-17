const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');

var productAttributeSchema = mongoose.Schema({
    attribute: { type: String, required: true},
    value: { type: String, required: true},
    isDeleted: { type: Boolean, 'default': false },
    deletedAt: {
        type: Date,
        default: null,
    },
    productVariation: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "ProductVariation"
    },
    products: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product"
    }]
}, {timestamps: true});
productAttributeSchema.plugin(mongoosePaginate);
const ProductAttribute = module.exports = mongoose.model('ProductAttribute', productAttributeSchema);