const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');

var categorySchema = mongoose.Schema({
    category: { type: String, required: true},
    description: { type: String, required: true},
    is_deleted: { type: Boolean, 'default': false },
    created_at: { type: Date, 'default': Date.now },
    updated_at: { type: Date, 'default': Date.now },
    sub_categories: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Category"
    }]
});
categorySchema.plugin(mongoosePaginate);
const Category = module.exports = mongoose.model('Category', categorySchema);