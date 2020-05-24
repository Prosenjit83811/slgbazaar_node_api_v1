const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');

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
ProductAttributeSchema.plugin(mongoosePaginate);
const ProductAttribute = module.exports = mongoose.model('ProductAttribute', ProductAttributeSchema);