
const { check, body , query ,oneOf, validationResult, custom } = require('express-validator');
const User = require('.././Models/UserModel')

exports.login =  [

    check('mobileNumber').custom(value => {
        return User.findUserByMobileNumber(value).then(user => {
          if (!user) {
            return Promise.reject('This mobile number not found');
          }
        });
    }).isInt().withMessage('Invalied mobile number').isLength({ min: 10 }).withMessage('Mobile Number minimam 10'),

    check('password')
    .notEmpty().withMessage('password notEmpty')
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
