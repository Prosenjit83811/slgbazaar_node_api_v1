const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');

var bookingSchema = mongoose.Schema({
    category: { type: String, required: true},
    description: { type: String, required: true},
    isDeleted: { type: Boolean, 'default': false },
    deletedAt: {
        type: Date,
        default: null,
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
        unique: true
    },
    products: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
        required: true
    }],
}, {timestamps: true});
bookingSchema.plugin(mongoosePaginate);
const Booking = module.exports = mongoose.model('Booking', bookingSchema);