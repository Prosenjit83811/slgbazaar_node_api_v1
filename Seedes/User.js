const bcrypt = require('bcryptjs');
var mongoose = require('mongoose');
exports.seed = {
        'model': 'User',
        'documents': [
            {
                '_id':  mongoose.mongo.ObjectId("5e5c73a6296703206fcd8ed7"),
                'role': "5e5c71356a30d91a4fddaa67",
                'address': "5ec2cf70404f7436eaae36cc",
                'firstname': "prosenjit",
                'lastname': "sarkar",
                'mobileNumber': 9832098320,
                'email': 's_admin@test.com',
                'password': bcrypt.hashSync('123456', 10),
            },
            {
                '_id':  mongoose.mongo.ObjectId("5e5c73a6296703206fcd8ed8"),
                'role': "5e5c71356a30d91a4fddaa69",
                'address': "5ec2cf87404f7436eaae36cd",
                'firstname': "piku",
                'lastname': "sarkar",
                'mobileNumber': 9832198321,
                'email': 'admin@test.com',
                'password': bcrypt.hashSync('123456', 10)
          },
          {
              '_id':  mongoose.mongo.ObjectId("5e5c73a6296703206fcd8ed9"),
              'role': "5e5c71356a30d91a4fddaa69",
              'address': "5ec2cf87404f7436eaae36cd",
              'firstname': "employee",
              'lastname': "sarkar",
              'mobileNumber': 9832198322,
              'email': 'employee@test.com',
              'password': bcrypt.hashSync('123456', 10)
          },
          {
              '_id':  mongoose.mongo.ObjectId("5e5c73a6296703206fcd8ed1"),
              'role': "5e5c71356a30d91a4fddaa61",
              'address': "5ec2cf87404f7436eaae36cd",
              'firstname': "customer",
              'lastname': "sarkar",
              'mobileNumber': 9832198323,
              'email': 'customer@test.com',
              'password': bcrypt.hashSync('123456', 10)
          }
        ]
    };
