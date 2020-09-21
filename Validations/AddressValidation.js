
const { check, body , query ,oneOf, validationResult, custom } = require('express-validator');
const User = require('../Models/UserModel')

exports.address =  [

    check('type')
    .notEmpty().withMessage('Type not empty')
    .isIn(['home', 'office']).withMessage('The input is not correct'),

    check('fullName')
    .notEmpty().withMessage('full name not empty')
    .isLength({ min: 3 }).withMessage('full name minimam 3'),

    check('mobileNumber')
    .notEmpty().withMessage('mobileNumber not empty')
    .isInt().withMessage('invalied mobile number')
    .isLength({ min: 10 }).withMessage('mobileNumber minimam 10'),

    check('state')
    .notEmpty().withMessage('State not empty')
    .isLength({ min: 2 }).withMessage('password minimam 2'),

    check('city')
    .notEmpty().withMessage('City not empty')
    .isLength({ min: 2 }).withMessage('password minimam 2'),

    check('pin')
    .notEmpty().withMessage('Pin not empty')
    .isInt().withMessage('Invalied pin')
    .isLength({ min: 6 }).withMessage('Pin minimam 10'),


    check('landmark')
    .notEmpty().withMessage('Landmark not empty')
    .isLength({ min: 3 }).withMessage('password minimam 2'),

    check('address')
    .notEmpty().withMessage('Address not empty')
    .isLength({ min: 6 }).withMessage('password minimam 2'),

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