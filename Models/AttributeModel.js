const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');

var attributeSchema = mongoose.Schema({
    attribute: { type: String, required: true},
    value: { type: Array, required: false},
    isDeleted: { type: Boolean, 'default': false },
}, {timestamps: true});
attributeSchema.plugin(mongoosePaginate);
const Attribute = module.exports = mongoose.model("Attribute", attributeSchema);

module.exports.findAttribute = function(id,attribute, callback){
    const query = {
        _id: {$ne: id},
        attribute: attribute
    };
    return Attribute.findOne(query, callback);
}