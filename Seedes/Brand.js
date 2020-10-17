var mongoose = require('mongoose');
exports.seed = {
        'model': 'Brand',
        'documents': [
            {
                '_id':  mongoose.mongo.ObjectId("5ec2cf70404f7436eaae36cc"),
                'name': 'Samsung',
            },
            {
                '_id':  mongoose.mongo.ObjectId("5ec2cf87404f7436eaae36cd"),
                'name': 'Sony',
          }
        ]
    };
