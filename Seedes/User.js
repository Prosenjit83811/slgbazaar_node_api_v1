const bcrypt = require('bcryptjs');
exports.seed = {
        'model': 'User',
        'documents': [
            {
                'role_id': "5e5c71356a30d91a4fddaa67",
                'number': 9832098320,
                'password': bcrypt.hashSync('123456', 10),
            },
            {
                'role_id': "5e5c71356a30d91a4fddaa69",
                'number': 9832198321,
                'password': bcrypt.hashSync('123456', 10)
          }
        ]
    };
