
const { check, body , param,query,oneOf, validationResult, custom} = require('express-validator');
const Attribute = require('../Models/AttributeModel')

exports.attribute =  [

    check('attribute')
    .custom((value, { req }) => {
        return Attribute.findAttribute(req.params.id, value).then(res => {
          if (res) {
            return Promise.reject('This attribute allredy used');
          }
        });
    })
    .notEmpty().withMessage('category not empty')
    .isLength({ min: 3 }).withMessage('category minimam 3'),


    check('value')
    .isArray().withMessage('Products in array'),

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