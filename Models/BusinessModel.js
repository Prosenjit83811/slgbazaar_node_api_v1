const mongoose = require('mongoose');

var businessSchema = mongoose.Schema({
    business: { type: String, required: true},
    description: { type: String, required: true},
    categories: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Category"
    }]
});

const Business = module.exports = mongoose.model('Business', businessSchema);