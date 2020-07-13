const bcrypt = require('bcryptjs');
var mongoose = require('mongoose');
exports.seed = {
        'model': 'Role',
        'documents': [
            {
                '_id':  mongoose.mongo.ObjectId("5e5c71356a30d91a4fddaa67"),
                'users': [
                            mongoose.mongo.ObjectId("5dfb91eb49e52a0e0c061336")
                          ],
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
