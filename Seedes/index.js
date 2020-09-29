var seeder = require('mongoose-seed');
const User = require('./User');
const Role = require('./Role');
const Address = require('./Address');
const Category = require('./Category');
const Product = require('./Product');
const ProductVariation = require('./ProductVariation');
const ProductAttribute = require('./ProductAttribute');
const Cart = require('./Cart');
const Attribute = require('./Attribute');
const RBAC = require('./RBAC');

const models = [
  'User',
  'Role',
  'Address',
  'Category',
  'Product',
  'ProductVariation',
  'ProductAttribute',
  'Cart',
  'Attribute',
  'RBAC'
]

// Connect to MongoDB via Mongoose
seeder.connect('mongodb://127.0.0.1:27017/slgbazaar', function() {
 
  // Load Mongoose models
  seeder.loadModels([
    './Models/UserModel',
    './Models/RoleModel',
    './Models/AddressModel',
    './Models/CategoryModel',
    './Models/ProductModel',
    './Models/ProductVariationModel',
    './Models/ProductAttributeModel',
    './Models/CartModel',
    './Models/AttributeModel',
    './Models/RBACModel',
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
            Category.seed,
            Product.seed,
            ProductVariation.seed,
            ProductAttribute.seed,
            Cart.seed,
            Attribute.seed,
            RBAC.seed,
          ];
