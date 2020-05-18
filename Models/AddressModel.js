const mongoose = require('mongoose');

var addressSchema = mongoose.Schema({
    state: { type: String, required: true},
    city: { type: String, required: true},
    landmark: { type: String, required: true},
    address: { type: String, required: true},
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
});

const Address = module.exports = mongoose.model('Address', addressSchema);