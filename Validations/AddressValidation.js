
const { check, body , query ,oneOf, validationResult, custom } = require('express-validator');
const User = require('../Models/UserModel')

exports.address =  [

    check('state')
    .notEmpty().withMessage('State not empty')
    .isLength({ min: 2 }).withMessage('password minimam 2'),

    check('city')
    .notEmpty().withMessage('City not empty')
    .isLength({ min: 2 }).withMessage('password minimam 2'),

    check('landmark')
    .notEmpty().withMessage('Landmark not empty')
    .isLength({ min: 2 }).withMessage('password minimam 2'),

    check('address')
    .notEmpty().withMessage('Address not empty')
    .isLength({ min: 2 }).withMessage('password minimam 2'),

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
