const mongoose = require('mongoose');

var addressSchema = mongoose.Schema({
    user_id: { type: String, required: true},
    state: { type: String, required: true},
    city: { type: String, required: true},
    address: { type: String, required: true},
});

const Address = module.exports = mongoose.model('Address', addressSchema);

