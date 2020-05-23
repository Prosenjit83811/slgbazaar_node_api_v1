const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');

var categorySchema = mongoose.Schema({
    category: { type: String, required: true},
    description: { type: String, required: true},
    sub_categories: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Category"
    }]
}, {timestamps: true});
categorySchema.plugin(mongoosePaginate);
const Category = module.exports = mongoose.model('Category', categorySchema);