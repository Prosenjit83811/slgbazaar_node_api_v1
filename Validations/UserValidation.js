
const { check, body , query ,oneOf, validationResult, custom } = require('express-validator/check');
const User = require('../Models/UserModel')

exports.user =  [

    check('number')
    .notEmpty().withMessage('Number not empty')
    .isInt().withMessage('invalied Nnmber').isLength({ min: 10 }).withMessage('Number minimam 10'),

    check('password')
    .notEmpty().withMessage('Password not empty')
    .isLength({ min: 6 }).withMessage('password minimam 6'),

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
