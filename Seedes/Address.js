const bcrypt = require('bcryptjs');
exports.seed = {
        'model': 'Address',
        'documents': [
            {
                // '_id':  mongoose.mongo.ObjectId("5e5c73a6296703206fcd8ed7"),
                'user_id':  "5e5c73a6296703206fcd8ed7",
                'state': 'WB',
                'city': 'siliguri',
                'address': 'Ghogomali',
            },
            {
                // '_id':  mongoose.mongo.ObjectId("5e5c73a6296703206fcd8ed8"),
                'user_id':  "5e5c73a6296703206fcd8ed8",
                'state': 'WB',
                'city': 'siliguri',
                'address': 'Hakimpara',
          }
        ]
    };
