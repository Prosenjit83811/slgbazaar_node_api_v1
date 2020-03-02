const bcrypt = require('bcryptjs');
var mongoose = require('mongoose');
exports.seed = {
        'model': 'Role',
        'documents': [
            {
                '_id':  mongoose.mongo.ObjectId("5e5c71356a30d91a4fddaa67"),
                'role': 's_admin',
            },
            {
                '_id': mongoose.mongo.ObjectId("5e5c71356a30d91a4fddaa68"),
                'role': 'admin'
            },
            {
                '_id': mongoose.mongo.ObjectId("5e5c71356a30d91a4fddaa69"),
                'role': 'employee'
            }
        ]
    };
