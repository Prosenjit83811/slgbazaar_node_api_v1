const mongoose = require('mongoose');

var attributeSchema = mongoose.Schema({
    attribute: { type: String, required: true},
    value: { type: Array, required: false},
}, {timestamps: true});

const Role = module.exports = mongoose.model("Attribute", attributeSchema);