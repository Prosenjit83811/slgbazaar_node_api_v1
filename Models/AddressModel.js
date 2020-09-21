const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');

var addressSchema = mongoose.Schema({
    type: { type: String, required: true},
    fullName: { type: String, required: true},
    mobileNumber: { type: Number, required: true},
    state: { type: String, required: true},
    city: { type: String, required: true},
    pin: { type: Number, required: true},
    landmark: { type: String, required: true},
    address: { type: String, required: true},
    isDeleted: { type: Boolean, 'default': false },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
}, {timestamps: true});

addressSchema.plugin(mongoosePaginate);
const Address = module.exports = mongoose.model('Address', addressSchema);