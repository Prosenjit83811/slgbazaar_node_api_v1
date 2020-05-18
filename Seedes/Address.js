var mongoose = require('mongoose');
exports.seed = {
        'model': 'Address',
        'documents': [
            {
                '_id':  mongoose.mongo.ObjectId("5ec2cf70404f7436eaae36cc"),
                'user':  "5e5c73a6296703206fcd8ed7",
                'state': 'wb',
                'city': 'siliguri',
                'landmark': 'sbi',
                'address': 'Ghogomali',
            },
            {
                '_id':  mongoose.mongo.ObjectId("5ec2cf87404f7436eaae36cd"),
                'user':  "5e5c73a6296703206fcd8ed8",
                'state': 'dhl',
                'city': 'delhi',
                'landmark': 'sch',
                'address': 'Purana Qila',
          }
        ]
    };
