var mongoose = require('mongoose');
exports.seed = {
    'model': 'Product',
    'documents': [
        {
            '_id':  mongoose.mongo.ObjectId("5dfb91eb49e52a0e0c061225"),
            'name':  "Women Embroidered Rayon A-line Kurta",
            'description':  "daily product",
            'shortDescription':  "daily product",
            'quantity':  22,
            'slug':  "daily product",
            'isDeleted':  false,
            'isParent':  true,
            'postParent': [],
            'categories': [mongoose.mongo.ObjectId("5dfb91eb49e52a0e0c061336"),
                            mongoose.mongo.ObjectId("5dfb91eb49e52a0e0c061337"),
                            mongoose.mongo.ObjectId("5dfb91eb49e52a0e0c061338")],
            'productVariations': [mongoose.mongo.ObjectId("5dfb91eb49e52a0e0c061445")],
        },
    ]
};
