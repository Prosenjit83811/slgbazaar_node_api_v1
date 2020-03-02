const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

var roleSchema = mongoose.Schema({
    role: { type: String, required: true}
});

const Role = module.exports = mongoose.model('Role', roleSchema);

