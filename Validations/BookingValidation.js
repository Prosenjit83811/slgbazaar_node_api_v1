
const { check, body , param,query,oneOf, validationResult, custom} = require('express-validator');
const Booking = require('../Models/BookingModel')
const Product = require('../Models/ProductModel')
const Address = require('../Models/AddressModel')


exports.booking =  [

    check('products')
    .isArray().withMessage('Products in array')
    .notEmpty().withMessage('Products not empty'),

    check('products.*')
    .notEmpty().withMessage('Products not empty')
    .custom(value => {
        return Product.checkExists({_id: value}).then(result => {
            if (!result) {
                return Promise.reject('This product not found.');
            }
        });
    }),

    check('address')
    .custom((value, { req }) => {
        return Address.checkExists({_id: value}).then(result => {
          if (!result) {
            return Promise.reject('This address not found');
          }
        });
    })
    .notEmpty().withMessage('Address name not empty'),


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