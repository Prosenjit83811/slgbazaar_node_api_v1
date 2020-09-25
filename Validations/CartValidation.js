
const { check, body , param,query,oneOf, validationResult, custom} = require('express-validator');
const Cart = require('../Models/CartModel')
const Product = require('../Models/ProductModel')

exports.category =  [

    check('product_id')
    .custom((value, { req }) => {
        return Product.findProductById(req.body.product_id, value).then(res => {
          if (!res) {
            return Promise.reject('This product not found.');
          }
        });
    })
    .custom((value, { req }) => {
        return Cart.checkProductLimit(req.user._id, value).then(res => {
            console.log('length', res.products.length);
            if (res.products.length > 25) {
                return Promise.reject('Cart has touched the max limit. Please delete existing cart items to add a new item.');
            }
        });
    })
    .notEmpty().withMessage('Product not empty'),

    function(req,res,next) {

        var errorValidation = validationResult(req);
        if ( !errorValidation.isEmpty() ) {
            return res.status(500).json({
                title: 'an error occured',
                error: errorValidation.mapped()
            });
        }
        
        next()
    }
];