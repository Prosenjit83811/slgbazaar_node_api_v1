const mongoose = require('mongoose');

var roleSchema = mongoose.Schema({
    role: { type: String, required: true},
    users: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Address",
        required: true
    }]
}, {timestamps: true});

const Role = module.exports = mongoose.model("Role", roleSchema);

