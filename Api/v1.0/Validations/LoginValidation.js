
const { check, body , query ,oneOf, validationResult, custom } = require('express-validator/check');
const User = require('.././Models/UserModel')

exports.login =  [

    check('number').custom(value => {
        return User.findUserByNumber(value).then(user => {
          if (!user) {
            return Promise.reject('This Number Not Found');
          }
        });
    }).isInt().withMessage('invalied Number').isLength({ min: 10 }).withMessage('Number minimam 10'),

    check('password').isLength({ min: 6 }).withMessage('password minimam 6'),

    function(req,res,next) {

        var errorValidation = validationResult(req);
        if ( !errorValidation.isEmpty() ) {
            return res.status(500).json({
                title: 'an error occured',
                error: errorValidation
            });
        }
        
        next()
    }
];
