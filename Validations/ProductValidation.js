
const { check, body , param,query,oneOf, validationResult, custom} = require('express-validator');
const Product = require('../Models/ProductModel')
const Category = require('../Models/CategoryModel')

exports.product =  [

    check('name')
    .custom((value, { req }) => {
        return Product.checkExists({_id: {$ne: req.params.id},name: value}).then(result => {
          if (result) {
            return Promise.reject('this name allredy used');
          }
        });
    })
    .notEmpty().withMessage('product name not empty')
    .isLength({ min: 3 }).withMessage('product name minimam 10'),

    check('description')
    .notEmpty().withMessage('product description not empty')
    .isLength({ min: 20 }).withMessage('product description minimam 3'),

    check('shortDescription')
    .notEmpty().withMessage('product short description not empty')
    .isLength({ min: 20 }).withMessage('product short description minimam 3'),
    
    check('slug')
    .custom((value, { req }) => {
        return Product.checkExists({_id: {$ne: req.params.id},slug: value}).then(result => {
          if (result) {
            return Promise.reject('this slug allredy used');
          }
        });
    })
    .notEmpty().withMessage('slug not empty')
    .isLength({ min: 10 }).withMessage('slug minimam 10'),

    check('categories.*')
    .not()  
    .isEmpty()
    .withMessage('categories not empty')
    .custom(value => {
      return Category.findCategoryById(value).then(res => {
        if (!res) {
          return Promise.reject('This category not found');
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