
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


    check('number')
    .custom((value, { req }) => {
        return User.findUserByNumber(value,req.params.userId).then(user => {
            // console.log("user_id",req.params.userId);
          if (user) {
            return Promise.reject('This phone number allredy used');
          }
        });
    })
    .notEmpty().withMessage('Number not empty')
    .isInt().withMessage('invalied number')
    .isLength({ min: 10 }).withMessage('number minimam 10'),

    check('password')
    .notEmpty().withMessage('Password not empty')
    .isLength({ min: 6 }).withMessage('password minimam 6'),

    // check('role')
    // .notEmpty().withMessage('Role not empty'),

    check('role').custom(value => {
        return Role.findRoleById(value).then(res => {
          // console.log('res',res);
          if (!res) {
            return Promise.reject('This role not found');
          }
        });
    }),

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