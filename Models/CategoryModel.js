const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');

var categorySchema = mongoose.Schema({
    category: { type: String, required: true},
    description: { type: String, required: true},
    isDeleted: { type: Boolean, 'default': false },
    sub_categories: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Category"
    }]
}, {timestamps: true});
categorySchema.plugin(mongoosePaginate);
const Category = module.exports = mongoose.model('Category', categorySchema);

module.exports.findCategory = function(id,category, callback){
    const query = {
        _id: {$ne: id},
        category: category
    };
    return Category.findOne(query, callback);
}