
const { check, body , param,query,oneOf, validationResult, custom} = require('express-validator');
const Booking = require('../Models/BookingModel')

exports.booking =  [

    check('category')
    // .custom((value, { req }) => {
    //     return Category.findCategory(req.params.id, value).then(res => {
    //       if (res) {
    //         return Promise.reject('This category allredy used');
    //       }
    //     });
    // })
    .notEmpty().withMessage('category not empty')
    .isLength({ min: 3 }).withMessage('category minimam 3'),


    check('description')
    .notEmpty().withMessage('description not empty')
    .isLength({ min: 10 }).withMessage('description minimam 3'),

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