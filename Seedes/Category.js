var mongoose = require('mongoose');
exports.seed = {
        'model': 'Category',
        'documents': [
            {
                '_id':  mongoose.mongo.ObjectId("5dfb91eb49e52a0e0c061335"),
                'category':  "daily product",
                'description':  "this is daily product",
                'sub_categories': [mongoose.mongo.ObjectId("5dfb91eb49e52a0e0c061336"),
                                mongoose.mongo.ObjectId("5dfb91eb49e52a0e0c061337"),
                                mongoose.mongo.ObjectId("5dfb91eb49e52a0e0c061338")],
            },
            {
                '_id':  mongoose.mongo.ObjectId("5dfb91eb49e52a0e0c061336"),
                'category':  "vegetable",
                'description':  "this is vegetable",
            },
            {
                '_id':  mongoose.mongo.ObjectId("5dfb91eb49e52a0e0c061337"),
                'category':  "veg",
                'description':  "this is veg",
            },
            {
                '_id':  mongoose.mongo.ObjectId("5dfb91eb49e52a0e0c061338"),
                'category':  "no veg",
                'description':  "this is no veg",
            }
        ]
    };
