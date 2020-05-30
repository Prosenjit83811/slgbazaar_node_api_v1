const mongoose = require('mongoose');

var addressSchema = mongoose.Schema({
    type: { type: String, required: true},
    state: { type: String, required: true},
    city: { type: String, required: true},
    pin: { type: Number, required: true},
    landmark: { type: String, required: true},
    isDeleted: { type: Boolean, 'default': false },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
}, {timestamps: true});

const Address = module.exports = mongoose.model('Address', addressSchema);