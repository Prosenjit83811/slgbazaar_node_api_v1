
const { check, body , query ,oneOf, validationResult, custom } = require('express-validator/check');
const User = require('../Models/UserModel')

exports.user =  [

    check('number').custom(value => {
        return User.findUserByNumber(value).then(user => {
          if (user) {
            return Promise.reject('This Number allredy used');
          }
        });
    })
    .notEmpty().withMessage('Number not empty')
    .isInt().withMessage('invalied number').isLength({ min: 10 }).withMessage('Number minimam 10'),

    check('password')
    .notEmpty().withMessage('Password not empty')
    .isLength({ min: 6 }).withMessage('password minimam 6'),

    check('role')
    .notEmpty().withMessage('Role not empty'),

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
