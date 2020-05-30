
const { check, body , query ,oneOf, validationResult, custom } = require('express-validator/check');
const User = require('../Models/UserModel')

exports.user =  [

    check('firstname')
    .notEmpty().withMessage('firstname not empty')
    .isLength({ min: 6 }).withMessage('firstname minimam 24'),

    check('lastname')
    .notEmpty().withMessage('lastname not empty')
    .isLength({ min: 6 }).withMessage('lastname minimam 24'),

    // check('email').custom(value => {
    //     return User.findUserByEmail(value).then(user => {
    //         console.log("email",user);
    //       if (user) {
    //         return Promise.reject('This email allredy used');
    //       }
    //     });
    // })
    // .notEmpty().withMessage('email not empty')
    // .isInt().withMessage('invalied email').isLength({ min: 10 }).withMessage('email minimam 10'),


    check('number').custom(value => {
        return User.findUserByNumber(value).then(user => {
          if (user) {
            return Promise.reject('This Number allredy used');
          }
        });
    })
    .notEmpty().withMessage('Number not empty')
    .isInt().withMessage('invalied number')
    .isLength({ min: 10 }).withMessage('number minimam 10'),

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
