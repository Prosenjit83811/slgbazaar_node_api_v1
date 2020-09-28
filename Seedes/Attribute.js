const bcrypt = require('bcryptjs');
var mongoose = require('mongoose');
exports.seed = {
        'model': 'Attribute',
        'documents': [
            {
                '_id':  mongoose.mongo.ObjectId("5e5c71356a30d91a4fddaa67"),
                'attribute': 'size',
                'value': ["XL","XLS","XXX"]
            },
            {
                '_id':  mongoose.mongo.ObjectId("5e5c71356a30d91a4fddaa68"),
                'attribute': 'color',
            }
        ]
    };
