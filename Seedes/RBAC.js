var mongoose = require('mongoose');
exports.seed = {
    'model': 'RBAC',
    'documents': [
        {
            '_id': mongoose.mongo.ObjectId("5e5c73a6296703206fcd8ed1"),
            'user': mongoose.mongo.ObjectId("5e5c73a6296703206fcd8ed7"),
            'route': "user",
            'action': 'user.index',
            'permission': true,
            'rolePass': [{"roel":"s_admin", "id":"5e5c73a6296703206fcd8ed7"}],
        },
        {
            '_id': mongoose.mongo.ObjectId("5e5c73a6296703206fcd8ed2"),
            'user': mongoose.mongo.ObjectId("5e5c73a6296703206fcd8ed7"),
            'route': "user",
            'action': 'user.store',
            'permission': true,
            'rolePass': [{"roel":"s_admin", "id":"5e5c73a6296703206fcd8ed7"}],
        },
        {
            '_id': mongoose.mongo.ObjectId("5e5c73a6296703206fcd8ed3"),
            'user': mongoose.mongo.ObjectId("5e5c73a6296703206fcd8ed7"),
            'route': "user",
            'action': 'user.show',
            'permission': true,
            'rolePass': [{"roel":"s_admin", "id":"5e5c73a6296703206fcd8ed7"}],
        },
        {
            '_id': mongoose.mongo.ObjectId("5e5c73a6296703206fcd8ed4"),
            'user': mongoose.mongo.ObjectId("5e5c73a6296703206fcd8ed7"),
            'route': "user",
            'action': 'user.update',
            'permission': true,
            'rolePass': [{"roel":"s_admin", "id":"5e5c73a6296703206fcd8ed7"}],
        },
        {
            '_id': mongoose.mongo.ObjectId("5e5c73a6296703206fcd8ed5"),
            'user': mongoose.mongo.ObjectId("5e5c73a6296703206fcd8ed7"),
            'route': "user",
            'action': 'user.delete',
            'permission': true,
            'rolePass': [{"roel":"s_admin", "id":"5e5c73a6296703206fcd8ed7"}],
        }
    ]
};