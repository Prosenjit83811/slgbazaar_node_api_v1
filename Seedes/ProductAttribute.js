var mongoose = require('mongoose');
exports.seed = {
    'model': 'ProductAttribute',
    'documents': [
        {
            '_id':  mongoose.mongo.ObjectId("5dfb91eb49e52a0e0c061556"),
            'attribute':  "color",
            'value':  "red",
            'productVariation': mongoose.mongo.ObjectId("5dfb91eb49e52a0e0c061445"),
            'products': [mongoose.mongo.ObjectId("5dfb91eb49e52a0e0c061225")],
        },
        {
            '_id':  mongoose.mongo.ObjectId("5dfb91eb49e52a0e0c061557"),
            'attribute':  "green",
            'value':  "red",
            'productVariation': mongoose.mongo.ObjectId("5dfb91eb49e52a0e0c061445"),
            'products': [mongoose.mongo.ObjectId("5dfb91eb49e52a0e0c061225")],
        },
        {
            '_id':  mongoose.mongo.ObjectId("5dfb91eb49e52a0e0c061558"),
            'attribute':  "bllue",
            'value':  "red",
            'productVariation': mongoose.mongo.ObjectId("5dfb91eb49e52a0e0c061445"),
            'products': [mongoose.mongo.ObjectId("5dfb91eb49e52a0e0c061225")],
        }
    ]
};
