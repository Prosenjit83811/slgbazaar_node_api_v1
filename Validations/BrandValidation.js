
const { check, body , param,query,oneOf, validationResult, custom} = require('express-validator');
const Brand = require('../Models/BrandModel')

exports.category =  [

    check('name')
    .custom((value, { req }) => {
        return Brand.checkExists({_id: {$ne: req.params.id},name: value}).then(result => {
          if (result) {
            return Promise.reject('this brand name allredy used');
          }
        });
    })
    .notEmpty().withMessage('Brand name not empty')
    .isLength({ min: 3 }).withMessage('Brand name minimam 10'),

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