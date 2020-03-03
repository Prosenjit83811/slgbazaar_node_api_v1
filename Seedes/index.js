var seeder = require('mongoose-seed');
const User = require('./User');
const Role = require('./Role');
const Address = require('./Address');

const models = [
  'User',
  'Role',
  'Address',
]

// Connect to MongoDB via Mongoose
seeder.connect('mongodb://127.0.0.1:27017/slgbazaar', function() {
 
  // Load Mongoose models
  seeder.loadModels([
    './Api/v1.0/Models/UserModel',
    './Api/v1.0/Models/RoleModel',
    './Api/v1.0/Models/AddressModel',
  ]);
 
  // Clear specified collections
  seeder.clearModels(models, function() {
 
    // Callback to populate DB once collections have been cleared
    seeder.populateModels(data, function() {
      seeder.disconnect();
    });
 
  });
});
 
// Data array containing seed data - documents organized by Model
var data = [
            User.seed,
            Role.seed,
            Address.seed,
          ];
