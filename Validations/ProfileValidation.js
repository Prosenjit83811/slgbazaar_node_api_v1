
const { check, body , param,query,oneOf, validationResult, custom} = require('express-validator');
const User = require('../Models/UserModel')
const Role = require('../Models/RoleModel')

exports.user =  [

    check('firstname')
    .notEmpty().withMessage('firstname not empty')
    .isLength({ min: 3 }).withMessage('firstname minimam 3'),

    check('lastname')
    .notEmpty().withMessage('lastname not empty')
    .isLength({ min: 3 }).withMessage('lastname minimam 3'),

    check('email')
    .custom((value, { req }) => {
        return User.findUserByEmail(value, req.user._id).then(res => {
          if (res) {
            return Promise.reject('This email allredy used');
          }
        });
    })
    .notEmpty().withMessage('email not empty')
    .isEmail().withMessage('This email is not valid'),

    check('number')
    .custom((value, { req }) => {
        return User.findUserByNumber(value, req.user._id).then(res => {
          if (res) {
            return Promise.reject('This phone number allredy used');
          }
        });
    })
    .notEmpty().withMessage('Number not empty')
    .isInt().withMessage('invalied number')
    .isLength({ min: 10 }).withMessage('number minimam 10'),

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