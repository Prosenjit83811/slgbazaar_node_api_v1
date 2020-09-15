const express = require('express');
const router = express.Router();
const ProductController = require('../Controllers/Dashboard/Product/ProductController');
const ProductValidation = require('../Validations/ProductValidation');
// const CategoryValidation = require('../Validations/CategoryValidation');


// router.post('/', CategoryValidation.category, CategoryController.store);
router.get('/', ProductController.index);
router.post('/',  ProductValidation.product, ProductController.index);

module.exports = router;