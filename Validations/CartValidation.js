
const { check, body , param,query,oneOf, validationResult, custom} = require('express-validator');
const Product = require('../Models/ProductModel')

exports.category =  [

    check('product_id')
    .custom((value, { req }) => {
        // console.log('req.body.product_id', req.body.product_id);
        return Product.findProductById(req.body.product_id, value).then(res => {
          if (!res) {
            return Promise.reject('This product not found');
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