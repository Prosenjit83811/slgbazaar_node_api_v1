const bcrypt = require('bcryptjs');
exports.seed = {
        'model': 'User',
        'documents': [
            {
                'number': 9832098320,
                'password': bcrypt.hashSync('123456', 10),
            },
            {
              'number': 9832198321,
              'password': bcrypt.hashSync('123456', 10)
          }
        ]
    };
