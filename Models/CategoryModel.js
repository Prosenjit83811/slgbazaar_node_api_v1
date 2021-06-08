const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');
const mongoose_delete = require('mongoose-delete');

var categorySchema = mongoose.Schema({
    category: { type: String, required: true},
    description: { type: String, required: true},
    // isDeleted: { type: Boolean, 'default': false },
    // deletedAt: {
    //     type: Date,
    //     default: null,
    // },
    sub_categories: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Category"
    }]
}, {timestamps: true});
categorySchema.plugin(mongoose_delete, { indexFields: true });
categorySchema.plugin(mongoose_delete, { overrideMethods: true });


categorySchema.plugin(mongoosePaginate);
categorySchema.path('category').get(function (value, schemaType) {
    return global.ucwords(value);
});
categorySchema.path('createdAt').get(function (value, schemaType) {
    return global.ucwords(value);
});
categorySchema.path('updatedAt').get(function (value, schemaType) {
    return global.ucwords(value);
});
// categorySchema.set('toObject', { getters: true });
categorySchema.set('toJSON', { getters: true });

const Category = module.exports = mongoose.model('Category', categorySchema);

module.exports.findCategoryById = function(id, callback){
    const query = {
        _id: id
    };
    return Category.findOne(query, callback);
}

module.exports.findCategory = function(id,category, callback){
    const query = {
        _id: {$ne: id},
        category: category
    };
    return Category.findOne(query, callback);
}