const mongoose = require('mongoose');

var roleSchema = mongoose.Schema({
    role: { type: String, required: true}
});

const Role = module.exports = mongoose.model("Role", roleSchema);

