const mongoose = require('mongoose');

var addressSchema = mongoose.Schema({
    state: { type: String, required: true},
    city: { type: String, required: true},
    landmark: { type: String, required: true},
    address: { type: String, required: true},
    isDeleted: { type: Boolean, 'default': false },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
}, {timestamps: true});

const Address = module.exports = mongoose.model('Address', addressSchema);