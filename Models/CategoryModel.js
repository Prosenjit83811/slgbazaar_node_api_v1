const mongoose = require('mongoose');

var categorySchema = mongoose.Schema({
    category: { type: String, required: true},
    description: { type: String, required: true},
    sub_categories: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Category"
    }]
});

const Category = module.exports = mongoose.model('Category', categorySchema);