
const { check, body , param,query,oneOf, validationResult, custom} = require('express-validator');
const User = require('../Models/UserModel')
const bcrypt = require('bcryptjs');

exports.user =  [

    check('oldPassword')
    .custom((value, { req }) => {

        return User.findById(req.user.id).then(user => {
          return bcrypt.compare(value,user.password).then((result)=>{
            if(!result){
              return Promise.reject('This old password does not match');
            }
        
          });
        });
    })
    .notEmpty().withMessage('Old password  not empty.')
    .isLength({ min: 6 }).withMessage('old password  minimam 6'),

    check('password')
    .notEmpty().withMessage('password not empty')
    .isLength({ min: 3 }).withMessage('password minimam 3'),

    check('passwordConfirmation', 'passwordConfirmation field must have the same value as the password field')
      .exists()
      .custom((value, { req }) => value === req.body.password),


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


