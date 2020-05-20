const mongoose = require('mongoose');

var categorySchema = mongoose.Schema({
    category: { type: String, required: true},
    description: { type: String, required: true},
    images: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Address",
        required: true
    }]
});

const Category = module.exports = mongoose.model('Category', categorySchema);