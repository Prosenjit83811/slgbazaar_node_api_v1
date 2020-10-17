const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');

var brandSchema = mongoose.Schema({
    name: { type: String, required: true, unique: true},
    deletedAt: {
        type: Date,
        default: null,
    },
}, {timestamps: true});

brandSchema.plugin(mongoosePaginate);
const Brand = module.exports = mongoose.model('Brand', brandSchema);

module.exports.checkExists = function(query, callback){
    return Brand.findOne(query, callback);
}