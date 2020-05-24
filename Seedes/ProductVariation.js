var mongoose = require('mongoose');
exports.seed = {
    'model': 'ProductVariation',
    'documents': [
        {
            '_id':  mongoose.mongo.ObjectId("5dfb91eb49e52a0e0c061445"),
            'variation':  "color",
            'productAttributes': [mongoose.mongo.ObjectId("5dfb91eb49e52a0e0c061556"),
                            mongoose.mongo.ObjectId("5dfb91eb49e52a0e0c061557"),
                            mongoose.mongo.ObjectId("5dfb91eb49e52a0e0c061558")],
            'products': [mongoose.mongo.ObjectId("5dfb91eb49e52a0e0c061225")],
        }
    ]
};
