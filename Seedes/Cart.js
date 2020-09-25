const bcrypt = require('bcryptjs');
var mongoose = require('mongoose');
exports.seed = {
        'model': 'Cart',
        'documents': [
            {
                '_id':  mongoose.mongo.ObjectId("5e5c71356a30d91a4fddaa67"),
                'user': [
                            mongoose.mongo.ObjectId("5e5c73a6296703206fcd8ed7")
                        ],
                'products': [
                        mongoose.mongo.ObjectId("5dfb91eb49e52a0e0c061225"),
                        mongoose.mongo.ObjectId("5dfb91eb49e52a0e0c061226"),
                        ],
            },
        ]
    };
